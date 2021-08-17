import Head from "next/head";
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
          <h1 className="text-7xl font-semibold">Hi! I'm Abraham Hernandez</h1>
          <ChevronDoubleDownIcon className="h-16 w-16 absolute bottom-0" />
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-32 text-gray-800">
          <h1 className="text-4xl">Work Experience & Projects</h1>
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
