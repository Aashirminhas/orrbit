import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workRetail from "@/assets/work-retail.jpg";
import workService from "@/assets/work-service.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Orbit Digital Solutions" },
      { name: "description", content: "Recent websites we've built for restaurants, retail brands, and service businesses across the USA." },
      { property: "og:title", content: "Our Work — Orbit Digital Solutions" },
      { property: "og:description", content: "Selected client projects across hospitality, retail, and service industries." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const projects = [
    { title: "Hudson Street Bistro", category: "Restaurant", img: workRestaurant, desc: "A reservation-driven bistro site with menu, gallery, and one-tap booking — built in 48 hours." },
    { title: "Maple & Co. Boutique", category: "Retail", img: workRetail, desc: "An elegant boutique storefront with product catalogs, lookbooks, and Instagram integration." },
    { title: "Whitlock Legal Group", category: "Service Business", img: workService, desc: "A trust-first legal firm site with case studies, attorney bios, and intake forms." },
  ];
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Selected Work</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Clean, fast, and functional websites for US businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We build for hospitality, retail, and service providers — designed to convert visitors into customers.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-5 md:px-8 md:space-y-28">
          {projects.map((p, i) => (
            <article key={p.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
                <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{p.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Yours could be next.</h2>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:scale-[1.03]">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
