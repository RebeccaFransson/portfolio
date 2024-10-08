"use client";

import type { ReactNode } from "react";

export const ScrollToLink = ({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: ReactNode;
}) => {
  const scrollTo = (hash: string) => {
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      className={`${className} cursor-pointer`}
      onClick={() => scrollTo(id)}
    >
      {children}
    </button>
  );
};
