const faqs = [
  {
    question: "What devices can SwiftFix repair?",
    answer:
      "We service smartphones, tablets, laptops, and wearables from all major manufacturers, including Apple, Samsung, Google, Microsoft, and more.",
  },
  {
    question: "How fast can a technician arrive?",
    answer:
      "Most appointments are fulfilled within 2 hours. You will receive live updates and can track your technician in real time.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes. Every repair includes a lifetime workmanship guarantee and one-year coverage on parts installed by SwiftFix.",
  },
  {
    question: "Is my data safe during the repair?",
    answer:
      "Absolutely. Technicians operate in your presence, follow strict privacy protocols, and never access personal data without your approval.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="space-y-8">
      <div className="space-y-3 text-center">
        <p className="mx-auto text-sm font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Answers before we arrive</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
          If you have a question that is not covered here, text us at +1 (800) 555-1234 or email hello@swiftfix.co to talk with a SwiftFix specialist.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group overflow-hidden rounded-3xl border border-border/70 bg-white/80 p-6 transition hover:border-primary/50"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-foreground">
              {faq.question}
              <span className="text-sm font-medium text-primary transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
