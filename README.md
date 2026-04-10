# Life Loop

> Never forget the important stuff again.

A production-ready Next.js 14 marketing website for Life Loop — a recurring life task and appointment tracker.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Sora + Nunito Sans** (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub
2. Import into Vercel
3. Deploy — zero configuration needed

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, theme)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + CSS vars
│   └── privacy/page.tsx    # Privacy policy page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile menu + theme toggle
│   │   └── Footer.tsx      # Footer with nav links and socials
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with mockup, badge, CTAs
│   │   ├── TrustStrip.tsx  # Social proof / category pills
│   │   ├── Features.tsx    # 9-card feature grid
│   │   ├── Problem.tsx     # Problem section with chaos box
│   │   ├── Solution.tsx    # Solution section with category cards
│   │   ├── HowItWorks.tsx  # 3-step flow
│   │   ├── UseCases.tsx    # 6 use-case cards
│   │   ├── Dashboard.tsx   # Dashboard UI preview
│   │   ├── Testimonials.tsx# 3 testimonial cards
│   │   ├── Pricing.tsx     # 3-tier pricing
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   └── FinalCTA.tsx    # Email waitlist CTA
│   └── ui/
│       ├── Button.tsx      # Reusable button variants
│       ├── Badge.tsx       # Pill badge component
│       ├── Card.tsx        # Surface card wrapper
│       ├── SectionHeader.tsx # Eyebrow + title + subtitle
│       └── AnimatedSection.tsx # Intersection observer fade-up
└── lib/
    ├── cn.ts               # clsx + tailwind-merge helper
    └── constants.ts        # Site-wide data constants
```

## Customization

All site content (copy, pricing, features, FAQs) lives in `src/lib/constants.ts`.  
Colors and theme tokens are in `tailwind.config.ts` and `src/app/globals.css`.

## License

MIT
