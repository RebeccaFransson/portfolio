"use client";

import { useState } from "react";
import { useTriggerAtScrollPoint } from "../hooks";

export const HeaderBorder = () => {
  const [scrolled, setScrolled] = useState(false);

  useTriggerAtScrollPoint({
    pixels: { sm: 5, md: 5, lg: 5 },
    funcAboveScroll: () => setScrolled(false),
    funcBelowScroll: () => setScrolled(true),
  });

  return (
    <div
      className={`w-full border-b transition-opacity ease-in-out duration-500 border-pink-200 bg-white ${
        scrolled ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
};
