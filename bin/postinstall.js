#!/usr/bin/env node

/**
 * Runs automatically on: npm install -g product-management-skills
 * Skips silently on local project installs.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Only run during global installs
const isGlobal = process.env.npm_config_global === 'true';
if (!isGlobal) process.exit(0);

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

try {
  const claudeSkillsDir = path.join(os.homedir(), '.claude', 'skills');
  fs.mkdirSync(claudeSkillsDir, { recursive: true });

  let installed = 0;
  let skipped = 0;

  for (const plugin of plugins) {
    const skillsDir = path.join(packageRoot, plugin, 'skills');
    if (!fs.existsSync(skillsDir)) continue;

    for (const skillName of fs.readdirSync(skillsDir)) {
      const src = path.join(skillsDir, skillName);
      if (!fs.statSync(src).isDirectory()) continue;

      const dst = path.join(claudeSkillsDir, skillName);
      if (fs.existsSync(dst)) {
        skipped++;
        continue;
      }

      fs.mkdirSync(dst, { recursive: true });
      fs.cpSync(src, dst, { recursive: true });
      installed++;
    }
  }

  console.log(`\nProduct Management Skills installed to ~/.claude/skills/`);
  console.log(`  ${installed} skills installed, ${skipped} skipped (already exist)`);
  console.log(`\nRestart Claude Code to use your new PM skills.`);
  console.log(`Run 'npx product-management-skills --project' to also activate in Cursor / Gemini CLI.\n`);
} catch (err) {
  // Never block the install
  console.warn('\nWarning: Could not auto-install PM skills:', err.message);
  console.warn("Run 'npx product-management-skills' to install manually.\n");
}
