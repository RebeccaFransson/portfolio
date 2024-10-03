import Image from "next/image";
import { ScrollPastMeButton } from "./_components/scrollPastMeButton";
import { FloatingBox } from "./_components/floatingBox";
import { Wave } from "./_components/svgs/wave";

export default function Home() {
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
            <FloatingBox className="bg-orange-300 translate-x-2 ">
              Fire calculator
            </FloatingBox>
            <FloatingBox className="bg-blue-400 ">Crypto project</FloatingBox>
            <FloatingBox className="bg-green-400 translate-x-4 ">
              Resume
            </FloatingBox>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full">
        <ScrollPastMeButton
          className=" absolute top-14 left-[26vw] text-orange-400"
          id={"knowMore"}
        />
        <Wave
          viewBox="200 500 200 70"
          colors={{ front: "fill-orange-300", back: "fill-pink-400" }}
        />

        <div className="flex gap-12 bg-orange-300 h-[500px] w-full p-10 ">
          <div>This is me, bla bla bla</div>
          <Image
            className="w-[130px] h-[130px] rounded"
            height="130"
            width="130"
            src="/profile.png"
            alt="a profile picture of rebecca"
          />
        </div>
        <Wave
          viewBox="500 490 100 70"
          colors={{ front: "fill-orange-300", back: "fill-pink-400" }}
          upsideDown
        />
      </div>
      <div>
        <div className="flex gap-12 h-[500px] w-full p-10 ">hellooooo</div>
      </div>
      <div className="flex flex-col w-full">
        <Wave
          viewBox="500 490 100 70"
          colors={{ front: "fill-green-400", back: "fill-blue-400" }}
        />
        <div className="flex gap-12 bg-green-400 h-[500px] w-full p-10 ">
          hellooooo
        </div>

        <Wave
          viewBox="200 500 200 70"
          colors={{ front: "fill-green-400", back: "fill-blue-400" }}
          upsideDown
        />
      </div>
    </main>
  );
}
