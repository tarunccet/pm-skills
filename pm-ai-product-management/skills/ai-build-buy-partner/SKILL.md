---
name: ai-build-buy-partner
description: "Evaluate AI capability sourcing options across build, buy, fine-tune, and partner archetypes using a structured decision matrix. Use when deciding whether to build a custom model, use an LLM API, fine-tune a base model, or partner with an AI vendor."
---

## AI Build, Buy, or Partner

Systematically evaluate AI capability sourcing options to find the right balance of speed, cost, control, and strategic differentiation.

### Context

You are evaluating AI capability sourcing options for **$ARGUMENTS**.

### Instructions

1. **Define the capability and requirements**:
   - What AI capability is needed? (language understanding, generation, vision, recommendations, predictions)
   - What are the quality, latency, cost, and compliance requirements?
   - How central is this capability to the product's competitive differentiation?
   - What data does the team currently own relevant to this capability?

2. **Evaluate the four sourcing archetypes**:

   **Archetype 1 — Pure API (e.g., OpenAI, Anthropic, Google)**:
   - Fastest to market; no ML infra required; pay-per-use
   - Best for: commodity tasks, prototyping, teams without ML capability
   - Risks: vendor dependency, data privacy exposure, cost at scale, model deprecation

   **Archetype 2 — Fine-tuned base model (e.g., fine-tuned Llama, Mistral)**:
   - Moderate customisation; requires labelled data and ML engineering
   - Best for: domain-specific language, consistent output format, moderate data advantage
   - Risks: training cost and time, ongoing maintenance, model update cycle

   **Archetype 3 — Hybrid (API + RAG / retrieval augmentation)**:
   - Use a foundation model API with a proprietary knowledge base for grounding
   - Best for: knowledge-intensive applications with dynamic data (docs, policies, product info)
   - Risks: retrieval quality bottleneck, context window limits, latency from retrieval step

   **Archetype 4 — Fully custom model**:
   - Full control of architecture, training data, deployment, and updates
   - Best for: core differentiator with large proprietary dataset, regulatory data residency, extreme cost at scale
   - Risks: high up-front investment, long timeline, requires significant ML talent

3. **Score each archetype on the decision matrix**:

   | Dimension | Weight | Pure API | Fine-tuned | Hybrid | Custom |
   |---|---|---|---|---|---|
   | Strategic differentiation | 20% | /5 | /5 | /5 | /5 |
   | Data advantage leverage | 15% | /5 | /5 | /5 | /5 |
   | Cost at scale (10× volume) | 15% | /5 | /5 | /5 | /5 |
   | Time-to-market | 15% | /5 | /5 | /5 | /5 |
   | Compliance / data residency | 15% | /5 | /5 | /5 | /5 |
   | Customisation / control | 10% | /5 | /5 | /5 | /5 |
   | Team capability match | 10% | /5 | /5 | /5 | /5 |
   | **Weighted total** | 100% | | | | |

4. **Cost modelling — API vs. infrastructure**:
   - **API cost at scale**: `monthly_requests × avg_tokens × price_per_1k_tokens`
   - Model the break-even point: at what volume does the infrastructure cost of a self-hosted model become cheaper than API cost?
   - Include: GPU instance cost, serving infra, MLOps tooling, ML engineer time
   - Rule of thumb: API is usually cheaper below ~$50K/month at current pricing

5. **Make-or-buy signals**:
   - **Build custom when**: it is a core differentiator, you have 10× more proprietary data than competitors, regulatory requirements prohibit third-party APIs, or API cost exceeds $500K/year
   - **Buy/use API when**: commodity task, fast time-to-market needed, team lacks ML capability, or volume is low
   - **Fine-tune when**: output style/format consistency is critical, domain vocabulary is specialised, or hallucination rate on off-the-shelf models is too high

6. **Vendor evaluation checklist**:
   - Model quality on your specific task (run offline eval, do not rely on leaderboards alone)
   - API reliability: uptime SLA, rate limits, support tier
   - Data privacy: zero retention policy, BAA availability, data residency options
   - Pricing transparency and volume discount availability
   - Model deprecation policy: advance notice, migration support
   - OpenAI-compatible API surface (reduces lock-in risk)
   - Roadmap alignment: is the vendor investing in capabilities you need?

7. **Partnership vs. licensing**:
   - **Technology licensing**: pay for access to a model weight or API; no co-development
   - **Strategic partnership**: joint development, data sharing, co-marketing; higher commitment, higher leverage
   - Evaluate: does the partner provide a distribution channel? Proprietary data? Talent access?
   - Negotiate: data usage rights, exclusivity window, model improvement sharing, SLA commitments

8. **Produce recommendation report**:
   - Recommended archetype with weighted score justification
   - Cost model at current and projected volume
   - Build trigger: the conditions under which a custom-build becomes justified
   - Risks and mitigation plan
   - Short-term (proof-of-concept) and long-term sourcing roadmap

Think step by step. Save as markdown.

---

### Further Reading

- [LLM Build vs. Buy: A Framework for Product Teams](https://www.productcompass.pm/p/llm-build-vs-buy)
- [Fine-Tuning vs. RAG: When to Use Each](https://www.productcompass.pm/p/fine-tuning-vs-rag)
- [AI Vendor Risk Assessment for PMs](https://www.productcompass.pm/p/ai-vendor-risk-assessment)
