import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2.5rem] border border-primary/30 bg-slate-900 px-6 py-12 text-white shadow-[0_36px_120px_-50px_rgba(15,118,110,0.9)] sm:px-12 md:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.5)_0%,_transparent_65%)]" />
      <div className="absolute -top-20 -right-16 -z-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
            Ready when you are
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Let’s get your devices back to brilliant
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/80">
            Book a repair in under 60 seconds or call our concierge team for white-glove device planning, upgrade guidance, and emergency dispatch.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-primary transition hover:bg-white/90"
          >
            Book now
          </Link>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            <PhoneCall className="h-5 w-5" />
            Speak with concierge
          </a>
        </div>
      </div>
    </section>
  );
}
