import { CheckCircle2, ShieldCheck } from "lucide-react";

const pricingTiers = [
  {
    name: "On-Demand",
    price: "$89",
    description: "Perfect for single device emergencies. Parts, labor, and sanitization are covered upfront.",
    features: [
      "Certified technician at your location",
      "Lifetime workmanship guarantee",
      "Diagnostics & health report",
      "Payment after service",
    ],
    highlighted: false,
  },
  {
    name: "Protection+ Membership",
    price: "$19/mo",
    description: "Ideal for families and teams. Enjoy unlimited service calls, parts protection, and proactive care.",
    features: [
      "Unlimited same-day visits",
      "Premium OEM-grade components",
      "SwiftFix device health app",
      "Priority 2-hour arrival window",
    ],
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-10">
      <div className="flex flex-col gap-4 text-center">
        <p className="mx-auto text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Transparent pricing
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          No surprises, just precision repairs
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
          Choose a one-time visit or unlock unlimited coverage with Protection+. Both plans include OEM-grade parts, sanitization, and lifetime craftsmanship guarantees.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className={`relative flex flex-col rounded-[2rem] border border-border/80 p-8 shadow-[0_32px_80px_-45px_rgba(14,165,233,0.6)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-40px_rgba(14,165,233,0.55)] ${tier.highlighted ? "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground" : "bg-white/90"}`}
          >
            {tier.highlighted && (
              <span className="absolute left-8 top-6 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                Most loved
              </span>
            )}
            <div className="mt-6 space-y-3">
              <h3 className={`font-heading text-3xl font-semibold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <p className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                {tier.price}
              </p>
              <p className={`text-sm leading-relaxed ${tier.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                {tier.description}
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className={`mt-1 h-5 w-5 ${tier.highlighted ? "text-white" : "text-primary"}`} />
                  <span className={tier.highlighted ? "text-white/90" : "text-muted-foreground"}>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${tier.highlighted ? "bg-white text-primary hover:bg-white/90" : "border border-border/80 text-foreground hover:border-primary/60 hover:text-primary"}`}
            >
              Start with {tier.name}
            </button>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-primary/40 bg-primary/5 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-center">
        <ShieldCheck className="h-5 w-5 text-primary" />
        <p>
          Every repair includes lifetime craftsmanship warranty and complimentary device sanitization.
        </p>
      </div>
    </section>
  );
}
