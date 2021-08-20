import Link from "next/link";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials() {
  return (
    <div className="fixed bottom-2 right-2 md:right-4 w-16 h-10 md:w-24 md:h-20 space-x-4 flex flex-row">
      <Link href="https://github.com/habraham2023">
        <a className="w-1/2 h-full flex items-end justify-end">
          <FontAwesomeIcon
            icon={faGithub}
            className="hover:text-bodyHover text-body"
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/abeher/">
        <a className="w-1/2 h-full flex items-end justify-end">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-bodyHover text-body"
          />
        </a>
      </Link>
    </div>
  );
}
