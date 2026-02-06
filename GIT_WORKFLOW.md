# 📦 Git Workflow Guide for DSA Journey

## 🎯 Initial Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New Repository"**
3. Name it: `DSA-JavaScript` (or your preferred name)
4. Description: "My Data Structures & Algorithms journey in JavaScript"
5. Choose **Public** (to showcase your progress!)
6. **DON'T** initialize with README (we already have one)
7. Click **Create Repository**

### Step 2: Initialize Local Repository

```bash
# Navigate to your project folder
cd /path/to/DSA-JavaScript

# Initialize git
git init

# Create .gitignore file
echo "node_modules/
.DS_Store
*.log
.vscode/settings.json
temp/" > .gitignore

# Stage all files
git add .

# First commit
git commit -m "🎉 Initial commit: DSA learning setup"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/DSA-JavaScript.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📅 Daily Workflow

### When You Solve a New Problem

```bash
# 1. Create problem using the script
node create-problem.js

# 2. Work on the problem
# ... write your solution ...

# 3. Test your solution
# ... test with different inputs ...

# 4. Update README.md in problem folder
# ... document your learnings ...

# 5. Stage and commit
git add .
git commit -m "✅ Solved: [Problem Name] - [Topic]"

# Example:
# git commit -m "✅ Solved: Two Sum - Arrays"

# 6. Push to GitHub
git push
```

### Commit Message Guidelines

Use these emojis and formats for clear history:

```bash
# When you solve a problem
git commit -m "✅ Solved: Problem Name - Topic"

# When you add notes/documentation
git commit -m "📝 Updated: Problem Name - Added complexity analysis"

# When you optimize a solution
git commit -m "⚡ Optimized: Problem Name - Improved to O(n)"

# When you fix a bug
git commit -m "🐛 Fixed: Problem Name - Edge case handling"

# When you add resources
git commit -m "📚 Added: New learning resources"

# When you update main README
git commit -m "📊 Updated: Progress tracker"

# Weekly review commits
git commit -m "🔄 Weekly Review: Week 1 - Arrays completed"
```

## 🔄 Weekly Update Routine

Every Sunday (or your preferred day):

```bash
# 1. Update main README.md
# - Update progress tracker
# - Update statistics
# - Add weekly reflections

# 2. Review and update topic READMEs
# - Update problem counts
# - Add key learnings

# 3. Commit everything
git add .
git commit -m "📊 Weekly Update: Week X Summary"
git push
```

## 📊 Update Progress Tracker

When you solve a problem, update the main `README.md`:

```markdown
## 📋 Problems Log

| # | Problem | Difficulty | Topic | Date | Solution |
|---|---------|-----------|-------|------|----------|
| 1 | Two Sum | Easy | Arrays | 06-02-2026 | [Link](./Arrays/001-two-sum/) |
| 2 | Valid Anagram | Easy | Strings | 07-02-2026 | [Link](./Strings/002-valid-anagram/) |
```

## 🌿 Branching Strategy (Optional)

For larger problems or experiments:

```bash
# Create a new branch
git checkout -b feature/dynamic-programming

# Work on it...

# Commit changes
git add .
git commit -m "🚧 WIP: DP problems"

# Switch back to main
git checkout main

# Merge when ready
git merge feature/dynamic-programming

# Delete the branch
git branch -d feature/dynamic-programming
```

## 🔍 Useful Git Commands

### Check Status
```bash
git status              # See what's changed
git log --oneline       # View commit history
git log --graph --all   # Visual commit tree
```

### View Changes
```bash
git diff                # See unstaged changes
git diff --staged       # See staged changes
git diff HEAD~1         # Compare with last commit
```

### Undo Changes
```bash
# Unstage a file
git restore --staged <file>

# Discard changes in working directory
git restore <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Update from Remote
```bash
git pull origin main    # Get latest changes
```

## 📈 GitHub Profile Enhancement

### 1. Pin Repository
- Go to your GitHub profile
- Click "Customize your pins"
- Select `DSA-JavaScript` to showcase it

### 2. Add Repository Topics
Add these topics to your repo for discoverability:
- `data-structures`
- `algorithms`
- `javascript`
- `dsa`
- `interview-preparation`
- `coding-practice`
- `leetcode`

### 3. Enable GitHub Pages (Optional)
Turn your README into a website:
- Settings → Pages
- Source: Deploy from branch
- Branch: main, /root
- Your portfolio will be at: `username.github.io/DSA-JavaScript`

## 🏆 Streak Tracking

To maintain consistency:

```bash
# Add to your daily routine
# Even if you don't solve a problem, update notes or refactor

# Small daily commit examples:
git commit -m "📝 Added notes on time complexity"
git commit -m "🔄 Refactored: Two Sum solution"
git commit -m "📚 Added learning resources"
```

## 📅 Sample Commit Timeline

```
Week 1:
Mon: ✅ Solved: Two Sum - Arrays
Tue: ✅ Solved: Best Time to Buy Stock - Arrays
Wed: 📝 Updated: Added complexity analysis
Thu: ✅ Solved: Contains Duplicate - Arrays
Fri: ⚡ Optimized: Two Sum using HashMap
Sat: ✅ Solved: Product of Array Except Self
Sun: 📊 Weekly Update: Arrays Week Summary

Week 2:
Mon: ✅ Solved: Valid Anagram - Strings
...
```

## 🚨 Common Git Issues & Solutions

### Issue: Forgot to pull before pushing
```bash
git pull --rebase origin main
git push
```

### Issue: Want to change last commit message
```bash
git commit --amend -m "New message"
git push --force  # Only if you haven't shared it yet!
```

### Issue: Accidentally committed large files
```bash
# Remove from last commit
git rm --cached large-file.ext
git commit --amend --no-edit

# Add to .gitignore
echo "large-file.ext" >> .gitignore
```

### Issue: Want to sync fork (if you forked a template)
```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git merge upstream/main
```

## 📝 .gitignore Template

Create `.gitignore` in your root directory:

```
# Dependencies
node_modules/

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/settings.json
.idea/

# Logs
*.log
npm-debug.log*

# Temporary files
temp/
*.tmp

# Output files (optional - uncomment if you don't want to commit outputs)
# */output.txt
```

## 🎯 Pro Tips

1. **Commit Often:** Small, frequent commits are better than large ones
2. **Descriptive Messages:** Future you will thank present you
3. **Use Branches:** For experimental solutions or major refactoring
4. **GitHub Actions:** Automate testing (advanced)
5. **GitHub Stars:** Star repositories with good DSA resources

## 📱 GitHub Mobile App

Download the GitHub app to:
- Track your streak on the go
- Review commits
- Update README files
- Stay motivated by seeing your green contribution graph!

---

## 🚀 Quick Reference Card

```bash
# Daily Workflow
node create-problem.js
# ... solve problem ...
git add .
git commit -m "✅ Solved: [Problem] - [Topic]"
git push

# Weekly Update
# ... update READMEs ...
git add .
git commit -m "📊 Weekly Update: Week X"
git push

# Check Progress
git log --oneline
git status
```

---

Happy Coding & Committing! 🎉

Remember: **Consistency > Perfection**
