import Image from "next/image";
import Link from "next/link";
import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";

export default function Socials() {
  return (
    <div className="fixed bottom-0 right-0 mr-8 space-x-4">
      <Link href="https://github.com/habraham2023">
        <a>
          <Image
            src={githubLogo}
            alt="Github profile link"
            width={32}
            height={32}
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/abeher/">
        <a>
          <Image
            src={linkedinLogo}
            alt="Linkedin profile link"
            width={32}
            height={32}
          />
        </a>
      </Link>
    </div>
  );
}
