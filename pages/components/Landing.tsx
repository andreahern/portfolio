import profilePic from "../../public/me.jpg";
import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import { RefObject } from "react";

type LandingType = {
  aboutMeRef: RefObject<HTMLDivElement>;
};

export default function Landing({ aboutMeRef }: LandingType) {
  return (
    <div className="text-body h-screen flex flex-col justify-center items-center filter drop-shadow-lg">
      <Image
        src={profilePic}
        alt="Picture of me!"
        width={250}
        height={250}
        className="rounded-full"
      />
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold mt-4">
        It's Me! Abraham Hernandez
      </h1>
      <ChevronDoubleDownIcon
        className="h-10 w-10 md:h-16 md:w-16 absolute bottom-0 cursor-pointer"
        onClick={() =>
          window.scrollTo({
            behavior: "smooth",
            top:
              aboutMeRef.current == null
                ? 0
                : aboutMeRef.current.offsetTop - 10,
          })
        }
      />
    </div>
  );
}
