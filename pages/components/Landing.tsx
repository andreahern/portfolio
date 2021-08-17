import profilePic from "../../public/me.jpg";
import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

export default function Landing({ aboutMeRef }) {
  return (
    <div className="text-body h-screen flex flex-col justify-center items-center filter drop-shadow-lg">
      <Image
        src={profilePic}
        alt="Picture of me!"
        width={250}
        height={250}
        className="rounded-full"
      />
      <h1 className="text-7xl font-semibold mt-4">
        It's Me! Abraham Hernandez
      </h1>
      <ChevronDoubleDownIcon
        className="h-16 w-16 absolute bottom-0 cursor-pointer"
        onClick={() =>
          window.scrollTo({
            behavior: "smooth",
            top: aboutMeRef.current.offsetTop - 10,
          })
        }
      />
    </div>
  );
}
