# TODO — tweaks & simplification

Working checklist. Tick items off (`[x]`) as they're done; add new ones as they come up in group discussion. Nothing here is final — it's a first pass so the group has somewhere to start.

## Content accuracy

- [ ] Group review of `preparation.html` — are the drafted interests, options, standards, BATNA actually what we agree, or just a reasonable starting guess?
- [ ] Sanity-check the aspire / content-with / live-with numbers (≤20% / ~33% / ≤50% of the $0.5M stormwater cost) — these were drafted, not agreed.
- [ ] Confirm the "reserve / cards we're keeping close" section in `preparation.html` reflects what we actually want to hold back.
- [x] Our group's names are fixed on `negotiation.html` (Georgia Buncle, Istvan Bakos, Merryn Calear) and the full 10-person roster for all three parties is listed there.
- [ ] Decide who takes which task (lead spokesperson / numbers tracker / notetaker) on `negotiation.html` — currently unassigned on purpose.

## Simplification

- [x] Cut from 8 pages to 5: merged `the-case.html` and `resources.html` into `index.html`, `reflection.html` into `outcome.html`. Briefly added `presentation.html` back as a 6th page, then removed it again and folded its content (who's presenting, segment tasks) into the end of `outcome.html` — a standalone page for it was redundant.
- [x] Re-scoped `index.html` to be pure case premise (what every group started from), not a hub/index page — dropped the process timeline and schedule stats, which now live on the pages they're actually relevant to.
- [ ] Cut anything that still reads as filler once real content replaces the drafted placeholders.
- [ ] Re-check nav labels are still the clearest names once content is final.
- [x] Removed the confidential/shareable callout pattern site-wide — no page is confidential; the whole site is Week 5 presentation material.
- [x] Removed marking-criteria/rubric language from the site itself (`outcome.html` reflection section now asks the same questions without naming criteria).

## Before sending the proposal

- [ ] Copy the sendable portion of `proposal.html` into whatever format we're actually sending Council/National Park (email, PDF, shared doc) by 26 July — don't just send a link to the page, since it also has our fallback range further down.
- [ ] Double check our BATNA and reserve positions from `preparation.html` haven't ended up in whatever we actually send Council/National Park.


- [x] Drafted our own negotiation brief for the session (`negotiation-brief-INTERNAL.docx`, plus a PDF of it, in the project root) — prep read-through and an in-room crib sheet. Mentioned on the site at `preparation.html#briefing-doc` but never published: both files are in `.gitignore` because they carry our walk-away thinking and the numbers we kept out of the sent letter.
- [ ] **Agree the brief as a group before Wednesday.** It's a draft. The suggested range (~$100K open / ~$167K comfortable / $200–250K ceiling / walk away past ~$250K) is the part that most needs the three of us to actually sign off, or change.
- [ ] Amend the .docx directly — it opens in Pages or Word. Re-export a PDF once the numbers are settled.
- [ ] Print it or have it on a second screen for the session. Don't screen-share it.

## After the negotiation session (29 July)

- [ ] Fill `negotiation.html` offer log from real notes (or a screen recording/transcript if the session is recorded), in past tense — the `.status-note` next to it already flags it's pending.
- [ ] Fill `outcome.html` cost split and terms — clear the `.status-note`/"Awaiting negotiation session" callout once done.
- [ ] Write the reflection section on `outcome.html` properly — don't leave it thin.

## Presentation prep (Week 5)

- [ ] We're presenting straight from the live site — do a full run-through: arrow through each page's deck (Home 6 slides → Preparation 6 → Proposal 4 → Negotiation 4 → Outcome 9), then move to the next page.
- [ ] Check the decks on whatever screen we'll actually present from — the canvas is 16:9 on a laptop/projector but reflows to portrait on a phone, and the two look quite different.
- [ ] Decide who covers which of the 3 segments in the "Presenting this" section at the end of `outcome.html` — currently unassigned on purpose.
- [ ] Time it — 15 minutes goes fast with 3 speakers.
- [ ] Once the date/time for our Week 5 slot is confirmed, add it — nothing invented in the meantime.

## Site/tech

- [ ] Add the live GitHub Pages URL to `README.md` once deployed.
- [ ] Decide whether groupmates need write access to the GitHub repo, or whether Istvan stays as the sole editor and folds in their input.
- [x] UTS logo (`assets/uts-logo.svg`) doubled in size then resized again to 48px header / 40px footer as part of the Apple-style nav refresh — the old "CO" gradient mark stays removed; logo is the only brand mark.
- [x] Added a map screenshot (`assets/lane-cove-map.jpg`) showing the real-world location (Delhi Road/Lady Game Drive, North Ryde) — see CLAUDE.md for how it was identified. Moved out of the `index.html` hero into Supporting detail (26 July), since it's our own identification rather than a case fact, and restyled as a white card with a dark caption to follow the box-inversion rule.
- [x] Removed the orange pill above every page title (`index.html`'s `.eyebrow`, the `.party us` chip on the other four `.page-head`s) — pages open straight on the heading now.
- [x] Removed the 15% assessment-weighting stat from the `index.html` homepage stats row (still shown in the course-strip on every page).
- [x] Full visual overhaul (26 July), Apple.com-inspired — see CLAUDE.md's "Design system" and "Presentation flow markers" sections for what changed and why.
- [ ] Do a full click-through of all 5 pages checking the new `.flow-tag`/`.flow-legend` markers read sensibly once real content replaces the remaining `tbd`s.
- [x] Converted every page's core block into a flickable slide deck (26 July) — 16:9 canvas shrinking to phone portrait, circular arrows, dots/counter, keyboard + swipe, slate-blue diagrams. See CLAUDE.md's "Slide decks" section.
- [ ] Once the negotiation and outcome slides have real content, re-time them — a messy session may need more than the 45s allowed on negotiation slide 2. Update the slide badges *and* the "Does it fit?" table on `outcome.html` together.
- [ ] Sanity-check that nothing important got left only in Supporting detail when the tabs (`proposal.html#their-replies`) and offer log (`negotiation.html#offer-log`) moved out of the spoken deck.
