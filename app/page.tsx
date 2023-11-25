import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import SideIcons from "@/components/SideIcons";
import ProfileComp from "@/components/ProfileComp";
import Projects from "@/components/Projects";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Toaster />
      <SideIcons />
      <main className="w-screen h-screen text-white flex items-center p-24  flex-col bg-black ">
        <div className="jumbo -inset-[10px] absolute opacity-50"></div>

        <ProfileComp />
        <div className="flex-col mt-[200px] mb-[100px] align-center justify-center">
          <p className="text-3xl font-semibold pb-2 tracking-tight">
            alguns projetos pessoais
          </p>
        </div>

        <Projects />
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
