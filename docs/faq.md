# FAQ

## What is this repository?
It is the PM operating system for AI-native product teams. It helps turn common PM work into structured, repeatable workflows through skills and chained commands for AI assistants.

## Is this just a prompt library?
No. Skills encode frameworks, scope, steps, output shape, and routing guidance. Commands chain multiple skills into end-to-end workflows.

## Do I need to clone the repo?
No if you use the MCP server. Yes only if you want local plugin files, manual skills installs, or to contribute changes.

## What is the fastest way to get value?
Install the MCP server, run one real command, then follow the next recommended command.

Good first commands:
- `/discover`
- `/write-prd`
- `/ai-feature-launch`
- `/plan-prototype`
- `/course`

## Which starter pack should I use?
- **PM Core** for most PMs
- **AI PM** for AI features
- **PM Builder** for prototyping with AI coding tools
- **PM Learning** for onboarding or upskilling

See [starter-packs.md](./starter-packs.md).

## Which tools support commands?
Claude marketplace installs and MCP-capable clients support the strongest workflow experience. Skills-only installs work more broadly but host behavior varies.

## How should teams adopt this?
Start with one pack, one workflow, and one recurring use case. Example: use `/write-prd` and `/write-stories` for every new feature for one month.

## How do contributors validate changes?
Run:

```bash
python3 validate_plugins.py
npm run build
```

Install dependencies before building the MCP server.

## Why are there both skills and commands?
Skills are reusable building blocks. Commands are easier entry points for common jobs.
