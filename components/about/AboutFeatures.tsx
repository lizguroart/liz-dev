import {
  MonitorSmartphone,
  Pencil,
  Code2,
  Heart,
} from "lucide-react";

const features = [
  {
    title: "Enfoque en la experiencia",
    icon: MonitorSmartphone,
  },
  {
    title: "Diseño con propósito",
    icon: Pencil,
  },
  {
    title: "Código limpio y escalable",
    icon: Code2,
  },
  {
    title: "Compromiso y comunicación",
    icon: Heart,
  },
];

export default function AboutFeatures() {
  return (
    <div
      className="
        mt-12
        grid
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
              transition-all
              duration-300
              hover:border-pink-500/30
              hover:bg-white/10
            "
          >
            <div
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-violet-500/10
              "
            >
              <Icon
                size={22}
                className="text-pink-400"
              />
            </div>

            <p
              className="
                text-sm
                font-medium
                text-white
              "
            >
              {feature.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}