# Contributing to ASOSINT

> Thank you for your interest in contributing to ASOSINT.

ASOSINT is an open-source Digital Trust platform dedicated to helping people stay safe online through cybersecurity awareness, OSINT education, AI literacy, and practical verification tools.

Every contribution—big or small—helps make the internet a safer place.

---

# Our Mission

Our mission is simple.

> **Verify Before You Trust.**

We believe everyone deserves access to trustworthy, high-quality educational resources and privacy-respecting tools.

---

# Ways to Contribute

You don't need to be a software engineer to contribute.

We welcome contributions in:

- Development
- UI/UX Design
- Documentation
- Content Writing
- Translation
- Accessibility
- Testing
- Security Reviews
- Bug Reports
- Feature Requests
- Performance Improvements

---

# Before You Start

Please read these documents first:

- PROJECT_CONTEXT.md
- AGENTS.md
- CLAUDE.md
- docs/architecture.md
- docs/design-system.md
- docs/coding-standards.md
- docs/content-guidelines.md

These documents explain how the project is organized and the standards we follow.

---

# Development Setup

Clone the repository.

```bash
git clone https://github.com/your-org/asosint.git
cd asosint
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

# Development Principles

Every contribution should aim to make ASOSINT:

- Faster
- Simpler
- More accessible
- More maintainable
- Easier to understand

Before writing new code, ask:

- Can this be reused?
- Does this follow the design system?
- Does this support localization?
- Does this improve the user experience?

---

# Branch Naming

Use descriptive branch names.

Examples

```
feature/password-generator

feature/deepfake-guide

fix/mobile-navigation

fix/search-index

docs/update-roadmap

refactor/article-layout
```

Avoid generic names like:

```
new

test

update

temp
```

---

# Commit Messages

Follow conventional commits.

Examples

```text
feat: add password strength checker

fix: improve mobile navigation

docs: update content guidelines

refactor: simplify search indexing

style: improve button spacing

perf: optimize homepage images
```

---

# Pull Requests

Every Pull Request should:

- Have a clear title
- Describe what changed
- Explain why the change was made
- Pass linting
- Pass type checking
- Build successfully

Keep Pull Requests focused on one topic whenever possible.

---

# Coding Standards

Follow the project's coding standards.

Highlights:

- TypeScript only
- Server Components by default
- Tailwind CSS
- Reusable components
- Semantic HTML
- Accessible UI

See:

`docs/coding-standards.md`

---

# Design

All UI changes should follow:

`docs/design-system.md`

Avoid introducing inconsistent colors, spacing, or component styles.

---

# Content

Content should:

- Be factual
- Be easy to understand
- Avoid fearmongering
- Cite reliable sources
- Include practical examples

See:

`docs/content-guidelines.md`

---

# Translation

English and Assamese are first-class languages.

When adding new content:

- Add both languages whenever possible.
- If translation is not yet available, clearly mark it as pending.

Community translators are always welcome.

---

# Accessibility

Accessibility is required.

Every contribution should support:

- Keyboard navigation
- Screen readers
- Visible focus states
- Sufficient color contrast
- Semantic HTML

---

# Performance

Before introducing new dependencies, ask:

- Is this really necessary?
- Can we achieve the same result with existing tools?
- Does it increase bundle size?

Performance is a feature.

---

# Security

Never commit:

- API keys
- Secrets
- Passwords
- Tokens
- Private credentials

Report security issues responsibly.

---

# Reporting Bugs

When opening a bug report, include:

- Expected behavior
- Actual behavior
- Steps to reproduce
- Screenshots (if helpful)
- Browser and operating system

---

# Suggesting Features

Before opening a feature request:

- Check existing issues.
- Explain the problem.
- Describe your proposed solution.
- Explain how it benefits users.

---

# Code Review

Reviews are collaborative.

Feedback is intended to improve the project—not criticize contributors.

Be respectful, constructive, and open to discussion.

---

# Community Values

We strive to build a welcoming and inclusive community.

Be:

- Respectful
- Helpful
- Patient
- Honest
- Open-minded

Harassment, discrimination, spam, and abusive behavior will not be tolerated.

---

# Recognition

Every contributor matters.

Whether you fix a typo, translate an article, improve accessibility, or build a major feature—you are helping make the internet safer for everyone.

Thank you for contributing to ASOSINT.

---

# License

Unless otherwise stated, contributions are made under the project's open-source license.

By contributing, you agree that your work may be distributed under that license.

---

# Final Principle

Build openly.

Learn continuously.

Help others.

And always...

> **Verify Before You Trust.**