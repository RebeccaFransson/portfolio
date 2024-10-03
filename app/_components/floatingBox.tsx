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
      className={`${className} px-10 py-6 rounded transition hover:scale-102 `}
    >
      {children}
    </div>
  );
};
