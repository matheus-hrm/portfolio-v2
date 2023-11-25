import React, { Suspense } from "react";
import Image from "next/image";

const Profiler = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-row w-full z-10">
        <Image
          src={"/pfp.jpg"}
          alt="Profile Picture"
          width={1920}
          height={1080}
          className="w-32 rounded-lg m-7 shadow-sm  shadow-white "
        ></Image>
        <div className="flex-col">
          <p className="text-3xl font-semibold pb-2 tracking-tight">
            Olá, me chamo Matheus Henrique
          </p>

          <p className="ml-1 text-zinc-400">
            sou um desenvolvedor fullstack :)
          </p>
        </div>
      </div>
      <div className="mt-[100px] max-w-[1/2] justify-center">
        <p className="text-center max-w-xl text-zinc-200">
          Sou um estudante cursando Ciências da Computação pela UFG, gosto de
          desenvolvimento web e programo quando não estou ouvindo música.
          Atualmente tenho estudado tecnologias como{" "}
          <span className="text-white font-semibold">Next.js</span> ,{" "}
          <span className="text-white font-semibold">Typescript </span>e
          frameworks web com
          <span className="text-white font-semibold"> node.js</span> e{" "}
          <span className="text-white font-semibold">bun</span>
        </p>
      </div>
    </>
  );
};

export default Profiler;
