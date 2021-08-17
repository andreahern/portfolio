import ucfBanner from "../../public/ucf_banner.png";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="w-full px-4 lg:px-0 flex flex-col justify-center items-center mt-32 text-gray-800"
  >
    <div className="bg-gray-50 `rounded-lg w-full lg:w-1/2 p-4">
      <h1 className="text-2xl lg:text-4xl">About Me</h1>
      <hr />
      <div className="flex flex-col-reverse items-center lg:flex-row lg:space-x-4">
        <div className="mt-10 flex justify-center items-center relative lg:w-1/5">
          <Image
            src={ucfBanner}
            alt="UCF banner logo"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <p className="pt-4">
            Hi! I'm Abraham Hernandez. I'm a Junior at the{" "}
            <span className="font-bold">University of Central Florida</span>{" "}
            studying Computer Science. At UCF I'm an active operations and
            development member of{" "}
            <span className="font-bold">Knight Hacks</span>, the RSO that runs
            our schools annual hackathon and holds workshops on tech skills year
            round. I help develop and maintain the clubs frontend codebase
            including{" "}
            <Link href="https://club.knighthacks.org" passHref={true}>
              <span className="text-blue-400 hover:text-blue-300 active:text-blue-500 cursor-pointer">
                our club site
              </span>
            </Link>{" "}
            and a registration site for our upcoming hackathon that is still in
            development.
          </p>
          <p className="pt-4">
            In addition to my school work I also have two internships at
            <span className="font-bold"> Facebook</span> under my belt. At
            Facebook I had the opportunity to work on a really huge codebase
            utilizing a very powerful and modern tech stack including{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">React Relay</span>,{" "}
            <span className="font-bold">GraphQL</span>,{" "}
            <span className="font-bold">Flow</span>, and{" "}
            <span className="font-bold">Hack</span> (PHP)
          </p>
        </div>
      </div>
    </div>
  </div>
));

export default AboutMe;
