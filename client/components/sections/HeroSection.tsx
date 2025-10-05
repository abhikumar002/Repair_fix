import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, Timer, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/70 bg-gradient-to-br from-white/70 via-white to-primary/5 px-6 py-12 shadow-2xl shadow-primary/10 dark:from-slate-900/80 dark:via-slate-900/70 dark:to-primary/10 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Premium on-site mobile repair
          </div>
          <div className="space-y-5">
            <h1 className="max-w-xl font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[54px]">
              Repairs at your doorstep in under 30 minutes.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              SwiftFix dispatches certified technicians to your home or office, delivering OEM-grade parts and lifetime-warrantied mobile repairs without the wait.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:translate-y-0.5 hover:shadow-xl"
            >
              Book a repair
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-border/80 px-7 py-3 text-base font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              View transparent pricing
            </a>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Timer className="h-4 w-4 text-primary" />
                Average turnaround
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">27 mins</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Lifetime guarantee
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">Included</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Star className="h-4 w-4 text-primary" />
                Customer rating
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">4.94 / 5</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex h-full w-full items-center justify-center">
          <div className="absolute -inset-10 -z-10 animate-pulse rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.14)_0%,_transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,_rgba(14,165,233,0.2)_0%,_transparent_70%)]" />
          <div className="relative aspect-[3/5] w-full max-w-xs overflow-hidden rounded-[2.2rem] border border-primary/20 bg-slate-900/95 p-5 text-white shadow-[0_32px_80px_-36px_rgba(14,165,233,0.8)]">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
              <span>SwiftFix Pro</span>
              <span>100% charged</span>
            </div>
            <div className="mt-16 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Technician en route</p>
                <p className="mt-2 font-heading text-3xl font-bold">Kevin Miles</p>
                <p className="text-sm text-slate-400">15 minutes away</p>
              </div>
              <div className="space-y-4 rounded-3xl bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">iPhone 15 Pro Max</span>
                  <span className="text-primary/90">Screen + Battery</span>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <p>Arrival ETA • 2:45 PM</p>
                  <p>Warranty • Lifetime</p>
                  <p>Payment • On completion</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-4 px-4 text-center text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Secure repair dashboard
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
