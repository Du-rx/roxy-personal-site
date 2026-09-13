# ROXY Personal Website

## 1. Project

Build a personal portfolio website for Roxy.

The website represents a creative independent maker who is moving from:

Architecture → Operations → AI → Coding → Indie Maker

Main interests:

* AI
* Coding
* Travel
* Games
* Creative projects

The website should feel:

* Personal
* Creative
* Clean
* Modern
* Warm
* Slightly playful

Avoid:

* Generic developer portfolio style
* Corporate website style
* Cyberpunk style
* Excessive gradients
* Excessive animations
* Template-like design

---

## 2. Tech Stack

Use:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

Use Next.js App Router.

Keep dependencies minimal.

---

## 3. Pages

Create these pages:

```text
/
 /about
 /projects
 /contact
```

---

## 4. Homepage

The homepage should contain:

```text
Header
Hero
Currently Building
About Preview
Selected Projects
Contact CTA
Footer
```

Hero message:

> I build things with AI, code & imagination.

Supporting message:

> Architecture → Operations → AI → Coding → Indie Maker

---

## 5. Projects

Initial projects:

### AI Travel Planner

An AI travel planning web application that turns travel ideas into executable itineraries.

Technologies:

* Next.js
* React
* TypeScript
* AI API
* Maps
* Weather API

### Road Trip Game

A procedural road-trip exploration game.

Core ideas:

* World map
* Random routes
* Reusable map chunks
* Exploration
* Road trips
* Discovering new locations

### 2048 Cats

A cute cat-themed 2048 game.

Core ideas:

* Cat characters
* Different rarities
* Tile merging
* Collecting cats
* Cute visual design

---

## 6. Project Data

Do not hard-code project information directly inside JSX.

Create:

```text
src/data/projects.ts
```

Store project information as typed TypeScript data.

---

## 7. Components

Use a clean component structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── lib/
└── types/
```

Components should be reusable and reasonably small.

---

## 8. Header

Header should contain:

```text
ROXY

Home
About
Projects
Contact
```

It should work on desktop and mobile.

---

## 9. Design Direction

Use a minimal editorial-style design with a creative personal feeling.

Possible visual themes:

* Travel routes
* Maps
* Roads
* Small icons
* Cards
* Subtle motion
* Creative typography

Do not over-design the first version.

Content and usability are more important than visual effects.

---

## 10. Responsive Design

The website must work on:

* Desktop
* Tablet
* Mobile

Design mobile intentionally instead of simply shrinking the desktop layout.

---

## 11. Code Rules

Always:

* Use TypeScript
* Keep components modular
* Avoid duplicated code
* Keep code readable
* Use semantic HTML
* Use accessible buttons and links
* Avoid unnecessary dependencies
* Avoid modifying unrelated files

Do not:

* Delete existing functionality without permission
* Rewrite the entire project unnecessarily
* Add complex systems without permission
* Add authentication
* Add a database
* Add a CMS
* Add WebGL
* Add 3D
* Add complex backend functionality

---

## 12. Development Workflow

Work in small stages.

Recommended order:

```text
1. Project structure
2. Layout
3. Homepage
4. Visual design
5. About
6. Projects
7. Contact
8. Animation
9. Mobile optimization
10. SEO
11. Deployment
```

Do not implement future stages automatically.

Only work on the stage explicitly requested.

---

## 13. Before Finishing Any Task

Run:

```bash
npm run lint
```

Fix any errors introduced by your changes.

If possible, verify:

```bash
npm run dev
```

works correctly.

---

## 14. Important Rule

You are an implementation assistant.

Do not make major product, design, architecture, or content decisions without explaining them first.

If something is unclear:

1. Make the smallest reasonable assumption.
2. Tell me what assumption you made.
3. Continue with the task if it is safe to do so.

Do not rebuild unrelated parts of the project.

---

## 15. Current Development Stage

Current stage:

**Stage 1 — Project Foundation**

For the first task, only prepare the basic project structure and layout.

Do not create the final visual design yet.

Do not add complex animations yet.

Do not add 3D or interactive maps yet.
