import { BriefcaseIcon } from "@heroicons/react/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-32 text-gray-800">
      <h1 className="text-2xl lg:text-4xl filter drop-shadow-lg ">
        Work Experience & Projects
      </h1>
      <VerticalTimeline className="mt-10" animate={false}>
        <VerticalTimelineElement
          icon={<BriefcaseIcon />}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          position={"left"}
        >
          <h3 className="text-lg lg:text-xl font-semibold">
            Facebook Software Engineer Intern
          </h3>
          <div className="flex flex-row space-x-8">
            <h4 className="text-sm lg:text-base font-light">
              <span className="font-bold">Location:</span> Remote
            </h4>
            <h4 className="text-sm lg:text-base font-light">
              <span className="font-bold">Date:</span> May 24, 2021 - August 13,
              2021
            </h4>
          </div>
          <ul className="text-sm lg:text-base list-disc mt-5 pl-4">
            <li>
              Implemented UI improvements to the Groups tab’s{" "}
              <span className="font-bold">Surface Highlights</span>{" "}
              (notifications) on Facebook’s www site with the goal of creating
              gains in Facebook’s internal engagement metrics while minimizing
              performance cost
            </li>
            <li>
              Employed <span className="font-bold">React</span>,{" "}
              <span className="font-bold">React Relay</span>, and{" "}
              <span className="font-bold">GraphQL</span> to build and modify new
              and existing UI components
            </li>
            <li>
              Utilized <span className="font-bold">Hack</span> a language flavor
              of PHP to modify output of Facebook’s GraphQL API on the backend.
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
  );
}
