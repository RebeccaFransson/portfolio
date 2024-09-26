import Image from "next/image";
import { ScrollPastMeButton } from "./_components/scrollPastMeButton";
import { DoubleChevron } from "./_components/icon/double-chevron";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between">
      <div className="text-white w-full h-full bg-gradient-to-l from-blue-900 to-black py-4 flex gap-4 justify-between items-center">
        <div className="h-full  flex flex-col justify-center items-center">
          button left
        </div>
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col gap-8 items-center pt-24">
            <div className=" bg-white rounded p-4 max-w-[641px]">
              <div className="flex flex-col gap-2 rounded bg-gradient-to-l from-blue-950 to-black text-transparent bg-clip-text">
                <div className="flex gap-4 items-center">
                  <h1 className=" font-extrabold text-7xl ">
                    Hello world, <br />
                    I'm Rebecca!
                  </h1>
                  <Image
                    className="w-[130px] h-[130px] rounded"
                    height="130"
                    width="130"
                    src="/profile.png"
                    alt="a profile picture of rebecca"
                  />
                </div>

                <p className="font-semibold text-xl">
                  Results-driven and enthusiastic developer with a passion for
                  creating features, building beautiful and reusable components.
                </p>
              </div>
            </div>
          </div>

          <ScrollPastMeButton id={"knowMore"} />
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          <button className="bg-white p-4 rounded-l">
            <DoubleChevron direction="down" />
          </button>
        </div>
      </div>
      hej
    </main>
  );
}
