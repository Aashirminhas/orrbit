import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Orbit Digital Solutions" },
      { name: "description", content: "How Orbit Digital Solutions collects and uses information." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 2026</p>
        <div className="prose prose-neutral mt-10 max-w-none space-y-5 text-base leading-relaxed text-foreground/85">
          <p>We only collect user-provided data (name, email, business information) for the purpose of communication and invoicing.</p>
          <p>We do not sell or share your data with third parties. Your information is used solely to deliver the services you request.</p>
          <p>All website data, source code, and creative assets belong to the client after full payment is completed.</p>
          <p>For questions about this policy, contact <a href="mailto:orbitdigitalusa@gmail.com" className="text-accent underline">orbitdigitalusa@gmail.com</a>.</p>
        </div>
      </article>
    </SiteLayout>
  ),
});
