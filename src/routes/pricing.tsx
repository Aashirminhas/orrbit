import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Orbit Digital Solutions" },
      { name: "description", content: "Simple, transparent pricing. One-time payment, no monthly fees. Plans from $499." },
      { property: "og:title", content: "Pricing — Orbit Digital Solutions" },
      { property: "og:description", content: "Three simple plans. One-time payment. You own 100% of your website." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "The Essential Launch", price: "499", tag: "Best for getting online fast",
    features: ["3-page website (Home, Services, Contact)", "Mobile-first responsive design", "Google Business integration", "Contact forms & click-to-call", "48-hour delivery"],
  },
  {
    name: "The Business Growth", price: "799", tag: "Most popular", highlight: true,
    features: ["7-page website (Home, About, Gallery, Services, Reviews, FAQ, Contact)", "Live Google / Yelp review integration", "Interactive content (menus, catalogs, galleries)", "Basic SEO optimization", "5-day delivery"],
  },
  {
    name: "The Enterprise Elite", price: "1,299", tag: "Full-scale build",
    features: ["Unlimited pages", "Booking / ordering system integration", "Advanced local SEO strategy", "High-speed performance optimization", "7-day priority support", "7–10 day delivery"],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">Simple, Transparent Pricing</h1>
          <p className="mt-5 text-base text-muted-foreground">No monthly retainers. No hidden fees. You own 100% of your website.</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                p.highlight
                  ? "border-primary bg-primary text-primary-foreground shadow-elegant scale-[1.02]"
                  : "border-border bg-card hover:-translate-y-1 hover:shadow-elegant"
              }`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                    Most Popular
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-wider ${p.highlight ? "text-primary-foreground/70" : "text-accent"}`}>{p.tag}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-bold tracking-tight">${p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>one-time</span>
                </div>
                <ul className="mt-7 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.highlight ? "text-[oklch(0.78_0.14_245)]" : "text-accent"}`} />
                      <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/85"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  p.highlight ? "bg-background text-foreground hover:scale-[1.02]" : "bg-primary text-primary-foreground hover:scale-[1.02]"
                }`}>
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-secondary/40 p-6 text-center text-sm text-muted-foreground">
            <strong className="text-foreground">Payment terms:</strong> 50% upfront required to start, 50% after completion.
            Every plan includes <strong className="text-foreground">2 revision rounds</strong>. Full ownership transferred on final payment.
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
