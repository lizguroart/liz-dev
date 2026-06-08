import AboutFeatures from "@/components/about/AboutFeatures";
import AboutImage from "@/components/about/AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-20
        lg:py-10
        scroll-mt-20
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_40%)]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            rounded-[32px]
            border
            border-white/10
           bg-gradient-to-br
            from-[#10172f]
            to-[#0b1020]
            shadow-[0_0_60px_rgba(139,92,246,0.08)]
            p-8
            backdrop-blur-xl
            lg:p-10
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[420px_1fr]
              lg:items-center
            "
          >
            <AboutImage />

            <div>
              {/* Header */}

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-pink-300
                "
              >
                Sobre mí
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  leading-tight
                  lg:text-4xl
                "
              >
                Código + creatividad
                <br />

                Esa es mi{" "}
                <span className="text-pink-400">
                  combinación perfecta
                </span>{" "}
                ✨
              </h2>

              {/* Description */}

              <div
                className="
                  mt-8
                  max-w-2xl
                  space-y-4
                  text-medium
                  text-slate-400
                "
              >
                <p>
                  Me especializo en desarrollo frontend
                  y experiencias UI modernas.
                </p>

                <p>
                  Disfruto transformar ideas en productos
                  digitales que no solo se ven bien,
                  sino que funcionan increíble.
                </p>

                <p>
                  Me motiva crear soluciones digitales
                  que conecten con las personas,
                  con atención al detalle y pasión
                  por la estética.
                </p>
              </div>

              <AboutFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}