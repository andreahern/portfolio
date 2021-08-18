import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PortableText from "react-portable-text";

type TimelineType = {
  events:
    | [
        {
          title: string | null;
          date: string | null;
          location: string | null;
          category: string | null;
          bodyRaw: any | null;
        }
      ]
    | null;
};

export default function Timeline({ events }: TimelineType) {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-32 text-gray-800">
      <h1 className="text-2xl lg:text-4xl filter drop-shadow-lg ">
        Work Experience & Projects
      </h1>
      <VerticalTimeline className="my-10" animate={false}>
        {events &&
          events.map((post, index) => {
            let icon = null;
            let iconStyle = null;

            if (post.category === "Work") {
              icon = <BriefcaseIcon />;
              iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
            } else if (post.category === "School") {
              icon = <AcademicCapIcon />;
              iconStyle = { background: "rgb(30, 187, 56)", color: "#fff" };
            }

            return (
              <VerticalTimelineElement
                icon={icon}
                iconStyle={iconStyle}
                position={index % 2 == 0 ? "left" : "right"}
                key={post.title}
              >
                <h3 className="text-lg lg:text-xl font-semibold">
                  {post.title}
                </h3>
                <div className="flex flex-row space-x-8">
                  {post.location && (
                    <h4 className="text-sm lg:text-base font-light">
                      <span className="font-bold">Location:</span>{" "}
                      {post.location}
                    </h4>
                  )}
                  {post.date && (
                    <h4 className="text-sm lg:text-base font-light">
                      <span className="font-bold">Date:</span> {post.date}
                    </h4>
                  )}
                </div>
                <PortableText
                  content={post.bodyRaw}
                  serializers={{ ul: List }}
                  className=""
                />
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </div>
  );
}

type ListType = {
  children: [any];
};

const List = ({ children }: ListType) => {
  return (
    <ul className="text-sm lg:text-base list-disc mt-5 pl-4">{children}</ul>
  );
};
