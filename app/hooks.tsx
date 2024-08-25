import { useEffect } from "react";

export const useTriggerAtScrollPoint = ({
  pixels,
  funcAboveScroll,
  funcBelowScroll,
}: {
  pixels: { sm: number; md: number; lg: number };
  funcAboveScroll: () => void;
  funcBelowScroll: () => void;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const innerWidth = window.innerWidth;

      const triggerFunc = (pixels: number) => {
        if (scrollTop >= pixels) {
          funcBelowScroll();
        } else {
          funcAboveScroll();
        }
      };

      // Same breakpoints as in tailwind: https://tailwindcss.com/docs/responsive-design
      if (innerWidth < 640) {
        triggerFunc(pixels.sm);
      } else if (innerWidth < 768) {
        triggerFunc(pixels.md);
      } else {
        triggerFunc(pixels.lg);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
};
