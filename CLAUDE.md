@AGENTS.md

# UCI Free Stuff — Project Rules

## Project context
A directory of free and discounted perks for UCI students. Next.js + Supabase + Tailwind + shadcn/ui.

## Priorities
1. Ship a working MVP fast
2. Keep code readable and easy to extend
3. Don't over-build — this is a simple data display app

## File structure rules
- Pages go in `app/`
- Reusable components go in `components/`
- Supabase query functions go in `lib/supabase.ts`
- Keep it flat — don't create deep nested folders

## Component rules
- One component per file
- Props should be obvious — if you need to document a prop, simplify it
- No component should be doing data fetching AND rendering — separate concerns

## Database rules
- All Supabase queries go through `lib/supabase.ts` — no inline queries in components
- Never expose service role key on the client side
- Use Supabase RLS (Row Level Security) for anything user-facing

## What NOT to build yet
- User auth (not in MVP)
- Favorites or upvotes (stretch feature)
- Email digest (stretch feature)
- Complex animations or transitions

## Design rules
- Clean, modern, sleek — lots of whitespace.
- All-white page background. Light gray (`#F4F4F4`) for card fills and section backgrounds.
- NOT UCI-branded. No navy/gold.

### Color palette
- Deep teal: `#005461` — primary accents, dark buttons, heavy text accents
- Mid teal: `#018790` — hover states
- Bright teal: `#00B7B5` — highlights, active filter pills, "Free" badge
- Light gray: `#F4F4F4` — card backgrounds, section fills
- Body text: `#111827`, secondary: `#6b7280`, borders: `#e5e7eb`

### Cards
- Resource cards have an image/logo header area
- If `logo_url` exists: show the logo image
- If no logo: show a teal gradient header with the first letter of the perk name
- Below header: name, value, description, tags, CTA link button

### Buttons & badges
- Primary button: `bg-[#005461] text-white hover:bg-[#018790]`
- Free badge: bright teal (`#00B7B5`) pill
- UCI-Exclusive badge: deep teal (`#005461`) pill, white text
- NEW badge: green pill
- Spacing is a design element — use it generously.

## Reminder
This is a content site. The complexity is in the data, not the code. Keep the code boring.
