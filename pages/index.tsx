import Head from "next/head";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

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
        <div className="text-gray-800 h-screen flex flex-col justify-center items-center filter drop-shadow-lg">
          <h1 className="text-7xl">Welcome to Abe's Portfolio!</h1>
          <ChevronDoubleDownIcon className="h-16 w-16 absolute bottom-0" />
        </div>
      </main>
    </div>
  );
}
