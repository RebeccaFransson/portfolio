import type { ReactNode } from "react";

export const FloatingBox = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`${className} p-6 rounded transition hover:scale-102 max-w-[460px]`}
    >
      {children}
    </div>
  );
};
