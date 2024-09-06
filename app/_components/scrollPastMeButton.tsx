"use client";

export const ScrollPastMeButton = ({ id }: { id: string }) => {
  const scrollTo = (hash: string) => {
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      id={id}
      className="h-[65px] group flex flex-col items-center gap-2 hover:opacity-100 opacity-50 relative transition duration-500 animate-float -scroll-mt-20"
      color="toned"
      onClick={() => scrollTo(id)}
    >
      <svg
        className=" rotate-90 fill-white "
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.48043 15.4801C3.28517 15.6754 3.28517 15.992 3.48043 16.1872C3.67569 16.3825 3.99228 16.3825 4.18754 16.1872L9.52087 10.8539C9.71613 10.6586 9.71613 10.342 9.52087 10.1468L4.18754 4.81344C3.99228 4.61818 3.67569 4.61818 3.48043 4.81344C3.28517 5.0087 3.28517 5.32528 3.48043 5.52055L8.46021 10.5003L3.48043 15.4801ZM11.4804 15.4801C11.2852 15.6754 11.2852 15.992 11.4804 16.1872C11.6757 16.3825 11.9923 16.3825 12.1875 16.1872L17.5209 10.8539C17.7161 10.6586 17.7161 10.342 17.5209 10.1468L12.1875 4.81344C11.9923 4.61818 11.6757 4.61818 11.4804 4.81344C11.2852 5.0087 11.2852 5.32528 11.4804 5.52055L16.4602 10.5003L11.4804 15.4801Z"
        />
      </svg>
    </button>
  );
};
