# VS Code Setup for DSA in JavaScript

## 📋 Prerequisites

1. **Node.js** - [Download here](https://nodejs.org/)
   ```bash
   node --version  # Should be v14 or higher
   ```

2. **VS Code** - [Download here](https://code.visualstudio.com/)

## 🔧 Installation Steps

### Step 1: Install VS Code Extensions

Install these extensions from the VS Code marketplace:

1. **Code Runner** (by Jun Han)
   - Allows running code with a button
   
2. **JavaScript (ES6) code snippets** (by charalampos karypidis)
   - Helpful code snippets

3. **Better Comments** (by Aaron Bond) - *Optional*
   - Makes comments more colorful

4. **GitLens** (by GitKraken) - *Optional*
   - Better Git integration

### Step 2: Configure VS Code Tasks

1. Open VS Code
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type: **Tasks: Configure Task**
4. Select: **Create tasks.json from template**
5. Select: **Others**

6. Replace the content with this:

**For Windows:**
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Run JavaScript with Input/Output",
            "type": "shell",
            "command": "node",
            "args": [
                "${file}"
            ],
            "options": {
                "shell": {
                    "executable": "cmd.exe",
                    "args": ["/C"]
                }
            },
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": [],
            "presentation": {
                "reveal": "always",
                "panel": "shared"
            }
        }
    ]
}
```

**For Mac/Linux:**
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Run JavaScript with Input/Output",
            "type": "shell",
            "command": "node ${file} < input.txt > output.txt",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": [],
            "presentation": {
                "reveal": "always",
                "panel": "shared"
            }
        }
    ]
}
```

### Step 3: Setup Split View Layout

1. Open your problem folder
2. Create 3 files:
   - `solution.js`
   - `input.txt`
   - `output.txt`

3. **Split the screen:**
   - Click on `solution.js`
   - Go to **View** → **Editor Layout** → **Split Right**
   - Drag `input.txt` to the right panel
   - Click **View** → **Editor Layout** → **Split Down** (on the right panel)
   - Drag `output.txt` to the bottom right

Your screen should look like this:
```
┌─────────────────┬─────────────┐
│                 │  input.txt  │
│  solution.js    ├─────────────┤
│                 │ output.txt  │
└─────────────────┴─────────────┘
```

## ⌨️ Keyboard Shortcuts

### Run Your Code
- **Windows/Linux:** `Ctrl + Shift + B`
- **Mac:** `Cmd + Shift + B`

### Other Useful Shortcuts
- **Toggle Terminal:** `Ctrl + `` ` `` (backtick)
- **Command Palette:** `Ctrl/Cmd + Shift + P`
- **Quick File Open:** `Ctrl/Cmd + P`
- **Format Document:** `Shift + Alt + F` (Windows) or `Shift + Option + F` (Mac)

## 📝 Basic Workflow

1. **Write your solution** in `solution.js`
2. **Add test input** in `input.txt`
3. **Press** `Ctrl/Cmd + Shift + B` to run
4. **Check output** in `output.txt`

## 🔨 Solution Template

Use this template in your `solution.js`:

```javascript
const fs = require('fs');

// Read input
const input = fs.readFileSync(
    process.platform === 'win32' ? 'input.txt' : '/dev/stdin', 
    'utf8'
).trim();

/**
 * Problem: [Problem Name]
 * 
 * Approach:
 * 1. [Step 1]
 * 2. [Step 2]
 * 
 * Time: O(?)
 * Space: O(?)
 */

function solve(input) {
    const lines = input.split('\n');
    
    // Your solution here
    
    return result;
}

// Execute
const result = solve(input);
console.log(result);
```

## 🎯 Example Problem

**solution.js:**
```javascript
const fs = require('fs');

const input = fs.readFileSync(
    process.platform === 'win32' ? 'input.txt' : '/dev/stdin', 
    'utf8'
).trim();

function solve(input) {
    const lines = input.split('\n');
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    
    // Find sum of array
    const sum = arr.reduce((acc, val) => acc + val, 0);
    
    return `Sum: ${sum}`;
}

const result = solve(input);
console.log(result);
```

**input.txt:**
```
5
1 2 3 4 5
```

**Press `Ctrl+Shift+B` and output.txt will show:**
```
Sum: 15
```

## 🐛 Troubleshooting

### Issue: "node is not recognized"
**Solution:** Install Node.js and restart VS Code

### Issue: "Cannot find module 'fs'"
**Solution:** `fs` is built-in, no installation needed. Make sure you're using Node.js

### Issue: Input/Output not working
**Solution:** 
- Check file names are exactly `input.txt` and `output.txt`
- Make sure they're in the same folder as `solution.js`
- Check your tasks.json configuration

### Issue: Output not updating
**Solution:**
- Close and reopen `output.txt`
- Or manually run: `node solution.js < input.txt > output.txt`

## 💡 Pro Tips

1. **Save Layout:** VS Code remembers your split layout per folder
2. **Multiple Test Cases:** Create `input2.txt`, `input3.txt` for different tests
3. **Debugging:** Use `console.log()` statements liberally
4. **Format Code:** Use `Prettier` extension for auto-formatting
5. **Git Integration:** Use Source Control panel (Ctrl+Shift+G) for commits

## 📚 Additional Settings (Optional)

Add to your `settings.json` (File → Preferences → Settings → Open Settings JSON):

```json
{
    "editor.fontSize": 14,
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "files.autoSave": "afterDelay",
    "terminal.integrated.fontSize": 12
}
```

## 🚀 Ready to Code!

You're all set! Now you can:
1. Use `node create-problem.js` to create new problems
2. Write your solution
3. Test with `Ctrl/Cmd + Shift + B`
4. Document your learnings
5. Commit to GitHub

Happy Coding! 🎉
