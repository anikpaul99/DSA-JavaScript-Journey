#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Available topics
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
    'SlidingWindow',
    'Other'
];

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function createProblemFolder() {
    console.log('\n🚀 DSA Problem Generator\n');
    
    // Get problem details
    const problemNumber = await question('Problem Number (e.g., 001): ');
    const problemName = await question('Problem Name (e.g., Two Sum): ');
    const difficulty = await question('Difficulty (Easy/Medium/Hard): ');
    
    console.log('\nAvailable Topics:');
    topics.forEach((topic, index) => {
        console.log(`${index + 1}. ${topic}`);
    });
    
    const topicIndex = await question('\nSelect Topic (enter number): ');
    const topic = topics[parseInt(topicIndex) - 1] || 'Other';
    
    const problemStatement = await question('\nProblem Statement (brief): ');
    
    // Create folder structure
    const folderName = `${problemNumber}-${problemName.toLowerCase().replace(/\s+/g, '-')}`;
    const topicPath = path.join(process.cwd(), topic);
    const problemPath = path.join(topicPath, folderName);
    
    // Create directories
    if (!fs.existsSync(topicPath)) {
        fs.mkdirSync(topicPath, { recursive: true });
        createTopicReadme(topicPath, topic);
    }
    
    if (fs.existsSync(problemPath)) {
        console.log('\n❌ Error: This problem folder already exists!');
        rl.close();
        return;
    }
    
    fs.mkdirSync(problemPath, { recursive: true });
    
    // Create files
    createSolutionFile(problemPath, problemName);
    createReadmeFile(problemPath, problemNumber, problemName, difficulty, topic, problemStatement);
    createInputFile(problemPath);
    createOutputFile(problemPath);
    
    console.log('\n✅ Problem folder created successfully!');
    console.log(`📁 Location: ${problemPath}`);
    console.log('\nFiles created:');
    console.log('  - solution.js');
    console.log('  - README.md');
    console.log('  - input.txt');
    console.log('  - output.txt');
    
    rl.close();
}

function createSolutionFile(problemPath, problemName) {
    const content = `const fs = require('fs');

// Read input from file
const input = fs.readFileSync(process.platform === 'win32' ? 'input.txt' : '/dev/stdin', 'utf8').trim();

/**
 * Problem: ${problemName}
 * 
 * Approach:
 * 1. 
 * 2. 
 * 3. 
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

function solve(input) {
    const lines = input.split('\\n');
    
    // Your solution here
    
    return result;
}

// Main execution
const result = solve(input);
console.log(result);
`;
    
    fs.writeFileSync(path.join(problemPath, 'solution.js'), content);
}

function createReadmeFile(problemPath, problemNumber, problemName, difficulty, topic, problemStatement) {
    const today = new Date().toLocaleDateString('en-GB');
    
    const content = `# ${problemNumber} - ${problemName}

## 📝 Problem Statement
${problemStatement}

## 🎯 Difficulty
**${difficulty}**

## 🏷️ Topic
${topic}

## 💡 Examples

### Example 1:
\`\`\`
Input: 
[Add example input]

Output: 
[Add expected output]

Explanation:
[Explain the example]
\`\`\`

### Example 2:
\`\`\`
Input: 
[Add example input]

Output: 
[Add expected output]
\`\`\`

## 🔍 Approach

### Initial Thoughts
- [What was your first approach?]
- [Any observations about the problem?]

### Solution Strategy
1. **Step 1:** [Describe]
2. **Step 2:** [Describe]
3. **Step 3:** [Describe]

### Algorithm
\`\`\`
[Write pseudocode or algorithm steps]
\`\`\`

## 📊 Complexity Analysis
- **Time Complexity:** O(?)
  - [Explain why]
  
- **Space Complexity:** O(?)
  - [Explain why]

## 🔑 Key Learnings
- [ ] [What concept did you learn or reinforce?]
- [ ] [Any common pitfalls or edge cases?]
- [ ] [Optimization techniques used?]

## 🐛 Mistakes & Debugging
- [Any mistakes you made while solving?]
- [Edge cases you initially missed?]

## 🔗 Related Problems
- [Link to similar problems]
- [Link to prerequisite problems]

## 📅 Date Solved
${today}

## 📌 Notes
[Any additional notes or alternative approaches]

---
**Status:** 🔴 Not Started | 🟡 In Progress | 🟢 Solved | ✅ Reviewed
`;
    
    fs.writeFileSync(path.join(problemPath, 'README.md'), content);
}

function createInputFile(problemPath) {
    const content = `# Add your test input here
# Example:
# 5
# 1 2 3 4 5
`;
    
    fs.writeFileSync(path.join(problemPath, 'input.txt'), content);
}

function createOutputFile(problemPath) {
    const content = `# Output will be generated here when you run the solution
`;
    
    fs.writeFileSync(path.join(problemPath, 'output.txt'), content);
}

function createTopicReadme(topicPath, topic) {
    const content = `# ${topic}

## Problems Solved

| # | Problem | Difficulty | Date | Status |
|---|---------|-----------|------|--------|
|   |         |           |      |        |

## Key Concepts
- [ ] [Concept 1]
- [ ] [Concept 2]

## Common Patterns
1. **Pattern Name:** Description

## Resources
- [Add helpful links]
`;
    
    fs.writeFileSync(path.join(topicPath, 'README.md'), content);
}

// Run the script
createProblemFolder().catch(err => {
    console.error('Error:', err);
    rl.close();
});
