# Refraim.ts — Re+Frame: a re-framing of fullstack development

> While Rails and Next.js gained weight from abstraction,
> **Refraim moves like an athlete — lean, type-safe, and built for the edge.**

> ✨ A fullstack experience where frontend and backend move as one — like a living body.

---

## ✨ Philosophy

* Fullstack isn't about gluing tools — it's about flowing structure.
* Every request passes through a typed contract: UI → API → DB.
* Move fast not by guessing, but by living inside a structure that thinks for you.

> 💡 Built-in Auth, DB, Job system — tested in real-world SaaS with <300ms global response.

---

## ⚡ Quick Start

```bash
npx refraim new my-app
cd my-app
npx refraim dev
```

Then visit `http://localhost:3000` — you'll see a working, typed, guarded CRUD app already alive.

---

## 🔍 Structure Example

### Directory Layout

```text
.
├── schema/
│   └── post.schema.ts
├── service/
│   └── post.service.ts
├── controller/
│   └── post.controller.ts
├── pages/
│   └── post/
│       ├── index.page.tsx
│       ├── index.meta.ts
│       └── index.loader.ts
└── jobs/
    └── daily-cleanup.job.ts
```

### Code Flow

```ts
// schema/post.schema.ts
export const Post = z.object({
  id: z.string(),
  title: z.string(),
})

// controller/post.controller.ts
export default defineHandler({
  method: 'get',
  path: '/posts',
  output: z.array(Post),
  handler: async () => fetchPosts(),
})

// pages/post/index.page.tsx
const { posts } = usePageData<{ posts: Post[] }>()
```

> ✨ One contract. Multiple layers. No inconsistency.

---

## 🔗 CLI Example

```bash
$ refraim make:feature invoice

️ Generating feature: invoice...

📋 Defining contract...            [■■□□□□□□□]
⚙️  Wiring service logic...        [■■■■■□□□□]
🛁 Creating API endpoint...        [■■■■■■■□□]
🎨 Rendering reactive UI...        [■■■■■■■■□]
🥒 Adding job handler...           [■■■■■■■■■]

📦 Feature 'invoice' ready. All layers are synced.

🌟 Your hands wrote code — but it was structure that came alive.
```

> 📹 *Watch it in action → coming soon*

---

## 🌍 Deployment

```bash
npx refraim deploy
```

* Zero-config deploy to Cloudflare Workers + Pages
* Includes D1 binding and `wrangler.toml` auto-setup
* Result: `https://your-app.pages.dev` within seconds

> ✨ Deploy structure. Not just code.

---

## 🧠 Stack Philosophy

| Layer                   | Included | Reason                                       |
| ----------------------- | -------- | -------------------------------------------- |
| Schema (Zod)            | ✅        | Contract across layers                       |
| Controller              | ✅        | Request entrypoint with typed I/O            |
| Service                 | ✅        | Business logic isolation                     |
| Page/Meta/Loader        | ✅        | UI bound to structure                        |
| Auth (Lucia)            | ✅        | Guarding via meta.guard                      |
| DB (Drizzle + D1)       | ✅        | Type-safe + Edge-native                      |
| Job (Cron)              | ✅        | Time-based background logic                  |
| GraphQL / tRPC / Prisma | ❌        | Incompatible with structure-based philosophy |

> ✨ You don't add plugins. You follow a structure that already works.

---

## 🌟 Who is Refraim For?

| Type                        | Why it matters                                             |
| --------------------------- | ---------------------------------------------------------- |
| 👩‍💼 Individual Developers | Get 0→1 SaaS running with contracts & structure in minutes |
| 👥 Small Teams              | Escape chaos by building on shared, predictable rules      |
| 🧬 OSS Architects           | Build with enforceable design principles, not abstraction  |

> ✨ Refraim is for anyone who believes code should think with you.

---

## 📆 License

MIT License © 2025 Refraim Authors
