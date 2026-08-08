# ASOSINT Coding Standards

> Last Updated: August 2026

---

# Purpose

This document defines the coding standards for the ASOSINT codebase.

Every contributor should follow these standards to keep the project:

- Readable
- Maintainable
- Scalable
- Consistent
- Performant

Code should always optimize for long-term maintainability over short-term convenience.

---

# Core Principles

Every contribution should follow these principles.

## Simplicity

Choose the simplest solution that solves the problem.

Avoid unnecessary complexity.

---

## Readability

Code is read more often than it is written.

Prioritize readability over cleverness.

---

## Reusability

Never duplicate functionality.

If something is used more than once, consider extracting it into a reusable component or utility.

---

## Consistency

Follow existing project patterns.

Don't introduce a new coding style for a single feature.

---

## Performance

Performance is a feature.

Avoid unnecessary rendering.

Avoid unnecessary JavaScript.

Optimize before adding dependencies.

---

# Language

All application code must use:

TypeScript

Do not introduce JavaScript files unless required by tooling.

---

# TypeScript

Avoid:

- any
- @ts-ignore
- unnecessary type assertions

Prefer:

- interfaces
- utility types
- discriminated unions
- type inference

Always provide explicit types for exported APIs.

---

# React

Use:

Functional Components

Hooks

Server Components

Avoid:

Class Components

Legacy React APIs

---

# Server Components

Server Components are the default.

Only use Client Components when required for:

- State
- Event handlers
- Browser APIs
- Animations
- Interactive UI

Always ask:

"Can this remain a Server Component?"

---

# Component Structure

Every component should have a single responsibility.

Avoid components that do too many things.

Large components should be split into smaller reusable components.

---

# Component Naming

Good

Button

ToolCard

ArticleCard

LanguageSwitcher

SearchDialog

Bad

button2

newButton

Component

Temp

---

# File Naming

Use kebab-case.

Examples

tool-card.tsx

article-layout.tsx

language-switcher.tsx

Avoid:

ToolCard.tsx

NEWFILE.tsx

temp.tsx

---

# Folder Structure

Group files by feature.

Avoid deeply nested folders.

Keep related files together.

---

# Imports

Order imports consistently.

1. React / Next.js

2. External packages

3. Internal libraries

4. Components

5. Types

6. Styles

Avoid circular dependencies.

---

# Styling

Use:

Tailwind CSS

CSS Variables

Design Tokens

Avoid:

Inline styles

Random spacing

Hardcoded colors

---

# State Management

Prefer:

Server State

URL State

Component State

Only introduce global state when truly necessary.

Avoid unnecessary context providers.

---

# Data Fetching

Prefer:

Server Components

Static Generation

Cached Requests

Avoid client-side fetching unless interaction requires it.

---

# Error Handling

Handle expected errors gracefully.

Show useful error messages.

Never expose sensitive information.

Log meaningful errors during development.

---

# Accessibility

Every component should support:

Keyboard navigation

Screen readers

Focus management

Accessible labels

Semantic HTML

Accessibility is required—not optional.

---

# Performance

Prefer:

Static rendering

Lazy loading

Code splitting

Optimized images

Memoization only when profiling proves it is needed.

Avoid premature optimization.

---

# Dependencies

Before adding a dependency ask:

Can we build this ourselves?

Is the dependency actively maintained?

Does it increase bundle size significantly?

Does Next.js already provide this feature?

Every dependency should have a clear justification.

---

# Security

Never expose:

Secrets

API keys

Environment variables

Private endpoints

Always validate user input.

Escape rendered content.

Follow secure defaults.

---

# Content

Keep business logic separate from content.

Never hardcode article content inside components.

Content belongs in MDX.

---

# Comments

Write comments only when they explain *why*.

Avoid comments that simply describe what the code already says.

Bad

// Increment counter

Good

// Prevent duplicate submissions during slow network requests

---

# Functions

Functions should do one thing.

Prefer small functions over large ones.

Use descriptive names.

Examples

calculateReadingTime()

generateMetadata()

getRelatedArticles()

Avoid

run()

process()

doThing()

---

# Constants

Avoid magic numbers.

Extract reusable values into constants.

Example

MAX_READING_TIME

DEFAULT_PAGE_SIZE

SUPPORTED_LANGUAGES

---

# Environment Variables

All environment variables should:

Use uppercase

Be documented

Be validated

Never be committed to Git.

---

# Git

Write meaningful commit messages.

Examples

feat: add bilingual routing

fix: improve metadata generation

docs: update architecture

refactor: simplify search indexing

Avoid

update

fix stuff

changes

---

# Pull Requests

Every Pull Request should:

Have a clear description

Reference related issues

Pass linting

Pass type checking

Build successfully

---

# Documentation

Whenever architecture changes:

Update documentation.

Documentation is part of the codebase.

---

# Testing

Critical features should be tested.

Prefer meaningful tests over excessive test coverage.

Focus on user behavior.

---

# Before Committing

Ask yourself:

Is this reusable?

Is this accessible?

Is this performant?

Is this documented?

Is this localized?

Does this follow the design system?

---

# Final Principle

Write code that someone unfamiliar with the project can understand six months from now.

Optimize for future contributors—not just today's implementation.