# Architecture Decisions

- **Framework**: Next.js App Router for full-stack React capabilities, utilizing server components and server actions.
- **Backend/API API Routes**: Handled within Next.js `/api` routes for simplicity, interacting with Supabase securely.
- **Database & Auth**: Supabase replaces traditional Prisma & Fastify. It handles auth, row-level security, and raw PostgreSQL queries.
- **AI Packages**: Separated into `packages/ai` to ensure reusability and isolated logic for prompts and LangChain/OpenAI integrations.
- **Deployment**: Vercel for seamless Next.js delivery.
