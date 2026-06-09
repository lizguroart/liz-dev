import {
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiNextdotjs,
  SiVtex,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { IconType } from "react-icons";

export const technologyMap: Record<
  string,
  {
    icon: IconType;
    color: string;
  }
> = {
  React: {
    icon: RiReactjsLine,
    color: "#61DAFB",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },

  "Tailwind CSS": {
    icon: RiTailwindCssFill,
    color: "#06B6D4",
  },

  "VTEX IO": {
    icon: SiVtex,
    color: "#F71963",
  },

  Figma: {
    icon: SiFigma,
    color: "#F24E1E",
  },
   Supabase: {
    icon: SiSupabase,
    color: "#3ECF8E",
  },
};