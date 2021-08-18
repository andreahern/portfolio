import ucfBanner from "../../public/ucf_banner.png";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import PortableText from "react-portable-text";

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
          {props.aboutMe.bodyRaw.map((block) => {
            return (
              <div className="pt-4" key={block._key}>
                <PortableText
                  content={[block]}
                  serializers={{
                    link: StyledLink,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
));

const StyledLink = ({ children }) => {
  return (
    <a
      href="https://club.knighthacks.org"
      className="text-blue-400 hover:text-blue-300 active:text-blue-500 cursor-pointer"
    >
      {children}
    </a>
  );
};

export default AboutMe;
