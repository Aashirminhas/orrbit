import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Orbit Digital Solutions" },
      { name: "description", content: "Start your website project. We respond within 24 hours." },
      { property: "og:title", content: "Contact Orbit Digital Solutions" },
      { property: "og:description", content: "Get in touch — proposal within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get in touch</span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">Start Your Project</h1>
          <p className="mt-5 text-base text-muted-foreground">Tell us about your business. We'll send a tailored proposal within 24 hours.</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-5 md:px-8">
          <div className="md:col-span-2 space-y-8">
            <ContactInfo icon={Mail} label="Email" value="orbitdigitalusa@gmail.com" href="mailto:orbitdigitalusa@gmail.com" />
            <ContactInfo
              icon={MapPin}
              label="Office"
              value={<>1201 North Orange Street, Suite 700<br />Wilmington, DE 19801, USA</>}
            />
            <ContactInfo icon={Phone} label="Response Time" value="Within 24 hours, Mon–Fri" />

            <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Limited slots available</p>
              <p className="mt-1.5">We onboard a small number of clients each month to keep delivery fast and quality high.</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactInfo({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{content}</a> : content;
}
