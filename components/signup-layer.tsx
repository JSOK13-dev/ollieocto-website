"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SignupLayer() {
  const [showTab, setShowTab] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTab(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#17324d]/10 bg-white/95 px-3 py-2 shadow-[0_-8px_24px_rgba(23,50,77,0.12)] backdrop-blur transition duration-300 md:hidden ${
          showTab ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] text-center text-xs font-black">
          <Link className="block min-w-0 truncate rounded-full bg-[#ffd166] px-3 py-3 text-[#17324d]" href="/activity-pack">
            Get the Free Activity Pack
          </Link>
        </div>
      </div>
    </>
  );
}
