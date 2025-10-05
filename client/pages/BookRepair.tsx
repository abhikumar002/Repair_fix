import { Calendar, Clock, Home, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const appointmentSteps = [
  {
    title: "Choose device",
    description: "Select the phone, tablet, laptop, or wearable that needs service.",
    icon: Smartphone,
  },
  {
    title: "Pick a timeslot",
    description: "We offer 2-hour arrival windows from 8:00 AM – 9:00 PM every day.",
    icon: Clock,
  },
  {
    title: "Confirm location",
    description: "Our technicians come to your home, office, or a nearby café—wherever works best.",
    icon: Home,
  },
  {
    title: "Track technician",
    description: "Get live ETA updates, technician profiles, and chat support in the SwiftFix app.",
    icon: Calendar,
  },
];

export default function BookRepair() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Book a repair</p>
        <h1 className="font-heading text-4xl font-bold text-foreground">Schedule your SwiftFix appointment</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Complete the steps below and a concierge specialist will reach out within minutes to finalize your booking. Prefer a call? Speak to a real person at <a href="tel:+18005551234" className="text-primary underline-offset-4 hover:underline">+1 (800) 555-1234</a>.
        </p>
      </header>

      <div className="grid gap-6 rounded-[2.5rem] border border-border/70 bg-white/90 p-8 shadow-[0_32px_80px_-45px_rgba(14,165,233,0.35)] lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="font-heading text-2xl font-semibold text-foreground">Concierge scheduling</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us what broke and where to meet you. A SwiftFix coordinator will text back in under five minutes to confirm details, share pricing, and dispatch a technician.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:translate-y-0.5 hover:shadow-xl"
            >
              Start from homepage
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">How it works</h3>
            <ul className="space-y-4">
              {appointmentSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white/80 p-4"
                  >
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading text-base font-semibold text-foreground">{step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <aside className="flex flex-col gap-6 rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Need immediate help?</p>
            <a href="tel:+18005551234" className="mt-3 block text-3xl font-bold text-foreground">
              Call +1 (800) 555-1234
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Available 8:00 AM – 9:00 PM daily
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• 27-minute average repair time</p>
            <p>• Lifetime craftsmanship warranty</p>
            <p>• OEM-grade parts stocked locally</p>
            <p>• Sanitization and diagnostics included</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
