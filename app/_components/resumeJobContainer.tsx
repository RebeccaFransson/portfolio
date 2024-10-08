import { TechnologyBadge } from "./badge";

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
  };
}) => {
  console.log(employment);
  return (
    <div className="flex gap-24 w-full justify-between min-h-[550px] snap-always snap-end last:pb-96 first:pt-[250px]">
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
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="flex flex-col gap-2 bg-pink-50 dark:bg-zinc-900 border border-pink-100 dark:border-zinc-800 rounded-3xl rounded-tr w-fit p-6">
          {employment.description}
        </div>
      </div>
    </div>
  );
};
