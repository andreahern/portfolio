import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/me.jpg";
import ucfBanner from "../public/ucf_banner.png";
import { ChevronDoubleDownIcon, BriefcaseIcon } from "@heroicons/react/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abraham Hernandez | Portfolio</title>
        <meta
          name="description"
          content="A digital portfolio of my career as a software developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
          <ChevronDoubleDownIcon className="h-16 w-16 absolute bottom-0" />
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-32 text-gray-800">
          <div className="bg-gray-50 rounded-lg w-1/2 p-4">
            <h1 className="text-4xl">About Me</h1>
            <hr />
            <div className="flex flex-row space-x-4">
              <div className="w-1/5 mt-10 flex justify-center items-center">
                <Image
                  src={ucfBanner}
                  alt="UCF banner logo"
                  width={150}
                  height={150}
                  layout="fixed"
                />
              </div>
              <div className="flex flex-col w-4/5">
                <p className="text-lg pt-4">
                  Hi! I'm Abraham Hernandez. I'm a Junior at the{" "}
                  <span className="font-bold">
                    University of Central Florida
                  </span>{" "}
                  studying Computer Science. At UCF I'm an active operations and
                  development member of{" "}
                  <span className="font-bold">Knight Hacks</span>, the RSO that
                  runs our schools annual hackathon and holds workshops on tech
                  skills year round. I help develop and maintain the clubs
                  frontend codebase including{" "}
                  <Link href="https://club.knighthacks.org" passHref={true}>
                    <span className="text-blue-400 hover:text-blue-300 active:text-blue-500 cursor-pointer">
                      our club site
                    </span>
                  </Link>{" "}
                  and a registration site for our upcoming hackathon that is
                  still in development.
                </p>
                <p className="text-lg pt-4">
                  In addition to my school work I also have two internships at
                  <span className="font-bold"> Facebook</span> under my belt. At
                  Facebook I had the opportunity to work on a really huge
                  codebase utilizing a very powerful and modern tech stack
                  including <span className="font-bold">React</span>,{" "}
                  <span className="font-bold">React Relay</span>,{" "}
                  <span className="font-bold">GraphQL</span>,{" "}
                  <span className="font-bold">Flow</span>, and{" "}
                  <span className="font-bold">Hack</span> (PHP)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-32 text-gray-800">
          <h1 className="text-4xl filter drop-shadow-lg ">
            Work Experience & Projects
          </h1>
          <VerticalTimeline className="mt-10">
            <VerticalTimelineElement
              icon={<BriefcaseIcon />}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              position={"left"}
            >
              <h3 className="text-xl font-semibold">
                Facebook Software Engineer Intern
              </h3>
              <div className="flex flex-row space-x-8">
                <h4 className="font-light">
                  <span className="font-bold">Location:</span> Remote
                </h4>
                <h4 className="font-light">
                  <span className="font-bold">Date:</span> May 24, 2021 - August
                  13, 2021
                </h4>
              </div>
              <ul className="list-disc">
                <li>
                  Implemented UI improvements to the Groups tab’s{" "}
                  <span className="font-bold">Surface Highlights</span>{" "}
                  (notifications) on Facebook’s www site with the goal of
                  creating gains in Facebook’s internal engagement metrics while
                  minimizing performance cost
                </li>
                <li>
                  Employed <span className="font-bold">React</span>,{" "}
                  <span className="font-bold">React Relay</span>, and{" "}
                  <span className="font-bold">GraphQL</span> to build and modify
                  new and existing UI components
                </li>
                <li>
                  Utilized <span className="font-bold">Hack</span> a language
                  flavor of PHP to modify output of Facebook’s GraphQL API on
                  the backend.
                </li>
                <li>
                  Launched several A/B experiments testing how my UI components
                  effected how Surface Highlights are presented and how users
                  interact with Surface Highlights in terms of engagement.
                </li>
                <li>
                  Experiments had either neutral or positive statistically
                  significant engagement metrics from daily active users.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </main>
    </>
  );
}
