import type { ReactNode } from "react";

export const Badge = ({
  color,
  children,
}: {
  color?: "pink" | "green" | "blue" | "orange";
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
        return "bg-gray-400 text-black dark:bg-white dark:text-gray-500";
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

export const TechnologyBadge = ({ children }: { children: string }) => {
  const getColor = () => {
    switch (children.toLowerCase()) {
      case "typescript":
      case "react.js":
      case "java":
        return "blue";
      case "node.js":
      case "vue.js":
        return "green";
      case "javascript":
        return "orange";
      case "c#":
      case "angular":
      case "kotlin":
        return "pink";
      default:
        return undefined;
    }
  };
  return <Badge color={getColor()}>{children}</Badge>;
};
