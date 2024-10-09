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
  const restOfImages = employment.images.slice(1);
  console.log(restOfImages);
  return (
    <div className="flex gap-16 w-full justify-between min-h-[550px] snap-always snap-end last:pb-96 first:pt-[200px]">
      <div className="flex flex-col gap-2 h-full md:min-w-[490px]">
        <h3 className="text-black dark:text-white font-extrabold text-6xl">
          {employment.company}
        </h3>
        <div className="flex gap-2">
          <span className="text-green-400 font-extrabold">
            {employment.position}
          </span>
          <span>
            {employment.startDate} - {employment.endDate}
          </span>
        </div>
        <div className="flex gap-2">
          {employment.technologies.map((tech) => (
            <TechnologyBadge>{tech}</TechnologyBadge>
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
              ? "max-h-[500px] p-6"
              : "max-h-[65px] hover:max-h-[70px] px-6 py-2"
          } transition-all cursor-pointer`}
        >
          <div className={`h-full overflow-clip `}>
            {employment.description}
          </div>
        </div>
      </div>
    </div>
  );
};
