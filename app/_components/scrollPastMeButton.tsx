"use client";

import type { ReactNode } from "react";

export const ScrollPastMeButton = ({
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
      id={id}
      className={`${className} -scroll-mt-20`}
      onClick={() => scrollTo(id)}
    >
      {children}
    </button>
  );
};
