import Image from "next/image";
export const FlipAvatarProfile = ({ className }: { className?: string }) => (
  <div className={`group [perspective:1000px] ${className}`}>
    <div className="w-full h-full relative transition-all duration-300 [transform-style:preserve-3d] group-hover:rotate-y-180">
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black rounded-full">
        <Image
          priority={false}
          className="h-full w-full rounded-full"
          height="130"
          width="130"
          src="/avatar.png"
          alt="a profile picture of rebecca"
        />
      </div>
      <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden]">
        <Image
          priority={false}
          className="h-full w-full rounded-full hidden dark:block "
          height="130"
          width="130"
          src="/profile.png"
          alt="a profile picture of rebecca"
        />
        <Image
          priority={false}
          className="h-full w-full rounded-full dark:hidden object-cover "
          height="130"
          width="130"
          src="/profile_2.png"
          alt="a profile picture of rebecca"
        />
      </div>
    </div>
  </div>
);
