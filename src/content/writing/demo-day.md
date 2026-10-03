---
title: "Demo Day"
description: "Ninety minutes before the first golfer arrived, my son was sitting on a tee box at Torrey Pines while I fixed a bug in production. That's the story I expected to tell. It's not the story that matters."
pubDate: 2026-03-31
lane: golf
series: behind-the-build
thread: the-game-and-me
originalUrl: "https://blog.nodoublesgolfco.com/demo-day/"
draft: false
---
Ninety minutes before the first golfer arrived, I was sitting on the ninth tee box at Torrey Pines with my laptop open, fixing a bug in production.

A hotspot. The Pacific behind me. One of the most famous courses in the world. Conference attendees about to walk up and try the product for the first time.

Jimmy's demo account was throwing an error. I was trying to fix it.

That's the story I expected to tell. It's not the one that matters.

---

## The Setup

The night before, Jimmy had pitched a few innings.

Right-handed. Senior year. Regular season game. The team won. He threw well. And we had a flight to catch.

By midnight we were in a hotel in San Diego. By five a.m. we were awake. By six-thirty we were setting up on the course.

Eighteen years old. First professional conference. First demo day.

The game ended around nine. The demo started at seven-thirty the next morning. I don't know what that compression does to a person. But I know what it looked like: calm. Focused. Already thinking about setup before I was.

---

## The Panic

The account error was mine.

I had misconfigured one of the demo UIDs. Jimmy's account threw an error every time he tried to log in.

We were on the course. No office. No desk. Just a tee box and a window before the first swing.

I was heads-down in the fix.

Jimmy stopped me.

---

![](https://storage.ghost.io/c/e5/40/e5408e4a-cfb5-437f-9aab-1c54da922393/content/images/2026/03/2026031709033431.jpeg)

First demo day. First professional conference. Explaining AI swing analysis to a stranger on one of the most famous courses in the world. Eighteen years old.

## The Pivot

He saw something I didn't.

We were set up to capture swings and run analysis in real time. That's what the product does. But analysis takes a few minutes, and the golfers were going to be moving through quickly. Demo day isn't a lesson. It's a taste. You swing, you see something, you leave with your contact info and a memory.

Seventy-plus golfers running full analysis on the course would create a bottleneck. The experience would slow down. Pace of play would suffer. And pace of play is sacred.

Jimmy's solution: capture the swings and contact info now. Run the analysis later.

Clean experience on the course. Full processing back at the hotel. Results emailed that night.

It was smart. It protected the golfer. It was his idea.

---

I was still thinking about the bug. He was already thinking about the user.

---

## The Interview

Later that day, back at the hotel, Jimmy had a job interview.

First professional interview of his life. Over the phone. I was in the same room — pretending to work, trying not to listen, listening anyway.

I heard the pauses. The searching for words. The "let me think about that." The beat where he was clearly figuring out how to phrase something he'd never been asked before.

I know those pauses. They feel longer on the inside than they sound on the outside. You don't know what you're saying until you say it.

He nailed it anyway.

Not because the answers were perfect. Because he stayed in the call. He didn't fill the silence with noise. He sat in the discomfort, found the words, kept going.

Listening to that from across the room is a strange thing.

---

## The Flight Home

He flew home alone.

I stayed for the second day of the conference. He took a flight back to Arizona by himself. First time.

Two days earlier, he'd been on the mound. Now he was walking through an airport terminal — checking in, finding his gate, boarding — without anyone to follow.

One weekend. Multiple firsts.

---

## The Real Point

This isn't a product story.

There's a product angle. The demo ran. Seventy-plus swings. The workflow Jimmy designed kept the experience smooth. And he surfaced a problem we didn't know we had — I'll get to that.

But the point isn't the demo.

The point is watching a slightly introverted eighteen-year-old move through pressure situations and lead. Not survive. Lead.

---

![](https://storage.ghost.io/c/e5/40/e5408e4a-cfb5-437f-9aab-1c54da922393/content/images/2026/03/DSC_8186_Original.jpeg)

I've watched him in pressure before.

Last year. State semifinal. His team was losing. Sixth inning. Two runners on. No outs. If the run on third scores, they lose by run rule. Season over.

The coach brought him in.

The opposing team's fans started yelling. "Jimmy's a bitch." Over and over. Loud enough that I could hear it from my seat. I knew he could hear it too.

He got out of the inning. Three outs. No runs. The boys came back and scored a few. They still lost. But not like that.

Afterwards I asked him about it. The chanting. He kind of chuckled. Said he heard it. Didn't seem to land the way they wanted it to.

The coach told him right after the game — he brought Jimmy in to feel that pressure. To know what it was like. So he'd be ready for it next year.

That's the kind of moment that shapes a person.

He's not a loud kid. He's not the one talking in the dugout. But when the pressure comes, he doesn't leave. He stays in it. Bases loaded, needs a ground ball, double play to get out of it. Sometimes he puts those runners on himself — hits a guy, walks someone he shouldn't have. Sometimes it's an error behind him that wasn't his fault. Doesn't matter. The pressure doesn't get to him. He stays in it.

His team knows it. They have his back because he has theirs.

He did the same thing for me on demo day. I built the bug. It was my fault. But he had my back — the same way he has his teammates'.

---

## Getting Out of the Way

There's a moment when your kid stops learning from you.

Not stops learning. Stops learning from *you*.

They start learning from the room. From the moment. From the thing in front of them. You're not teaching anymore. You're watching.

And if you're doing it right, you're getting out of the way.

That's what demo day felt like.

I had a problem. He had a better solution. I was in my head about the bug. He was already past it — thinking about the user, protecting the experience.

That's not a father teaching a son.

That's a son leading a father through it.

---

No Doubles isn't just built on swing data.

It's built on exactly this. A father and son building something together. Figuring out who leads and who follows. Watching those roles shift in real time.

---

## The Payoff

Here's the product angle.

Jimmy's workflow — capture now, process later — meant we ran every swing through the analysis pipeline that night at the hotel. Seventy-plus swings. All at once. Same model. Same prompt.

A pattern emerged.

The analysis was calling the same faults over and over. Hip issues. Early extension. Standing up through impact. These are real faults. Golfers have them. But the frequency didn't look right. The model was over-diagnosing — finding a problem because the prompt expected it to find one.

Jimmy's instinct on the course had bought us time to process everything in batch. That batch processing made the pattern visible. If we'd run analysis one-by-one in real time, spread across the morning, we might not have seen it.

His workflow surfaced a product flaw we didn't know existed.

His instinct was right. The pivot was right. He was right.

---

## The Bookend

He pitched a game the night before.

On a plane by eleven.

On a golf course by six-thirty the next morning, redesigning a demo workflow on the fly.

First professional interview that night, over the phone, from the hotel room.

First solo flight home the next day.

One weekend. Multiple firsts. I watched most of it from ten feet away, doing nothing.

---

That's the story.

Not the bug. Not the demo. Not even the product flaw we found.

The story is watching your kid move through the pressure, find the answer before you do, and lead you somewhere you didn't know you were going.

The story is getting out of the way.

And realizing that the thing you're building isn't just for golfers.

It's for this.
