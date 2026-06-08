"use client";

import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "third";
  href?: string;
  target?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  target,
  showArrow = false,
  ...props
}: ButtonProps) {
  const styles = clsx(
    `
       group
       items-center
      justify-center
      gap-2
       rounded-2xl
       px-5
       py-2.5
       font-medium
       transition-all
       duration-300
    `,
    variant === "primary" &&
      `
        border
        border-pink-500/60
        text-pink-300
        bg-violet-500/10
        backdrop-blur-md
        hover:bg-violet-500/20
        text-[13px]
    
      `,
    variant === "secondary" &&
      `
        bg-gradient-to-r
        from-pink-500
        to-violet-500
        px-8
        py-4
        text-md
      `,

     variant === "third" &&
      `
        border
         border-white/10
         bg-white/5
         px-8
         py-4
      `,
    className
  );

  /* LINK VERSION */
  if (href) {
    return (
      <Link href={href} className={styles} target={target}>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
          )}
      </Link>
    );
  }

  /* BUTTON VERSION */
  return (
    <button className={styles} {...props}>
      <span>{children}</span>
      {showArrow && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
          )}
    </button>
  );
}