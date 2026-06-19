---
title: "Everyone Builds"
subtitle: "An operating view on AI"
description: "AI-native operating models let more people build at startup speed inside incumbent organizations. An operator's manifesto on continuous improvement, inverted bottlenecks, and human judgment elevated."
pubDate: 2026-06-19
draft: false
---

# Everyone Builds

Cursor started with four friends. MIT computer science backgrounds. They set out to build a coding harness using AI-generated code. They were all coders. They were all builders. The company stayed lean. Small team. And everyone at Cursor is a builder.

That is a model worth paying attention to.

Not because every company should look like a startup in San Francisco. Because the lines are blurring everywhere. Traditional roles are shifting into something new. With AI, and with the tools that exist now, whether that is Cursor, Claude Code, Copilot, Codex, or whatever comes next, you are watching non-software engineers build software. You are watching seasoned software engineers like me, who have not written production code in twenty-five years, build again.

It is a fun time. There is tremendous opportunity here. Knowledge is at your fingertips. If you do not know something, you ask the question. If you do not know how to do something, you ask the tool. You get a sound answer. You iterate. You build.

Everyone Builds.

---

Jack Dorsey is out there pushing a related idea at Block. I think Dorsey is a little out there. I am not advocating for the Dorsey model as a prescription. It is something to look at and conceptually align with. Individual contributors who build and operate. Directly responsible individuals who own a specific outcome. Player-coaches who still build while they develop the people around them.

We are not in Dorsey's nirvana yet, and I am not arguing we should be. What does resonate is where the line between builder and engineer blurs. The product manager who knows what she wants to build can actually build it. The operator who knows the workflow can shape the tool. The shape of who does what moves over time.

That matches what I see in the field and in software every week.

---

## Continuous improvement, finally at speed

I have chased continuous improvement my whole career. The Toyota way. Six Sigma. Jack Welch driving repeatable process at GE. Build the model. Measure it. Find the gap. Close the gap. Run it again.

That discipline is not going away. If anything, it matters more now.

What changed is speed and scale. The concept of running those loops at the pace we can run them today was not available five years ago. Process engineering used to mean months of study, a consulting engagement, and a rollout calendar. Now the loop can close in hours. Sometimes before the meeting that would have kicked off the old project even gets scheduled.

Take a customer reporting a bug or an issue. You can go from that signal to automatic review, resolution, pull request, and deployment — without a human touching the work. It happens in relative minutes, not relative quarters. I find that absolutely fascinating. The potential for that loop, applied anywhere you have a defined process, is endless.

That is exciting. Continuous improvement is not a poster on the wall anymore. It is something you can execute.

---

## Software: the life cycle did not die. It accelerated.

For most of my career, the software development life cycle had a shape everyone recognized. An idea lands with product. Product reviews it, prioritizes it, writes the user story or the epic. Design discussions happen. Prototyping happens. Work enters the backlog. A sprint gets scheduled. Engineers break it down. Eight to twelve months later, depending on the organization, you have the feature, the module, the new platform, or the new line of business.

Build sat in the middle of the bell curve. It was the long pole. Two-week sprints. Pods. Capacity planning. Handoffs. That is where the calendar went, because build was slow. If you failed review, or the sprint failed to deliver and the story got pushed, your timelines extended. Costs went up with them.

Build is not the long pole anymore. Not always. Not even often.

We are moving work that used to take a pod of engineers a two-week sprint into hours or overnight. A single engineer working with an agent swarm can produce at a pace Gary Tan at Y Combinator has been public about. Ten times productivity in software engineering is not a fantasy anymore. It is happening. Tan built gstack around that reality. Think, plan, build, review, test, ship. A virtual team with roles. CEO, engineering manager, designer, reviewer, QA, security. Structure. Gates. Process. He is shipping faster than he ever has, and he is not skipping the discipline to do it.

BMAD follows the same logic from a different angle. Breakthrough Method for Agile AI-Driven Development. Real agile. Product manager, architect, developer, scrum master, QA. Agent swarms running iterative development at automated speed. I am using BMAD at Vixxo and on multiple side projects. You are not abandoning agile. You are not abandoning the software development life cycle. You are running it at a clock speed the business always wanted but never had the tooling to support.

Speed does not mean no process anymore. Speed does not mean less process.

At Vixxo, our software engineers are taking problems that would have taken months or years and delivering new platforms in months. They are doing code upgrades and version upgrades that would have taken six to twelve months and compressing them to hours. I am not telling you build is free. I am telling you build moved.

---

## When build moves, the bottleneck moves

I was at the Cursor Compile Conference Preview this week — the night before the SpaceX acquisition of Cursor was announced. Michael Truell and others talked about the same shift from the builder side. For years, most of the time in a software program sat in the middle of the curve, in build. Now that curve is inverting. Build is the fastest part. Design and review are where the time piles up.

That matches what we live inside Vixxo and what I live in my own work.

When build compresses, review becomes the constraint. Every human reviewing every line of code does not scale at this pace. So you start pushing the envelope. Specialized review agents. Multiple gates. An agent finds an issue, sends it back, another agent or the engineer corrects it, resubmits. That loop runs in cycles and iterations, not in days waiting for a standup and a sprint boundary to slip.

You can get to one hundred percent code coverage. You can run multiple peer reviews. They may be agent peer reviews. When the engineer is ready to push a pull request, the accountable human can have their own agents trained on what that person looks for. Standards. Adherence. Conflicts. Direction. Drift. The human still owns the merge. The machine does the first passes at a speed no team of reviewers could match manually.

This is where the self-healing loop starts to take shape. A defect gets reported from an end user. It lands in Linear, or Jira, or whatever issue log you run. An agent picks it up. It reviews the report, finds the bug, pulls a branch, fixes the code, runs the tests, validates the fix, potentially runs a regression suite, and submits a pull request. Review gates still apply. The human still owns the merge. But the loop from signal to fix compresses from days to hours, sometimes faster. That is continuous improvement at agent speed.

The same physics apply outside the IDE. I spent years in financial services. Every piece of market content went through compliance review. Why does that review have to be entirely manual? Why cannot agents run the first pass against policy, flag the exceptions, and route the edge cases to the humans who understand context and liability?

Audit used to mean sampling. Sample three percent of transactions and project from there. Why sample when you can inspect one hundred percent? The challenge is not whether you can find more issues. You will. That is the point. The challenge is optimizing how you review, route, and resolve what you find. Those are good problems to solve.

---

## Business process: same loop, same bottleneck, same opportunity

Software is where the inversion showed up first. It is not where it stops.

Any well-defined business process can be run with AI agents at agent speed. You follow the process. You do not abandon it. You elevate throughput. Triage before dispatch. Quote review. Follow-up on open work. Status checks. Preventive maintenance validation. The steps that used to depend on someone having time between calls.

At Vixxo, the people who work with service providers and customers to identify the right technician for a repair or a project are builders now. Plumbers, electricians, HVAC technicians, coffee technicians. Trade operators on the front line. They are building agents. They are doing follow-up. They are checking status. They are reviewing quotes faster. They are building expert agents that help them get to a better decision faster. They move with more speed, more intention, and more clarity, because when they do not know the answer, they ask the question and build from there.

We have thousands of HVAC preventive maintenance cycles in a quarter. That is thousands of before photos and thousands of after photos. The old model was sample a percentage and project quality from the sample. We do not have to sample anymore. We can look at all of it. The machine can compare every photo. The loop can flag every anomaly. The human still owns the escalation when something does not fit the pattern.

That is the same pattern as code review at scale. Move the routine fast. Surface the items that need expert judgment. Spend human time on the judgment, not on the drudgery that should never have required a specialist in the first place.

What you will find, in software and in business process, is that when you move fast in one area, the manual processes on either end of that automation get exposed. You need more work fed into the automation because it can consume faster than you expected. Or you create a backlog on a manual review step because the output outran the humans who still own the gate. Both of those are good problems to solve. They mean the acceleration is real. They mean you found the next gap in the loop.

---

## Human judgment, elevated

None of this works if you use AI to replace the people who carry accountability.

We are not accelerating the decisions humans always had to make. We are accelerating the decisions that were easy, repetitive, or pattern-based, so operators and engineers can spend more time exercising expert judgment. The check is not the decision. The recommendation is not the dispatch. The draft is not the release.

The technician still turns the wrench. The team still talks to the customer. The strongest software engineer still defines what good enough means and owns the gate when the agents disagree. Early adopters get to build. Strong performers get to encode the standard. The middle of the organization moves when someone demos real work on a real problem, not when leadership sends another strategy deck.

Knowledge stops being the barrier. Willingness to learn becomes the barrier. That is a good trade. It means more people can participate. It means expertise elevates instead of getting buried in repeat work.

Technology is fun again. I mean that. When the person closest to the problem can build the solution, outcomes get closer to the people who understand them.

---

## The bet

Everyone Builds is how an organization keeps up when build compresses and the bell curve inverts. More people planning, designing, reviewing, and learning at the speed the loop demands. More closed loops with integrity. More process, running faster, not less.

Start small. Start real. Pick one workflow. Encode the standard. Put your best person on the review gate. Show the before and after. Feed the automation. Clear the manual backlog on the other side. Run it again.

We are in an unprecedented phase of speed. Continuous improvement is not a theory anymore. It is executable. The companies that capture it will not be the ones that bought the most tools. They will be the ones where everyone builds.
