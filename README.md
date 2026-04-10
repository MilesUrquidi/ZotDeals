# ZotDeals

A directory of everything UCI students can get for free (or heavily discounted) with their `uci.edu` email. One place. No searching around.

**Live site:** [zotdeals.vercel.app](https://zotdeals.vercel.app)

---

## What it is

Most UCI students don't know their `.edu` email unlocks hundreds of dollars in free software, entertainment, tools, and subscriptions. ZotDeals puts it all in one clean, searchable page — free stuff, discounts, and UCI-exclusive perks.

## Stack

- **Frontend:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Database:** Supabase (Postgres)
- **Deploy:** Vercel

## Running locally

```bash
npm install
npm run dev
```

Create a `.env.local` file with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Features

- Search and filter 35+ deals by category (Entertainment, Productivity, Design, Dev Tools, AI, Career)
- Email gate for first-time visitors
- Share prompt on return visits
- Mobile responsive

## Know a deal we're missing?

Submit it via the form on the site.
