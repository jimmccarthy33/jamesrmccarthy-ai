export type AboutVenture = {
  name: string;
  role: string;
  paragraphs: string[];
};

/**
 * Founder and community work outside the operating role. Kept separate from resume.ts
 * so career history stays resume-backed and this block stays personal.
 */
export const aboutVentures: AboutVenture[] = [
  {
    name: 'No Doubles Golf Co.',
    role: 'Founder and financial backer · with Jimmy McCarthy',
    paragraphs: [
      'No Doubles is a father-son project built for average golfers who want to improve without tips, jargon, or gimmicks. Under the hood it runs a full end-to-end video pipeline: MediaPipe motion analysis, biomechanical swing mathematics, AI-supported interpretation, and golf mobility integration for restricted and adaptive movement.',
    ],
  },
  {
    name: 'Carevazo',
    role: 'Founder · with my wife and daughter',
    paragraphs: [
      'A family-first care coordination platform designed from the care recipient outward, not from caregiver, provider, payer, or institutional workflow inward.',
      'The mission is personal. We live it through my daughter, her husband, and our grandsons, and through elder care as grandparents aged. Families are experts on the people they care for. The product has to earn that trust.',
    ],
  },
  {
    name: 'Bob Miller Memorial Scholarship',
    role: 'Benefactor · with my wife and daughter',
    paragraphs: [
      'Bob Miller was my father-in-law, a lifelong educator, guidance counselor, and one of the founding faculty members at Mountain View High School.',
      'When he passed, our family created a scholarship in his name. It is not meant to recognize simply the brightest student, but a graduating senior who has worked hard to overcome adversity, shown exceptional academic improvement, and recognizes that education is an opportunity to improve themselves and their family, someone very much like Bob.',
    ],
  },
];
