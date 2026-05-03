import { W as jsxRuntimeExports } from "./worker-entry-BrbG3rh6.js";
import { L as Link } from "./router-BidXzqNf.js";
import { S as SiteLayout } from "./SiteLayout-DwyZn5br.js";
import { w as workRestaurant, a as workRetail, b as workService, A as ArrowRight } from "./work-service-CinyNKcF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function WorkPage() {
  const projects = [{
    title: "Hudson Street Bistro",
    category: "Restaurant",
    img: workRestaurant,
    desc: "A reservation-driven bistro site with menu, gallery, and one-tap booking — built in 48 hours."
  }, {
    title: "Maple & Co. Boutique",
    category: "Retail",
    img: workRetail,
    desc: "An elegant boutique storefront with product catalogs, lookbooks, and Instagram integration."
  }, {
    title: "Whitlock Legal Group",
    category: "Service Business",
    img: workService,
    desc: "A trust-first legal firm site with case studies, attorney bios, and intake forms."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent", children: "Selected Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl", children: "Clean, fast, and functional websites for US businesses." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground", children: "We build for hospitality, retail, and service providers — designed to convert visitors into customers." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-20 px-5 md:px-8 md:space-y-28", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 1024, height: 768, loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: p.desc })
      ] })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-secondary/40 py-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold md:text-4xl", children: "Yours could be next." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:scale-[1.03]", children: [
        "Start Your Project ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  WorkPage as component
};
