export type TrackRecordItem = {
  number: string;
  headline: string;
};

/**
 * Home-page track record — one line each, career arc (early → recent).
 * DHL → Pearson → VEREIT → Vixxo. Not labeled chronological; order carries it.
 */
export const trackRecord: TrackRecordItem[] = [
  {
    number: '01',
    headline:
      'DHL M&A integration — Airborne data center consolidation, DHL Mexico, U.S. move San Francisco to Scottsdale, five-nines data centers and automated sort in Pennsylvania and Riverside',
  },
  {
    number: '02',
    headline:
      'Pearson SuccessNet product turnaround — led operating infrastructure for the K-12 platform relaunch (2007)',
  },
  {
    number: '03',
    headline:
      'VEREIT private-to-public transition — $3.5B REIT to $27B public platform; FINRA broker-dealer environment, 26 Salesforce applications',
  },
  {
    number: '04',
    headline:
      'Public-company CIO through restatement and SOX remediation — nine material weaknesses closed, six boards',
  },
  {
    number: '05',
    headline:
      '$495M P&L on a $600M+ platform — 2M+ work orders a year, 3,500+ service providers, 150,000+ technicians',
  },
  {
    number: '06',
    headline:
      'VixxoLink — brought in to deliver a program and product turnaround; more than two years late and over budget, launch in nine months',
  },
  {
    number: '07',
    headline:
      'VITA — technician virtual assistant in the field, raising proficiency and daily service capacity across the network',
  },
  {
    number: '08',
    headline:
      'AI-native facilities operating system in under three months; legacy scheduling rebuilt in a four-hour working session',
  },
  {
    number: '09',
    headline:
      'Expanded the operating model to run and control performance across the full service-provider network',
  },
  {
    number: '10',
    headline:
      '2.5 points of operating margin and $5M+ in structural savings through integration discipline and cost programs',
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const resume = {
  summary:
    'Operations executive leading one of the few genuine AI-native operating-model transformations in hard services. I own a $495M P&L within a $600M+ technology-enabled facilities platform. Over two decades I have scaled complex, service-based businesses in private-equity-backed and public-company environments — from M&A integration and five-nines infrastructure to public-company turnaround and AI-native operating systems shipped in months, not years.',
  /** Most recent first — used on About page */
  roles: [
    {
      company: 'Vixxo',
      title: 'Chief Operating Officer (formerly CTO and Chief Technology & Supply Chain Officer)',
      period: '2019 – Present',
      location: 'Scottsdale, AZ',
      bullets: [
        'Elevated through three successive C-suite mandates across two ownership groups at a national facilities platform backed by Wind River Holdings and Braemont Capital.',
        'Own $495M P&L within a $600M+ platform — 2M+ work orders a year, 3,500+ service providers, 150,000+ technicians, $450M third-party spend.',
        'Leading Vixxo into an AI-first operating model: frontier models and agentic workflows at the core of how the business plans, decides, and serves customers.',
        'Brought in to deliver VixxoLink — a program and product turnaround more than two years late and over budget; delivered launch in nine months through execution discipline and product management methodology.',
        'Built and deployed VITA, a technician virtual assistant that raises proficiency, reduces time on task, and increases daily service capacity in the field.',
        'Expanded the operating environment to run and control performance across the full service-provider network.',
        'New AI-native facilities operating system in under three months; legacy scheduling system replaced in a four-hour working session with agents.',
        'Improved operating margin by 2.5 points; $5M+ structural savings including $3M annualized IT expense reduction; restructured IT to primarily outsourced delivery ($13.3M to ~$11.1M).',
        'Post-acquisition integration of Cushman & Wakefield Facility Services — people, systems, SLAs, 3% direct cost reduction.',
        'Executive sponsor for Fortune 500 clients including 7-Eleven and Target; partner to PE sponsors on value-creation and recapitalization readiness.',
      ],
    },
    {
      company: 'VEREIT, Inc. (NYSE: VER)',
      title: 'Senior Vice President, Chief Information Officer',
      period: '2008 – 2019',
      location: 'Phoenix, AZ',
      bullets: [
        'Private-to-public transition: helped take Cole Real Estate Investments from a $3.5B privately held REIT to a public company with infrastructure to support $27B in asset management.',
        'Built a fully licensed FINRA broker-dealer network and more than 26 custom applications within the Salesforce ecosystem.',
        'Directed IT, cybersecurity, and enterprise systems through financial restatement, SEC and federal investigations, and SOX remediation — nine material weaknesses remediated, 120+ accounting and IT controls redesigned.',
        'Reported quarterly to six boards across the public company and managed funds; led cloud-first transformation and new financial reporting to public-company standards.',
      ],
    },
    {
      company: 'Pearson Education',
      title: 'Director of Operations',
      period: '2007',
      location: '',
      bullets: [
        'Led the SuccessNet product turnaround — operating infrastructure for the K-12 Pearson SuccessNet platform through the 2007 relaunch.',
      ],
    },
    {
      company: 'DHL Express',
      title: 'Global Technology Integration Lead',
      period: '',
      location: '',
      bullets: [
        'Led M&A technology integration on a $120M+ budget — Airborne Express acquisition and DHL Mexico consolidation.',
        'Led data center consolidation from Airborne Express; audited the product data center move.',
        'Led U.S. data center consolidation from San Francisco to Scottsdale.',
        'Built multiple five-nines data centers and automated sort facilities in Pennsylvania and Riverside.',
      ],
    },
    {
      company: 'Earlier career',
      title: '',
      period: '',
      bullets: [
        'WebMD — claims-processing modernization and HIPAA compliance.',
        'U.S. Army, Military Intelligence — mission-critical operations under pressure.',
      ],
    },
  ] satisfies Role[],
  education: 'B.S., Information Technology, University of Phoenix',
} as const;
