"use client";

export const ScrollPastMeButton = ({
  id,
  className,
}: {
  id: string;
  className: string;
}) => {
  const scrollTo = (hash: string) => {
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      id={id}
      className={`${className} group flex items-center gap-2 -scroll-mt-20`}
      color="toned"
      onClick={() => scrollTo(id)}
    >
      Read more
    </button>
  );
};
