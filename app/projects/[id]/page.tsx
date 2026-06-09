import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { technologyMap } from "@/app/data/tecnologyIcons";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({
  params,
}: PageProps) {
    const { id } = await params;
  const project = projects.find(
     (item) => item.id === id
  );

  if (!project) {
    notFound();
  }

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
        {/* Categoria */}

        <section
        className="
            grid
            gap-10
            lg:grid-cols-[1.1fr_0.9fr]
        "
        >
  {/* GALERÍA */}

  <div>
    <ProjectGallery
      images={
        project.gallery.length
          ? project.gallery
          : [project.image]
      }
      title={project.title}
    />
    {(project.challenges?.length || project.results?.length) && (
  <section
    className="
      mt-12
      grid
      gap-6
      lg:grid-cols-2
    "
  >
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-8
      "
    >
      <h2
        className="
          mb-6
          text-xl
          font-semibold
          text-white
        "
      >
        Retos Técnicos
      </h2>

      <ul className="space-y-4">
        {project.challenges?.map((item) => (
          <li
            key={item}
            className="text-slate-300 text-sm"
          >
            ✓ {item}
          </li>
        ))}
      </ul>
    </div>

    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-8
      "
    >
      <h2
        className="
          mb-6
          text-xl
          font-semibold
          text-white
        "
      >
        Resultados
      </h2>

      <ul className="space-y-4">
        {project.results?.map((item) => (
          <li
            key={item}
            className="text-slate-300 text-sm"
          >
            ✓ {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
)}
  </div>

  {/* INFORMACIÓN */}

  <div>
    <span
      className="
        inline-flex
        rounded-xl
        border
        border-pink-500/20
        bg-pink-500/10
        px-3
        py-1
        text-xs
        font-medium
        uppercase
        tracking-wider
        text-pink-300
      "
    >
      {project.category}
    </span>

    <h1
      className="
        mt-6
        text-4xl
        lg:text-4xl
        font-bold
        leading-tight
        bg-gradient-to-r
        from-white
        via-pink-300
        to-violet-400
        bg-clip-text
        text-transparent
      "
    >
      {project.title}
    </h1>

    <p
      className="
        mt-6
        text-medium
        leading-relaxed
        text-slate-400
      "
    >
      {project.description}
    </p>

    <div
      className="
        mt-4
        flex
        items-center
        gap-4
        border-y
        border-white/10
        py-6
      "
    >
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

      <span className="text-slate-300">
        Estado: {project.status}
      </span>
    </div>

    <h2
      className="
        mt-4
        mb-4
        text-xl
        font-semibold
        text-white
      "
    >
      Tecnologías
    </h2>

    <div className="flex flex-wrap gap-3">
  {project.technologies.map((tech) => {
    const technology = technologyMap[tech];

    const Icon = technology?.icon;

    return (
      <div
        key={tech}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-4
          py-2
          transition-all
          duration-300
          hover:border-pink-500/20
        "
      >
        {Icon && (
          <Icon
            size={18}
            style={{
              color: technology.color,
            }}
          />
        )}

        <span
          className="
            text-sm
            text-slate-200
          "
        >
          {tech}
        </span>
      </div>
    );
  })}
</div>
    
    <h2
      className="
        mt-10
        mb-4
        text-xl
        font-semibold
        text-white
      "
    >
      Mi contribución
    </h2>

    <ul className="space-y-3">
      {project.contribution.map((item) => (
        <li
          key={item}
          className="
            flex
            items-start
            gap-3
            text-slate-300
            text-sm
          "
        >
          <span className="text-pink-400">
            ✓
          </span>

          {item}
        </li>
      ))}
    </ul>
  </div>
</section>

        {/* CTA SEGÚN ESTADO */}

{project.status === "Live" && (
  <section
    className="
      mt-12
      overflow-hidden
      rounded-3xl
      border
      border-pink-500/10
      bg-gradient-to-r
      from-pink-500/10
      to-violet-500/10
      p-8
    "
  >
    <div
      className="
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h2
          className="
            text-2xl
            font-semibold
            text-white
          "
        >
          ¿Quieres explorar el proyecto?
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-slate-400
          "
        >
          Accede a la versión pública y conoce más detalles de la
          experiencia desarrollada.
        </p>
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-pink-500
            to-violet-500
            px-8
            py-4
            font-medium
            text-white
            transition
            hover:scale-105
          "
        >
          Ver Demo ↗
        </a>
      )}
    </div>
  </section>
)}

{project.status === "Privado" && (
  <section
    className="
      mt-12
      rounded-3xl
      border
      border-white/10
      bg-white/[0.02]
      p-8
    "
  >
    <div className="flex gap-4">
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-white/5
          text-xl
        "
      >
        🔒
      </div>

      <div>
        <h2
          className="
            text-2xl
            font-semibold
            text-white
          "
        >
          Proyecto privado
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-slate-400
          "
        >
          Este proyecto fue desarrollado en un entorno profesional y la
          demostración pública no está disponible.
        </p>

        <p
          className="
            mt-4
            text-slate-500
          "
        >
          Las imágenes y descripciones compartidas ilustran los retos
          técnicos, la arquitectura implementada y las soluciones
          desarrolladas durante el proyecto.
        </p>
      </div>
    </div>
  </section>
)}

{project.status === "En desarrollo" && (
  <section
    className="
      mt-12
      rounded-3xl
      border
      border-amber-500/20
      bg-amber-500/5
      p-8
    "
  >
    <div className="flex gap-4">
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-amber-500/10
          text-xl
        "
      >
        🚧
      </div>

      <div>
        <h2
          className="
            text-2xl
            font-semibold
            text-white
          "
        >
          Proyecto en desarrollo
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-slate-400
          "
        >
          Actualmente continúo trabajando en nuevas funcionalidades,
          optimizaciones y mejoras de experiencia de usuario.
        </p>

        <p
          className="
            mt-4
            text-slate-500
          "
        >
          Próximamente estará disponible una versión pública para pruebas
          y demostraciones.
        </p>
      </div>
    </div>
  </section>
)}
      </div>
    </main>
  );
}