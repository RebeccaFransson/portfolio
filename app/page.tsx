import Image from "next/image";
import { ScrollPastMeButton } from "./_components/scrollPastMeButton";
import { FloatingBox } from "./_components/floatingBox";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between">
      <div className="flex flex-col gap-4 justify-center items-center text-white w-full min-h-[80vh] p-10 ">
        <div className="flex gap-12 items-center justify-center py-32">
          <div className=" bg-white rounded p-4 max-w-[650px]">
            <div className="flex flex-col gap-2 rounded  text-green-500">
              <div className="flex gap-4 items-center">
                <h1 className=" font-extrabold text-7xl ">
                  Hello world, <br />
                  I'm Rebecca!
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
            <FloatingBox className="bg-pink-400 translate-x-4 ">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="200 500 200 70"
          height="200"
          version="1.1"
          className="w-full "
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M0 539L21.5 535.2C43 531.3 86 523.7 128.8 523.2C171.7 522.7 214.3 529.3 257.2 526C300 522.7 343 509.3 385.8 510.2C428.7 511 471.3 526 514.2 528.7C557 531.3 600 521.7 642.8 513.5C685.7 505.3 728.3 498.7 771.2 497.2C814 495.7 857 499.3 878.5 501.2L900 503L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            className="fill-pink-400"
          />
          <path
            className="fill-orange-300"
            d="M0 548L21.5 552.2C43 556.3 86 564.7 128.8 561.3C171.7 558 214.3 543 257.2 540.7C300 538.3 343 548.7 385.8 549.5C428.7 550.3 471.3 541.7 514.2 537.7C557 533.7 600 534.3 642.8 533.2C685.7 532 728.3 529 771.2 531.7C814 534.3 857 542.7 878.5 546.8L900 551L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="500 490 100 70"
          height="200"
          version="1.1"
          className="w-full rotate-180"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M0 539L21.5 535.2C43 531.3 86 523.7 128.8 523.2C171.7 522.7 214.3 529.3 257.2 526C300 522.7 343 509.3 385.8 510.2C428.7 511 471.3 526 514.2 528.7C557 531.3 600 521.7 642.8 513.5C685.7 505.3 728.3 498.7 771.2 497.2C814 495.7 857 499.3 878.5 501.2L900 503L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            className="fill-pink-400"
          />
          <path
            className="fill-orange-300"
            d="M0 548L21.5 552.2C43 556.3 86 564.7 128.8 561.3C171.7 558 214.3 543 257.2 540.7C300 538.3 343 548.7 385.8 549.5C428.7 550.3 471.3 541.7 514.2 537.7C557 533.7 600 534.3 642.8 533.2C685.7 532 728.3 529 771.2 531.7C814 534.3 857 542.7 878.5 546.8L900 551L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          />
        </svg>
      </div>
      <div className="flex gap-12 h-[500px] w-full p-10 ">hellooooo</div>
      <div className="flex gap-12 bg-green-400 h-[500px] w-full p-10 ">
        hellooooo
      </div>
    </main>
  );
}
