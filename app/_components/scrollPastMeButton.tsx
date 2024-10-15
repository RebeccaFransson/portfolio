"use client";

import type { ReactNode } from "react";
import { ScrollTo } from "../utils";

export const ScrollPastMeButton = ({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: ReactNode;
}) => {
  return (
    <button
      id={id}
      className={`cursor-pointer ${className} -scroll-mt-20`}
      onClick={() => ScrollTo(id)}
    >
      {children}
    </button>
  );
};
