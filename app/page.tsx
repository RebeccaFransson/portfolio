import Image from "next/image";
import { ScrollPastMeButton } from "./_components/scrollPastMeButton";
import { FloatingBox } from "./_components/floatingBox";
import { Wave } from "./_components/svgs/wave";
import { ResumeJobContainer } from "./_components/resumeJobContainer";
import resumeJson from "./resume.json";
import Link from "next/link";
import { Copy } from "./_components/copy";
import { AvatarOnMouseMove } from "./_components/avatarOnMousemove";
import { FlipAvatarProfile } from "./_components/flipAvatarProfile";

export default function Home() {
  const employmentHistory = resumeJson.employmentHistory;
  const skills = resumeJson.skills;
  return (
    <main className="">
      <div className="flex flex-col gap-4 justify-center items-center w-full min-h-[80vh] p-4 sm:p-10 ">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center justify-center py-4 sm:py-32">
          <div className=" p-4 max-w-[650px]">
            <div className="flex flex-col gap-2 rounded  text-black dark:text-white">
              <div className="flex gap-4 items-center">
                <h1 className=" font-extrabold text-5xl sm:text-7xl ">
                  Hello world, <br />
                  I&apos;m <span className="text-pink-400">Rebecca</span>!
                </h1>
              </div>

              <p className="font-semibold text-lg sm:text-xl">
                Results-driven and enthusiastic developer with a passion for
                creating features, building beautiful and reusable components.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <FloatingBox className="bg-orange-300 sm:translate-x-2 flex gap-4 items-center">
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
            <FloatingBox
              anchorId="employmentHistory"
              className="bg-green-400 sm:translate-x-4 flex gap-4 items-center"
            >
              <div className="bg-pink-400 rounded-full w-10 h-10"></div>
              <div className="flex flex-col text-white dark:text-black">
                <span className=" font-bold text-xl text-left">Resume</span>
                <span className=" text-xs">
                  Want to know what I&apos;ve done the last years?
                </span>
              </div>
            </FloatingBox>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full z-10">
        <ScrollPastMeButton
          className="z-10 absolute top-[5vh] left-10 text-pink-400 bg-pink-50 rounded-full py-2 px-4 hover:bg-pink-100"
          id={"aboutMe"}
        >
          About me
        </ScrollPastMeButton>
        <div className="relative">
          <Wave
            animate
            viewBox="200 500 200 70"
            colors={{ front: "fill-orange-300", back: "fill-pink-400" }}
          />
          <AvatarOnMouseMove />
        </div>
        <div className="flex flex-col gap-10 bg-orange-300 ">
          <div className="flex flex-col sm:grid sm:grid-rows-3 sm:grid-cols-3 gap-8 w-full px-6 sm:px-10 sm:justify-evenly items-center">
            <div className="self-end bg-pink-300 dark:bg-pink-400 py-4 px-6 rounded-xl col-span-2 font-semibold text-pink-50 ">
              <p className="drop-shadow-sm">
                I am a fullstack developer with a strong focus on frontend
                technologies. Over the past six years, I have honed my expertise
                in TypeScript, gaining a deep understanding of the language and
                its nuances, along with best practices that ensure efficient,
                clean, and maintainable code.
              </p>
            </div>
            <div className="col-span-1 row-span-2">
              <FlipAvatarProfile className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" />
            </div>
            <div className="bg-white/90  dark:bg-black/90 py-4 px-6 rounded-xl row-span-2">
              <p className="drop-shadow-sm font-semibold text-orange-400">
                One of my key strengths lies in transforming Figma designs into
                dynamic, responsive web experiences. I am particularly
                passionate about building reusable components that are not only
                functional but also aesthetically aligned with the overall
                design vision. I take great pride in writing code that is
                well-structured, easy to understand, and appreciated by my
                colleagues.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-black/80 px-2 py-8 rounded-xl order-last sm:order-none">
              <p className="text-pink-400 text-2xl font-extrabold text-center drop-shadow-sm">
                I'm currently looking for my next passion project!
              </p>
            </div>
            <div className="bg-pink-400/50 py-4 px-6 rounded-xl col-span-2">
              <p className="drop-shadow-sm font-semibold text-white">
                In addition to my technical skills, I value teamwork highly and
                believe that fostering a positive, collaborative environment is
                crucial to a team’s success. I strive to support my peers and
                maintain open communication, as I’ve found that when everyone
                feels empowered and valued, it naturally leads to them
                performing at their best.
              </p>
            </div>
          </div>
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
        <div
          id="employmentHistory"
          className="flex flex-col gap-48 p-4 sm:p-10 h-[800px] w-full overflow-y-scroll snap-y snap-mandatory"
        >
          {employmentHistory.map((employment) => (
            <ResumeJobContainer
              key={employment.company}
              employment={employment}
            />
          ))}
        </div>
        <div className="absolute bottom-0 w-full">
          <Wave
            viewBox="500 490 100 70"
            colors={{ front: "fill-green-400", back: "fill-blue-400" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-4 bg-green-400 w-full pt-0 p-10 ">
        <h6 className="text-4xl sm:text-5xl font-extrabold drop-shadow-xl">
          <span className="text-white/60">That&apos;s </span>
          <span className="text-white/80 ">my story</span>
          <span className="text-white/60">, now it&apos;s </span>
          <span className="text-white ">your turn!</span>
        </h6>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center pl-2 font-mono">
          <div className="flex gap-2 items-center">
            <Link
              href="mailto:rebeccaellenfransson@gmail.com"
              className="text-white hover:text-white/60"
            >
              rebeccaellenfransson@gmail.com
            </Link>
            <Copy text="rebeccaellenfransson@gmail.com" />
          </div>
          <div className="border-b border-white w-6"></div>
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
