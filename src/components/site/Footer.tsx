import { Link } from "@tanstack/react-router";
import { Orbit, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Orbit className="h-5 w-5" />
              </span>
              <span className="font-display text-[17px] font-bold tracking-tight">Orbit Digital Solutions</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium web design & development for American small businesses. One-time payment. Full ownership. Lightning-fast delivery.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/work" className="hover:text-foreground">Our Work</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Orbit Digital Solutions. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> orbitdigitalusa@gmail.com</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Wilmington, DE, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
