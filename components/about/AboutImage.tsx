import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative">
      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/5
        "
      >
        <Image
          src="/about-liz.png"
          alt="Liz Developer"
          width={500}
          height={600}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      {/* Floating Experience Card */}

      <div
        className="
          absolute
          -left-5
          bottom-8
          rounded-3xl
          bg-white
          px-5
          py-4
          shadow-2xl
        "
      >
        <div className="text-2xl font-bold text-slate-900">
          +4 años
        </div>

        <p className="text-xs text-slate-600">
          de experiencia
        </p>

        <p className="text-xs text-slate-600">
          creando en web
        </p>
      </div>
    </div>
  );
}