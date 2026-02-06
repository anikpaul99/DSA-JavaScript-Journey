#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║     🚀 DSA JavaScript Learning Environment Setup 🚀      ║
║                                                           ║
║     Setting up your complete DSA learning system...      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

// Check Node.js version
function checkNodeVersion() {
    const version = process.version;
    const major = parseInt(version.split('.')[0].substring(1));
    
    if (major < 14) {
        console.log('❌ Error: Node.js version 14 or higher is required');
        console.log(`   Current version: ${version}`);
        console.log('   Please upgrade Node.js from https://nodejs.org');
        process.exit(1);
    }
    
    console.log(`✅ Node.js version: ${version} (Compatible)`);
}

// Check Git installation
function checkGit() {
    try {
        execSync('git --version', { stdio: 'ignore' });
        console.log('✅ Git is installed');
        return true;
    } catch (error) {
        console.log('⚠️  Git is not installed (optional but recommended)');
        console.log('   Download from: https://git-scm.com');
        return false;
    }
}

// Create directory structure
function createDirectories() {
    console.log('\n📁 Creating directory structure...');
    
    const topics = [
        'Arrays',
        'Strings',
        'LinkedLists',
        'Trees',
        'Graphs',
        'Stacks',
        'Queues',
        'Heaps',
        'Hashing',
        'Recursion',
        'Backtracking',
        'DynamicProgramming',
        'Greedy',
        'BinarySearch',
        'Sorting',
        'BitManipulation',
        'Math',
        'TwoPointers',
        'SlidingWindow'
    ];
    
    topics.forEach(topic => {
        const topicPath = path.join(process.cwd(), topic);
        if (!fs.existsSync(topicPath)) {
            fs.mkdirSync(topicPath, { recursive: true });
        }
    });
    
    console.log(`✅ Created ${topics.length} topic directories`);
}

// Initialize Git repository
function initGit(hasGit) {
    if (!hasGit) {
        console.log('\n⏭️  Skipping Git initialization (Git not installed)');
        return;
    }
    
    console.log('\n📦 Initializing Git repository...');
    
    try {
        // Check if already a git repo
        try {
            execSync('git rev-parse --git-dir', { stdio: 'ignore' });
            console.log('ℹ️  Git repository already exists');
            return;
        } catch (e) {
            // Not a git repo, initialize it
        }
        
        execSync('git init', { stdio: 'inherit' });
        execSync('git branch -M main', { stdio: 'ignore' });
        console.log('✅ Git repository initialized');
        console.log('   Default branch: main');
        
    } catch (error) {
        console.log('⚠️  Could not initialize Git repository');
    }
}

// Create VS Code tasks.json
function createVSCodeTasks() {
    console.log('\n⚙️  Creating VS Code configuration...');
    
    const vscodeDir = path.join(process.cwd(), '.vscode');
    if (!fs.existsSync(vscodeDir)) {
        fs.mkdirSync(vscodeDir);
    }
    
    const tasksConfig = {
        version: "2.0.0",
        tasks: [
            {
                label: "Run JavaScript with Input/Output",
                type: "shell",
                command: process.platform === 'win32' 
                    ? "node ${file} < input.txt > output.txt"
                    : "node ${file} < input.txt > output.txt",
                group: {
                    kind: "build",
                    isDefault: true
                },
                problemMatcher: [],
                presentation: {
                    reveal: "always",
                    panel: "shared"
                }
            }
        ]
    };
    
    fs.writeFileSync(
        path.join(vscodeDir, 'tasks.json'),
        JSON.stringify(tasksConfig, null, 2)
    );
    
    console.log('✅ VS Code tasks.json created');
    console.log('   Press Ctrl/Cmd + Shift + B to run code');
}

// Show next steps
function showNextSteps() {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║                  ✅ Setup Complete! 🎉                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝

📋 What was created:
   ✓ Topic directories for all DSA categories
   ✓ VS Code configuration
   ✓ Git repository (if Git was available)
   ✓ All necessary scripts and templates

🚀 Next Steps:

1. CREATE YOUR FIRST PROBLEM:
   $ node create-problem.js
   
   OR using npm:
   $ npm run new

2. OPEN IN VS CODE:
   $ code .

3. START LEARNING:
   - Check QUICK_START.md for a 5-minute tutorial
   - Check VS_CODE_SETUP.md for editor configuration
   - Check GIT_WORKFLOW.md for version control

4. SETUP GITHUB (Optional):
   - Create a new repository on GitHub
   - Run: git remote add origin <your-repo-url>
   - Run: git add .
   - Run: git commit -m "🎉 Initial commit"
   - Run: git push -u origin main

📚 Available Commands:
   $ node create-problem.js    # Create new problem
   $ npm run new              # Same as above
   $ npm run help             # Show help

📖 Documentation Files:
   - README.md           → Overview and progress tracker
   - QUICK_START.md      → 5-minute getting started guide
   - VS_CODE_SETUP.md    → Editor configuration
   - GIT_WORKFLOW.md     → Git and GitHub guide

💡 Pro Tips:
   - Solve at least 1 problem daily
   - Document your learnings in README files
   - Commit to GitHub regularly
   - Review solved problems weekly

🎯 Suggested Learning Path:
   Week 1: Arrays (Easy problems)
   Week 2: Strings (Easy problems)
   Week 3: LinkedLists basics
   Week 4: Review and practice

📺 Resources:
   - Striver's A2Z Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/
   - LeetCode: https://leetcode.com
   - NeetCode: https://neetcode.io

🌟 Ready to start your DSA journey!

   Run: node create-problem.js

Happy Coding! 💻✨
`);
}

// Main setup function
async function setup() {
    try {
        checkNodeVersion();
        const hasGit = checkGit();
        createDirectories();
        createVSCodeTasks();
        initGit(hasGit);
        showNextSteps();
        
        console.log('\n✅ All done! Your environment is ready.\n');
        
    } catch (error) {
        console.error('\n❌ Setup failed:', error.message);
        process.exit(1);
    }
}

// Run setup
setup();
