import Head from "next/head";
import { useRef } from "react";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Socials from "./components/Socials";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query posts {
        allPost(sort: [{ publishedAt: DESC }]) {
          title
          location
          date
          category
          bodyRaw
        }
        allAboutMe {
          title
          bodyRaw
        }
      }
    `,
  });

  return {
    props: {
      allPost: data.allPost,
      aboutMe: data.allAboutMe[0],
    },
  };
}

type HomeType = {
  allPost: [
    {
      title: string;
      location: string;
      date: string;
      category: string;
      bodyRaw: any;
    }
  ];
  aboutMe: {
    title: string;
    bodyRaw: any;
  };
};

export default function Home({ allPost, aboutMe }: HomeType) {
  const aboutMeRef = useRef<HTMLDivElement>(null);

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
        <AboutMe ref={aboutMeRef} aboutMe={aboutMe} />
        <Timeline events={allPost} />
        <Socials />
      </main>
    </>
  );
}
