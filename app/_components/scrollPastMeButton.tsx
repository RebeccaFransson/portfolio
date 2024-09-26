"use client";

import { DoubleChevron } from "./icon/double-chevron";

export const ScrollPastMeButton = ({ id }: { id: string }) => {
  const scrollTo = (hash: string) => {
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      id={id}
      className="h-[65px] group flex items-center gap-2 hover:opacity-100 opacity-50 relative transition duration-500 animate-float -scroll-mt-20"
      color="toned"
      onClick={() => scrollTo(id)}
    >
      <DoubleChevron direction="down" />
      <DoubleChevron direction="down" />
    </button>
  );
};
