import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SwiftFix revived our sales team's phones in a single afternoon. The technician handled eight devices with surgical precision.",
    name: "Morgan Ellis",
    role: "Director of Operations, Harbor Realty",
  },
  {
    quote:
      "Booking was instant, ETA updates were spot on, and my tablet feels brand new. The lifetime warranty sealed the deal.",
    name: "Priya Desai",
    role: "Product Designer",
  },
  {
    quote:
      "We trust SwiftFix for every urgent device issue. Our clinics rely on tablets daily and they keep us running without disruption.",
    name: "Dr. Lena Brooks",
    role: "Founder, Vitala Health",
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="space-y-10">
      <div className="flex flex-col gap-4 text-center">
        <p className="mx-auto text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          4.94 / 5 satisfaction
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Loved by thousands of device owners
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
          We measure success in minutes saved and data protected. Hear from
          people who trust SwiftFix to keep them connected every day.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-3xl border border-border/70 bg-white/80 p-8 shadow-[0_24px_70px_-45px_rgba(14,165,233,0.45)] dark:bg-slate-900/70 dark:shadow-[0_24px_70px_-45px_rgba(14,165,233,0.25)]"
          >
            <div className="flex items-center gap-2 text-primary">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 text-base leading-relaxed text-muted-foreground">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-heading text-lg font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
