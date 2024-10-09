"use client";
import { CopyIcon } from "./icon/copy";

export const Copy = ({ text }: { text: string }) => {
  return (
    <button
      className="fill-white hover:fill-white/60 transition-transform hover:scale-110"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <CopyIcon />
    </button>
  );
};
