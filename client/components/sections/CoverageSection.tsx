import { MapPin, Navigation, Timer } from "lucide-react";

export function CoverageSection() {
  return (
    <section
      id="coverage"
      className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/5 to-white px-6 py-12 sm:px-10 lg:px-16 dark:from-slate-900/80 dark:via-slate-900/70 dark:to-primary/10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.2)_0%,_transparent_60%)]" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Service coverage
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Covering the metro and beyond
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            SwiftFix technicians travel across the metropolitan area with rapid response hubs in six neighborhoods. Track your technician’s live arrival and communicate directly through the SwiftFix app.
          </p>
          <dl className="grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                <Timer className="h-4 w-4" />
                Avg arrival
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">42 mins</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                <MapPin className="h-4 w-4" />
                Neighborhoods
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">95+</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                <Navigation className="h-4 w-4" />
                Range
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">25 miles</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-square w-full rounded-[2.5rem] border border-primary/30 bg-white/80 p-6 shadow-[0_32px_92px_-40px_rgba(14,165,233,0.55)]">
            <div className="h-full w-full rounded-[1.8rem] bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.2)_0%,_transparent_60%)]">
              <div className="h-full w-full rounded-[1.8rem] border border-dashed border-primary/40 p-4">
                <div className="flex h-full flex-col justify-between rounded-[1.4rem] bg-slate-900/95 p-6 text-white">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/50">
                    <span>SwiftFix dispatch</span>
                    <span>Live feed</span>
                  </div>
                  <div className="flex-1 py-8">
                    <div className="grid gap-4">
                      {["Downtown", "Lakeside", "Tech Park", "Riverside"].map((hub) => (
                        <div key={hub} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm">
                          <span>{hub}</span>
                          <span className="text-primary/80">ETA 18-36m</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-[10px] uppercase tracking-[0.4em] text-white/50">
                    Real-time dispatch network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
