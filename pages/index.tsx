import Head from "next/head";
import { useRef } from "react";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query posts {
        allPost(sort: [{ publishedAt: DESC }]) {
          title
          location
          date
          bodyRaw
        }
      }
    `,
  });

  return {
    props: {
      data: data,
    },
  };
}

export default function Home({ data }) {
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
        <Timeline events={data} />
      </main>
    </>
  );
}
