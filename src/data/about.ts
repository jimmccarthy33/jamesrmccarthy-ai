export type AboutVenture = {
  name: string;
  role: string;
  paragraphs: string[];
};

/**
 * Founder and community work outside the operating role — kept separate from resume.ts
 * so career history stays resume-backed and this block stays personal.
 */
export const aboutVentures: AboutVenture[] = [
  {
    name: 'No Doubles Golf Co.',
    role: 'Founder and financial backer · with Jimmy McCarthy',
    paragraphs: [
      'A father-son project to build an AI golf swing analysis tool for average golfers — people who want to improve without drowning in tips, jargon, or gimmicks.',
      'We started from a shared love of the game and a simple standard: useful systems over impressive demos, trust over tactics, and building something real together.',
    ],
  },
  {
    name: 'Carevazo',
    role: 'Founder · with my wife and daughter',
    paragraphs: [
      'A family-first care coordination platform designed from the care recipient outward — not from caregiver, provider, payer, or institutional workflow inward.',
      'The mission is personal. My family lives the coordination challenge through my daughter and grandsons Van and Ozzie, through elder care as grandparents aged, and through Alzheimer\'s in our extended family. Families are experts on the people they care for. The product has to earn that trust.',
    ],
  },
  {
    name: 'Bob Miller Memorial Scholarship',
    role: 'Benefactor · with my wife and daughter',
    paragraphs: [
      'Bob Miller was my father-in-law — a lifelong educator, guidance counselor, and one of the founding faculty members at Mountain View High School.',
      'When he passed, our family created a scholarship in his name. It is not meant to recognize simply the brightest student, but a graduating senior who has worked hard to overcome adversity, shown exceptional academic improvement, and recognizes that education is an opportunity to improve themselves and their family — someone very much like Bob.',
    ],
  },
];
