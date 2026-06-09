import { projects } from "@/app/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
    const sortedProjects = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ];
  const featuredProjects = projects.filter(
  (project) => project.featured
);

const otherProjects = projects.filter(
  (project) => !project.featured
);
  return (
    <main className="min-h-screen bg-[#0B1020]">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-24
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-pink-500/10
            blur-[180px]
          "
        />

        {/* Header */}

        <div className="relative mb-16">
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

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              bg-gradient-to-r
              from-white
              via-pink-300
              to-violet-400
              bg-clip-text
              text-transparent
            "
          >
            Todos los proyectos
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-slate-400
              leading-relaxed
            "
          >
            Experiencias profesionales,
            productos digitales y proyectos
            personales desarrollados con foco
            en rendimiento, experiencia de usuario
            y escalabilidad.
          </p>
        </div>

        {/* Grid */}

        <section className="mb-20">
        <div className="mb-8">
            <h2
            className="
                text-2xl
                font-semibold
                text-white
            "
            >
            Proyectos destacados
            </h2>

            <p
            className="
                mt-2
                text-slate-400
            "
            >
            Los proyectos que mejor representan mi experiencia
            en desarrollo Frontend, experiencia de usuario y
            construcción de productos digitales.
            </p>
        </div>

        <div
            className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
            "
        >
            {featuredProjects.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
            />
            ))}
        </div>
        </section>
        <div
        className="
            my-16
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
        "
        />
        <section>
        <div className="mb-8">
            <h2
            className="
                text-2xl
                font-semibold
                text-white
            "
            >
            Todos los proyectos
            </h2>

            <p
            className="
                mt-2
                text-slate-400
            "
            >
            Una colección completa de experiencias
            profesionales, productos digitales y
            proyectos personales.
            </p>
        </div>

        <div
            className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
            "
        >
            {otherProjects.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
            />
            ))}
        </div>
        </section>
      </div>
    </main>
  );
}