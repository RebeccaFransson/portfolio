"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun } from "./icon/sun";
import { Moon } from "./icon/moon";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDarkMode = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className={`cursor-pointer fill-none stroke-pink-400 hover:stroke-pink-300`}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
