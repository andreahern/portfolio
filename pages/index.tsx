import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="A digital portfolio of my career as a software developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl h-screen flex justify-center items-center">
          Welcome to My Portfolio!
        </h1>
      </main>
    </div>
  );
}
