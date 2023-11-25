"use client";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

interface items {
  src: string | undefined;
  title: string;
  description: string;
  techs: string[];
  link: string;
}

const Projects = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const items: items[] = [
    {
      src: "/1.png",
      title: "Manga App",
      description:
        "Um website para ler mangás online que consome a api do mangadex",
      techs: ["Next.js", "TailwindCSS", "Prisma", "Typescript"],
      link: "https://github.com/matheus-hrm/manga_App",
    },
    {
      src: "/chatting.png",
      title: "chatting",
      description: "Aplicação de chat em tempo real entre usuários",
      techs: ["Vite", "TailwindCSS", "Firebase", "Typescript"],
      link: "https://github.com/matheus-hrm/chatting-app",
    },
    {
      src: "/flappy.png",
      title: "Flappy Clone",
      description:
        "Um clone do jogo Flappy Bird feito como Projeto Final da disciplina de IP",
      techs: ["Allegro", "C"],
      link: "https://github.com/matheus-hrm/Flappy-Bird",
    },
  ];

  const handlePrevious = () => {
    if (currentItem == 0) {
      setCurrentItem(items.length - 1);
      return;
    }
    setCurrentItem((currentItem - 1) % items.length);
  };
  const handleNext = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

  return (
    <>
      <div className="flex-row flex justify-between w-full">
        <button onClick={handlePrevious}>
          <ArrowLeftIcon className="w-8 h-8 active:w-10 active:h-10 transition-all" />
        </button>
        <div className=" max-w-screen-sm border-2 border-white rounded-md hover:p-1 transition-all ease-in-out">
          <HoverCard>
            <HoverCardTrigger>
              <Image
                src={items[currentItem]?.src || ""}
                alt={items[currentItem].title}
                width={1920}
                height={1080}
                className="outline-none p-2 hover:opacity-70 rounded-md "
              ></Image>
            </HoverCardTrigger>
            <HoverCardContent className="bg-black min-w-fit min-h-fit">
              <div className="flex flex-row  w-full items-center justify-between">
                <p className="text-xl font-semibold text-white">
                  {items[currentItem].title}
                </p>
                <Link href={items[currentItem].link} target="blank">
                  <ExternalLinkIcon className="w-4 h-4  text-white" />
                </Link>
              </div>
              <p className="text-md text-zinc-400 text-start">
                {items[currentItem].description}
              </p>
              <div className="flex flex-row justify-center space-x-2 mt-2">
                {items[currentItem].techs.map((tech, index) => (
                  <p
                    key={index}
                    className="text-neutral-200 bg-neutral-200 bg-opacity-20 text-sm border-2 rounded-md px-2 border-neutral-400"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <button onClick={handleNext}>
          <ArrowRightIcon className="w-8 h-8 active:w-10 active:h-10 transition-all" />
        </button>
      </div>
    </>
  );
};

export default Projects;
