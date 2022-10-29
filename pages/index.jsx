import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import { HiDocument } from "react-icons/hi";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className=" bg-black w-full h-full  md:absolute lg:absolute ">
      <Navbar />
      <Head>
        <title>Anand Mohanan</title>
        <meta name="description" content="Portfolio of Anand Mohanan" />
      </Head>

      <main className="text-center p-10 ">
        <div
        // variants={container}
        // initial="hidden"
        // animate="visible"
        >
          <h1 className="text-center text-2xl font-Source  text-prim  md:text-4xl font-bold py-2 hover:font-Rampart">
            Hi,I am Anand Mohanan
          </h1>
          <h2 className="py-2 text-sm font-normal md:text-base md:font-medium text-[#B9FFBD]">
            M(Graphql)RN stack , Cloud Computing
          </h2>
          <p className="py-5 leading-8 md:text-xl font-Source Code Pro max-w-5xl mx-auto font-normal text-prim">
            Aspiring person seeking opportunities to showcase ingenuity,to put
            in effort to grow willingly with focus . Fondly anticipating for
            taking up challenges and exploring genres to work on self with the
            aim of an efficient,comprehensive and engaged working.
          </p>
        </div>
      </main>

      <div className="text-5xl flex justify-center gap-16 z-10 py-12 mt-8 text-gray-600 dark:text-gray-400">
        <Link
          className="cursor-pointer"
          href={"https://www.linkedin.com/in/anand-mohanan/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-prim" />
        </Link>
        <Link
          href={"https://github.com/anandMohanan"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-prim" />
        </Link>
        <Link
          href={"mailto:ananthkvmohanan@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMail className="text-prim" />
        </Link>
        <Link
          href={
            "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7dd15290-5224-4764-ade3-48fbb895e9f8"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiDocument className="text-prim" />
        </Link>
      </div>

      <footer className="text-center text-red-200">
        {" "}
        {year}
        <span className="text-lime-600">©</span> Anand Mohanan
      </footer>
    </div>
  );
}
