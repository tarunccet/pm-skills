# Using PM Skills with Claude Code (CLI)

## Setup

### Option 1: Plugin Marketplace (Recommended)

Claude Code has a native plugin system with marketplace support. Install all 9 plugins at once:

```bash
# Step 1: Add the marketplace
claude plugin marketplace add tarunccet/pm-skills

# Step 2: Install individual plugins (or all at once)
claude plugin install pm-product-strategy@pm-skills
claude plugin install pm-product-discovery@pm-skills
claude plugin install pm-market-research@pm-skills
claude plugin install pm-data-analytics@pm-skills
claude plugin install pm-go-to-market@pm-skills
claude plugin install pm-execution@pm-skills
claude plugin install pm-ai-product-management@pm-skills
claude plugin install pm-vibe-coding@pm-skills
claude plugin install pm-guided-learning@pm-skills
```

You get full plugin support: slash commands (`/discover`, `/write-prd`, etc.), auto-loaded skills, and chained workflows.

### Option 2: Clone into Plugins Directory

```bash
# In your project directory:
git clone https://github.com/tarunccet/pm-skills.git .claude/plugins/pm-skills
```

Claude Code automatically discovers plugins from `.claude/plugins/`.

### Option 3: MCP Server

If you prefer MCP (works across multiple clients from a single install):

```bash
claude mcp add pm-skills -- npx -y ai-pm-skills-mcp
```

This exposes all 89 skills and 59 commands as MCP tools without cloning the repo.

---

## What Works

| Feature | Plugin Install | MCP Server |
|---------|---------------|------------|
| Slash commands (`/discover`, `/write-prd`, etc.) | ✅ | ✅ (as tools) |
| Auto-loaded skills | ✅ | ✅ |
| Chained workflows | ✅ | ✅ |
| Always latest version | Manual update | ✅ (via `npx`) |

---

## Usage

Once installed, use any command:

```
/discover AI-powered meeting summarizer for remote teams
/write-prd SSO support for enterprise customers
/lean-validation Our users are abandoning the onboarding flow at step 3
/learn — I'm a new PM, what should I learn first?
```

Skills also activate automatically based on your conversation — ask about prioritization and the `prioritization` skill loads, ask about pricing and `pricing-strategy` activates.

---

## Tips

1. **Use workflow bundles for big tasks**: `/ai-feature-launch`, `/data-driven-discovery`, and `/lean-validation` chain 6–7 skills each.
2. **Force a specific skill**: Use `/plugin-name:skill-name` or `/skill-name` to explicitly load a skill.
3. **Provide context**: Upload files, paste Slack threads, or describe constraints — the more context, the better the output.
