---
seso_era_global: SESO Neural Architecture v2.0
seso_era_tech: Wiki Architecture
seso_links:
- '[[Vault/system/wiki/philosophies/SESO_Wiki_Concept.md]]'
- '[[Vault/system/wiki/WIKI_PROTOCOL.md]]'
- '[[code/gemini-skill-and-agent-repo/skills/skill-reflector/SKILL.md]]'
- '[[Vault/system/wiki/entities/Jamal_Williams.md]]'
seso_tags:
- topic/productivity
- topic/systems-design
- topic/ai-agents
- tool/obsidian
- tool/gemini-cli
---
# 🧠 The Sovereign Wiki: Combatting Context Creep with Gemini CLI & Obsidian

In the world of AI-assisted engineering, there is a silent killer of productivity: **Context Creep.**

You start a session with a clear goal. You and your agent are in sync. But as the hours pass and the terminal history grows, the "wall of text" begins to close in. The agent starts to hallucinate. It forgets the architectural decisions you made three hours ago. It loses the thread of the "Why" behind the "How."

This is the limit of **Working Memory**. And to solve it, I’ve built a **Long-Term Memory** system inspired by Andrej Karpathy's "Wiki" idea, powered by the Gemini CLI and my Obsidian Vault.

---

### The Problem: The Hallucination of Scale

Most people treat AI chat as a disposable stream. They ask a question, get an answer, and move on. But when you are building complex systems—like my multi-brand automation engine or a 30-year legacy vault—a single session isn't enough.

As the context window fills up, the agent becomes overwhelmed by the noise of its own previous thoughts. This is "Context Creep." To stay sharp, the agent needs a way to "forget" the noise while "remembering" the signal.

### The Solution: The "Compiled Memory" Pattern

Inspired by Andrej Karpathy's Wiki concept and recent "Memory Compiler" architectures, I’ve evolved this into a **Compiled Memory** protocol.

The secret isn't just writing things down; it’s the **separation of Capture and Compilation.**

#### 1. The Staging Area (Capture)
Instead of dumping every chat session directly into my permanent Wiki—which would eventually lead to "Knowledge Rot"—my system uses a **Staging Area**. During the `/reflect` phase, raw insights, technical "gotchas," and architectural pivots are extracted and staged. This is the "Working Memory" of the system.

#### 2. The Compilation Pass (Refinement)
Periodically, a **Compilation Script** runs. It analyzes the staged logs and "compiles" them into the permanent Wiki. It merges duplicate insights, updates existing "Concept" articles, and prunes obsolete information. This ensures the Wiki remains a high-signal "Source of Truth" rather than a graveyard of old chats.

#### 3. Index-Guided Retrieval (The No-RAG Edge)
While the tech world is obsessed with RAG (Retrieval-Augmented Generation) and "fuzzy" vector searches, I’ve found that for a personal knowledge base, **Index-Guided Retrieval** is superior.

At the start of a session, my agent reads a structured `_index.md`—a literal map of my brain. Because the index is high-signal, the agent can explicitly request the exact "Concept" or "Entity" files it needs. This eliminates the "hallucinations of scale" that occur when an AI tries to guess what you might need from a massive, unstructured database.

---

### The Engine: The `/reflect` Workflow

The bridge between the chaotic "Execution" phase and the structured "Wiki" is the **Reflection Skill**.

The bridge between the chaotic "Execution" phase and the structured "Wiki" is the **Reflection Skill**.

When a session concludes, I run the command `/reflect`. This isn't just a summary; it’s a mandatory **Intelligence Sink**. The agent performs five critical tasks:

1.  **Wisdom Extraction:** It identifies new technical workarounds and saves them to my `Engineering_Vault.md`.
2.  **Entity Mapping:** It creates or updates Wiki articles for new tools, people, or brands encountered.
3.  **Pattern Recognition:** It codifies recurring workflows into "Expert Articles."
4.  **Task Syncing:** It updates the **Master Project List** and "Next Steps" so I never lose momentum.
5.  **Context Cleanup:** It archives the old chat and clears the slate for the next session.

### Implementation: The SESO Memory Engine

This isn't just theory; it’s the architecture I’m running right now. My system uses a trio of custom scripts to manage this lifecycle:

*   **The Stager (`skill-reflector`):** A Gemini CLI skill that extracts "High-Signal" insights from a session and writes them to a `_staging/` folder.
*   **The Sink (`sink_protocol.cjs`):** A Node.js cleaner that archives old chat logs once they are staged, physically "clearing the brain" of context creep.
*   **The Compiler (`compile_wiki.py`):** A Python engine that intelligently merges staged insights into my permanent Wiki entities and patterns, ensuring my "Long-Term Memory" is always up to date.

---

### Why It Works: Digital Sovereignty by Design

This system ensures that I am the **Sovereign Architect** of my information. I don't rely on the "luck" of an AI's context window. I rely on a system that I own, in a vault that I control.

By moving technical details and strategic history into the Wiki, I keep my active sessions lean, fast, and remarkably accurate. I’ve effectively given my AI agent a "pre-frontal cortex" (the CLI context) and a "hippocampus" (the Obsidian Wiki).

### The Result: A Self-Evolving Life

My life isn't just a series of tasks anymore; it’s a growing body of work. Every bug fixed becomes a permanent technical mandate. Every brand pivot becomes a documented philosophy.

We aren't just using AI to do work. We are using AI to build a **Second Brain** that actually knows how to think like us.

**Reflect. Absorb. Evolve. This is how we build the future.**
