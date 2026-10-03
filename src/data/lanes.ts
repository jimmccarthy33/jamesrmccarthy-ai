import { site } from './site';

export const laneIds = ['ai', 'golf', 'care', 'facilities'] as const;

export type LaneId = (typeof laneIds)[number];

export type GolfThreadId =
  | 'the-game-and-me'
  | 'the-builder'
  | 'why-instruction-fails'
  | 'how-learning-actually-works';

export const golfThreads: { id: GolfThreadId; title: string; dek: string }[] = [
  {
    id: 'the-game-and-me',
    title: 'The Game and Me',
    dek: 'The game, the people, and what it has meant at home.',
  },
  {
    id: 'the-builder',
    title: 'The Builder',
    dek: 'Making No Doubles, and making things again.',
  },
  {
    id: 'why-instruction-fails',
    title: 'Why Instruction Fails',
    dek: 'Tips, models, and bodies that cannot run the software.',
  },
  {
    id: 'how-learning-actually-works',
    title: 'How Learning Actually Works',
    dek: 'What holds up on the course, not just on the range.',
  },
];

export const lanes: Record<
  LaneId,
  { title: string; description: string; path: string }
> = {
  ai: {
    title: 'AI',
    description:
      'Essays on tools, decision velocity, and what changes when more people can build.',
    path: '/ai',
  },
  golf: {
    title: 'Golf',
    description:
      'Behind the Build, the No Doubles series. The game, the building, and how golfers actually improve.',
    path: '/golf',
  },
  care: {
    title: 'Care',
    description:
      'Carevazo and the Bob Miller Memorial Scholarship. The product writing stays on Carevazo.',
    path: '/care',
  },
  facilities: {
    title: 'Facilities',
    description: `${site.credential} ${site.thesis}`,
    path: '/facilities',
  },
};
