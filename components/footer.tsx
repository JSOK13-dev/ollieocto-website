import { Camera, Mail, MessageCircle, PlayCircle } from "lucide-react";
import Link from "next/link";
import { EmailSignup } from "@/components/email-signup";
import { navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#17324d]/10 bg-[#17324d] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.1fr_0.8fr_0.8fr] md:gap-10 md:py-12 lg:grid-cols-[1fr_0.7fr_0.8fr_1.1fr]">
        <div>
          <p className="text-2xl font-black">Ollie the Octopus</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
            Ocean adventures, friendship, courage, and gentle social-emotional
            learning for preschool readers and the grown-ups who love them.
          </p>
        </div>
        <div>
          <p className="font-black">Explore</p>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-6 text-white/78 md:grid-cols-1">
            {navItems.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Stay Connected</p>
          <div className="mt-4 flex gap-2">
            {[
              { icon: Camera, label: "Instagram", href: "#" },
              { icon: MessageCircle, label: "Facebook", href: "#" },
              { icon: PlayCircle, label: "YouTube", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  aria-label={item.label}
                  className="grid size-10 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22 focus-visible:focus-ring"
                  href={item.href}
                  key={item.label}
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              );
            })}
          </div>
          <Link
            className="mt-5 inline-flex text-xs font-bold text-white/68 hover:text-white"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <p className="font-black">Free Activity Pack</p>
          <p className="mt-3 text-sm leading-6 text-white/72">
            Coloring pages, a maze, character pages, and a Sparkle Bay
            certificate for parents and teachers.
          </p>
          <div className="mt-4 text-[#17324d] [&_form]:shadow-none">
            <EmailSignup compact source="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
