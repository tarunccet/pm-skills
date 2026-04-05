#!/usr/bin/env node

/**
 * product-management-skills installer
 *
 * Usage:
 *   npx product-management-skills          → installs to ~/.claude/skills/ (global, all projects)
 *   npx product-management-skills --project → installs to ./.agents/skills/ (this project only)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const isProject = process.argv.includes('--project');
const packageRoot = path.join(__dirname, '..');

const plugins = [
  'pm-ai-product-management',
  'pm-data-analytics',
  'pm-execution',
  'pm-go-to-market',
  'pm-guided-learning',
  'pm-market-research',
  'pm-product-discovery',
  'pm-product-strategy',
  'pm-vibe-coding',
];

function copySkills(target) {
  let installed = 0;
  let skipped = 0;

  for (const plugin of plugins) {
    const skillsDir = path.join(packageRoot, plugin, 'skills');
    if (!fs.existsSync(skillsDir)) continue;

    for (const skillName of fs.readdirSync(skillsDir)) {
      const src = path.join(skillsDir, skillName);
      if (!fs.statSync(src).isDirectory()) continue;

      const dst = path.join(target, skillName);
      if (fs.existsSync(dst)) {
        skipped++;
        continue;
      }

      fs.mkdirSync(dst, { recursive: true });
      fs.cpSync(src, dst, { recursive: true });
      installed++;
    }
  }

  return { installed, skipped };
}

function copyProjectFiles(projectDir) {
  // .agents/skills/ — cross-tool standard (Gemini CLI, VS Code, Cursor)
  const agentsSkillsTarget = path.join(projectDir, '.agents', 'skills');
  fs.mkdirSync(agentsSkillsTarget, { recursive: true });
  const { installed, skipped } = copySkills(agentsSkillsTarget);
  console.log(`  .agents/skills/    ${installed} skills installed, ${skipped} skipped (already exist)`);
}

if (isProject) {
  const projectDir = process.cwd();
  console.log('\nInstalling PM skills for this project...\n');
  copyProjectFiles(projectDir);
  console.log('\nDone. Restart Cursor, VS Code, or Gemini CLI to use your new skills.');
} else {
  // Global install → ~/.claude/skills/
  const claudeSkillsDir = path.join(os.homedir(), '.claude', 'skills');
  fs.mkdirSync(claudeSkillsDir, { recursive: true });

  console.log('\nInstalling PM skills globally...\n');
  const { installed, skipped } = copySkills(claudeSkillsDir);
  console.log(`  ~/.claude/skills/  ${installed} skills installed, ${skipped} skipped (already exist)`);
  console.log('\nDone. Restart Claude Code to use your new skills.');
  console.log('\nTo also install for Cursor / Gemini CLI in your current project, run:');
  console.log('  npx product-management-skills --project');
}
