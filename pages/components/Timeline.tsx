import { BriefcaseIcon } from "@heroicons/react/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PortableText from "react-portable-text";

export default function Timeline({ events }) {
  console.log(events);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-32 text-gray-800">
      <h1 className="text-2xl lg:text-4xl filter drop-shadow-lg ">
        Work Experience & Projects
      </h1>
      <VerticalTimeline className="my-10" animate={false}>
        {events.allPost.map((post, index) => {
          return (
            <VerticalTimelineElement
              icon={<BriefcaseIcon />}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              position={index % 2 == 0 ? "left" : "right"}
              key={index}
            >
              <h3 className="text-lg lg:text-xl font-semibold">{post.title}</h3>
              <div className="flex flex-row space-x-8">
                <h4 className="text-sm lg:text-base font-light">
                  <span className="font-bold">Location:</span> {post.location}
                </h4>
                <h4 className="text-sm lg:text-base font-light">
                  <span className="font-bold">Date:</span> {post.date}
                </h4>
              </div>
              <PortableText content={post.bodyRaw} serializers={{ ul: List }} />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

const List = ({ children }) => {
  return (
    <ul className="text-sm lg:text-base list-disc mt-5 pl-4">{children}</ul>
  );
};
