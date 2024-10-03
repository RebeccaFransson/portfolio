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

  if (resolvedTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <Sun />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button onClick={() => setTheme("dark")}>
        <Moon />
      </button>
    );
  }
}
