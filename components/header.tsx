"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { artwork, primaryNavItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/45 bg-[#fffaf0]/82 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3"
      >
        <Link
          className="flex items-center gap-2 rounded-full font-black text-[#17324d] focus-visible:focus-ring"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-[#eafcff] shadow-md shadow-[#2ec4d6]/30 ring-2 ring-white">
            <Image
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-125 object-contain"
              height={96}
              src={artwork.ollieCutout}
              width={96}
            />
          </span>
          <span className="font-brand leading-tight">
            Ollie
            <span className="block text-xs font-bold text-[#44617a]">
              the Octopus
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNavItems.map((item) => {
            const external = item.href.startsWith("http");
            const active = !external && pathname === item.href;
            return (
              <Link
                className={`rounded-full px-3 py-2 text-sm font-bold transition focus-visible:focus-ring ${
                  active
                    ? "bg-[#17324d] text-white shadow-sm shadow-[#2ec4d6]/20"
                    : "bg-white/55 text-[#31546f] shadow-sm shadow-[#2ec4d6]/8 hover:bg-white"
                }`}
                href={item.href}
                key={item.label}
                style={{ color: active ? "#ffffff" : undefined }}
                target={external ? "_blank" : undefined}
              >
                <span className="relative z-10 whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
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
            {primaryNavItems.map((item) => {
              const external = item.href.startsWith("http");
              const active = !external && pathname === item.href;
              return (
                <Link
                  className={`rounded-xl px-4 py-3 font-bold ${
                    active
                      ? "bg-[#17324d] text-white"
                      : "bg-white text-[#31546f]"
                  }`}
                  href={item.href}
                  key={item.label}
                  onClick={() => setOpen(false)}
                  style={{ color: active ? "#ffffff" : undefined }}
                  target={external ? "_blank" : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
