const fs = require('fs');
const path = require('path');

// Recursively find all .tsx and .ts files in src/
function findFiles(dir, extensions) {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== 'node_modules') {
            results = results.concat(findFiles(fullPath, extensions));
        } else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
            results.push(fullPath);
        }
    }
    return results;
}

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir, ['.tsx', '.ts']);

let totalFixedFiles = 0;
let totalVersionFixes = 0;
let totalFigmaFixes = 0;

for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove version numbers from import paths
    // e.g. "@radix-ui/react-accordion@1.2.3" -> "@radix-ui/react-accordion"
    // e.g. "lucide-react@0.487.0" -> "lucide-react"
    // e.g. "class-variance-authority@0.7.1" -> "class-variance-authority"
    const versionRegex = /from\s+["']([^"']+)@(\d+\.\d+\.\d+)["']/g;
    let match;
    let newContent = content;

    // Count version fixes
    const versionMatches = content.match(versionRegex);
    if (versionMatches) {
        totalVersionFixes += versionMatches.length;
    }

    newContent = newContent.replace(versionRegex, (match, pkg, version) => {
        return match.replace(`${pkg}@${version}`, pkg);
    });

    // Fix 2: Replace figma:asset imports with placeholder URL constants
    // e.g. import imgSection from "figma:asset/abc123.png";
    // -> const imgSection = "/placeholder.svg";
    const figmaImportRegex = /import\s+(\w+)\s+from\s+["']figma:asset\/[^"']+["'];?/g;
    const figmaMatches = newContent.match(figmaImportRegex);
    if (figmaMatches) {
        totalFigmaFixes += figmaMatches.length;
    }

    newContent = newContent.replace(figmaImportRegex, (match, varName) => {
        return `const ${varName} = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";`;
    });

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        modified = true;
        totalFixedFiles++;
        console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
    }
}

console.log(`\nDone! Fixed ${totalFixedFiles} files.`);
console.log(`  - ${totalVersionFixes} versioned import fixes`);
console.log(`  - ${totalFigmaFixes} figma asset import fixes`);
