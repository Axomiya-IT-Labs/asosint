# CLAUDE.md

# ASOSINT AI Development Guide

This file provides repository-specific instructions for AI coding assistants working on the ASOSINT codebase.

Always read this file before making changes.

For full project details, vision, branding, roadmap, and architecture, refer to `PROJECT_CONTEXT.md`.

---

# Project

Name: ASOSINT

Tagline:

Verify Before You Trust.

Mission:

Build the world's best open-source Digital Trust platform focused on OSINT, cybersecurity awareness, AI verification, online privacy, and digital literacy.

---

# Core Principles

- Build once, scale forever.
- Never rewrite architecture.
- Always extend existing systems.
- Keep the project modular.
- Prefer composition over duplication.
- Write readable code over clever code.
- Performance is a feature.
- Accessibility is mandatory.
- Security and privacy come first.

---

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- MDX
- Pagefind
- Vercel
- Cloudflare

Future:

- Better Auth
- Supabase
- OpenAI

---

# General Rules

Never introduce unnecessary dependencies.

Never install large UI libraries.

Prefer native browser APIs whenever possible.

Always use TypeScript.

Avoid using `any`.

Prefer async Server Components.

Only use Client Components when interactivity requires them.

---

# Architecture Rules

Keep components small.

Keep files focused.

Avoid deeply nested folders.

Create reusable components.

Keep business logic inside `lib/`.

Do not duplicate code.

---

# Performance Rules

Performance is a top priority.

Prefer Static Rendering whenever possible.

Minimize client-side JavaScript.

Lazy load heavy components.

Optimize images.

Self-host fonts.

Avoid unnecessary animations.

Keep Lighthouse scores above 95.

---

# Design Rules

Dark mode first.

Professional.

Minimal.

Clean.

No hacker clichés.

No Matrix effects.

No skulls.

Inspired by:

- Stripe
- Vercel
- Cloudflare
- GitHub
- Anthropic

---

# Bilingual Rules

English and Assamese are first-class languages.

Never hardcode English-only UI.

Every new page should support localization.

All routes live under:

/en/

/as/

---

# Content Rules

Content should educate.

Avoid clickbait.

Always explain concepts clearly.

Link related articles.

Link related tools.

Support beginners without oversimplifying.

---

# Coding Standards

Use functional components.

Prefer named exports.

Use Server Components by default.

Avoid prop drilling where possible.

Write descriptive variable names.

Avoid magic numbers.

Keep components under approximately 200 lines when practical.

Split large files into reusable modules.

---

# Styling

Use Tailwind CSS only.

Avoid inline styles.

Use design tokens.

Use CSS variables for colors.

Support both dark and light themes.

---

# Accessibility

Use semantic HTML.

Keyboard navigation must work.

Visible focus states are required.

Provide accessible labels.

Maintain sufficient color contrast.

---

# SEO

Every page should include:

- Metadata
- Open Graph
- JSON-LD when appropriate
- Canonical URL
- Structured headings

---

# Before Writing Code

Always ask:

Can this be reused?

Can this be simpler?

Will this scale?

Does this improve performance?

Does this improve accessibility?

---

# Never

Never rewrite working systems without justification.

Never remove accessibility features.

Never break localization.

Never sacrifice performance for visual effects.

Never add dependencies without a clear benefit.

Never expose secrets or credentials.

---

# Goal

Every contribution should make ASOSINT faster, cleaner, easier to maintain, and easier for people around the world to learn how to verify before they trust.