# Autonomous Git Workflow (Worktree-Based)

## Branch Naming

```
story/TASK-123-short-kebab-description
fix/TASK-123-what-it-fixes
chore/TASK-424-description
release/v1.x.x
```

Always prefix with the task type and include the TASK ID.

## Worktree Setup

Working directly in the repo dir keeps `git checkout` overhead. Use worktrees for parallel branches:

```bash
# From the repo root, create a worktree for a task
git worktree add ../_worktrees/TASK-123 story/TASK-123-short-description

# Work is done in ../_worktrees/TASK-123/
cd ../_worktrees/TASK-123
```

## Daily Workflow

```bash
# Sync base branch
cd /Users/jamalwilliams/code/jamalwilliams.com
git checkout master
git pull origin master

# Rebase your feature branch onto latest master
cd ../_worktrees/TASK-123
git fetch origin master
git rebase origin/master

# Validate
npm run build
npx vitest run

# Commit
git add -A
git commit -m "TASK-123: short description"

# Push
git push origin story/TASK-123-short-description
```

## Recovery Procedures

### Detached HEAD in worktree
```bash
git worktree list                    # identify the worktree
cd /path/to/worktree
git checkout -b story/TASK-123-fix   # create branch from current commit
git push -u origin story/TASK-123-fix
```

### Merge conflict during rebase
```bash
# Resolve files, then:
git add resolved-file.ts
git rebase --continue
# If stuck: git rebase --abort
```

### Lost work / wrong branch
```bash
git reflog                           # find the commit hash
git checkout -b recovery-branch HASH # recover
```

## Cleanup

After a branch is merged or abandoned:

```bash
# Remove the worktree
git worktree remove ../_worktrees/TASK-123

# Prune stale worktree metadata
git worktree prune

# Delete remote branch
git push origin --delete story/TASK-123-short-description

# Delete local branch
git branch -D story/TASK-123-short-description
```

## Rules

- Never commit directly to `master` or `staging`
- Always rebase onto `origin/master` before pushing
- One worktree per task; clean up after merge
- Run validation commands from VALIDATION.md before any PR
- Squash commits if the branch history is noisy (but preserve TASK ID in the final message)
