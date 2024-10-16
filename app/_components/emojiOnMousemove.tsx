"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const EmojiOnMouseMove = () => {
  const [objToMove, setObjToMove] = useState<HTMLElement | null>(null);
  const onMouseMove = (e: MouseEvent) => {
    if (objToMove) {
      const y = e.clientY;
      const pxToMove = -y / 9;
      objToMove.style.top = `${pxToMove + 70}px`;
    }
  };

  useEffect(() => {
    const image = document.getElementById("emojiImage");
    setObjToMove(image);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);
  return (
    <Image
      id="emojiImage"
      priority={true}
      className="w-[130px] h-[130px] absolute top-[70px] right-0 -z-10"
      height="130"
      width="130"
      src="/emoji.png"
      alt="a profile picture of rebecca"
    />
  );
};
