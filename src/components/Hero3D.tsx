"use client";

import { useEffect, useRef } from "react";

/**
 * Real WebGL 3D layer for the hero: a slowly rotating 3D neural network
 * (an AI "constellation" of copper nodes wired to their nearest neighbours)
 * with data pulses traveling along the connections and a drifting particle
 * field. Vanilla three.js (lazy-loaded), mouse parallax, pauses offscreen,
 * static frame under reduced motion, and normal blending so it reads on both
 * the dark and light themes.
 */
export default function Hero3D({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      /* lighter scene on touch / small screens so phones hold a steady frame rate */
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const lowPower = coarse || window.innerWidth < 768;
      const copper = new THREE.Color("#e97a2c");
      const copperBright = new THREE.Color("#f0a35a");

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 60);
      camera.position.set(0, 0, 8);

      const rig = new THREE.Group();
      scene.add(rig);

      /* ---- neural network: nodes spread in a wide ellipsoid ------------- */
      const NODE_COUNT = lowPower ? 56 : 80;
      const nodes: InstanceType<typeof THREE.Vector3>[] = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        /* rejection-sample a unit sphere, then stretch into a wide ellipsoid
           so the network spans the hero without crowding the center text */
        let x = 0,
          y = 0,
          z = 0;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          z = Math.random() * 2 - 1;
        } while (x * x + y * y + z * z > 1);
        nodes.push(new THREE.Vector3(x * 6.2, y * 3.1, z * 2.2));
      }

      /* connect each node to its 2 nearest neighbours (deduplicated) */
      const edgeSet = new Set<string>();
      const edges: [number, number][] = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const dists = nodes
          .map((p, j) => ({ j, d: i === j ? Infinity : p.distanceToSquared(nodes[i]) }))
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);
        for (const { j } of dists) {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!edgeSet.has(key)) {
            edgeSet.add(key);
            edges.push(i < j ? [i, j] : [j, i]);
          }
        }
      }

      /* connection lines */
      const linePositions = new Float32Array(edges.length * 6);
      edges.forEach(([a, b], k) => {
        linePositions.set([...nodes[a].toArray(), ...nodes[b].toArray()], k * 6);
      });
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: copper,
        transparent: true,
        opacity: 0.22,
      });
      rig.add(new THREE.LineSegments(lineGeo, lineMat));

      /* node points (two layers: base + a few bright "active" neurons) */
      const nodeGeo = new THREE.BufferGeometry().setFromPoints(nodes);
      const nodeMat = new THREE.PointsMaterial({
        color: copper,
        size: 0.09,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      });
      rig.add(new THREE.Points(nodeGeo, nodeMat));

      const activeIdx = Array.from({ length: 14 }, () =>
        Math.floor(Math.random() * NODE_COUNT)
      );
      const activeGeo = new THREE.BufferGeometry().setFromPoints(
        activeIdx.map((i) => nodes[i])
      );
      const activeMat = new THREE.PointsMaterial({
        color: copperBright,
        size: 0.16,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      });
      rig.add(new THREE.Points(activeGeo, activeMat));

      /* data pulses: bright sparks traveling along random edges */
      const PULSE_COUNT = lowPower ? 5 : 7;
      const sparkGeo = new THREE.SphereGeometry(0.05, 10, 10);
      const sparkMat = new THREE.MeshBasicMaterial({ color: copperBright });
      type Pulse = {
        mesh: InstanceType<typeof THREE.Mesh>;
        edge: [number, number];
        t: number;
        speed: number;
      };
      const pulses: Pulse[] = [];
      const randomEdge = () => edges[Math.floor(Math.random() * edges.length)];
      for (let i = 0; i < PULSE_COUNT; i++) {
        const mesh = new THREE.Mesh(sparkGeo, sparkMat);
        rig.add(mesh);
        pulses.push({
          mesh,
          edge: randomEdge(),
          t: Math.random(),
          speed: 0.4 + Math.random() * 0.5,
        });
      }

      /* drifting ambient particles around the network */
      const particleCount = lowPower ? 140 : 240;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8.5;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: copper,
        size: 0.035,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      rig.add(particles);

      /* sizing */
      const resize = () => {
        const w = mount.clientWidth || 1;
        const h = mount.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(mount);

      /* mouse parallax; touch devices get an autonomous sway since there is no cursor */
      const target = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      if (!coarse) window.addEventListener("pointermove", onPointer, { passive: true });

      /* pause when offscreen */
      let visible = true;
      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      io.observe(mount);

      let raf = 0;
      const clock = new THREE.Clock();
      const tmp = new THREE.Vector3();
      let last = 0;
      const renderFrame = () => {
        const t = clock.getElapsedTime();
        const dt = Math.min(t - last, 0.05);
        last = t;

        /* slow drift + breathing */
        rig.rotation.y += dt * 0.05;
        const breath = 1 + Math.sin(t * 0.5) * 0.015;
        rig.scale.setScalar(breath);

        /* active neurons flicker */
        activeMat.opacity = 0.7 + Math.sin(t * 2.3) * 0.25;
        activeMat.size = 0.14 + (Math.sin(t * 1.7) + 1) * 0.025;

        /* pulses travel their edge, then hop to a new one */
        for (const p of pulses) {
          p.t += dt * p.speed;
          if (p.t >= 1) {
            p.t = 0;
            p.edge = randomEdge();
            p.speed = 0.4 + Math.random() * 0.5;
          }
          tmp.lerpVectors(nodes[p.edge[0]], nodes[p.edge[1]], p.t);
          p.mesh.position.copy(tmp);
          const fade = Math.sin(p.t * Math.PI);
          p.mesh.scale.setScalar(0.6 + fade * 0.7);
        }

        particles.rotation.y = t * 0.018;

        if (coarse) {
          target.x = Math.sin(t * 0.2) * 0.8;
          target.y = Math.cos(t * 0.15) * 0.6;
        }

        /* parallax toward the pointer or sway target (additive on the slow drift) */
        rig.rotation.x += (target.y * 0.14 - rig.rotation.x) * 0.04;
        rig.rotation.z += (target.x * 0.06 - rig.rotation.z) * 0.04;

        renderer.render(scene, camera);
      };

      const tick = () => {
        if (visible) renderFrame();
        raf = requestAnimationFrame(tick);
      };

      if (reduce) {
        renderFrame();
      } else {
        tick();
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener("pointermove", onPointer);
        lineGeo.dispose();
        lineMat.dispose();
        nodeGeo.dispose();
        nodeMat.dispose();
        activeGeo.dispose();
        activeMat.dispose();
        sparkGeo.dispose();
        sparkMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={mountRef} aria-hidden className={`pointer-events-none ${className}`} />;
}
