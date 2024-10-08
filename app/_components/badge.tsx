import type { ReactNode } from "react";

export const Badge = ({
  color,
  children,
}: {
  color: "pink" | "green" | "blue" | "orange";
  children: ReactNode;
}) => {
  const getBgColor = () => {
    switch (color) {
      case "pink":
        return "bg-pink-300 text-pink-600";
      case "green":
        return "bg-green-300 text-green-600";
      case "blue":
        return "bg-blue-300 text-blue-600";
      case "orange":
        return "bg-orange-300 text-orange-600";

      default:
        return "bg-black text-white dark:bg-white dark:text-black";
    }
  };
  return (
    <div
      className={`${getBgColor()} rounded-full px-4 py-1 w-min  font-mono tracking-tighter`}
    >
      {children}
    </div>
  );
};
