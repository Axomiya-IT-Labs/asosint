# ASOSINT Architecture

> Last Updated: August 2026

---

# Overview

ASOSINT is a modern, open-source Digital Trust platform built to educate, inform, and empower people to safely navigate the internet in the age of Artificial Intelligence.

The platform combines:

- OSINT (Open Source Intelligence)
- Cybersecurity Awareness
- AI Literacy
- AI Verification
- Digital Investigations
- Privacy Education
- Scam Awareness
- Practical Verification Tools

Unlike traditional cybersecurity websites, ASOSINT is designed for everyone—not just security professionals.

The architecture prioritizes:

- Performance
- Scalability
- Accessibility
- Bilingual support
- Search engine optimization
- AI discoverability
- Long-term maintainability

---

# Architecture Principles

The project follows several non-negotiable principles.

## 1. Static First

Whenever possible, pages should be statically generated.

Benefits:

- Faster page loads
- Better SEO
- Lower infrastructure costs
- Improved security
- Better caching

Dynamic rendering should only be used when absolutely necessary.

---

## 2. Server Components by Default

React Server Components should be the default.

Client Components should only be used for:

- Search
- Interactive tools
- Theme switching
- Forms
- Animations
- User interactions

This minimizes JavaScript sent to users.

---

## 3. Component Driven

Every UI element should be reusable.

Examples:

- Button
- Card
- Alert
- Badge
- Hero
- Navbar
- Footer
- Article Layout
- Tool Layout

Avoid duplicate implementations.

---

## 4. Modular

Every feature should exist independently.

Adding new tools or learning modules should not require modifying unrelated parts of the application.

---

## 5. Documentation First

Every significant architectural decision should be documented.

Future contributors should understand why decisions were made—not just what was built.

---

# Technology Stack

Framework

- Next.js 16

Language

- TypeScript

Styling

- Tailwind CSS v4

UI

- shadcn/ui
- Radix UI

Animation

- Motion

Content

- MDX

Search

- Pagefind

Hosting

- Vercel

CDN

- Cloudflare

Version Control

- GitHub

Future Integrations

- Better Auth
- Supabase
- OpenAI

---

# Folder Structure

The project should remain organized and scalable.

```

web/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   └── config/
│
├── content/
│   ├── en/
│   └── as/
│
├── docs/
│
├── public/
│
└── package.json

```

---

# Routing

The application uses the Next.js App Router.

All user-facing content exists under a language prefix.

Example

```

/en/

/as/

```

Examples

```

/en/tools/password-generator

/as/tools/password-generator

/en/learn/deepfake-detection

/as/learn/deepfake-detection

```

This ensures both languages remain first-class citizens.

---

# Information Architecture

The platform is divided into major sections.

```

Home

Learn

Tools

Threats

AI

Resources

Community

About

Search

```

Each section can continue growing without changing the overall navigation.

---

# Content Architecture

Content is stored as MDX.

Example

```

content/

en/

learn/

ai/

cyber/

tools/

threats/

resources/

as/

learn/

ai/

cyber/

tools/

threats/

resources/

```

Every article should have a translated counterpart.

If a translation is unavailable, the page should clearly indicate that it is pending.

---

# Tools Architecture

Each tool is independent.

Example

```

tools/

password-generator/

password-strength/

metadata-viewer/

hash-generator/

email-header/

url-analyzer/

reverse-image/

```

Each tool includes:

- Description
- Usage
- Limitations
- Privacy notes
- Related articles
- Frequently asked questions

---

# Search Architecture

Search is fully static.

Technology

- Pagefind

Search indexes should include:

- Articles
- Tools
- Guides
- Categories
- Tags

Search must work instantly without requiring a backend.

---

# Rendering Strategy

Preferred order:

1. Static Generation
2. Incremental Static Regeneration (if needed)
3. Dynamic Rendering (only when required)

Avoid unnecessary client-side rendering.

---

# Performance Strategy

Performance is considered a core feature.

Goals

- Lighthouse 95+
- Fast First Contentful Paint
- Excellent Core Web Vitals
- Minimal JavaScript
- Optimized images
- Lazy loading
- Efficient caching

Performance should never be sacrificed for visual effects.

---

# Scalability

The architecture should support:

- Thousands of articles
- Hundreds of tools
- Multiple languages
- AI-powered features
- Community contributions
- Browser extensions
- Mobile applications
- Public APIs

No architectural rewrite should be required as the project grows.

---

# Security

The application should:

- Never expose secrets
- Validate user input
- Escape rendered content
- Keep dependencies updated
- Follow secure defaults

Security is everyone's responsibility.

---

# Accessibility

Minimum standard:

WCAG AA

Requirements

- Semantic HTML
- Keyboard navigation
- Screen reader compatibility
- Focus indicators
- High contrast
- Reduced motion support

Accessibility is not optional.

---

# SEO

Every page should include:

- Metadata
- Open Graph
- Twitter Cards
- Canonical URL
- JSON-LD
- Structured Data
- Sitemap
- RSS

SEO should be built into the architecture—not added later.

---

# Future Expansion

Potential future modules include:

- AI Assistant
- Browser Extension
- Mobile App
- Community Contributions
- Learning Dashboard
- Certifications
- Threat Intelligence Feeds
- Public API
- Interactive Labs
- Digital Safety Assessments

The architecture should support these additions without significant restructuring.

---

# Design Philosophy

The platform should feel:

- Professional
- Modern
- Trustworthy
- Minimal
- Fast

Avoid:

- Hacker clichés
- Matrix aesthetics
- Excessive animations
- Visual clutter

Design should build confidence and encourage exploration.

---

# Summary

The ASOSINT architecture is designed for longevity.

Every decision should support:

- Simplicity
- Performance
- Accessibility
- Reusability
- Scalability
- Maintainability

Build once.

Scale forever.

Never rewrite the foundation.