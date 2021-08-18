import ucfBanner from "../../public/ucf_banner.png";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import PortableText from "react-portable-text";

type AboutMeProps = {
  aboutMe: {
    title: string | null;
    bodyRaw:
      | [
          {
            _key: string | null;
            _type: string | null;
            children: any | null;
            markDefs: any | null;
            style: string | null;
          }
        ]
      | null;
  };
};

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => (
  <div
    ref={ref}
    className="w-full px-4 lg:px-0 flex flex-col justify-center items-center mt-32 text-gray-800"
  >
    <div className="bg-gray-50 `rounded-lg w-full lg:w-1/2 p-4">
      <h1 className="text-2xl lg:text-4xl">
        {props?.aboutMe?.title && props.aboutMe.title}
      </h1>
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
          {props?.aboutMe?.bodyRaw &&
            props.aboutMe.bodyRaw.map((block) => {
              return (
                <PortableText
                  content={[block]}
                  serializers={{
                    link: StyledLink,
                  }}
                  className="pt-4"
                  key={block._key}
                />
              );
            })}
        </div>
      </div>
    </div>
  </div>
));

type StyledLinkType = {
  children: [string];
};

const StyledLink = ({ children }: StyledLinkType) => {
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
