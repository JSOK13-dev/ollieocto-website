"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EmailSignup } from "@/components/email-signup";

export function ConversionLayer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [exitOpen, setExitOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setModalOpen(true), 4500);
    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) setExitOpen(true);
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const showDialog = modalOpen || exitOpen;

  return (
    <>
      {showDialog ? (
        <div
          aria-labelledby="signup-title"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-end bg-[#17324d]/45 p-4 backdrop-blur-sm sm:place-items-center"
          role="dialog"
        >
          <div className="w-full max-w-lg rounded-2xl bg-[#fffaf0] p-5 shadow-2xl ring-1 ring-[#17324d]/12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff7c70]">
                  Free activity pack
                </p>
                <h2
                  className="mt-2 text-2xl font-black leading-tight text-[#17324d]"
                  id="signup-title"
                >
                  Free Ollie Ocean Adventure Activity Pack
                </h2>
                <p className="mt-2 leading-6 text-[#44617a]">
                  Coloring pages, a maze, character pages, and a printable
                  certificate for parents and teachers.
                </p>
              </div>
              <button
                aria-label="Close signup"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#17324d] shadow-sm"
                onClick={() => {
                  setModalOpen(false);
                  setExitOpen(false);
                }}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <div className="mt-5">
              <EmailSignup source={exitOpen ? "exit-intent" : "timed-modal"} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#17324d]/10 bg-white/95 px-3 py-2 shadow-[0_-8px_24px_rgba(23,50,77,0.12)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2 text-center text-xs font-black">
          <Link className="rounded-full bg-[#ffd166] px-3 py-3 text-[#17324d]" href="/buy">
            Book
          </Link>
          <Link className="rounded-full bg-[#ff7c70] px-3 py-3 text-white" href="/activity-pack">
            Free Pack
          </Link>
          <Link className="rounded-full bg-[#17324d] px-3 py-3 text-white" href="/youtube">
            YouTube
          </Link>
        </div>
      </div>
    </>
  );
}
