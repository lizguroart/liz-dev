import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#141B31]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-400/30
      "
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-5">
        <span
          className="
            rounded-full
            border
            border-pink-500/20
            bg-pink-500/10
            px-2
            py-1
            text-[10px]
            uppercase
            text-pink-300
          "
        >
          {project.category}
        </span>

        <h3 className="mt-3 text-base font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-3
                py-1
                text-xs
                text-violet-200
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => onOpen(project)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-pink-500/10
              text-pink-300
              transition
              hover:bg-pink-500/20
            "
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}