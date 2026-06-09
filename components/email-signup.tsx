import { Download, Mail } from "lucide-react";

type EmailSignupProps = {
  compact?: boolean;
  source?: string;
  buttonLabel?: string;
  placeholder?: string;
};

export function EmailSignup({
  compact = false,
  source = "site",
  buttonLabel = "Send Pack",
  placeholder = "Parent email for free activity pack"
}: EmailSignupProps) {
  return (
    <form
      action="/welcome"
      className="grid gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-[#17324d]/8 ring-1 ring-[#17324d]/8 sm:grid-cols-[1fr_auto]"
      method="GET"
    >
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input name="source" type="hidden" value={source} />
      <div className="relative">
        <Mail
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ec4d6]"
          size={20}
        />
        <input
          className="min-h-12 w-full rounded-full border border-[#17324d]/12 bg-[#fffaf0] py-3 pl-12 pr-4 text-[#17324d] outline-none transition placeholder:text-[#6b879c] focus:border-[#2ec4d6] focus:ring-4 focus:ring-[#2ec4d6]/20"
          id="email"
          name="email"
          placeholder={placeholder}
          required
          type="email"
        />
      </div>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff7c70] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#ff7c70]/25 transition hover:-translate-y-0.5 hover:bg-[#f06d62] focus-visible:focus-ring"
        type="submit"
      >
        <Download aria-hidden="true" size={18} />
        {buttonLabel}
      </button>
      {!compact ? (
        <p className="text-xs font-bold leading-5 text-[#6b879c] sm:col-span-2">
          Parent and teacher emails only. No spam, just Sparkle Bay updates and
          free printable activities.
        </p>
      ) : null}
    </form>
  );
}
