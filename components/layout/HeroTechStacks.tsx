import {
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiNextdotjs,
  SiVtex,
  SiFigma,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: RiReactjsLine,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#06B6D4",
  },
  {
    name: "VTEX",
    icon: SiVtex,
    color: "#F71963",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
];

export default function HeroTechStack() {
  return (
    <div className="mt-12">
      <p
        className="
          mb-4
          text-xs
          uppercase
          tracking-[0.2em]
          text-pink-300
        "
      >
        Tecnologías favoritas
      </p>

     <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              transition-all
              duration-300
              hover:scale-110
              hover:border-violet-500/30
            "
          >
            <Icon
              size={28}
              style={{
                color: tech.color,
              }}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
}