import clsx from "clsx";
import { HTMLAttributes } from "react";

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Badge({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={clsx(
        `
          inline-flex
          items-center
          rounded-full
          px-4
          py-2
          text-sm
          font-medium
          transition-all
          duration-300
        `,
        variant === "primary" &&
          ` border
            border-white/10
                bg-white/5
                gap-2
          `,
        variant === "secondary" &&
          `
            bg-[#FB5802]/10
            text-[#FB5802]
            border
            border-[#FB5802]/20
          `,
        variant === "outline" &&
          `
            bg-white/[0.03]
            text-gray-300
            border
            border-white/10
            backdrop-blur-sm
          `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}