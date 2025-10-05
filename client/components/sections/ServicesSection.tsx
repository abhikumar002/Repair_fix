import {
  BatteryCharging,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
} from "lucide-react";

const services = [
  {
    title: "Smartphone Displays",
    description:
      "Cracked or flickering screens replaced with premium OLED panels that match factory calibration.",
    icon: Smartphone,
    metrics: "15 min avg",
  },
  {
    title: "Battery Revivals",
    description:
      "High-cycle batteries installed with diagnostics to ensure peak performance and precise health readings.",
    icon: BatteryCharging,
    metrics: "90-day check",
  },
  {
    title: "Tablet & Laptop Care",
    description:
      "From USB-C ports to logic boards, our technicians handle precision repairs for tablets and ultrabooks.",
    icon: Laptop,
    metrics: "Certified techs",
  },
  {
    title: "Wearable Fixes",
    description:
      "Water damage treatment, strap replacements, and sensors recalibrated for smartwatches and fitness bands.",
    icon: Watch,
    metrics: "Sealed & tested",
  },
  {
    title: "Device Setup",
    description:
      "Data transfer, screen protectors, and enterprise enrollments completed in one seamless appointment.",
    icon: Tablet,
    metrics: "Zero downtime",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            What we repair
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Repairs crafted around your devices
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether it is a flagship phone or a work-issued tablet fleet,
            SwiftFix delivers the same meticulous workmanship and aftercare.
          </p>
        </div>
        <p className="text-sm font-medium text-muted-foreground sm:text-right">
          Trusted by 7000+ households and 120 enterprise teams.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-7 shadow-[0_24px_60px_-45px_rgba(14,165,233,0.55)] transition hover:-translate-y-1 hover:shadow-[0_32px_80px_-40px_rgba(14,165,233,0.6)] dark:bg-slate-900/70 dark:shadow-[0_24px_60px_-45px_rgba(14,165,233,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-2xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {service.metrics}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-primary/70">
                Guaranteed parts • Device sanitized
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
