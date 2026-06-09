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

          <div
            className="
              mb-10
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-pink-300
                "
              >
                Portfolio
              </span>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-bold
                  text-white
                "
              >
                Proyectos destacados
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-slate-400
                "
              >
                Experiencias profesionales,
                productos digitales y proyectos
                personales desarrollados con foco
                en rendimiento, experiencia de usuario
                y escalabilidad.
              </p>
            </div>

            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-pink-500/20
                bg-pink-500/10
                px-5
                py-3
                text-sm
                text-pink-300
                transition
                hover:bg-pink-500/20
              "
            >
              Ver todos los proyectos
              <ArrowUpRight size={16} />
            </Link>
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
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(236,72,153,0.12)]
                  hover:border-pink-400/30
                "
              >
                {/* Imagen */}

                <div className="relative
                  aspect-video
                  overflow-hidden">
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
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#141B31]
                      via-transparent
                      to-transparent
                    "
                  />
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                    "
                  >
                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-[11px]
                        font-medium
                        backdrop-blur-md

                        ${
                          project.status === "Live"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : project.status === "En desarrollo"
                            ? "bg-amber-500/20 text-amber-300"
                            : "bg-slate-500/20 text-slate-300"
                        }
                      `}
                    >
                      {project.status}
                    </span>
                  </div>
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
                      text-lg
                      leading-snug
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

                  {/* Footer */}

                  <div className="mt-5 flex justify-end">
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