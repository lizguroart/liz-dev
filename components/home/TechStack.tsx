
import { technologies } from "@/app/data/technologies";


export default function TechStack() {
  return (
    <section className="mt-2">
      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-6
        "
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <span
            className="
              text-sm
              text-slate-300
              whitespace-nowrap
            "
          >
            Mis tecnologías
          </span>

          <div
            className="
              grid
              flex-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-6
            "
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-[#141B31]
                    px-3
                    py-2
                    transition-all
                    duration-300
                    hover:border-pink-400/30
                    hover:bg-[#1A2342]
                  "
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      size={18}
                      style={{
                        color: tech.color,
                      }}
                    />

                    <span className="text-xs text-white">
                      {tech.name}
                    </span>
                  </div>

                  <div className="mt-2 flex justify-end">
                    <span className="text-[10px] text-slate-400">
                      {tech.level}%
                    </span>
                  </div>

                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-pink-400
                        via-fuchsia-500
                        to-violet-500
                      "
                      style={{
                        width: `${tech.level}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}