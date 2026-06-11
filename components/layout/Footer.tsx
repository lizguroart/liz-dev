import {
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import Image from "next/image";


const navigation = [
  {
    label: "Inicio",
    href: "#hero",
  },
  {
    label: "Sobre mi",
    href: "#about",
  },
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Proyectos",
    href: "#project",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];


export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-pink-500/20
        bg-[#06081B]
        text-white
      "
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_60%)]" />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-10
        "
      >
        <div
          className="
             grid
            grid-cols-1
            gap-10
            text-center
            md:grid-cols-[1.4fr_1fr_1fr]
            md:text-left
          "
        >
          {/* Left */}
        
          {/* Center Illustration */}
          <div className=" flex
            justify-center
             md:justify-start  items-center ">
            <Image
              src="/cafe_liz.png"
              alt="Liz_footer"
              width={1000}
              height={800}
              className="object-cover"
            />

          </div>

          {/* Navigation */}
          <div className=" flex
            flex-col
            items-center
            w-40
            mx-auto" >
            <h3
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-400
              "
            >
              Navegación
            </h3>

            <div
            className="
               flex
                flex-col
                gap-3
                items-start
            "
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  w-fit
                  text-left
                  text-gray-400
                  transition
                  hover:text-pink-300
                "
              >
                {item.label}
              </a>
            ))}
          </div>
          </div>

          {/* Social */}
          <div  className="flex
    flex-col
    items-center
    w-40
    mx-auto">
            <h3
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-400
              "
            >
              Conecta conmigo
            </h3>

            <div className="flex gap-4">
            <a
                href="https://github.com/lizguroart"
                 target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  hover:border-pink-400
                "
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.instagram.com/lizguroart/"
                 target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  hover:border-pink-400
                "
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/diliguro/"
                 target="_blank"
                 rel="noopener noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  hover:border-pink-400
                "
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:dgutierrez.dev@gmail.com"
                target="_blank"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  hover:border-pink-400
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            border-t
            border-white/10
            pt-6
            text-center
            text-xs
            text-gray-500
          "
        >
          © 2026 Liz.dev · Todos los derechos reservados.
        </div>

        {/* Sticky Note */}
        <div
          className="
            absolute
            right-10
            top-35
            rotate-12
            hidden
            md:block
          "
        >
          <div
            className="
              relative
              w-32
              rounded-md
              bg-[#FFDCCB]
              p-4
              text-center
              text-sm
              text-[#5A2C2C]
              shadow-xl
            "
          >
            <div
              className="
                absolute
                -top-2
                left-1/2
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                bg-pink-400
              "
            />

            Gracias por
            <br />
            pasar por aquí
            <div className="mt-2">♡</div>
          </div>
        </div>
      </div>
    </footer>
  );
}