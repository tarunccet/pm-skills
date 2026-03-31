---
description: Comprehensive macro environment analysis — SWOT, PESTLE, Porter's Five Forces, and Ansoff Matrix in one scan
argument-hint: "<product, market, or industry>"
---

# /market-scan -- Macro Environment Analysis

Run multiple strategic analysis frameworks to understand your competitive and macro environment. Combines SWOT, PESTLE, Porter's Five Forces, and Ansoff Matrix into a single strategic overview.

## Invocation

```
/market-scan EdTech market for corporate learning
/market-scan [upload a market brief or strategy doc]
/market-scan Our fintech product — preparing for board strategy review
```

## Workflow

### Step 1: Understand the Strategic Question

Ask:
- What product, company, or market are you analyzing?
- **What strategic question are you trying to answer?** (This determines which framework to use)
- What's the purpose? (strategic planning, market entry, investor prep, annual review)
- What's your current position in this market?

### Step 2: Recommend the Right Framework

Based on the strategic question, recommend ONE primary framework:

- **"Should we enter a new market / launch a new product?"** → **Ansoff Matrix** (growth direction and risk)
- **"What external forces are affecting our business?"** → **PESTLE** (macro environment scanning)
- **"How competitive is this market? Can we win?"** → **Porter's Five Forces** (industry attractiveness)
- **"What are our strengths and where are we exposed?"** → **SWOT** (internal + external situation)
- **"I need a full strategic overview"** → Run all four frameworks (SWOT + PESTLE + Porter's Five Forces + Ansoff Matrix) — warn the user this produces a comprehensive report and takes significantly more time

Explain your recommendation in 1-2 sentences, then ask: "Shall I proceed with [framework]?"

### Step 3: Run the Primary Framework

Apply the selected skill:

**SWOT Analysis** (apply **swot-analysis** skill):
- Internal: Strengths and Weaknesses
- External: Opportunities and Threats
- Actionable recommendations for each quadrant

**PESTLE Analysis** (apply **pestle-analysis** skill):
- Political, Economic, Social, Technological, Legal, Environmental factors
- Impact assessment and timeline for each factor

**Porter's Five Forces** (apply **porters-five-forces** skill):
- Competitive rivalry, supplier power, buyer power, threat of substitutes, threat of new entrants
- Overall industry attractiveness rating

**Ansoff Matrix** (apply **ansoff-matrix** skill):
- Market penetration, market development, product development, diversification
- Risk-adjusted growth opportunities

### Step 4: Generate Report

```
## Strategic Analysis: [Market/Product]

**Date**: [today]
**Strategic Question**: [the user's question]
**Primary Framework Used**: [chosen framework]

### [Framework Name] Analysis
[Full framework output]

### Key Findings
[5-7 sentences summarizing the strategic situation and key recommendations]

### Strategic Recommendations
1. [Recommendation with supporting evidence]
2. ...
3. ...

### Monitoring Plan
| Signal | What to Watch | Source | Check Frequency |
|--------|-------------|--------|----------------|
```

Save as markdown.

### Step 5: Offer Additional Frameworks

After completing the primary analysis, suggest:

> "Want to deepen the analysis? Here are the frameworks that would complement this most:
> - [Framework 1]: [one sentence on what it would add]
> - [Framework 2]: [one sentence on what it would add]"

Let the user choose whether to layer on additional frameworks.

## Notes

- Use web research to ground the analysis in current market data, not just general knowledge
- PESTLE factors should include specific regulations, market data, and trend signals — not generic observations
- Porter's is most useful when you identify the *specific* forces, not just rate them abstractly
- Ansoff should include concrete opportunities, not just generic "enter new markets"
- The synthesis section is the most valuable part — it's where the frameworks talk to each other
