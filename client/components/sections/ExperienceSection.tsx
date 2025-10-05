import { Home, ShieldCheck, Truck, Wrench } from "lucide-react";

const steps = [
  {
    title: "Schedule your repair",
    description: "Choose a time that works for you. Instant confirmation, live tracking, and zero rescheduling fees.",
    icon: Home,
  },
  {
    title: "Technician dispatch",
    description: "Certified SwiftFix experts travel in fully equipped mobile labs with sanitized workstations and OEM-grade parts.",
    icon: Truck,
  },
  {
    title: "Precision repair & QA",
    description: "On-site repairs finished in under 30 minutes, followed by diagnostics, calibration, and protective add-ons.",
    icon: Wrench,
  },
  {
    title: "Lifetime protected",
    description: "Repairs are secured with our lifetime craftsmanship guarantee and ongoing health monitoring from the SwiftFix app.",
    icon: ShieldCheck,
  },
];

export function ExperienceSection() {
  return (
    <section id="features" className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">SwiftFix experience</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Every repair is engineered for peace of mind
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            Our on-demand repair platform blends best-in-class technicians, rigorous quality checks, and proactive care so you never miss a beat.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-white to-primary/5 p-8 dark:from-slate-900/70 dark:to-primary/10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
