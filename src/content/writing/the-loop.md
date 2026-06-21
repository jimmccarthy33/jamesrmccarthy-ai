---
title: "The Loop"
subtitle: "How work actually closes"
description: "AI strategy is measured in operating loops, not pilot counts. An operator's framework for Detect, Triage, Act, Validate, Learn, Repeat, and why closed loops beat dashboards."
pubDate: 2026-06-21
draft: false
---

# The Loop

A work order lands in the queue. Someone saw it. A status field got updated. A report went out on Friday.

The customer still does not have a technician. The invoice still does not match the quote. The follow-up still did not happen.

That is not a technology problem. It is an open loop.

I have spent most of my career inside organizations that knew what to do and still could not close. They measured. They reported. They ran pilots. They bought tools. The knowing was there. The doing was scattered across handoffs, queues, and meetings that restarted the conversation instead of finishing the work.

The loop is how you close that gap.

---

## Knowing is not doing

Every operator has lived the same failure mode. A metric turns red. Leadership asks for a plan. Someone builds a dashboard. The dashboard gets reviewed in a staff meeting. Action items get assigned. Two weeks later the metric is still red, but now there is a prettier chart explaining why.

That is not continuous improvement. That is narrative reporting with better graphics.

Continuous improvement always had a shape. Toyota. Six Sigma. Welch at GE. Build the model. Measure it. Find the gap. Close the gap. Run it again. The discipline was never the problem. The clock speed was.

What changed is that the loop can now close in hours instead of quarters. Not because process disappeared. Because the steps inside the loop got faster, and the steps that used to require a specialist got encoded so more people could run them.

AI is not a tool category. It is a velocity and loop problem. The question is not whether you have AI. The question is whether work closes.

---

## Six steps

Every closed loop I have seen in the field, in software, and in business process maps to the same sequence.

**Detect.** Something happens. A customer reports a bug. A preventive maintenance job completes. A quote comes back from a vendor. A compliance review queue fills up. Detection is not a dashboard refresh. It is a signal entering a system with an owner on the other side.

**Triage.** Not everything is equal. Some signals need immediate action. Some can wait. Some are noise. Some are edge cases that need a human who understands context. Triage is where organizations win or lose time. Manual triage at scale is where good operators drown.

**Act.** Someone or something does the work. Dispatch the technician. Pull the branch and fix the code. Run the first pass on the compliance review. Send the follow-up. Act is where most automation conversations start. It should not be where they stop.

**Validate.** Did the work meet the standard? Did the fix actually resolve the issue? Do the before and after photos match what the contract requires? Does the invoice match the approved quote? Validation is not optional. It is the proof gate. The check is not the decision. The recommendation is not the dispatch. The draft is not the release.

**Learn.** What did we find? What pattern showed up? What standard needs to be encoded so the next pass is faster and more accurate? Learning is not a retrospective deck. It is a change to how the loop runs the next time.

**Repeat.** Run it again. That is the whole point. A loop that runs once is a project. A loop that runs continuously is an operating model.

Detect. Triage. Act. Validate. Learn. Repeat.

That is the loop.

---

## Same physics, different domains

Software is where I saw the inversion first. For most of my career, build sat in the middle of the bell curve. It was the long pole. Now build compresses. A defect gets reported. It lands in Linear, or Jira, or whatever issue log you run. An agent picks it up, finds the bug, pulls a branch, runs the tests, validates the fix, and submits a pull request. Review gates still apply. The human still owns the merge. But the loop from signal to fix compresses from days to hours, sometimes faster.

When build moves that fast, the bottleneck moves. Review becomes the constraint. So you add gates. Specialized review agents. An agent finds an issue, sends it back, the engineer corrects it, resubmits. The loop runs in cycles, not in days waiting for a sprint boundary to slip.

The same pattern shows up outside the IDE. I spent years in financial services. Every piece of market content went through compliance review. Why does that review have to be entirely manual? An agent runs the first pass against policy, flags the exceptions, and routes the edge cases to the humans who understand liability and context.

Audit used to mean sampling. Sample three percent and project from there. Why sample when you can inspect one hundred percent? The challenge is not whether you find more issues. You will. That is the point. The challenge is how you review, route, and resolve what you find.

---

## The field loop

Software got there first. Facilities operations is where the loop becomes tangible for most people.

A service request comes in. Triage determines urgency, scope, and the right provider. Dispatch sends the right technician with the right skills. Follow-up confirms the work completed and the customer is satisfied. Quote review checks that pricing matches the agreement before approval. Invoice audit confirms what was billed matches what was authorized. Closed loop.

Each step had an owner. Each step had a standard. The failure mode was never that people did not care. It was that the loop broke between steps. Work sat in a queue because the next gate was manual and the humans who owned that gate were already underwater.

That is what changes when you run the loop at agent speed.

At Vixxo, the people who work with service providers and customers to identify the right technician for a repair are builders now. Trade operators on the front line. They are doing follow-up. They are checking status. They are reviewing quotes faster. They are building expert agents that help them get to a better decision faster. When they do not know the answer, they ask the question and build from there.

We run thousands of HVAC preventive maintenance cycles in a quarter. That is thousands of before photos and thousands of after photos. The old model was sample a percentage and project quality from the sample. We do not have to sample anymore. We can look at all of it. The machine compares every photo. The loop flags every anomaly. The human still owns the escalation when something does not fit the pattern.

Move the routine fast. Surface the items that need expert judgment. Spend human time on the judgment, not on the drudgery that should never have required a specialist in the first place.

---

## What breaks the loop

Most AI programs fail for loop reasons, not model reasons.

**Automation before standards.** If you cannot describe what good looks like at the validate step, you are not ready to automate the act step. You are just accelerating chaos. Encode the standard first. Then automate the routine.

**Pilot theater.** A demo that runs once is not a loop. Pilots that never connect to production systems are not loops. Measure AI strategy in operating loops, not announcement counts.

**Dashboards without decisions.** A metric that nobody owns is not detection. It is decoration. Every detect step needs a triage owner and a closure definition.

**Sampling when you could inspect.** The old world sampled because inspection was expensive. If inspection got cheap and you still sample, you are choosing to miss things on purpose.

**Open handoffs.** The most common break is between act and validate. Work gets done. Nobody confirms it met the standard. The loop opens. The customer finds out first.

When you move fast in one step, the manual steps on either side get exposed. You need more work fed into the automation because it consumes faster than you expected. Or you create a backlog at the review gate because output outran the humans who still own it. Both of those are good problems. They mean the acceleration is real. They mean you found the next gap in the loop.

---

## Human led, AI enabled

None of this works if you use AI to replace the people who carry accountability.

We are not automating the decisions humans always had to make. We are automating the decisions that were easy, repetitive, or pattern-based, so operators can spend more time on expert judgment. The technician still turns the wrench. The team still talks to the customer. The strongest engineer still defines what good enough means and owns the gate when the agents disagree.

Humans own judgment, ambiguity, empathy, escalation, and accountability. AI eliminates drudgery, improves quality, accelerates synthesis, and encodes standards. The machine handles the routine. A human owns the judgment that matters.

That is not a slogan. It is a design requirement for every step in the loop.

---

## Start with one

You do not need an enterprise AI strategy to start. You need one workflow that matters, mapped end to end.

Pick it. Name the six steps. Write down what good looks like at validate. Identify who owns triage and who owns the gate. Encode the standard your best person uses. Automate the routine passes. Put your best person on the exceptions. Measure cycle time from detect to validated close. Run it again.

Start small. Start real. Build the loop. Instrument the edge. Encode the standards.

Everyone Builds was about who participates when build compresses and the bell curve inverts. The Loop is about what they are actually running. More closed loops with integrity. More process, running faster, not less.

The companies that capture this will not be the ones that bought the most tools. They will be the ones where work closes.

What loop in your organization is still open?
