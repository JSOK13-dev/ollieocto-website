import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost" | "sun" | "coral" | "bubble";
};

const variants = {
  primary:
    "bg-[#17324d] text-white shadow-lg shadow-[#17324d]/18 hover:-translate-y-0.5 hover:bg-[#214563]",
  secondary:
    "bg-white text-[#17324d] ring-2 ring-[#2ec4d6]/35 hover:-translate-y-0.5 hover:ring-[#2ec4d6]",
  ghost: "bg-transparent text-[#17324d] hover:bg-white/70",
  sun: "bg-[#ffd166] text-[#17324d] shadow-lg shadow-[#ffd166]/35 hover:-translate-y-0.5 hover:bg-[#ffdc85]",
  coral:
    "bg-[#ff7c70] text-white shadow-lg shadow-[#ff7c70]/30 hover:-translate-y-0.5 hover:bg-[#f06d62]",
  bubble:
    "bg-white text-[#17324d] ring-2 ring-[#2ec4d6]/45 shadow-lg shadow-[#2ec4d6]/18 hover:-translate-y-0.5 hover:bg-[#eafcff] hover:ring-[#ff4fa3]/50"
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`relative z-20 inline-flex min-h-12 max-w-full min-w-0 items-center justify-center gap-2 whitespace-normal rounded-full px-5 py-3 text-center text-sm font-black leading-tight transition duration-200 focus-visible:focus-ring ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
