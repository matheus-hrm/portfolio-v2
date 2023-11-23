import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start pl-12 pt-10 w-full absolute text-white">
        <Link href="https://github.com/matheus-hrm" target="blank">
          <GitHubLogoIcon className="w-8 h-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/matheus-hrm/" target="blank">
          <LinkedInLogoIcon className="w-8 h-8 mt-8" />
        </Link>
        <Link href="https://www.instagram.com/matheus-henrique-rodrigues-magalhães/" target="blank">
          <InstagramLogoIcon className="w-8 h-8 mt-8" />
        </Link>
        <Link href="https://discord.com/users/380449498129760269" target="blank">
          <DiscordLogoIcon className="w-8 h-8 mt-8" />
        </Link>
      </div>
      <main className="w-screen h-screen text-white flex items-center p-24  flex-col bg-black ">
        <div className="jumbo -inset-[10px] absolute opacity-50"></div>
        <div className="flex items-center justify-center flex-row w-full z-10">
          <Image
            src={"/pfp.jpg"}
            alt="Profile Picture"
            width={1920}
            height={1080}
            className="w-32 rounded-lg m-7 shadow-sm  shadow-white "
          ></Image>
          <div className="flex-col">
            <p className=" text-3xl lg:text-5xl font-semibold pb-2 tracking-tight ">
              Olá, me chamo Matheus Henrique{" "}
            </p>
            <p className="ml-1 text-zinc-400">sou um desenvolvedor fullstack :)</p>
          </div>
        </div>
        <div className="mt-[100px] max-w-[1/2] justify-center">
          <p className="text-center max-w-xl text-zinc-200">
            Sou um estudante cursando Ciências da Computação pela UFG, gosto de
            desenvolvimento web e programo quando não estou ouvindo música. Atualmente tenho estudado
            tecnologias como <span className="text-white font-semibold">Next.js</span> , <span className="text-white font-semibold">Typescript </span>
            e frameworks web com <span className="text-white font-semibold">node.js</span> e <span className="text-white font-semibold">bun</span></p>
        </div>

        <div className="flex-col mt-[200px] mb-[100px] align-center justify-center">
          <p className="text-3xl font-semibold pb-2 tracking-tight">alguns projetos pessoais</p>
        </div>

        <div className=" max-w-screen-sm border-2 border-white rounded-md ">
          <HoverCard>
            <HoverCardTrigger>
              <Link href='https://github.com/matheus-hrm/manga_App'>
              <Image
                src={"/1.png"}
                alt="Manga App"
                width={1200}
                height={600}
                className="outline-none p-2  overflow-hidden hover:opacity-70 "
                ></Image>
                </Link>
            </HoverCardTrigger>
            <HoverCardContent className="bg-black ">
              <p className="text-xl font-semibold text-white">Manga App</p>
              <p className="text-md text-zinc-400 text-start">
                Um website para ler mangás online que consome a api do{" "}
                <Link
                  href="https://api.mangadex.org"
                  target="blank"
                  className="text-white"
                >
                  mangadex
                </Link>
              </p>
              <div className="flex flex-row justify-center space-x-2 mt-2">
                <p className="text-neutral-200 bg-neutral-200 bg-opacity-20 text-sm border-2 rounded-md px-2 border-neutral-400">
                  Next.js
                </p>
                <p className="text-neutral-200 text-sm bg-neutral-200 bg-opacity-20 border-2 rounded-md px-2 border-neutral-400">
                  TailwindCSS
                </p>
                <p className="text-neutral-200 text-sm bg-neutral-200 bg-opacity-20 border-2 rounded-md px-2 border-neutral-400">
                  Prisma
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="mt-48 pb-6 text-sm text-zinc-400">
          made by{" "}
          <Link
            href="https://github.com/matheus-hrm"
            target="blank"
            className="hover:text-zinc-200"
          >
            matheus-hrm ;)
          </Link>
        </p>
        <p className="pb-2 text-xs text-zinc-400 ">
          background:{" "}
          <Link
            href="https://x.com/saltyAom/status/1727340945128247723?s=20"
            target="blank"
            className="hover:text-zinc-200"
          >
            @SaltyAtom
          </Link>
        </p>
        <p className="pb-20 text-xs text-zinc-400">
          inspired by{" "}
          <Link
            href="https://brittanychiang.com/"
            target="blank"
            className="hover:text-zinc-200"
          >
            @brittanychiang
          </Link>{" "}
          and{" "}
          <Link
            href="https://fayazahmed.com/"
            target="blank"
            className="hover:text-zinc-200"
          >
            @fayazahmed
          </Link>
        </p>
      </main>
    </>
  );
}
