import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Orbit Digital Solutions" },
      { name: "description", content: "Terms governing services provided by Orbit Digital Solutions." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 2026</p>
        <div className="prose prose-neutral mt-10 max-w-none space-y-5 text-base leading-relaxed text-foreground/85">
          <p>Services are based on the selected pricing plan. A 50% deposit is required to start any project; the remaining 50% is due upon completion.</p>
          <p>Each project includes 2 rounds of revisions. Additional revisions may be billed at standard hourly rates.</p>
          <p>Full ownership of the website, source code, and creative assets is transferred to the client after full payment.</p>
          <p>Orbit Digital Solutions is not liable for business losses, downtime, or issues caused by third-party tools, hosting providers, or platforms.</p>
          <p>For any questions, contact <a href="mailto:orbitdigitalusa@gmail.com" className="text-accent underline">orbitdigitalusa@gmail.com</a>.</p>
        </div>
      </article>
    </SiteLayout>
  ),
});
