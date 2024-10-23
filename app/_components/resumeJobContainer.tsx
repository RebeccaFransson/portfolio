"use client";
import { useState } from "react";
import { TechnologyBadge } from "./badge";
import Image from "next/image";

export const ResumeJobContainer = ({
  employment,
}: {
  employment: {
    company: string;
    startDate: string;
    endDate: string;
    position: string;
    technologies: string[];
    description: string;
    images: string[];
  };
}) => {
  const [imageInFocus, setImageInFocus] = useState(false);
  const firstImage = employment.images[0];

  return (
    <div className="flex sm:flex-row flex-col gap-4 sm:gap-16 w-full justify-start sm:justify-between min-h-[550px] snap-always snap-center sm:snap-end last:mb-[500px] first:pt-[150px] sm:first:pt-[200px]">
      <div className="flex flex-col gap-2 sm:h-full md:min-w-[490px]">
        <h3 className="text-black dark:text-white font-extrabold text-5xl sm:text-6xl">
          {employment.company}
        </h3>
        <div className="flex gap-2 flex-wrap">
          <span className="text-green-400 font-extrabold">
            {employment.position}
          </span>
          <span>
            {employment.startDate} - {employment.endDate}
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {employment.technologies.map((tech) => (
            <TechnologyBadge key={tech}>{tech}</TechnologyBadge>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col gap-2 w-full items-center"
        onClick={() => setImageInFocus(!imageInFocus)}
      >
        {firstImage ? (
          <div className="border border-zinc-100 dark:border-zinc-800 rounded-3xl rounded-tr">
            <div
              className={`rounded-3xl rounded-tr ${
                imageInFocus
                  ? "max-h-[250px] overflow-y-scroll "
                  : "max-h-[70px] hover:max-h-[75px] overflow-hidden"
              } transition-all cursor-pointer`}
            >
              <Image
                className="w-full h-full rounded-3xl rounded-tr object-cover "
                src={firstImage}
                height={1800}
                width={1500}
                alt="a profile picture of rebecca"
              />
            </div>
          </div>
        ) : null}
        <div
          className={`flex flex-col gap-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl rounded-tr w-fit  ${
            !imageInFocus
              ? "py-2 sm:py-6 px-4 sm:px-6"
              : "px-4 sm:px-6 py-2 hover:py-3"
          } transition-all cursor-pointer overflow-scroll`}
        >
          <div
            className={` transition-all ${
              !imageInFocus
                ? "max-h-[190px]  overflow-scroll"
                : "max-h-[70px]  overflow-clip"
            }  `}
          >
            {employment.description}
          </div>
        </div>
      </div>
    </div>
  );
};
