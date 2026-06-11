"use client";

import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import HeroTechStack from "../layout/HeroTechStacks";

export default function HeroMobile() {
  return (
    <div className="block lg:hidden px-4 pt-4 pb-8">
      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-violet-500/20
          bg-[#080b1f]
          shadow-[0_0_50px_rgba(139,92,246,0.15)]
        "
      >
        {/* Content */}
        <div className="p-5">
          <Badge>Frontend Developer 💜</Badge>

          <h1
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
            "
          >
            Creo experiencias
            <br />
            web{" "}
            <span className="text-pink-400">
              modernas
            </span>{" "}
            y
            <br />
            visualmente{" "}
            <span className="text-violet-400">
              memorables
            </span>
          </h1>

          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-slate-400
            "
          >
            Desarrolladora frontend especializada
            en crear interfaces atractivas,
            funcionales y enfocadas en la
            experiencia de usuario.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="secondary"
              href="#projects"
              className="w-full justify-center flex"
              showArrow
            >
              Ver proyectos
            </Button>

            <Button
              variant="third"
              href="https://wa.me/573176360046"
              target="_blank"
              className="w-full justify-center flex"
            >
              Hablemos juntas 💜
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative px-4">
          <div
            className="
              absolute
              inset-0
              bg-violet-500/20
              blur-3xl
            "
          />

          <Image
            src="/hero-image-liz.png"
            alt="Liz Dev"
            width={800}
            height={800}
            priority
            className="
              relative
              mx-auto
              w-full
              max-w-[320px]
              object-contain
            "
          />
        </div>

        {/* Stack */}
        <div
          className="
            border-t
            border-violet-500/10
            p-5
          "
        >

          <HeroTechStack />
        </div>
      </div>
    </div>
  );
}