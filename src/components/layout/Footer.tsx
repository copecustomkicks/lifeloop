import Link from "next/link";
import { SITE } from "@/lib/constants";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "mailto:hello@lifeloop.app" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

function LogoIcon() {
  return (
    <div className="w-7 h-7 rounded-lg grad-btn flex items-center justify-center flex-shrink-0">
      <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
        <path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-[var(--border)] pt-14 pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-bold text-lg text-heading mb-3 hover:opacity-90 transition-opacity"
            >
              <LogoIcon />
              {SITE.name}
            </Link>
            <p className="text-sm text-soft leading-relaxed max-w-[220px]">
              A dedicated recurring life task tracker for busy people, homeowners, and families.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-black tracking-widest uppercase text-soft mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-soft hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-soft">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { label: "Twitter / X", icon: "𝕏", href: "#" },
              { label: "Instagram", icon: "◈", href: "#" },
              { label: "LinkedIn", icon: "in", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-surface-2 border border-[var(--border)] flex items-center justify-center text-xs text-soft hover:text-purple-600 dark:hover:text-purple-400 hover:border-[var(--border-mid)] transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
