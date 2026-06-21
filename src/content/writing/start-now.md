---
title: "Start Now"
subtitle: "AI readiness is loop readiness, not warehouse readiness"
description: "You do not need eighteen months of data cleanup before AI can run. Cross-industry proof that runtime intelligence, fuzzy matching, and MCP connectors beat consulting-led MDM programs."
pubDate: 2026-06-21
draft: false
---

# Start Now

The AI readiness deck always ends the same way. Phase zero is eighteen months of data cleanup. Phase one is a data governance council. Phase two is a harmonized golden record in a lake somewhere. Phase three, finally, is a pilot.

By the time the pilot starts, the market moved.

I have sat through enough of these programs to recognize the shape. Assess. Cleanse. Harmonize. Migrate. Then, maybe, automate. The slide deck always shows a tidy funnel from messy sources on the left to a single source of truth on the right, with AI waiting patiently at the end like dessert.

That is not AI strategy. That is a consulting engagement with a chatbot on the last slide.

---

## The old economics made the playbook rational

For a long time, the playbook made sense. Matching records required exact keys. Inspecting documents required humans. Sampling was cheaper than looking at everything. If you wanted analytics at scale, you ETL'd data into a warehouse, defined the schema up front, and treated the lake as the prerequisite for anything intelligent downstream.

Golden records were not vanity. They were how you kept the same customer from existing five times across five systems. Master data management was how you kept invoice matching from failing every time a vendor abbreviated a store name differently.

Rip-and-replace was expensive, so organizations learned to plan big before they moved. That was rational when the cost of inference was high and the cost of storage and schema design was the bottleneck.

What changed is not that clean data stopped mattering. What changed is where and when the cleaning happens.

---

## Inference moved to the edge

Today, a meaningful share of data work can happen at read time. An agent can open a PDF, a scan, an email attachment, or a row in a legacy table and extract the fields it needs for the task in front of it. It can fuzzy-match a policy number, a supplier name, or a product description against a reference file that is itself imperfect. It can compare a purchase order to an invoice when the SKUs do not line up exactly. It can route the ambiguous cases to a human who understands context.

That is a different architecture than normalize everything first, then automate.

The loop from [The Loop](/writing/the-loop/) still applies. Detect. Triage. Act. Validate. Learn. Repeat. The difference is that triage and act no longer assume pristine inputs. The agent meets the data where it lives, applies judgment, and leaves an audit trail at the validate step. Cleanup becomes a byproduct of running loops, not a gate that blocks every loop from starting.

Everyone Builds was about who participates when build compresses. The Loop was about how work closes. Start Now is about what you stop waiting for.

---

## Healthcare: shared rails, broken records

Healthcare has spent years on interoperability. CMS rules created shared technical rails between payers and providers. That is real progress. It is also not the same as shared truth inside a provider organization.

Duplicate patient records still show up. Diagnosis and procedure coding is still inconsistent. Authorization history still lives in disconnected systems. Clinical narrative still sits in notes that were never structured for downstream use. If you wait for the EHR to become clean before you automate prior authorization, you will wait forever.

The operators making progress start at one clinic, not one enterprise data model. They pull structured data through FHIR APIs where it exists. They use clinical NLP on the unstructured notes where it does not. They assemble the packet, flag the gaps, and route medical necessity judgment to a human who knows the case. They improve the workflow in production instead of commissioning another data architecture study.

The mess does not disappear. It gets read, triaged, and validated inside the loop.

---

## Legal: connect, do not rebuild

Legal teams know the graveyard. Thousands of legacy contracts in SharePoint, shared drives, email threads, and scanned PDFs from decades of deal-making. The digital transformation project always starts with the same bottleneck: someone has to read every file and type metadata into the new CLM before the new CLM is useful.

That is manual labor wearing a strategy hat.

The teams getting out of it connect to the repository in place. No migration project. No six-month inventory phase. The agent reads the files where they already live, extracts parties, dates, obligations, renewal windows, and risk flags, and attaches a confidence score to each field. A reviewer validates side by side with the source document. One healthcare enterprise extracted structured data from eight thousand legacy vendor contracts in three weeks for a CLM migration that manual review had scoped at six months.

Not perfect extraction on day one. Good enough to run the loop, with humans owning the exceptions.

---

## Insurance: integrate over legacy, not after it

Insurance claims are document problems wearing workflow clothes. Photos. Handwritten notes. Police reports. Repair estimates. Medical records. Each claim arrives as a different package from a different channel, and the core systems that hold policy and billing data were never designed to ingest that variety cleanly.

The old answer was another intake team. The better answer is an integration layer that sits over Guidewire, Duck Creek, CRM, and whatever else you already run. Intelligent document processing extracts the fields. Fuzzy matching links the claim to the policy record even when the number on the form does not exactly match the number in the core system. Low-confidence extractions go to an adjuster with a pre-populated summary. Straightforward claims move faster. Complex claims still get human judgment.

Production case studies report classification across a dozen document types at high accuracy, field-level confidence scores, and automated triage that routes only the exceptions. None of that required replacing the core suite first.

---

## Banking: analysts validate, they do not read

I spent years in financial services. The compliance problem looks like a data problem until you watch how the work actually gets done. A corporate client file is hundreds of pages, multilingual, non-standard, full of tables and footnotes that do not fit a template. KYC analysts were hired to read, not to decide.

A global tier-one bank ran a client due diligence modernization without ripping out its existing KYC platform. Layout-aware extraction pulled required fields from complex documents inside their AWS environment. Structured outputs fed the workflows they already had. Analysts shifted from reading every page to validating extracted fields and investigating exceptions.

That is the pattern. The machine does the first pass at scale. The human owns the gate when liability and context matter. You do not need a bank-wide data lake before you run that loop on KYC refresh or onboarding packets.

---

## Retail: real AP data is never clean

Retail accounts payable is where the golden-record fantasy goes to die. The same store appears as Santa Monica, Santa Mon, and SM on different invoices. The supplier's item code is not your SKU. The invoice shows a twelve-pack; the goods-received record shows a twenty-four-pack; the physical quantity is the same but the line-level join fails.

Exact-match automation breaks immediately because real-world AP data is never exact.

Grocery operators processing tens of thousands of invoices a month use configurable fuzzy lookup against reference tables, with thresholds tuned to catch abbreviations without creating false matches. Catalog harmonization pipelines combine vector similarity for speed with AI classification for ambiguous pairs. The AP clerk still owns the exception when pack size, substitution, or catch-weight logic does not resolve automatically.

You do not wait for a perfect product catalog. You run matching with tolerance, inspect the misses, and encode the standard your best clerk already uses.

---

## Entity resolution without the MDM program

The same pattern shows up everywhere matching matters. Block the search space so you are not comparing every record to every record. Apply fuzzy logic for typos, formatting, and phonetic variation. Use a model to adjudicate the borderline cases humans used to fight over in spreadsheets.

Cloud providers now ship entity resolution with Levenshtein, Soundex, and cosine similarity built in, configurable thresholds, no custom preprocessing required. Research pipelines combine semantic embeddings with deterministic fuzzy verification and report high recall on real-world linkage problems running on standard infrastructure.

The math of matching changed. The consulting timeline often did not.

---

## What still breaks

I am not arguing that data quality is irrelevant. I am arguing that enterprise-wide cleanup is a bad reason to delay every AI workflow.

Some problems still need durable master data. Patient identity at scale. Regulatory reporting to a defined golden source. Audit trails that must survive examination. Security boundaries around PII and access control. Those are real. They are also usually narrower than the "clean everything first" deck implies.

What fails is automating act without validate. If you cannot describe what good looks like at the proof gate, you are not ready to accelerate anything. You are accelerating chaos. Garbage in, garbage out still applies when nobody owns the exception queue.

Standards at validate. Not perfection in the warehouse.

Targeted hygiene inside a running loop beats a multi-year program that never reaches production.

---

## Connect first

If the alternative to a data lake is not "do nothing," what is it?

Connect your agents to the systems you already run.

The Model Context Protocol is an open standard for that connection. An MCP host is the agent. An MCP server exposes tools, resources, and prompts from your ERP, CRM, ticketing system, document store, or internal API. Instead of writing a bespoke integration for every agent and every system, you speak a common protocol. Microsoft is shipping Dynamics 365 ERP MCP servers for exactly this reason: agents that can execute business operations without a custom connector farm for every use case.

The operator pattern I recommend is boring on purpose.

Start read-only. Pick one workflow that matters. Build or deploy an MCP server, or a governed tool wrapper if MCP is not available yet, that lets the agent query live data where the work actually happens. Encode the validate standard. Put a human on the gate. Log what the agent accessed and what it proposed. Expand write scope only with explicit approval.

Watch for the same trap in a new costume. A vendor who sells you a unified harmonization layer that must be populated before your MCP server can talk to anything has rebuilt the data lake slide with different fonts. Prefer thin connectors per system plus agent-side inference over another eighteen-month consolidation program.

I run my own assistant this way. Read-only connectors over email, calendar, and repo scripts first. Approval gates before any write. The agent meets messy real inboxes and real files. It does not wait for me to migrate my life into a pristine database.

Your operation already has a language. The agent should learn to speak it, not wait for you to translate the whole company into a new one.

---

## Start with one

You do not need an enterprise AI strategy to begin. You need one loop, one connector, and one validate gate.

Pick the workflow where manual reconciliation is obviously expensive. Connect the systems that hold the inputs. Let the agent extract, match, and recommend at runtime. Measure cycle time from detect to validated close. Capture what the loop learns and encode it for the next pass.

The company selling a data cleanup engagement before AI is usually selling consulting. The company shipping an MCP server over your existing stack is selling leverage.

Start small. Start real. Connect first. Run the loop on the data you have, not the data you wish you had.

What workflow are you not starting because someone sold you a cleanup program first?
