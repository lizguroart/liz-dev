"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/app/data/projects";
import Link from "next/link";

export default function FeaturedProjects() {
  
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <>
      <section
        id="projects"
        className="mt-10 scroll-mt-24"
      >
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-xl
          "
        >
          {/* Header */}

          <div className="mb-8 flex items-center justify-between">
            <h2
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              Proyectos destacados 🪻
            </h2>

            <button
              className="
                text-sm
                text-pink-300
                transition
                hover:text-pink-200
              "
            >
              Ver todos los proyectos →
            </button>
          </div>

          {/* Grid */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {featuredProjects.map((project) => (
              <article
                key={project.id}
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
                {/* Imagen */}

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

                {/* Contenido */}

                <div className="p-5">
                  {/* Categoria */}

                  <span
                    className="
                      rounded-full
                      border
                      border-pink-500/20
                      bg-pink-500/10
                      px-2
                      py-1
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-pink-300
                    "
                  >
                    {project.category}
                  </span>

                  {/* Titulo */}

                  <h3
                    className="
                      mt-3
                      text-base
                      font-semibold
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Descripcion */}

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    {project.shortDescription}
                  </p>

                  {/* Tecnologias */}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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

                  {/* Footer */}

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`
                          h-2
                          w-2
                          rounded-full
                          ${
                            project.status === "Live"
                              ? "bg-emerald-400"
                              : project.status === "En desarrollo"
                              ? "bg-amber-400"
                              : "bg-slate-400"
                          }
                        `}
                      />

                      <span
                        className="
                          text-xs
                          text-slate-400
                        "
                      >
                        {project.status}
                      </span>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
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
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}