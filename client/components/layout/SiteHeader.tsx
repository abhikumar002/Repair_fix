import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Why SwiftFix", href: "#features" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <PhoneCall className="h-6 w-6" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <p className="font-heading text-lg font-semibold text-foreground">
              SwiftFix Mobile Repair
            </p>
            <p className="text-sm text-muted-foreground">
              On-site fixes in under 30 minutes
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+18005551234"
            className="hidden items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/60 hover:text-primary lg:flex"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call now</span>
          </a>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:shadow-xl hover:shadow-primary/40"
          >
            Book a repair
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground transition hover:border-primary/60 hover:text-primary lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          isMenuOpen
            ? "pointer-events-auto max-h-96 border-t border-border/60 bg-background shadow-xl"
            : "pointer-events-none max-h-0 overflow-hidden"
        )}
      >
        <nav className="flex flex-col gap-2 px-6 py-4 text-base">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-muted-foreground transition hover:bg-primary/10 hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
          <Link
            to="/book"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:shadow-xl hover:shadow-primary/40"
          >
            Book a repair
          </Link>
        </nav>
      </div>
    </header>
  );
}
