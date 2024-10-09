import Image from "next/image";
import { ScrollPastMeButton } from "./_components/scrollPastMeButton";
import { FloatingBox } from "./_components/floatingBox";
import { Wave } from "./_components/svgs/wave";
import { ResumeJobContainer } from "./_components/resumeJobContainer";
import resumeJson from "./resume.json";
import { TechnologyBadge } from "./_components/badge";
import Link from "next/link";
import { CopyIcon } from "./_components/icon/copy";
import { Button, Copy } from "./_components/copy";

export default function Home() {
  const employmentHistory = resumeJson.employmentHistory;
  const skills = resumeJson.skills;
  return (
    <main className="">
      <div className="flex flex-col gap-4 justify-center items-center w-full min-h-[80vh] p-10 ">
        <div className="flex gap-12 items-center justify-center py-32">
          <div className=" p-4 max-w-[650px]">
            <div className="flex flex-col gap-2 rounded  text-black dark:text-white">
              <div className="flex gap-4 items-center">
                <h1 className=" font-extrabold text-7xl ">
                  Hello world, <br />
                  I'm <span className="text-pink-400">Rebecca</span>!
                </h1>
              </div>

              <p className="font-semibold text-xl">
                Results-driven and enthusiastic developer with a passion for
                creating features, building beautiful and reusable components.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <FloatingBox className="bg-orange-300 translate-x-2 flex gap-4 items-center">
              <div className="bg-pink-400 rounded-full w-10 h-10"></div>
              <div className="flex flex-col text-white dark:text-black">
                <span className=" font-bold text-xl">Fire calculator</span>
                <span className=" text-xs">
                  Put in your monthly expenses to figure out how <br />
                  much money you need to retire early.
                </span>
              </div>
            </FloatingBox>
            <FloatingBox className="bg-blue-400 flex gap-4 items-center">
              <div className="bg-pink-400 rounded-full w-10 h-10"></div>
              <div className="flex flex-col text-white dark:text-black">
                <span className=" font-bold text-xl">Crypto project</span>
                <span className=" text-xs">Project similar to</span>
              </div>
            </FloatingBox>
            <FloatingBox className="bg-green-400 translate-x-4 flex gap-4 items-center">
              <div className="bg-pink-400 rounded-full w-10 h-10"></div>
              <div className="flex flex-col text-white dark:text-black">
                <span className=" font-bold text-xl">Resume</span>
                <span className=" text-xs">
                  Want to know what I've done the last years?
                </span>
              </div>
            </FloatingBox>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full z-10">
        <ScrollPastMeButton
          className="absolute top-[5vh] left-10 text-pink-400 bg-pink-50 rounded-full py-2 px-4 hover:bg-pink-100"
          id={"aboutMe"}
        >
          About me
        </ScrollPastMeButton>
        <Wave
          animate
          viewBox="200 500 200 70"
          colors={{ front: "fill-orange-300", back: "fill-pink-400" }}
        />

        <div className="flex gap-12 bg-orange-300 h-[500px] w-full p-10 ">
          <div>This is me, bla bla bla</div>
          <Image
            priority={false}
            className="w-[130px] h-[130px] rounded"
            height="130"
            width="130"
            src="/profile.png"
            alt="a profile picture of rebecca"
          />
        </div>
      </div>
      <div className="relative ">
        <div className="absolute top-0 w-full ">
          <Wave
            viewBox="500 490 100 70"
            colors={{ front: "fill-orange-300", back: "fill-pink-400" }}
            upsideDown
          />
        </div>
        <div className="flex flex-col gap-48 p-10 h-[800px] w-full overflow-y-scroll snap-y snap-mandatory">
          {employmentHistory.map((employment) => (
            <ResumeJobContainer employment={employment} />
          ))}
        </div>
        <div className="absolute bottom-0 w-full">
          <Wave
            viewBox="500 490 100 70"
            colors={{ front: "fill-green-400", back: "fill-blue-400" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-green-400 w-full pt-0 p-10 ">
        <h6 className="text-5xl font-extrabold drop-shadow-xl">
          <span className="text-white/60">That's </span>
          <span className="text-white/80 ">my story</span>
          <span className="text-white/60">, now it's </span>
          <span className="text-white ">your turn!</span>
        </h6>
        <div className="flex gap-4 items-center pl-2 font-mono">
          <div className="flex gap-2 items-center">
            <Link
              href="mailto:rebeccaellenfransson@gmail.com"
              className="text-white hover:text-white/60"
            >
              rebeccaellenfransson@gmail.com
            </Link>
            <Copy text="rebeccaellenfransson@gmail.com" />
            <button></button>
          </div>
          <Link
            href="https://www.github.com/rebeccafransson"
            target="_blank"
            className="text-white hover:text-white/60"
          >
            rebeccafransson@github
          </Link>
          <div className="border-b border-white w-6"></div>
          <Link
            href="https://www.linkedin.com/in/rebecca-fransson/"
            target="_blank"
            className="text-white hover:text-white/60"
          >
            rebeccafransson@linkedIn
          </Link>
        </div>
      </div>
    </main>
  );
}
/*

          <div className="flex flex-wrap">
            {skills.map((skill) => {
              const containsFrameworks = skill.split("(");
              // If the skill contains frameworks add it as a tooltip
              console.log(containsFrameworks);
              return (
                <>
                  <TechnologyBadge>{containsFrameworks[0]}</TechnologyBadge>
                  {containsFrameworks.length > 1 ? (
                    <div>{containsFrameworks[1].split(")")}</div>
                  ) : null}
                </>
              );
            })}
          </div>

*/
