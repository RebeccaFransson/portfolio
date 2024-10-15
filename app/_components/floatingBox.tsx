"use client";
import type { ReactNode } from "react";
import { ScrollTo } from "../utils";

export const FloatingBox = ({
  className,
  children,
  anchorId,
}: {
  className: string;
  children: ReactNode;
  anchorId?: string;
}) => {
  if (anchorId) {
    return (
      <button
        onClick={() => ScrollTo(anchorId)}
        className={`${className} p-6 rounded transition hover:scale-102 max-w-[460px]`}
      >
        {children}
      </button>
    );
  }
  return (
    <div
      className={`${className} p-6 rounded transition hover:scale-102 max-w-[460px]`}
    >
      {children}
    </div>
  );
};
