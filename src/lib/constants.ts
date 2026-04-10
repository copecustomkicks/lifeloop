// ─── SITE META ────────────────────────────────────────────────────────────────
export const SITE = {
  name: "Life Loop",
  tagline: "Never forget the important stuff again.",
  description:
    "Track recurring appointments, maintenance, and life admin in one place. Create, complete, auto-regenerate — never lose track of what matters.",
  url: "https://lifeloop.app",
  twitter: "@lifeloopapp",
};

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Categories", href: "#categories" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── TRUST PILLS ──────────────────────────────────────────────────────────────
export const TRUST_PILLS = [
  { emoji: "🏠", label: "Home maintenance" },
  { emoji: "🚗", label: "Car care" },
  { emoji: "🦷", label: "Health checkups" },
  { emoji: "🐾", label: "Pet care" },
  { emoji: "💳", label: "Subscriptions" },
  { emoji: "👨‍👩‍👧", label: "Family reminders" },
  { emoji: "🌿", label: "Seasonal tasks" },
  { emoji: "📋", label: "Life admin" },
];

// ─── FEATURES ─────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    emoji: "🔁",
    title: "Recurring Task Tracking",
    description:
      "Set daily, weekly, monthly, or custom cycles. Life Loop tracks every interval automatically.",
    color: "purple",
  },
  {
    emoji: "📊",
    title: "Overdue & Upcoming Dashboard",
    description:
      "See everything that needs attention in one clean view — overdue, due soon, and coming up next.",
    color: "pink",
  },
  {
    emoji: "🗂️",
    title: "Category Organization",
    description:
      "Health, Car, Home, Pets, Finance. Filter your view to exactly what you need right now.",
    color: "purple",
  },
  {
    emoji: "📜",
    title: "Completion History",
    description:
      "Every completion is logged. Know exactly when you last changed your filters or had a checkup.",
    color: "amber",
  },
  {
    emoji: "⏭️",
    title: "Auto Next-Due Generation",
    description:
      "Mark done and the next occurrence is automatically scheduled. No manual rescheduling.",
    color: "emerald",
  },
  {
    emoji: "🔔",
    title: "Smart Reminders",
    description:
      "Get notified before things are due — not after. Configure lead times per task.",
    color: "red",
  },
  {
    emoji: "📋",
    title: "Starter Templates",
    description:
      "Jumpstart with pre-built templates for common recurring tasks. Setup in under 2 minutes.",
    color: "purple",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Household Sharing",
    description:
      "Share a household view with your partner or family. Everyone stays on the same page. (Pro)",
    color: "pink",
  },
  {
    emoji: "📱",
    title: "Works Everywhere",
    description:
      "Clean experience on desktop and mobile. Access your life tracker wherever life takes you.",
    color: "amber",
  },
];

// ─── PROBLEM ITEMS ────────────────────────────────────────────────────────────
export const PROBLEM_ITEMS = [
  {
    emoji: "🦷",
    title: "Missed dentist cleanings",
    description: "Twice a year. Easy to forget. Expensive when you do.",
  },
  {
    emoji: "🚗",
    title: "Overdue oil changes",
    description: "Every 3,000 miles. You only remember when the light comes on.",
  },
  {
    emoji: "💉",
    title: "Forgotten pet vaccines",
    description: "Annual boosters that could cost you an emergency vet visit.",
  },
  {
    emoji: "📅",
    title: "Expired subscriptions & renewals",
    description: "Auto-renewed before you noticed. Or gone when you needed it.",
  },
];

export const CHAOS_ITEMS = [
  "Phone calendar — with no recurrence logic",
  "Sticky notes on the fridge",
  "Emails you meant to action later",
  "Your memory (not reliable)",
  'Text from mom: "Did you change your filters?"',
  "That to-do app you stopped using",
];

// ─── SOLUTION POINTS ──────────────────────────────────────────────────────────
export const SOLUTION_POINTS = [
  {
    title: "Create recurring items once",
    description:
      "Set the name, category, and frequency. Life Loop handles the rest automatically.",
  },
  {
    title: "See everything due at a glance",
    description:
      "Your dashboard shows overdue, upcoming, and recently completed items instantly.",
  },
  {
    title: "Mark done. Roll forward automatically.",
    description:
      "Complete a task and the next due date is calculated and queued — done until it comes back.",
  },
];

export const CATEGORIES = [
  { emoji: "🏠", name: "Home", count: 4 },
  { emoji: "🚗", name: "Car", count: 2 },
  { emoji: "🦷", name: "Health", count: 5 },
  { emoji: "🐾", name: "Pets", count: 3 },
];

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
export const STEPS = [
  {
    number: "1",
    title: "Add Your Recurring Items",
    description:
      "Use a template or create from scratch. Set the name, category, and how often it repeats.",
  },
  {
    number: "2",
    title: "Get Reminded When It's Due",
    description:
      "Life Loop surfaces what needs attention on your dashboard and sends reminders before it's due.",
  },
  {
    number: "3",
    title: "Mark Done. Roll Forward.",
    description:
      "Tap complete and the next cycle is automatically scheduled — until it comes back around.",
  },
];

// ─── USE CASES ────────────────────────────────────────────────────────────────
export const USE_CASES = [
  {
    emoji: "🦷",
    name: "Dentist Cleaning",
    frequency: "Every 6 months",
    description: "Twice a year. Easy to let slide. Hard to explain to your dentist.",
    nextDue: "Sep 14, 2025",
  },
  {
    emoji: "🚗",
    name: "Oil Change",
    frequency: "Every 3 months",
    description: "3,000–5,000 miles or 3 months. Your car will thank you.",
    nextDue: "Jul 3, 2025",
  },
  {
    emoji: "🔧",
    name: "HVAC Filter",
    frequency: "Monthly",
    description: "Most people replace theirs once a year. The right answer is monthly.",
    nextDue: "May 1, 2025",
  },
  {
    emoji: "💉",
    name: "Pet Vaccines",
    frequency: "Annually",
    description: "Keep your pet protected. Yearly boosters are easy to delay indefinitely.",
    nextDue: "Jan 22, 2026",
  },
  {
    emoji: "🛂",
    name: "Passport Renewal",
    frequency: "Every 10 years",
    description: "You'll only remember when you're 3 weeks from a trip. Track it now.",
    nextDue: "Mar 8, 2030",
  },
  {
    emoji: "💳",
    name: "Subscription Renewals",
    frequency: "Annually",
    description: "Annual plans auto-renew. Know what's coming before you check your bank.",
    nextDue: "Aug 15, 2025",
  },
];

// ─── DASHBOARD MOCK DATA ──────────────────────────────────────────────────────
export const DASHBOARD_STATS = [
  { value: "2", label: "Overdue", color: "text-red-500 dark:text-red-400" },
  { value: "5", label: "Due This Month", color: "text-amber-600 dark:text-amber-400" },
  { value: "8", label: "Completed", color: "text-emerald-600 dark:text-emerald-400" },
  { value: "18", label: "Total Tracked", color: "text-purple-600 dark:text-purple-400" },
];

export const OVERDUE_TASKS = [
  { emoji: "🚗", name: "Oil Change", sub: "12 days overdue", badge: "Late", type: "overdue" as const },
  { emoji: "💊", name: "Medication Refill", sub: "5 days overdue", badge: "Late", type: "overdue" as const },
];

export const DUE_SOON_TASKS = [
  { emoji: "🦷", name: "Dentist Cleaning", sub: "In 3 days", badge: "3d", type: "soon" as const },
  { emoji: "🔧", name: "HVAC Filter", sub: "In 8 days", badge: "8d", type: "soon" as const },
  { emoji: "🐾", name: "Dog's Flea Med", sub: "In 14 days", badge: "14d", type: "soon" as const },
];

export const COMPLETED_TASKS = [
  { emoji: "👁️", name: "Eye Exam", sub: "Completed 2 days ago", badge: "Done", type: "done" as const },
  { emoji: "🧹", name: "Chimney Cleaning", sub: "Completed last week", badge: "Done", type: "done" as const },
  { emoji: "💳", name: "Credit Report Check", sub: "12 days ago", badge: "Done", type: "done" as const },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "I've missed my last three dentist cleanings because I never had a consistent way to track them. Life Loop is the first app that actually solved this. It's not a to-do list — it's a recurring life tracker. Exactly what I needed.",
    name: "Marcus R.",
    role: "Product Manager · Chicago, IL",
    initials: "MR",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    quote:
      "As a homeowner, the number of things that need attention on a recurring schedule is wild. Life Loop made me proactive. My maintenance costs are actually down because I catch things before they become emergencies.",
    name: "Sandra T.",
    role: "Homeowner · Austin, TX",
    initials: "ST",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    quote:
      "Two dogs, two kids, one very disorganized life. The family plan is genuinely a game changer. My husband and I are finally on the same page about what needs to happen around the house.",
    name: "Jamie K.",
    role: "Parent of 2 · Denver, CO",
    initials: "JK",
    gradient: "from-amber-500 to-pink-600",
  },
];

// ─── PRICING ──────────────────────────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    name: "Free",
    price: "0",
    period: "Forever free",
    description: "A solid start for anyone managing a handful of recurring tasks.",
    featured: false,
    features: [
      "Up to 3 recurring items",
      "Dashboard view",
      "Basic category organization",
      "Completion history",
      "Starter templates",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "3",
    period: "per month · billed monthly",
    description: "For anyone who takes their recurring responsibilities seriously.",
    featured: true,
    badge: "Most Popular",
    features: [
      "Unlimited recurring items",
      "Smart reminders & notifications",
      "Advanced templates library",
      "Full completion history & logs",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Get Pro — $3/mo",
  },
  {
    name: "Family",
    price: "10",
    period: "per month · up to 5 members",
    description: "For households that want to stay on top of things together.",
    featured: false,
    features: [
      "Everything in Pro",
      "Shared household tracking",
      "Up to 5 household members",
      "Shared category views",
      "Task assignment",
      "Future integrations",
    ],
    cta: "Get Family — $10/mo",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    question: "How is Life Loop different from a calendar app?",
    answer:
      "Calendars are built for one-time events. Life Loop is built for things that repeat. It auto-schedules the next occurrence when you complete a task, tracks history, and gives you a unified view of what's overdue — none of which calendar apps do well.",
  },
  {
    question: "Is this just a fancy to-do list?",
    answer:
      "No. To-do apps are for tasks with a clear end. Life Loop is for responsibilities that never end — they just come back around. There's no checkbox that disappears. There's a cycle that repeats and a history that accumulates.",
  },
  {
    question: "What kinds of recurring items can I track?",
    answer:
      "Anything that repeats: medical appointments, car maintenance, home upkeep, pet care, subscription renewals, medication refills, annual checkups, seasonal tasks, financial reviews — and anything unique to your life.",
  },
  {
    question: "Can I use Life Loop for my whole household?",
    answer:
      "Yes. The Family plan lets up to 5 members share a household dashboard, see each other's tasks, and assign responsibilities so everyone stays on the same page.",
  },
  {
    question: "How do reminders work?",
    answer:
      "On the Pro and Family plans, you can configure reminders that fire before a task is due — days or weeks in advance. You choose the lead time per task. We send push notifications and optional email reminders.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. No contracts, no gotchas. If you cancel, you keep access until the end of your billing period and then move to the Free plan. Your data stays intact.",
  },
];
