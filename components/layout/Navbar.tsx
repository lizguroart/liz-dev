"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import clsx from "clsx";

const navItems = [
  {
    label: "Inicio",
    href: "#",
  },
  {
    label: "Sobre mí",
    href: "#about",
  },
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Proyectos",
    href: "#projects",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/5
        bg-[#0B1020]/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >
            <Image
              src="/liz_logo.svg"
              alt="LizDev Logo"
              width={150}
              height={50}
              className="object-contain"
            />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 md:flex">
  {navItems.map((item) => {
    const isActive = activeSection === item.href;

    return (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => setActiveSection(item.href)}
        className={clsx(
          "relative text-[13px] font-medium transition duration-300 ",
          isActive
            ? "text-pink-300"
            : "text-gray-300 hover:text-pink-300"
        )}
      >
        {item.label}

        {isActive && (
          <span
            className="
              absolute
              left-1/2
              top-[22px]
              h-[4px]
              w-[4px]
              -translate-x-1/2
              rounded-full
              bg-pink-300
              shadow-[0_0_8px_rgba(244,114,182,0.8)]
            "
          />
        )}
      </Link>
    );
  })}
</nav>

        {/* Desktop CTA */}

        <div className="hidden md:block">
           <Button href="https://wa.me/573176360046" target="_blank" className="
          inline-flex">
          Hablemos ✧
        </Button>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div
          className="
            border-t
            border-white/5
            bg-[#0B1020]
            px-6
            py-6
            md:hidden
          "
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300"
              >
                {item.label}
              </a>
            ))}
             <Button href="https://wa.me/573176360046" target="_blank" className="
              mt-4 text-m text-center">
              Hablemos ✧
            </Button>

          </nav>
        </div>
      )}
    </header>
  );
}