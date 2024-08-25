import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between">
      <div className="text-white w-full h-full bg-gradient-to-l from-blue-900 to-black p-4 flex gap-4 justify-between items-center">
        <div className="h-full  flex flex-col justify-center items-center">
          button left
        </div>
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="">
              <div className="relative flex gap-8 items-center p-4 bg-white rounded">
                <h1 className=" font-bold text-7xl bg-gradient-to-l from-blue-950 to-black text-transparent bg-clip-text">
                  Hello world, <br />
                  I'm Rebecca!
                </h1>
                <Image
                  className=" rounded"
                  height="130"
                  width="130"
                  src="/profile.png"
                  alt="a profile picture of rebecca"
                />
              </div>
              <p className="">
                Frontend developer with over 7 years of experience
              </p>
            </div>
          </div>
          <div className="h-[65px]">Wanna know more?</div>
        </div>
        <div className="h-full  flex flex-col justify-center items-center">
          button right
        </div>
      </div>
      hej
    </main>
  );
}
