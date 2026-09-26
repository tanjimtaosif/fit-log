# 💪 FitLog — Workout Library & Plan Builder

FitLog is a dark, no-nonsense gym companion. Browse a library of twelve lifts, open any one for its specs and step-by-step instructions, lock up to five into today's plan, save others for later, and watch your minutes and calories add up as you train.

- **Live site:** _add your deployment link here_
- **Repository:** https://github.com/tanjimtaosif/fit-log

---

## ✨ Key Features

1. **Workout library from a live API** — twelve workout cards in a responsive 3×4 grid, fetched on the server and cached, with a skeleton loading animation while data streams in.
2. **Detailed workout pages** — a two-column layout with the illustration, muscle-group tags, a key specs panel (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions.
3. **Today's plan with live metrics** — add up to five lifts to today's plan; the Exercises, Minutes and Calories totals and the navbar badge counters update instantly.
4. **Save for later** — keep workouts in a separate Saved list, shown in its own tab on the My Plan page.
5. **Mark as done & remove** — tick off finished lifts or remove them, with a toast notification confirming every action.
6. **Sort and search** — sort the plan by duration, calories or rating, and search the library or your lists by workout name or muscle-group tag.
7. **Persistent across reloads** — your plan and saved lists are stored in `localStorage` and stay in sync across browser tabs.
8. **Fully responsive** — designed for mobile, tablet and desktop, with dedicated loading, empty, error and 404 states.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) (App Router) | Framework, routing, server rendering and data caching |
| [React 19](https://react.dev/) | UI components and state |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the codebase |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling, design tokens and responsive layout |
| [React-Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [Lucide React](https://lucide.dev/) | Icons |
| `next/font` (Oswald & Inter) | Self-hosted display and body fonts |

## 🗺️ Pages

| Route | Description |
| --- | --- |
| `/` | Hero banner and the workout library |
| `/workouts/[id]` | Workout details with "Add to today's plan" and "Save for later" |
| `/my-plan` | Metrics summary plus Today's Plan and Saved tabs |
| Any other path | Custom 404 page |

## 🚀 Getting Started

**Prerequisites:** Node.js 20.9 or later.

```bash
git clone https://github.com/tanjimtaosif/fit-log.git
cd fit-log
npm install
cp .env.example .env.local
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint the project with ESLint |

## 🔐 Environment Variables

Both variables are server-only and optional — sensible defaults are used when they are not set.

| Variable | Default | Description |
| --- | --- | --- |
| `FITLOG_API_URL` | `https://api.api-store.workers.dev/api` | Base URL of the FitLog API |
| `FITLOG_API_REVALIDATE_SECONDS` | `3600` | How long API responses are cached before revalidating |

When deploying (e.g. to Vercel), add these under the project's environment variable settings.

## 🔌 API

| Endpoint | Returns |
| --- | --- |
| `GET /api/fitlog` | All workouts |
| `GET /api/fitlog/:id` | A single workout |

## 📁 Project Structure

```
src/
├── app/            # App Router pages, layout, loading, error and 404 files
├── components/     # Shared layout (navbar, footer) and UI components
├── config/         # Environment variables and API endpoints
├── constants/      # App-wide constants (plan limit, tabs, sort options)
├── features/       # Feature modules: home, workout-details, my-plan
├── hooks/          # Reusable React hooks
├── routes/         # Centralized route definitions
├── services/       # API requests
├── store/          # Persisted plan and saved-list store
├── types/          # TypeScript types
└── utils/          # Sorting, filtering and totals helpers
```

---

Built for **Assignment B14-A6**. The original assignment brief lives in [REQUIREMENTS.md](REQUIREMENTS.md).
