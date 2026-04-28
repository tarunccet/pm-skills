# Compatibility Matrix

This matrix shows the clearest supported path for each tool.

| Tool | Best install path | Skills | Commands / workflows | Notes |
|---|---|---:|---:|---|
| Claude Code | MCP or marketplace | Yes | Yes | Best all-around experience |
| Claude Cowork | Marketplace | Yes | Yes | Best for non-developers |
| Claude Desktop | MCP | Yes | Yes | Good for direct MCP use |
| Cursor | MCP or skills folder | Yes | Yes via MCP | Skills-only also works |
| Windsurf | MCP or skills folder | Yes | Yes via MCP | Skills-only also works |
| VS Code Copilot Chat | Skills-only | Yes | Limited host-dependent | Use `.github/skills/` or instructions file |
| Gemini CLI | Skills-only | Yes | Host-dependent | Copy skills to `.gemini/skills/` |
| OpenCode | Skills-only | Yes | Host-dependent | Copy skills to `.opencode/skills/` |
| Codex CLI | Skills-only | Yes | Host-dependent | Copy skills to `.codex/skills/` |
| Kiro | Skills-only | Yes | Host-dependent | Copy skills to `.kiro/skills/` |

## Recommendation

- If your tool supports MCP well, use the MCP server.
- If your tool prefers markdown skills, use the skills-only install.
- If you want the most polished plugin and slash-command experience, use Claude Code or Claude Cowork.
