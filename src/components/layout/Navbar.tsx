"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function LogoIcon() {
  return (
    <div className="w-8 h-8 rounded-lg grad-btn flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
        <path
          d="M9 5v4l2.5 2.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Sync dark mode with localStorage + html class
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change / scroll
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-16 flex items-center justify-between px-4 sm:px-8",
          "nav-bg backdrop-blur-xl border-b border-[var(--border)]",
          "transition-shadow duration-200",
          scrolled && "shadow-[0_2px_12px_rgba(124,58,237,0.08)]"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-lg text-heading hover:opacity-90 transition-opacity"
          onClick={() => setMobileOpen(false)}
        >
          <LogoIcon />
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-mid hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-surface-2 border border-[var(--border)] flex items-center justify-center text-mid hover:text-purple-600 dark:hover:text-purple-400 hover:border-[var(--border-mid)] transition-all"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button variant="ghost" size="sm" href="#">
            Log in
          </Button>
          <Button variant="primary" size="sm" href="#waitlist">
            Get Started
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-surface-2 border border-[var(--border)] flex items-center justify-center text-mid transition-all"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-9 h-9 rounded-full bg-surface-2 border border-[var(--border)] flex items-center justify-center text-heading transition-all"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-[var(--surface-2)] border-b border-[var(--border)] px-6 py-6 transition-transform duration-300",
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <nav className="flex flex-col gap-5 mb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-heading hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Button variant="outline" size="md" href="#" className="w-full justify-center">
              Log in
            </Button>
            <Button
              variant="primary"
              size="md"
              href="#waitlist"
              className="w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
