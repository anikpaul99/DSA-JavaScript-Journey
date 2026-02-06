# 🚀 Quick Start Guide

## ⚡ 5-Minute Setup

### 1️⃣ Download & Setup (2 minutes)

```bash
# Create your project folder
mkdir DSA-JavaScript
cd DSA-JavaScript

# Download all setup files (or clone this repo)
# Place all files in your DSA-JavaScript folder

# Make the script executable (Mac/Linux)
chmod +x create-problem.js
```

### 2️⃣ Test the Setup (1 minute)

```bash
# Create your first problem
node create-problem.js

# Follow the prompts:
# Problem Number: 001
# Problem Name: Test Problem
# Difficulty: Easy
# Topic: 1 (Arrays)
# Problem Statement: Testing the setup
```

### 3️⃣ Configure VS Code (2 minutes)

1. Open VS Code
2. Open your `DSA-JavaScript` folder
3. Press `Ctrl/Cmd + Shift + P`
4. Type: **Tasks: Configure Task** → **Others**
5. Replace with config from `VS_CODE_SETUP.md`
6. Done! ✅

## 📝 Your First Problem

### Create Problem
```bash
node create-problem.js
```

Or using npm:
```bash
npm run new
```

### The Script Will Ask:
```
🚀 DSA Problem Generator

Problem Number (e.g., 001): 001
Problem Name (e.g., Two Sum): Two Sum
Difficulty (Easy/Medium/Hard): Easy

Available Topics:
1. Arrays
2. Strings
3. LinkedLists
...

Select Topic (enter number): 1
Problem Statement (brief): Find two numbers that add up to target
```

### What Gets Created:
```
Arrays/
└── 001-two-sum/
    ├── solution.js      # Your code here
    ├── README.md        # Documentation
    ├── input.txt        # Test input
    └── output.txt       # Output
```

## 🎯 Daily Workflow

```bash
# Morning: Create a new problem
node create-problem.js

# Afternoon: Solve it
# 1. Open the problem folder in VS Code
# 2. Write solution in solution.js
# 3. Add test cases in input.txt
# 4. Press Ctrl/Cmd + Shift + B to run
# 5. Check output.txt

# Evening: Document & Commit
git add .
git commit -m "✅ Solved: Two Sum - Arrays"
git push
```

## 🎨 Solution Template

Every `solution.js` comes pre-filled with:

```javascript
const fs = require('fs');

// Read input from file
const input = fs.readFileSync(
    process.platform === 'win32' ? 'input.txt' : '/dev/stdin', 
    'utf8'
).trim();

/**
 * Problem: [Auto-filled with problem name]
 * 
 * Approach:
 * 1. [Add your steps]
 * 2. 
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

function solve(input) {
    const lines = input.split('\n');
    
    // Your solution here
    
    return result;
}

// Main execution
const result = solve(input);
console.log(result);
```

## 📋 Example Workflow

### 1. Create Problem
```bash
$ node create-problem.js

Problem Number: 001
Problem Name: Two Sum
Difficulty: Easy
Topic: 1
Problem Statement: Find two numbers that add to target

✅ Problem folder created successfully!
📁 Location: /DSA-JavaScript/Arrays/001-two-sum
```

### 2. Write Solution

**solution.js:**
```javascript
function solve(input) {
    const lines = input.split('\n');
    const target = parseInt(lines[0]);
    const nums = lines[1].split(' ').map(Number);
    
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return `[${map[complement]}, ${i}]`;
        }
        map[nums[i]] = i;
    }
    return "No solution";
}
```

### 3. Test It

**input.txt:**
```
9
2 7 11 15
```

**Press `Ctrl/Cmd + Shift + B`**

**output.txt:**
```
[0, 1]
```

### 4. Document

Fill in the `README.md` with:
- Your approach
- Complexity analysis
- Key learnings
- Mistakes made

### 5. Commit to GitHub

```bash
git add .
git commit -m "✅ Solved: Two Sum - Arrays"
git push
```

## 🔥 Pro Tips

### Shortcut Commands

Add to your shell profile (`.bashrc`, `.zshrc`):

```bash
# Quick aliases
alias dsa='cd ~/DSA-JavaScript'
alias new='node create-problem.js'
alias solve='code . && npm run'
```

Then use:
```bash
dsa          # Jump to DSA folder
new          # Create new problem
```

### VS Code Snippets

Create custom snippets (File → Preferences → User Snippets → javascript.json):

```json
{
  "DSA Solve Function": {
    "prefix": "solve",
    "body": [
      "function solve(input) {",
      "    const lines = input.split('\\n');",
      "    $1",
      "    return $2;",
      "}"
    ]
  }
}
```

Type `solve` + Tab for instant function!

## 📊 Track Progress

### Update Main README

After solving, update the table:

```markdown
| # | Problem | Difficulty | Topic | Date | Solution |
|---|---------|-----------|-------|------|----------|
| 1 | Two Sum | Easy | Arrays | 06-02-2026 | [Link](./Arrays/001-two-sum/) |
```

### GitHub Contribution Graph

Commit daily to see your green squares grow! 📈

## 🎓 Learning Path

### Week 1: Arrays (Easy)
- [ ] Two Sum
- [ ] Best Time to Buy Stock
- [ ] Contains Duplicate
- [ ] Product Except Self
- [ ] Maximum Subarray

### Week 2: Arrays (Medium)
- [ ] 3Sum
- [ ] Container With Most Water
- [ ] etc...

### Week 3: Strings
- [ ] Valid Anagram
- [ ] Group Anagrams
- [ ] etc...

## 🆘 Troubleshooting

### Script won't run?
```bash
# Make sure Node.js is installed
node --version

# If not installed, download from nodejs.org
```

### Permission denied?
```bash
# Mac/Linux only
chmod +x create-problem.js
```

### Git not working?
```bash
# Install git
git --version

# If not installed:
# Windows: git-scm.com
# Mac: brew install git
# Linux: sudo apt install git
```

## 📚 Resources Quick Links

- **VS Code Setup:** See `VS_CODE_SETUP.md`
- **Git Workflow:** See `GIT_WORKFLOW.md`
- **Striver's Course:** [takeuforward.org](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/)

## ✅ Checklist

- [ ] Node.js installed
- [ ] VS Code installed
- [ ] Git installed
- [ ] GitHub account created
- [ ] Repository created
- [ ] VS Code tasks configured
- [ ] First problem created
- [ ] First solution tested
- [ ] First commit pushed

## 🎉 You're Ready!

Now start with:
```bash
node create-problem.js
```

And begin your DSA journey! 🚀

---

**Need Help?** Check the detailed guides:
- `README.md` - Overview
- `VS_CODE_SETUP.md` - Editor setup
- `GIT_WORKFLOW.md` - Version control

**Happy Coding!** 💻✨
