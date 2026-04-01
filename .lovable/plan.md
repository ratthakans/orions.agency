

# ØRIONS Website — Detailed Review

## Overall Assessment
The site is well-structured with consistent visual design, strong brand voice, and cohesive navigation. Below are all issues found, organized by severity.

---

## Critical Issues

### 1. Service Names Misaligned Between Pages
The **Homepage services preview** (Index.tsx lines 143-150) lists 6 services with names that mostly match ServicesPage2, but the **Contact page** (ContactPage2.tsx lines 8-19) has outdated service options:
- Contact lists "Creative Communication" but Services page has it as service 06 — OK
- Contact lists retainers as "Creative Partnership (Retainer)", "Content System (Retainer)", "Channel Management (Retainer)" — these don't match the actual retainer names **Pulse, Flow, Orbit**
- Contact is missing **"Demand Strategy"** as an option

### 2. Work Portfolio Service Categories Don't Match Services Page
The `serviceFilters` in works.ts are: `"Creative Transformation", "Creative Communication", "Film & Production", "Creative Partner"`
- **"Film & Production"** doesn't match the Services page name **"Production"**
- **"Creative Partner"** doesn't match any specific service — should map to retainer model
- Missing filters for: **Demand Strategy, Signature Campaign, Event/Activation, Digital Experience**
- No work items tagged with the new services

### 3. Hospitality Package Retainer Pricing Inconsistency
HospitalityPage retainer note says: `"Pulse (120K), Flow (200K), Orbit (300K)"`
But the main Services page retainers are:
- Pulse: **40K–80K** / month
- Flow: **80K–150K** / month
- Orbit: **120K–180K** / month

The Hospitality Pulse at 120K is **3x** the standard Pulse. This needs explanation or alignment.

---

## Moderate Issues

### 4. Homepage Services Preview Missing "Demand Strategy"
Index.tsx shows 6 services but starts with "Creative Transformation" at position 1. The actual services page starts with **"Demand Strategy"** at position 01. The homepage preview should reflect the current service lineup order.

### 5. About Page — CFO Has No Name
C-Level array shows: `{ name: "CFO", role: "Finance & Operations" }` — the name field just says "CFO" instead of the actual person's name.

### 6. About Page — Team Count Discrepancy
The page says "13 CREATIVES. ONE VISION." and the counter shows 13. But the actual team data has:
- C-Level: 3 people
- Team members: 10 people
- Total: **13** ✓ — This is correct.

### 7. Several Team Members Have Generic Names
Some team members use role titles instead of real names:
- "Editor / DOP" (name field)
- "Editor" (name field)
- "Post Supervisor" (name field)
- "Public Relations" (name field)

This is likely intentional (positions to be filled), but looks inconsistent with named members.

### 8. Studio Page — Unused `titleTh` Check
StudioPage line 187 checks for `titleTh` with a type assertion `(show as any).titleTh` but no show data includes this field. Dead code.

---

## Minor Issues

### 9. Contact Form Uses `mailto:` Instead of API
The form opens the user's email client instead of actually submitting. This is a known limitation but means form data can be lost if the user doesn't have a mail client configured.

### 10. Process Page Manifesto vs Homepage Manifesto
The Process page has its own 5-line manifesto (lines 66-72) that's different from the homepage manifesto. Both are valid but could create inconsistency in messaging.

### 11. SEO — Missing `Creative Communication` Service
Services page SEO description lists "Digital Experience" but not "Creative Communication" (service 06). Not critical since it has no badge and seems like the least defined service.

### 12. Hospitality Page — Empty Hero Image
`hero.image` is set to `""` — the hero section likely renders an empty or broken image area.

---

## Content Consistency Matrix

```text
Service Name          | Services | Homepage | Contact | Work Filters
─────────────────────────────────────────────────────────────────
Demand Strategy       | ✓ (01)   | ✗        | ✗       | ✗
Creative Transform.   | ✓ (02)   | ✓        | ✓       | ✓
Signature Campaign    | ✓ (03)   | ✓        | ✓       | ✗
Production            | ✓ (04)   | ✓        | ✓       | as "Film & Production"
Event / Activation    | ✓ (05)   | ✓        | ✗       | ✗
Digital Experience    | ✓ (06)   | ✓        | ✗       | ✗
Creative Comms        | (none)   | ✓        | ✓       | ✓
Pulse Retainer        | ✓ (07)   | ✗        | ✗       | ✗
Flow Retainer         | ✓ (08)   | ✗        | ✗       | ✗
Orbit Retainer        | ✓ (09)   | ✗        | ✗       | ✗
```

---

## Recommended Fixes (Priority Order)

1. **Sync Contact page service options** with actual service names + retainer names (Pulse/Flow/Orbit)
2. **Add "Demand Strategy" to Homepage** services preview and reorder to match Services page
3. **Fix Work portfolio filters** to match current service categories
4. **Align Hospitality retainer pricing** — either justify premium or use standard rates
5. **Fix CFO name** or mark as "TBA" more explicitly
6. **Remove dead `titleTh` code** from StudioPage
7. **Add hero image** to Hospitality page or remove the image field

---

## What's Working Well

- Brand voice is consistent across all pages — confident, minimal, no fluff
- In-house production messaging is now threaded through Homepage (manifesto), About (block), Studio (framing), and Services (badges) — cohesive
- Navigation and footer are clean and consistent
- Process page SCQA structure is strong
- Service detail expandable cards with full pricing/terms/deliverables are comprehensive
- Retainer tier structure (Pulse → Flow → Orbit) is clear and well-differentiated
- EN/TH language support infrastructure is in place

