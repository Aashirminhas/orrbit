import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  business: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      business: fd.get("business") || undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      e.currentTarget?.reset?.();
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Jane Doe" required />
        <Field label="Email" name="email" type="email" placeholder="you@business.com" required />
      </div>
      <Field label="Business Name" name="business" placeholder="Acme Co." />
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Details</label>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={1000}
          placeholder="Tell us about your business and what you need..."
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:scale-[1.01] hover:bg-primary/90 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Start Your Project"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
