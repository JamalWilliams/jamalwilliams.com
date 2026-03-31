# 🏗️ Build Plan: jamalwilliams.com
**The Sovereign Architect’s Digital Foundation**

This document defines the automated, content-driven workflow for building and maintaining `jamalwilliams.com` using Astro 5.0, the Antigravity theme, and the Gemini CLI (cmux).

## 1. The Content-First Workflow
We are moving from "Static Pages" to a "Content Layer" architecture. This allows you to manage everything via Markdown in Obsidian.

### **The Loop:**
1.  **Draft (Obsidian):** You write your manifesto, blog posts, and bio in `Vault/Projects/Personal Brand/`.
2.  **Sync (Gemini CLI):** I (Gemini CLI) sync those files into `src/content/`.
3.  **Build (Astro):** Astro processes the Markdown, applies the Antigravity theme, and generates the static site.
4.  **Push (Git):** We push the changes to GitHub.
5.  **Deploy (Cloudflare):** Cloudflare Pages automatically picks up the push, builds the site, and deploys it live.

---

## 2. Tooling: When to use What?

| Tool | Role | Purpose |
| :--- | :--- | :--- |
| **Obsidian (Vault)** | **The Brain** | Drafting strategy, content, and long-form blog posts. |
| **Gemini CLI (cmux)** | **The Orchestrator** | Syncing files, batching edits, and managing deployments. |
| **Antigravity (Astro)** | **The Architecture** | The visual theme, layouts, and front-end code. |
| **Cloudflare Pages** | **The Foundation** | Hosting, staging previews, and edge delivery. |

---

## 3. Action Plan: Transitioning to Content Layer

### **Phase 1: Setup Content Collections**
- [ ] Initialize `src/content/config.ts` to define schemas for `posts`, `pages`, and `manifesto`.
- [ ] Create `src/content/posts/`, `src/content/pages/`, etc.
- [ ] Move the "Artifacts" from the Vault into these folders.

### **Phase 2: Visual Integration (Antigravity)**
- [ ] Update `src/styles/global.css` with your new color palette (#14213D, #FCDE11).
- [ ] Refactor `src/pages/index.astro` to pull the "Three Doors" copy from the Content Layer instead of being hardcoded.
- [ ] Refactor `src/pages/manifesto.astro` to pull from `src/content/manifesto.md`.

### **Phase 3: Deployment & Staging**
- [ ] Connect the GitHub repository to Cloudflare Pages.
- [ ] **Staging:** Every non-main branch push (e.g., `feat/new-content`) creates a unique "Preview URL" automatically. This is your staging environment.
- [ ] **Production:** Merging to the `main` branch deploys to `jamalwilliams.com`.

---

## 4. Operational Safety: Staying in the "Free Tier"
To avoid hitting paid AI tiers or overwhelming the context window:
1.  **Batching:** I will perform edits in batches (e.g., "Apply all color changes to global.css and layouts in one turn").
2.  **Sub-Agents:** Use the `generalist` sub-agent for heavy lifting (like generating entire pages or migrating files) to keep our main conversation clean.
3.  **Plan Mode:** Always use `enter_plan_mode` for architectural changes before execution.

---

## 5. Sync Script (Concept)
I will provide a simple bash command/alias you can run in cmux:
`jamal sync-content` -> This will `rsync` your `Vault/Projects/Personal Brand/` Markdown files directly into the Astro `src/content/` directory.
