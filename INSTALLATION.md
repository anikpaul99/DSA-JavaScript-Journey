# 🎯 INSTALLATION INSTRUCTIONS

## 📦 What You're Getting

A complete DSA learning environment with:
- ✅ Automated problem folder generator
- ✅ VS Code integration
- ✅ Git/GitHub workflow
- ✅ Documentation templates
- ✅ Example problems
- ✅ Progress tracking system

## ⚡ Quick Install (Recommended)

### Option 1: Automated Setup (Easiest)

1. **Download all files** to a new folder called `DSA-JavaScript`

2. **Run the setup script:**
   ```bash
   cd DSA-JavaScript
   node setup.js
   ```

3. **Create your first problem:**
   ```bash
   node create-problem.js
   ```

4. **Done!** 🎉

---

### Option 2: Manual Setup

1. **Create project folder:**
   ```bash
   mkdir DSA-JavaScript
   cd DSA-JavaScript
   ```

2. **Place these files in your folder:**
   - `create-problem.js` ← Main script
   - `setup.js` ← One-time setup
   - `package.json` ← Project config
   - `README.md` ← Main documentation
   - `QUICK_START.md` ← Getting started guide
   - `VS_CODE_SETUP.md` ← Editor setup
   - `GIT_WORKFLOW.md` ← Git guide
   - `.gitignore` ← Git ignore rules

3. **Run setup:**
   ```bash
   node setup.js
   ```

---

## 📋 Prerequisites

### Required
- **Node.js** (v14 or higher)
  - Download: https://nodejs.org
  - Verify: `node --version`

- **VS Code** (or any editor)
  - Download: https://code.visualstudio.com

### Optional (but recommended)
- **Git**
  - Download: https://git-scm.com
  - Verify: `git --version`

- **GitHub Account**
  - Sign up: https://github.com

---

## 🗂️ Final Folder Structure

After setup, your folder will look like this:

```
DSA-JavaScript/
├── .vscode/
│   └── tasks.json              # VS Code run configuration
├── .gitignore                  # Git ignore file
├── package.json                # Project metadata
├── setup.js                    # One-time setup script
├── create-problem.js           # Problem generator ⭐
│
├── README.md                   # Main documentation
├── QUICK_START.md              # Quick guide
├── VS_CODE_SETUP.md            # Editor setup
├── GIT_WORKFLOW.md             # Git guide
│
├── EXAMPLE/                    # Example problem
│   └── Arrays/
│       └── 001-two-sum/
│           ├── solution.js
│           ├── README.md
│           ├── input.txt
│           └── output.txt
│
├── Arrays/                     # Your solutions go here
├── Strings/
├── LinkedLists/
├── Trees/
├── Graphs/
├── ... (and more topics)
```

---

## 🚀 First-Time Workflow

### Step 1: Run Setup (Once)
```bash
node setup.js
```

This creates:
- All topic folders
- VS Code configuration
- Git repository (if Git installed)

### Step 2: Create Your First Problem
```bash
node create-problem.js
```

You'll be asked:
```
Problem Number: 001
Problem Name: Two Sum
Difficulty: Easy
Topic: 1 (Arrays)
Problem Statement: Find two numbers that add to target
```

### Step 3: Open in VS Code
```bash
code .
```

### Step 4: Configure Split View
1. Open the problem folder
2. View → Editor Layout → Split Right
3. Drag `input.txt` to right panel
4. View → Editor Layout → Split Down (on right)
5. Drag `output.txt` to bottom right

Your screen:
```
┌──────────────┬──────────────┐
│              │  input.txt   │
│ solution.js  ├──────────────┤
│              │  output.txt  │
└──────────────┴──────────────┘
```

### Step 5: Write & Test
1. Write solution in `solution.js`
2. Add test input in `input.txt`
3. Press `Ctrl/Cmd + Shift + B` to run
4. Check `output.txt` for result

### Step 6: Document & Commit
1. Fill in `README.md` with your learnings
2. Update main `README.md` progress table
3. Commit to Git:
   ```bash
   git add .
   git commit -m "✅ Solved: Two Sum - Arrays"
   git push
   ```

---

## 📝 Daily Routine

```bash
# Morning: New problem
node create-problem.js

# Afternoon: Solve it
# 1. Write solution
# 2. Test with Ctrl/Cmd + Shift + B
# 3. Document learnings

# Evening: Commit
git add .
git commit -m "✅ Solved: [Problem Name] - [Topic]"
git push
```

---

## 🎓 Learning Path

### Week 1: Arrays Fundamentals
```bash
node create-problem.js  # Two Sum
node create-problem.js  # Best Time to Buy Stock
node create-problem.js  # Contains Duplicate
# ... continue
```

### Week 2: Strings
```bash
node create-problem.js  # Valid Anagram
node create-problem.js  # Group Anagrams
# ... continue
```

---

## ⚙️ Customization

### Change Template Styling
Edit `create-problem.js` → `createReadmeFile()` function

### Add More Topics
Edit `create-problem.js` → `topics` array

### Change VS Code Shortcuts
Edit `.vscode/tasks.json`

---

## 🆘 Common Issues

### "node: command not found"
→ Install Node.js from nodejs.org

### "create-problem.js not found"
→ Make sure you're in the right directory: `cd DSA-JavaScript`

### Output not updating
→ Close and reopen `output.txt` file

### Git not working
→ Install Git from git-scm.com

---

## 📚 Documentation Quick Links

After setup, refer to:

| File | Purpose |
|------|---------|
| `README.md` | Overview & progress tracker |
| `QUICK_START.md` | 5-minute tutorial |
| `VS_CODE_SETUP.md` | Detailed editor setup |
| `GIT_WORKFLOW.md` | Git commands & workflow |

---

## ✅ Verification Checklist

After installation, verify:

- [ ] Node.js installed → `node --version`
- [ ] All files downloaded
- [ ] Setup script ran successfully → `node setup.js`
- [ ] Topic folders created
- [ ] VS Code tasks configured
- [ ] Can create problem → `node create-problem.js`
- [ ] Can run solution → `Ctrl/Cmd + Shift + B`
- [ ] Git initialized (if Git installed)

---

## 🎯 You're Ready!

Start your journey:
```bash
node create-problem.js
```

Follow the prompts, solve the problem, and commit your first solution!

**Need help?** Check `QUICK_START.md` for a step-by-step tutorial.

---

## 💡 Pro Tips

1. **Commit daily** - Even small progress counts
2. **Document mistakes** - Learn from them
3. **Review weekly** - Look back at old problems
4. **Share progress** - Make your repo public
5. **Stay consistent** - 1 problem/day is better than 10/week

---

**Happy Learning! 🚀**

Questions? Check the documentation files or create an issue on GitHub.
