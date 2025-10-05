import { Link } from "react-router-dom";
import {
  Clock,
  Mail,
  MapPin,
  PhoneCall,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
];

const serviceAreas = [
  "Downtown",
  "Midtown",
  "Riverside",
  "Tech Park",
  "Uptown",
  "Harbor",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-gradient-to-b from-background to-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <PhoneCall className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-heading text-lg font-semibold text-foreground">
                SwiftFix
              </p>
              <p className="text-sm text-muted-foreground">
                Mobile repair experts
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Same-day smartphone, tablet, and laptop repairs delivered to your
            door with certified technicians and premium OEM-grade parts.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
                aria-label="social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-base font-semibold text-foreground">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <PhoneCall className="mt-0.5 h-4 w-4 text-primary" />
              <a
                href="tel:+18005551234"
                className="transition hover:text-primary"
              >
                +1 (800) 555-1234
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a
                href="mailto:hello@swiftfix.co"
                className="transition hover:text-primary"
              >
                hello@swiftfix.co
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Serving all neighborhoods within a 25-mile radius.</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-primary" />
              <span>Open daily • 8:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-base font-semibold text-foreground">
            Quick links
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/book" className="transition hover:text-primary">
                Book a repair
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-base font-semibold text-foreground">
            Service areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 bg-white/50 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} SwiftFix Mobile Repair. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition hover:text-primary">
              Terms
            </a>
            <a href="#" className="transition hover:text-primary">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
