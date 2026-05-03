import { W as jsxRuntimeExports } from "./worker-entry-BrbG3rh6.js";
import { L as Link } from "./router-BidXzqNf.js";
import { S as SiteLayout } from "./SiteLayout-DwyZn5br.js";
import { C as Check } from "./check-C5MNX2dQ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const plans = [{
  name: "The Essential Launch",
  price: "499",
  tag: "Best for getting online fast",
  features: ["3-page website (Home, Services, Contact)", "Mobile-first responsive design", "Google Business integration", "Contact forms & click-to-call", "48-hour delivery"]
}, {
  name: "The Business Growth",
  price: "799",
  tag: "Most popular",
  highlight: true,
  features: ["7-page website (Home, About, Gallery, Services, Reviews, FAQ, Contact)", "Live Google / Yelp review integration", "Interactive content (menus, catalogs, galleries)", "Basic SEO optimization", "5-day delivery"]
}, {
  name: "The Enterprise Elite",
  price: "1,299",
  tag: "Full-scale build",
  features: ["Unlimited pages", "Booking / ordering system integration", "Advanced local SEO strategy", "High-speed performance optimization", "7-day priority support", "7–10 day delivery"]
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl", children: "Simple, Transparent Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base text-muted-foreground", children: "No monthly retainers. No hidden fees. You own 100% of your website." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-2xl border p-8 transition-all ${p.highlight ? "border-primary bg-primary text-primary-foreground shadow-elegant scale-[1.02]" : "border-border bg-card hover:-translate-y-1 hover:shadow-elegant"}`, children: [
        p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground", children: "Most Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-semibold uppercase tracking-wider ${p.highlight ? "text-primary-foreground/70" : "text-accent"}`, children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-bold", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl font-bold tracking-tight", children: [
            "$",
            p.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${p.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`, children: "one-time" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 space-y-3 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `mt-0.5 h-4 w-4 flex-shrink-0 ${p.highlight ? "text-[oklch(0.78_0.14_245)]" : "text-accent"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: p.highlight ? "text-primary-foreground/90" : "text-foreground/85", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: `mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${p.highlight ? "bg-background text-foreground hover:scale-[1.02]" : "bg-primary text-primary-foreground hover:scale-[1.02]"}`, children: "Choose Plan" })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-secondary/40 p-6 text-center text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Payment terms:" }),
        " 50% upfront required to start, 50% after completion. Every plan includes ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "2 revision rounds" }),
        ". Full ownership transferred on final payment."
      ] })
    ] }) })
  ] });
}
export {
  PricingPage as component
};
