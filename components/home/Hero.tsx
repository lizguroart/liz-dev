"use client";
import Badge from "@/components/ui/Badge";
import Button from "../ui/Button";
import Image from "next/image";
import HeroTechStack from "../layout/HeroTechStacks";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-18
        pb-10
        lg:pt-18
        lg:pb-10
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid
            items-center
            lg:grid-cols-[1fr_1.15fr]
          "
        >
          {/* LEFT */}
          <div className="z-10">
            {/* Badge */}
            <Badge>
               Frontend Developer 💜
            </Badge>

            {/* Title */}

            <h1
              className="
                mt-8
                max-w-xl
                text-5xl
                font-bold
                leading-[1.1]
                
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

            {/* Description */}

            <p
              className="
                mt-8
                max-w-md
                text-lg
                text-slate-400
              "
            >
              Desarrolladora frontend especializada
              en crear interfaces atractivas,
              funcionales y enfocadas en la
              experiencia de usuario.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex gap-4">
            <Button variant="secondary" href="#projects" className="inline-flex w-full lg:w-fit " showArrow>
              Ver proyectos
            </Button>

            <Button variant="third" href="https://wa.me/573176360046" target="_blank" className="inline-flex w-full lg:w-fit ">
               Hablemos juntos 💜
            </Button>
              
            </div>

            {/* Stack */}

            <HeroTechStack />
          </div>

          {/* RIGHT */}

          <div
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              rounded-full
             bg-violet-300/10
              blur-3xl
            "
          />

          {/* MAIN CARD */}
          <div
            className="
                relative
                flex
                items-center
                justify-center
            "
            >
            {/* Glow Background */}
            <div
                className="
                absolute
                inset-0
                rounded-full
               bg-violet-500/10
                blur-3xl
                "
            />

            {/* Hero Image */}
           <div
            className="
                 relative
                  w-full
                  scale-100
                  sm:scale-105
                  lg:scale-125
            "
            >
                <Image
                src="/hero-image-liz.png"
                alt="Liz Dev"
                width={1000}
                height={1000}
                priority
                className="
                     relative
                      h-auto
                      w-full
                      object-contain
                      scale-100
                      sm:scale-105
                      lg:scale-115
                      lg:-translate-x-1/6
                    drop-shadow-[0_0_40px_rgba(17,133,245,0.18)]
                "
                />
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}