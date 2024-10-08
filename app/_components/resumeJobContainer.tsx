import { Badge } from "./badge";

export const ResumeJobContainer = () => {
  return (
    <div className="flex gap-24 w-full justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-extrabold text-6xl">Slice.trade</h3>
        <div className="flex gap-2">
          <span className="text-green-400 font-extrabold">
            Fullstack developer
          </span>
          <span>Mars 2024 - August 2024</span>
        </div>
        <div className="flex gap-2">
          <Badge color="blue">TypeScript</Badge>
          <Badge color="pink">React.js</Badge>
          <Badge color="orange">Next.js</Badge>
          <Badge color="green">Node.js</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="flex flex-col gap-2 bg-pink-50 dark:bg-gray-800 rounded-3xl rounded-tr w-fit p-6">
          <p>
            Contributed from the beginning to the launch of a cryptocurrency
            trading application that pioneered the concept of a coin functioning
            as an index fund, backed by underlying assets in the form of other
            coins.
          </p>
          <p>
            Collaborated within a small development team of three members,
            primarily responsible for frontend development and data retrieval
            from both smart contracts and internally developed APIs.
          </p>
          <p>
            The contract ended in August 2024 due to insufficient funding and
            challenges in securing new investors. Interested? Feel free to send
            me a message, and I’ll be happy to inform the founders!
          </p>
        </div>
      </div>
    </div>
  );
};
