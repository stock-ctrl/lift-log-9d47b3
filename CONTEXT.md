# Results Gym & Fitness: Spec Site Build Brief

This is a **spec build**. Results Gym is not yet a client. The site exists to win the pitch, so every decision should make the gap between their reputation and their current website obvious to the owners at a glance.

Do not contact the client or use their live systems. This is a standalone demo.

The design system in section 5 is **locked**. Use these exact values. Do not substitute, do not "improve," do not fall back to default Tailwind palettes or Inter.

---

## 1. The business

**Results Gym & Fitness**
470 W Main St, Tremonton, UT 84337
435-257-3333 / resultsgymandfitness@yahoo.com
Owners: Bryan & Chelsea Capener. Family owned, opened June 2010. Single location, not a franchise.

**Facility:** 16,000 sq ft on Main Street. One of only two Certified Hammer Strength facilities in Utah. Legend Fitness commercial equipment. Roughly 2,500 sq ft dedicated group class room.

**Access:** 24/7 keytag entry for members.
Staffed hours per their site: Mon to Thurs 5AM to 9PM, Fri & Sat 8AM to 2PM, Sun unstaffed.
Note: their Yelp listing shows different hours. Use a placeholder and flag it. Do not silently pick one.

**Included with membership:** 30+ free group classes weekly, senior classes, Kids Club childcare with custom soft play, 12-minute tanning, locker rooms, supplement pro shop.

**Instructors:** Amie Irwin, Mailee Forrest, Kylie Bronson, Alex Speas, Yessica Young.

**Membership types:** Single visit pass ($10, 2.5 hr max), 1-week pass, 12-visit punch pass, high school/youth, young adult, 1-month, 1-year+, 2-year+, corporate.
Exact dollar figures are not public. Their price sheet is a JPEG. Use clearly marked placeholder pricing.

**Member management:** iGoFigure (iGo360), portal at igo360portal.igofigure.com.

---

## 2. What is broken today

Each of these is a talking point in the sales conversation. The new site should visibly solve every one.

| Problem | Why it costs them |
| --- | --- |
| Footer reads "© 2010" | Reads as closed or abandoned |
| Prices published only as a JPEG | Google cannot index it, phones cannot zoom it, screen readers cannot read it |
| Class schedule is a JPEG labeled "Summer Schedule" | Goes stale, invisible to search, cannot be filtered |
| Zero reviews anywhere on the site | 4.8 stars across roughly 187 Google reviews, all of it hidden |
| No lead capture at all | Only path is a phone call |
| No free trial or guest pass flow | Nothing captures an after-hours mobile visitor |
| Placeholder meta titles ("results-new") | Weak local SEO on every page |
| Keyword-stuffed obsolete meta tags | "Tremonton Basketball, Tremonton Crossfit, Boxing" |
| Typos in visible copy | "Comunity," "Tremontons," "if your new to Tremonton" |
| Hero image served as raw .HEIC | Does not render reliably on the web |
| Broken instructor bio link | "More About Alex" points back to the homepage |

---

## 3. The strategic argument

**Their reputation is excellent and their website hides it.** That is the entire thesis.

Consistently praised: cleanliness, equipment quality (Hammer Strength, free weights), the volume of free classes, the Kids Club, the non-judgmental family atmosphere, the owners personally.

Consistently complained about: **the annual contract** (dominant theme, members pay monthly even when they cannot use it), a cancelled group class, crowding at peak hours.

Notably absent from complaints: cleanliness, safety, hours. Their weak spots are commercial, not operational.

**Copy implication:** meet the contract objection head on, on the pricing page, before the visitor goes looking. Competitors win on exactly this. Beehive Fitness in Brigham City advertises no contracts at $24.95/mo. KIXX Fitness on the same street offers online signup and cancellation.

Results beats both on reputation. KIXX sits near 4.2 stars across 28 reviews. Results is 4.8 across roughly 187.

---

## 4. Site structure

Single-page scroll is acceptable, but build with real routes so it can grow.

1. **Hero.** The review wall. See section 5.
2. **Why Results.** Four proof blocks: Certified Hammer Strength, 30+ free classes, 24/7 access, Kids Club.
3. **Classes.** Structured, filterable weekly schedule. Real HTML, not an image.
4. **Instructors.** Five named instructors, photo slots and bios.
5. **Pricing.** Structured tiers as real text. Contract terms stated plainly and up front.
6. **Reviews.** Substantial section, not a three-card afterthought.
7. **Free pass capture.** Primary conversion. Name, email, phone, preferred start date.
8. **Location and hours.** Map, address, staffed vs 24/7 clearly distinguished.

Sticky header CTA: "Get a free pass."

---

## 5. Design system (LOCKED)

Ground everything in what this place actually is: a 16,000 sq ft iron gym on the Main Street of a Box Elder County farm town, run by a married couple for sixteen years, where neighbors lift together at 5AM. Not a boutique studio. Plain, sturdy, warm, unpretentious.

### Color tokens

Use these exact hex values. Define them as CSS custom properties and extend the Tailwind theme with them. Do not use default Tailwind grays.

```css
:root {
  --iron:  #1F1B18; /* warm charcoal, primary dark surface */
  --steel: #46505A; /* blue-grey, secondary surfaces, borders, rules */
  --brass: #BE8A34; /* burnt harvest gold, the only accent */
  --bone:  #E8E2D8; /* warm off-white, primary text on dark, light surfaces */
  --dust:  #9A9187; /* muted grey-tan, captions, secondary text, metadata */
}
```

### Typography

All three are Google Fonts. Load via `next/font/google`.

| Role | Family | Usage |
| --- | --- | --- |
| Display | **Archivo** weights 700 to 900, stretch 110 to 125 | Headlines, the hero star rating, section titles |
| Body | **Public Sans** weights 400 and 600 | Paragraphs, bios, review text, form labels |
| Data | **Archivo Narrow** weights 400 and 700 | Class times, day labels, prices, review counts, metadata |

---

## 6. Technical spec

- Next.js, TypeScript, App Router, `src/` directory
- Tailwind, theme extended with the tokens above
- `next/font/google` for Archivo, Archivo Narrow, Public Sans
- Supabase for lead capture. Table `leads`: id, name, email, phone, preferred_start, source, created_at, notes
- Deploy to Vercel as its own project
- Repo private under `stock-ctrl`
- Env vars in `.env.local`, gitignored, never committed
- No real client credentials in this project

---

## 7. Guardrails

- Placeholder pricing must be visibly marked as placeholder.
- Do not scrape or hotlink their photos. Use neutral placeholders.
- Do not reproduce review text verbatim at length. Paraphrase themes.
- Do not replicate their existing logo. Set their name in Archivo.
- The hours conflict is unresolved. Placeholder plus a note, not a guess.

---

## 8. Definition of done

A live Vercel URL that can be texted to a gym owner cold, where within ten seconds it is obvious that (a) this gym is well loved, (b) you can find out what it costs, and (c) you can get in the door this week without calling anyone.
