"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import type { ComponentProps } from "react";

/**
 * Client providers: next-themes (applies theme class on <html>) plus
 * MotionConfig with reducedMotion="user" so all framer-motion animations
 * automatically respect the user's prefers-reduced-motion setting.
 */
export default function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
