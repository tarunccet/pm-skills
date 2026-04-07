---
name: competitor-analysis
description: "Analyze competitors with three output modes: standard (comprehensive landscape analysis), ai-focused (AI-specific competitive dimensions including model quality and data moats), or battlecard (sales-ready one-pager). Use when doing competitive research, benchmarking an AI product, or preparing sales teams."
category: research
complexity: advanced
tags: ["competitive-analysis", "battlecard", "ai-competitive", "market-research", "differentiation"]
---

# Competitor Analysis

## Purpose
Conduct targeted competitive intelligence in the output format that serves your immediate goal — a strategic landscape analysis, an AI-specific capability deep-dive, or a sales-ready battlecard.

## Domain Context
Competitive analysis draws on Porter's Five Forces (structural industry analysis), Blue Ocean Strategy (value curve differentiation), and jobs-to-be-done theory (understanding why customers switch). For AI products, additional dimensions — model quality, data moats, and inference economics — determine durable competitive advantage in ways traditional frameworks miss.

## When to Use
- Use when preparing a competitive brief for leadership, a board deck, or a strategy review
- Use when benchmarking your AI product's model quality, latency, or data strategy against competitors
- Use when equipping a sales team to win deals against a specific competitor
- Use when entering a new market and mapping the competitive landscape

## When NOT to Use
- Don't use when you need ICP or market segmentation (use the `segmentation` skill instead)
- Don't use when you need go-to-market strategy (use the `gtm-strategy` skill instead)

## Instructions

You are a strategic product analyst and competitive intelligence expert specializing in competitive positioning, AI capability assessment, and sales enablement.

### Input
Your task is to analyze the competitive landscape for **$ARGUMENTS**.

Use web search to research competitors. If the user provides market research, competitor data, pricing sheets, feature comparisons, win/loss data, or sales call notes, read and analyze them directly before researching further.

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, market, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What product or market are we analyzing competitors for?
   - Who are the known competitors (or should I research them)?
   - What output format do you need (standard analysis, AI-focused, battlecard)?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

### Step 1: Choose Output Mode

Ask the user which output mode they want:

1. **`standard`** — Comprehensive competitive landscape analysis (5 competitors, full profiles, differentiation strategy)
2. **`ai-focused`** — AI-specific competitive analysis (model quality, data moats, AI feature teardown, moat assessment)
3. **`battlecard`** — Sales-ready battlecard for a single competitor (quick comparison, objection handling, landmines)

If $ARGUMENTS already specifies a mode (e.g., "battlecard for Salesforce" or "AI analysis of this market"), proceed directly without asking.

---

### Mode 1: Standard Competitive Analysis

**Analysis Steps (Think Step by Step)**

1. **Market Scoping**: Define the market, industry, and addressable customer base
2. **Competitor Identification**: Use web search to identify 5 primary direct competitors
3. **Competitive Intelligence**: Research each competitor's positioning, features, pricing, go-to-market
4. **Strengths & Weaknesses**: Assess capabilities, limitations, and market positioning
5. **Differentiation Mapping**: Identify gaps, overlaps, and opportunities to differentiate
6. **Strategic Synthesis**: Develop insights about competitive dynamics and future threats

**Output Structure**

**Market Overview & Definition**
- Market size and growth trends
- Primary customer segments and use cases
- Key success factors in this market
- Market dynamics and competitive intensity

**Competitive Set Summary**
- 5 primary direct competitors identified
- Market positions: leaders, challengers, niche players
- Estimated market share or positioning
- Notable adjacent or indirect competitors

For each of the 5 competitors, provide:

**Competitor Profile**: Company name, founding date, funding/status, primary market focus, estimated market share, go-to-market strategy

**Core Product Strengths**: Key features, unique competitive advantages, customer value proposition, technology differentiation or moats, customer satisfaction signals

**Product Weaknesses & Gaps**: Missing features or use cases, known limitations, technical or operational weaknesses, customer dissatisfaction areas

**Business Model & Pricing**: Pricing structure (per-seat, per-usage, flat-fee, freemium), price points, go-to-market channels, revenue model and growth stage

**Competitive Threats & Advantages**: How this competitor threatens $ARGUMENTS, existing customer base and switching costs, recent product updates or strategic moves

**Differentiation Opportunities**
- Unmet customer needs across the competitive set
- Feature/pricing/UX opportunities to stand out
- Target segments underserved by competitors
- Jobs-to-be-done not effectively solved by competitors
- Channel or go-to-market approaches not yet deployed
- Potential partnerships or integrations competitors lack

**Competitive Positioning Recommendation**
- Recommended positioning for $ARGUMENTS
- Key differentiators to emphasize
- Segments or use cases to target or avoid
- Competitive threats to monitor over the next 12-18 months

---

### Mode 2: AI-Focused Competitive Analysis

**Analysis Steps**

1. **Define scope**: What AI capabilities or product areas are being compared? What decisions will this analysis inform?
2. **Identify competitors**: Direct, indirect, AI-native entrants, and open-source alternatives
3. **AI capability benchmarking**: Evaluate competitors across the AI-specific dimension matrix below
4. **Moat assessment**: Rate each competitor's data, model, distribution, and network-effect moats
5. **Gap analysis**: Classify capabilities as Critical Gap / Parity / Your Advantage
6. **Strategic recommendations**: Where to compete, where to differentiate, where to avoid

**AI-Specific Competitive Dimensions**

| Dimension | Description | How to Assess |
|---|---|---|
| Model quality | Output accuracy, relevance, coherence | Blind evaluation, benchmark tasks, user studies |
| Latency | End-to-end response time perceived by users | Manual testing, API benchmarks (p50/p95) |
| Cost to serve | Inferred infrastructure efficiency | Pricing analysis, unit economics estimates |
| Data advantage | Proprietary training data scale and uniqueness | Research, job postings, patents, partnerships |
| Ecosystem / integrations | Number and quality of integrations | Product teardown, partner announcements |
| Fine-tuning / customisation | Ability for customers to adapt the model | Documentation, feature announcements |
| Safety measures | Content moderation, bias controls, guardrails | Red-teaming, terms of service, safety reports |
| Multimodal capability | Support for text, image, audio, video, code | Feature matrix teardown |
| API / developer platform | Quality of developer experience and tooling | Docs, community sentiment, GitHub activity |

**Moat Assessment** — Rate each competitor: Strong / Moderate / Weak / None

- **Data moat**: Proprietary dataset that is hard to replicate (user-generated content, exclusive partnerships, long history)
- **Model moat**: Significantly better model due to compute, architecture, or research capability
- **Distribution moat**: Owns the user relationship or channel (OS integration, enterprise contract, consumer habit)
- **Network effect moat**: Model improves as more users engage (feedback flywheel, marketplace data)

Assess durability over a 12-24 month horizon for each moat.

**Capability Gap Analysis**

For each AI capability, classify:
- **Critical gap**: Competitor capability users consider table stakes; you are at a disadvantage
- **Parity**: You and competitor are equivalent; not a differentiator
- **Your advantage**: Capability competitors lack or you do materially better

Prioritize closing critical gaps affecting retention or acquisition; deprioritize parity gaps.

**Open-Source vs. Proprietary Assessment**
- Can customers self-host an open-source alternative? At what capability/cost tradeoff?
- If OSS closes the quality gap, how does that affect proprietary moats?

**Tracking AI Competitive Intelligence**
- Monitor: product changelogs, developer blogs, arXiv papers, job postings, conference talks
- Watch for: new model releases, capability expansions, pricing changes, safety improvements
- Recommend: monthly intelligence review cadence

**Output**: Competitor landscape overview table → AI capability comparison matrix → Moat assessment → Gap analysis with prioritization → Strategic recommendations

---

### Mode 3: Battlecard

**Research Steps**

1. Research the competitor with web search: current product capabilities, pricing tiers, target market, recent launches, known weaknesses, customer reviews (G2, Capterra, Reddit)
2. If the user provides win/loss data or sales call notes, incorporate those first — they are worth 10x any analysis

**Battlecard Output**

```
## Competitive Battlecard: [Your Product] vs [Competitor]
**Last updated**: [today]
**Use when**: [situation where this competitor comes up]

### Quick Summary
**We win when**: [buyer profile and situation where you have advantage]
**We lose when**: [buyer profile and situation where competitor has advantage]
**Key differentiator**: [one sentence]

### Company Overview
Founded: [year] | HQ: [location] | Funding/Status: [stage]
Target market: [ICP] | Positioning: [one sentence]

### Feature Comparison
| Capability | Us | Them | Verdict |
|---|---|---|---|
| [capability 1] | [our approach] | [their approach] | [Us/Them/Tie] |
| [capability 2] | ... | ... | ... |
| Pricing | ... | ... | ... |
| Support | ... | ... | ... |

### Where We Win
- **[Advantage 1]**: [Proof point or customer quote]
- **[Advantage 2]**: [Specific capability they lack]
- **[Advantage 3]**: [Better approach with reasoning]

### Where They Win
- **[Their strength 1]**: [Our counter-positioning]
- **[Their strength 2]**: [How we mitigate this gap]

### Objection Handling
| Prospect Says | Respond With |
|---|---|
| "They have [feature]" | "[Our alternative approach and why it's better]" |
| "They're cheaper" | "[Value framing: TCO, ROI, hidden costs]" |
| "They're more established" | "[Speed, innovation, focus, support advantages]" |

### Landmines to Plant
Questions that expose competitor weaknesses:
1. "How important is [area where we excel] to your team?"
2. "Have you evaluated [specific capability they lack]?"

### Trap Questions to Expect
Questions the competitor will coach the prospect to ask:
1. "[Question]" — How to respond: [response]

### Win/Loss Patterns
**We typically win because**: [top 3 reasons]
**We typically lose because**: [top 3 reasons]
**Key differentiator in competitive deals**: [what tips the scale]
```

Keep it to one page equivalent — sales reps won't read a 10-page document during a call.

---

## Output Format
- Standard: Multi-section markdown report with competitor profiles, comparison tables, and positioning recommendations
- AI-Focused: Structured markdown with capability matrix, moat ratings table, gap analysis, and strategic recommendations
- Battlecard: Concise scannable markdown formatted for quick reference during sales calls; use tables, bold text, short bullets

## Example

**Standard mode prompt**: "competitor analysis for Notion"
**Expected output excerpt**:
> **Market**: Collaborative productivity and knowledge management, ~$15B+ TAM, growing 18% YoY
> **Competitor 1 — Confluence**: Enterprise-first, strong IT/engineering adoption, complex UX, weak consumer/SMB play
> **Differentiation opportunity**: Notion's block-based flexibility wins with power users; underserved opportunity in structured project management for SMBs vs. Asana/Linear

## Best Practices

- Always research current competitor websites, pricing pages, and customer reviews before synthesizing
- Use web search to identify product launches, funding, executive moves in the last 6-12 months
- Distinguish between direct competitors and adjacent alternatives
- Validate competitive insights across multiple sources
- For AI analysis, repeat benchmarks quarterly — AI products evolve rapidly
- For battlecards, update quarterly — competitors change fast
- Never trash the competitor in front of the prospect — position on your strengths

---
