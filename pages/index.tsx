import Head from "next/head";
import { useRef } from "react";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";

export default function Home() {
  const aboutMeRef = useRef();

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
        <Landing aboutMeRef={aboutMeRef} />
        <AboutMe ref={aboutMeRef} />
        <Timeline />
      </main>
    </>
  );
}
