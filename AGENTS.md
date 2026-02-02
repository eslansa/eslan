# AGENTS.md - Coding Guidelines for Agents

This file provides essential information for AI coding agents working on this repository.

## Project Overview

A personal blog built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS. Features dark mode, animations with Framer Motion, and static site generation.

## Build/Lint/Test Commands

```bash
# Development
npm run dev              # Start development server

# Build
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint (uses next/core-web-vitals)
```

**Note:** No test framework is currently installed. To add tests, install Jest, Vitest, or Playwright first.

## Code Style Guidelines

### TypeScript & Types
- Enable strict TypeScript mode (already configured)
- Use explicit types for function parameters and return values
- Use interfaces for object shapes (e.g., `interface Props`, `interface Post`)
- Define shared types in `src/utils/interface.ts`
- Prefer `type` for unions/intersections, `interface` for object shapes

### Naming Conventions
- **Components**: PascalCase (e.g., `PostComponent.tsx`, `Header.tsx`)
- **Hooks**: camelCase with `use` prefix (project uses functions, not React hooks pattern)
- **Utilities**: camelCase (e.g., `fetchPosts.ts`)
- **Interfaces**: PascalCase (e.g., `Post`, `Tag`, `Props`)
- **Server Actions**: camelCase, use `'use server'` directive

### File Structure
```
src/
  app/                   # Next.js App Router
    (admin)/             # Admin route group (Sanity Studio)
    (client)/            # Client route group (blog pages)
  components/            # React components
  hooks/                 # Server actions (data fetching)
  utils/                 # Utilities, types, and providers
sanity/                  # Sanity CMS configuration
```

### Imports & Paths
- Use path alias `@/` for all imports from `src/`
- Example: `import { Post } from '@/utils/interface'`
- Group imports: 1) React/Next, 2) Third-party, 3) Local
- Use single quotes for strings

### Component Patterns
- Use functional components with default exports
- Define Props interface at top of file
- Destructure props in parameter
- Example:
```typescript
interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  // component logic
};

export default PostComponent;
```

### Server Actions (Data Fetching)
- Place in `src/hooks/` directory (legacy naming, actually server actions)
- Use `'use server'` directive at top of file
- Use Sanity client from `sanity/lib/client`
- Name functions descriptively (e.g., `fetchPosts`, `fetchPostSlug`)

### Styling
- Use Tailwind CSS for all styling
- Dark mode enabled with `dark:` prefix
- Color scheme: amber-50 (light bg), slate-950 (dark bg), red-500 (accent)
- Use `@tailwindcss/typography` plugin for prose content

### Error Handling
- Use Next.js error boundaries: `error.tsx`, `global-error.tsx`
- Use `not-found.tsx` for 404 pages
- Handle optional chaining for CMS data (e.g., `post?.slug?.current`)

### Environment Variables
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Reference via `process.env.NEXT_PUBLIC_SANITY_DATASET`

### Git
- Do not commit `.env` files
- Do not commit `node_modules` or `.next` directories
- Keep commits focused and descriptive
