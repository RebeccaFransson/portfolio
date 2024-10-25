"use client";
import type { ReactNode } from "react";
import { ScrollTo } from "../utils";
import Link from "next/link";

export const FloatingBox = ({
  className,
  children,
  anchorId,
  href,
}: {
  className: string;
  children: ReactNode;
  anchorId?: string;
  href?: string;
}) => {
  const classes = `${className} p-4 sm:p-6 rounded transition hover:scale-102 max-w-[460px] 2xl:max-w-[600px]`;
  if (anchorId) {
    return (
      <button onClick={() => ScrollTo(anchorId)} className={classes}>
        {children}
      </button>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
};
