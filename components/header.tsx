"use client";

import { Menu, Shell, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { ButtonLink } from "./button-link";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#17324d]/10 bg-[#fffaf0]/92 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3"
      >
        <Link
          className="flex items-center gap-2 rounded-full font-black text-[#17324d] focus-visible:focus-ring"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#2ec4d6] text-white shadow-md shadow-[#2ec4d6]/30">
            <Shell aria-hidden="true" size={22} />
          </span>
          <span className="leading-tight">
            Ollie
            <span className="block text-xs font-bold text-[#44617a]">
              the Octopus
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={`rounded-full px-3 py-2 text-sm font-bold transition focus-visible:focus-ring ${
                  active
                    ? "bg-[#17324d] text-white"
                    : "text-[#31546f] hover:bg-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="/buy" variant="sun">
            Buy Now
          </ButtonLink>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-full bg-white text-[#17324d] shadow-sm ring-1 ring-[#17324d]/10 focus-visible:focus-ring lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#17324d]/10 bg-[#fffaf0] px-5 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  className={`rounded-xl px-4 py-3 font-bold ${
                    active
                      ? "bg-[#17324d] text-white"
                      : "bg-white text-[#31546f]"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
