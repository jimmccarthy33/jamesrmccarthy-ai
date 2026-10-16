---
title: "Three Weeks In, I Broke $26 Million"
description: "1998, three weeks into a first software job on medical claims: own the mistake in the room."
pubDate: 2026-10-16
lane: facilities
series: leadership
keywords:
  - "1998"
  - leadership
  - first software job
  - medical insurance claims
draft: false
---

Monday. 7 a.m. I was the first one in.

I pulled up the batch reports. They told you everything. What processed. What was accepted. What failed, and why. What got rejected.

Most of my claims were accepted.

I was thrilled. It was the first piece of code I had ever released to production. I was three weeks into my first job in software.

Then I looked at the dollar amounts.

They were wrong.

## Before that Monday.

1998. I was 24 years old, straight out of the Army, and I had just moved my wife and me from Arizona back to Buffalo.

It took me six weeks to find a job. We burned through our savings. When I started, I had maybe one paycheck behind me.

The job was junior analyst at a company that processed medical insurance claims. Junior analyst meant junior programmer. I had the technical aptitude. I had written a few small scripts. I had never built anything that mattered.

The system ran in batches. Billers at our customers' hospitals entered claims into our front-end software. We processed that data and filed it electronically on their behalf, on a form called the UB-92. Many claims were set to pay almost immediately.

My first project was the mapping code for inpatient claims. Medicare claims, for hospital customers in New York.

The code went live on Thursday. The batches ran over the weekend.

## What did I find on Monday morning?

One of the Medicare companies had failed a couple of my batches. That was the first thread.

I pulled it. I found the bug.

A regular expression in the Perl code I wrote. It was supposed to calculate the number of days in an inpatient stay. Instead, it put a null in that field.

Some of the claims went through fine. The insurance company ignored the number of days and paid on the claim total.

Others did not. Those insurers accepted the claim but not the total. They recalculated it themselves, using the number of days and the daily rate for the stay. And the number of days was nothing.

Zero nights.

They paid for the incidentals and nothing else. A claim that should have paid in the range of $100,000 paid about $15,000.

I added it up.

Twenty-six million dollars in claims, paid incorrectly. Short paid or partly paid.

I started flipping out. I think it probably lasted a minute, and then I stopped feeling sorry for myself and got to freaking work.

## What did I do in the first hour?

I fixed the code.

It took about thirty seconds. That's how dumb the error was. A simple fix, and one I should have caught myself. I corrected it and put it back in the repository.

Then I walked into my manager's office.

It wasn't even 7:30.

Then the real work started.

## There was no other way.

Manually. This was 1998. There was no button for it. It was phone call after phone call, most of it in a single day.

For some batches I called the insurance companies and asked them to reject the entire batch so I could resubmit. In some cases they did. We caught some early.

For many, it was too late. The claims had already been set to pay. With the systems we had in 1998, that was irreversible. Those needed amended claims.

We brought in the QA manager. The development director. The senior account VP who owned the customers. I got on the phone with some of those customers myself and explained exactly what happened.

Then we found the bigger risk. Medicare could read these as fraudulent claims. That meant audits for the hospitals. These were our customers. We wanted to get out in front of it.

So I worked with account management and drafted a letter. One to each Medicare company. One to the CFO of every hospital and medical office we had filed an incorrect claim for. The letters told them what happened and how we were fixing it, and gave each CFO a copy of the note we sent to Medicare.

All of that, in a single day.

## What happened at 5 p.m.?

We were called into the VP's office. Jeff.

Everyone was there. Two directors, one senior and one under him. My manager. The QA director. The principal developer who reviewed the code. The local HR director. The account VP I had worked with all day.

I was sitting in a chair on the right side, facing his desk. Don't ask me why. I remember it clearly. Everyone else was standing.

Jeff asked a simple question. "What happened?"

Crickets.

Dead silent. Nobody said a word. A room full of senior people, every one of them with a stake in how that code got out the door, and nobody said a word.

In my head it lasted forever. It was probably a few seconds.

I raised my hand.

He nodded for me to talk. I told them the error I made, how I made it, why, how I found it, and what I did next.

"What are we doing about it?"

Crickets.

Again, nothing. The silence pressed on the room. I felt it on my skin.

I raised my hand again. He nodded. I walked them through how we were reprocessing, how we had gotten some batches rejected, how we were filing amended claims for the ones that paid wrong, and how we were fixing it for each customer.

Then Jeff leaned in. He named a couple of the customers.

"What are we telling them? What is Medicare going to do about this? There's a risk of audit."

Crickets. A third time.

I'll tell you what I thought. I thought, they're letting the new guy hang. This isn't an accident. Somebody is going to take the heat for this, and it's going to be me.

I raised my hand a third time. I told him I had worked with Tony, the senior VP responsible for those customer relationships, and that the two of us had already drafted the letters. One to each customer CFO. One to Medicare. Taking responsibility, and asking them not to audit our customers.

I don't remember exactly how the meeting ended. I went home.

## What did I tell my wife?

"I hope you like my parents. I think we're moving in with them."

I was nearly certain I would be fired. I could not afford rent. We had no savings. I had been paid once.

I went to bed.

## What happened the next morning?

Nothing.

I walked in expecting HR. Nobody called.

Nothing the day after that either.

For three months, I waited for the call. Every morning, I came in, did my job, tried to learn, stayed humble, and worked as hard as I could. That is what my parents taught me. It is what the Army taught me.

Three months. Then I was called into Jeff's office.

The senior director was there. The HR director was there. And I thought, wow. It took them this long.

They had won a new contract. They needed to build a development team. They wanted me to lead it.

I would hire ten junior software engineers.

Nobody said a word about the error. They never mentioned my failure.

I joke that they had to promote me to get me to stop writing code. It's a decent joke. The truth is better.

## Whose fault was it, really?

Mine. I wrote the code. The error is mine, and I own it. I have never pretended otherwise.

But I did not know at 24 what I know now.

After a career in technology, running software and operations, I understand something I could not see then. A junior developer is not supposed to be the last line of defense. There are checks and balances built to catch exactly this kind of error, and they failed.

- **Code review failed.** A senior developer reviewed my code, and it went through.
- **QA failed.** It should have been caught before it ever reached production.
- **Management oversight failed.** My manager and the release process let it ship.

Any one of them could have stopped it. None did. My code should never have been released.

I wrote the bug. The system let it reach $26 million of claims.

I didn't know any of that on the Thursday it shipped. What I knew on Monday was what to do next.

## They saw what I had been taught.

It was not natural talent. It was training. And it started before the Army did.

Before I left for basic training, my father gave me advice. He understood how hard it was going to be, and he wanted to help me get through it.

"If you make a mistake, admit it. Tell the drill sergeant you own it. Don't try to hide from it. It only gets worse. Admit it, take your punishment, and move on."

That stuck with me. It was simple. And on a Monday morning in 1998, three weeks into my first software job, it was exactly what I did.

Plans fail. Things don't go as expected. The mission goes on, and you adapt and overcome. That is what the Army taught me. I wasn't being brave. I was doing exactly what I had been taught to do.

## Somebody fails, and I look.

I love success. I love to watch people win.

But I watch people when they fail. That is when you find out who they are.

Do they own it, or do they look for someone to blame? Where do they look for support? Do they freeze, or do they ask how to fix it?

I coached competitive baseball for a long time. I always watched the pitcher who walked a batter or gave up a home run. The kid who struck out. The fielder who made an error. What do they do next? How do they carry themselves? Who do they look at?

That's the moment. That's where the coaching is. That is the learning moment.

I had a list of people I could have pointed at. The senior developer who reviewed my code. QA. My manager. All of them had a part in how that code got out the door.

I blamed one person. Me.

Then I went to work on the solution, and I worked like hell.

## I kept the story.

I tell it to every group of interns I have ever worked with. I tell it in interviews.

It happened early in my career. In the grand scheme it was a fixable failure. But it was big to me. At 24, three weeks in, with no savings, it was the biggest thing in the world.

## They bet on me.

A vice president, a room full of directors, and an HR leader sat in an office on a Monday evening and watched a 24-year-old explain how he'd put $26 million into the wrong place.

They could have let me go. They would have been justified.

They gave me a team instead.

Thank you, Jeff.

Jim
