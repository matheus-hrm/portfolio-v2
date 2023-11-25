"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  ClipboardCopyIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { useToast } from "./ui/use-toast";

const SideIcons = () => {
  const { toast } = useToast();
  function copyToClipboard() {
    navigator.clipboard.writeText("matheushenrique2@discente.ufg.br");
    toast({
      title: "Email copiado para a área de transferência!",
    });
  }

  const [mail, setMail] = useState(false);
  return (
    <div className="flex flex-col items-start pl-12 pt-10 w-full absolute text-white">
      <Link href="https://github.com/matheus-hrm" target="blank">
        <GitHubLogoIcon className="w-8 h-8" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/matheus-henrique-rodrigues-magalhães/"
        target="blank"
      >
        <LinkedInLogoIcon className="w-8 h-8 mt-8" />
      </Link>
      <Link href="https://www.instagram.com/matheushr.m/" target="blank">
        <InstagramLogoIcon className="w-8 h-8 mt-8" />
      </Link>
      <Link href="https://discord.com/users/380449498129760269" target="blank">
        <DiscordLogoIcon className="w-8 h-8 mt-8" />
      </Link>
      {!mail && (
        <div className="mt-8" onClick={() => setMail(true)}>
          <EnvelopeClosedIcon className="w-8 h-8" />
        </div>
      )}
      {mail && (
        <HoverCard>
          <HoverCardTrigger onClick={() => setMail(false)}>
            <EnvelopeOpenIcon className="w-8 h-8 mt-8" />
          </HoverCardTrigger>
          <HoverCardContent className="text-white bg-black min-w-fit min-h-fit p-2">
            <h1 className="px-2 pb-1 flex flex-row justify-between w-full items-center">
              <div>
                <Link
                  href="mailto:matheushenrique2@discente.ufg.br"
                  className="font-bold hover:text-slate-500"
                >
                  {" "}
                  Entre{" "}
                </Link>
                em contato comigo ;)
              </div>
              <ClipboardCopyIcon
                className="w-5 h-5 cursor-pointer"
                onClick={copyToClipboard}
              />
            </h1>
            <h2 className=" px-2 text-zinc-300 hover:text-zinc-100">
              matheushenrique2@discente.ufg.br
            </h2>
          </HoverCardContent>
        </HoverCard>
      )}
    </div>
  );
};

export default SideIcons;
