import { UniversityOffer, ContributionArea, DocumentMeta } from './types';

export const universityOffers: UniversityOffer[] = [
  {
    id: 'stirling',
    name: 'University of Stirling',
    subName: 'INTO Study Centre',
    programmeType: "Pre-Master's + MSc",
    pathwayProgramme: 'Pre-Master\'s in Science, Computing & Engineering (Graduate Diploma) with PSE',
    degreeProgramme: 'MSc Mathematics and Data Science',
    referenceId: 'IN_A8351694Q',
    referenceType: 'Reference',
    pathwayFee: 21750,
    pathwayFeeNote: 'Includes tuition, sundry deposit, learning materials, and enrolment fee',
    degreeFee: 24300,
    degreeFeeNote: 'Provisional degree tuition fee',
    initialDeposit: 3364,
    totalInvoice: 23184,
    intakeDates: '28 Sep 2026 → 03 Sep 2027 (4 terms)',
    degreeStart: 'Sep 2027 → Jul 2028',
    degreeDuration: '1 year',
    ieltsCondition: 'IELTS 5.0 overall with a minimum of 4.5 in each subskill',
    otherConditions: [
      'Complete CV covering all gaps in study',
      'Next of kin contact details phone number or email',
      'Maintain satisfactory progression from pre-masters to MSc degree with required academic threshold'
    ],
    pdfLink: 'pdf-stirling',
    pdfPages: 7
  },
  {
    id: 'nottingham',
    name: 'Nottingham Trent University',
    subName: 'Nottingham Trent International College',
    programmeType: "Pre-Master's + MSc",
    pathwayProgramme: 'Pre-Master\'s 2 Terms for Computing',
    degreeProgramme: 'MSc Cloud and Enterprise Computing',
    referenceId: 'P527124',
    referenceType: 'Kaplan ID',
    pathwayFee: 18070,
    degreeFee: 19900,
    initialDeposit: 5260,
    totalInvoice: 18070,
    intakeDates: '14 Sep 2026 → 4 Jun 2027',
    degreeStart: 'September 2027',
    degreeDuration: '1 year',
    ieltsCondition: 'IELTS for UKVI (Academic) with minimum scores of Reading 5.0, Writing 5.0, Listening 5.0, Speaking 5.0, Overall 5.5, or recognised equivalent',
    otherConditions: [
      'Providing details of the gap in studies between 07/2019 – 01/2022 (subject to Admissions approval)',
      'Providing details of the gap in studies between 09/2025 – 09/2026 (subject to Admissions approval)',
      'Successfully completing all required credibility checks to confirm intention to study in the UK, including taking part in an interview'
    ],
    pdfLink: 'pdf-ntu',
    pdfPages: 7
  },
  {
    id: 'bournemouth',
    name: 'Bournemouth University',
    subName: 'Bournemouth University International College',
    programmeType: "Pre-Master's + MSc",
    pathwayProgramme: 'Pre-Master\'s 2 Terms for Business, Law or Finance',
    degreeProgramme: 'MSc Computer Animation and Visual Effects',
    referenceId: 'P527124',
    referenceType: 'Kaplan ID',
    pathwayFee: 17750,
    degreeFee: 19688,
    initialDeposit: 5260,
    totalInvoice: 17750,
    intakeDates: '14 Sep 2026 → 4 Jun 2027',
    degreeStart: 'September 2027',
    degreeDuration: '1 year',
    ieltsCondition: 'IELTS for UKVI (Academic) with minimum scores of Reading 5.0, Writing 5.0, Listening 5.0, Speaking 5.0, Overall 5.5, or recognised equivalent',
    otherConditions: [
      'Pass your pre-masters pathway programme with a score of at least 50%',
      'Providing details of the gap in studies between 07/2019 – 01/2022 (subject to Admissions approval)',
      'Providing details of the gap in studies between 09/2025 – 09/2026 (subject to Admissions approval)',
      'Successfully completing all required credibility checks and interview'
    ],
    pdfLink: 'pdf-bournemouth',
    pdfPages: 7
  },
  {
    id: 'westminster',
    name: 'University of Westminster',
    subName: 'Kaplan International College London',
    programmeType: "Pre-Master's + MA",
    pathwayProgramme: 'Pre-Master\'s 2 Terms for Law and Social Sciences',
    degreeProgramme: 'MA AI, Data and Communication',
    referenceId: 'P527124',
    referenceType: 'Kaplan ID',
    pathwayFee: 24970,
    degreeFee: 18000,
    initialDeposit: 5260,
    totalInvoice: 24970,
    intakeDates: '14 Sep 2026 → 4 Jun 2027',
    degreeStart: 'September 2027',
    degreeDuration: '1 year',
    ieltsCondition: 'IELTS for UKVI (Academic) with minimum scores of Reading 5.0, Writing 5.0, Listening 5.0, Speaking 5.0, Overall 5.5, or recognised equivalent',
    otherConditions: [
      'Pass your pre-masters pathway programme with a score of at least 60%',
      'Study and pass modules including PM600 Research Project, PM601 UK Society and Culture, and PM606 Advanced Social Science',
      'Providing details of the gap in studies between 07/2019 – 01/2022 and 09/2025 – 09/2026'
    ],
    pdfLink: 'pdf-westminster',
    pdfPages: 7
  },
  {
    id: 'asu_london',
    name: 'ASU London',
    subName: 'Kaplan International College London',
    programmeType: 'Foundation + BSc (Hons)',
    pathwayProgramme: 'Foundation Certificate 2 Terms for Science and Engineering',
    degreeProgramme: 'BSc (Hons) Computer Science',
    referenceId: 'P527124',
    referenceType: 'Kaplan ID',
    pathwayFee: 25460,
    pathwayFeeNote: '£25,000 tuition + £200 learning materials + £260 administration fee',
    degreeFee: 23600,
    degreeFeeNote: 'Per-year tuition fee for 3 years degree programme',
    initialDeposit: 5260,
    totalInvoice: 25460,
    intakeDates: '14 Sep 2026 → 4 Jun 2027',
    degreeStart: 'September 2027',
    degreeDuration: '3 years',
    ieltsCondition: 'IELTS for UKVI (Academic) with minimum scores of Reading 4.5, Writing 4.5, Listening 4.5, Speaking 4.5, Overall 5.5, or recognised equivalent',
    otherConditions: [
      'Ethiopian University Entrance Examination Certificate with minimum grade average of 500/700',
      'Pass foundation certificate program with a score of at least 50%',
      'Providing details of study gaps (07/2019 – 01/2022 and 09/2025 – 09/2026)',
      'Having a high school subject grade in Maths and a Relevant Science that is equivalent to the average academic grade'
    ],
    pdfLink: 'pdf-asu',
    pdfPages: 6
  }
];

export const contributionAreas: ContributionArea[] = [
  {
    id: 'digital_trans',
    title: 'Digital Transformation',
    description: 'Enabling technology modernization across public services, improving transaction efficiency, and automating core bureaucratic pipelines in compliance with Digital Ethiopia strategies.'
  },
  {
    id: 'data_science',
    title: 'Data Science & Analytics',
    description: 'Leveraging data-driven insight for evidence-based policymaking, analyzing labour market indices, and identifying demographic economic trends for structured state planning.'
  },
  {
    id: 'cloud_infra',
    title: 'Cloud Infrastructure & Security',
    description: 'Designing secure hosting mechanisms, scaling low-latency digital services, and building sustainable IT infrastructure structures safeguarding sovereign public datasets.'
  },
  {
    id: 'ai_innovation',
    title: 'AI & Responsible Intelligence',
    description: 'Developing high-impact AI algorithms tailored for domestic challenges (from multilingual text analysis to agricultural diagnostics), promoting local ethical engineering benchmarks.'
  },
  {
    id: 'cs_education',
    title: 'Tech Workforce Education',
    description: 'Mentoring young Ethiopian graduates, introducing advanced curricula in universities, and establishing vocational bootcamps focusing on practical engineering skills.'
  },
  {
    id: 'creative_media',
    title: 'Growth of Creative Industries',
    description: 'Strengthening animation, digital media and visual effects capacity, laying down production structures to scale the virtual creative economy and create high-skill jobs.'
  }
];

export const supportingDocuments: DocumentMeta[] = [
  {
    id: 'doc-sponsorship-letter',
    section: 'SECTION 02 of 08',
    title: 'Sponsorship Letter to the Ministry',
    institution: 'Ministry of Labour and Skills',
    pageCount: 3,
    description: 'Official 3-page cover letter seeking sponsorship, detailing academic progress, alignment with Ministry directives, and long-term service guarantees.',
    pdfLink: 'pdf-letter'
  },
  {
    id: 'doc-stirling',
    section: 'SECTION 03 of 08',
    title: 'Stirling Acceptance Form & Invoice',
    institution: 'University of Stirling',
    pageCount: 7,
    description: 'Signed conditional admission offer details, UniPlan student insurance selection form, pathway enrollment conditions and £23,184 Pro Forma fee breakdown.',
    pdfLink: 'pdf-stirling'
  },
  {
    id: 'doc-ntu',
    section: 'SECTION 04 of 08',
    title: 'Nottingham Trent University Offer',
    institution: 'Nottingham Trent International College',
    pageCount: 7,
    description: 'Successful admission confirmation, Pre-Master\'s pathway fees, MSc Cloud details, English criteria, study gap declarations, and deposit terms.',
    pdfLink: 'pdf-ntu'
  },
  {
    id: 'doc-bournemouth',
    section: 'SECTION 05 of 08',
    title: 'Bournemouth University Offer',
    institution: 'Bournemouth University',
    pageCount: 7,
    description: 'Conditional admission details for MSc Computer Animation, pre-masters progression thresholds (50% average score), accommodation, and £5,260 payment guides.',
    pdfLink: 'pdf-bournemouth'
  },
  {
    id: 'doc-westminster',
    section: 'SECTION 06 of 08',
    title: 'University of Westminster Offer',
    institution: 'University of Westminster',
    pageCount: 7,
    description: 'Offer letter for Pre-Master\'s progression to MA AI, Data and Communication, detailing 60% academic grade target and £5,260 deposit requirement.',
    pdfLink: 'pdf-westminster'
  },
  {
    id: 'doc-asu-london',
    section: 'SECTION 07 of 08',
    title: 'ASU London Offer Letter',
    institution: 'ASU London / Arizona State',
    pageCount: 6,
    description: 'Conditional offer for Foundation pathway progressing to BSc (Hons) Computer Science, listing academic, translation, and high school math requirements.',
    pdfLink: 'pdf-asu'
  },
  {
    id: 'doc-invoice',
    section: 'SECTION 08 of 08',
    title: 'Kaplan Student Invoice #129623',
    institution: 'Kaplan International College London',
    pageCount: 3,
    description: 'Itemised student account invoice detailing tuition of £25,000 for BYU pathway, materials fee of £200, and administrative fee of £260 (Total: £25,460).',
    pdfLink: 'pdf-invoice'
  }
];

export const coverLetterContent = {
  recipient: "Her Excellency Muferihat Kamil Ahmed",
  title: "Minister of Labour and Skills",
  organization: "Federal Democratic Republic of Ethiopia",
  date: "Ministry of Labour and Skills 2026",
  subject: "Request for Educational Sponsorship for UK Studies in Advanced Technology, Computer Science and Digital Innovation",
  greetings: "Dear Her Excellency Muferihat Kamil Ahmed,",
  paragraphs: [
    "I hope this letter finds you well.",
    "My name is Bilal Abdulkadir Muhammed, a resident of Adama, Oromia Region. I respectfully submit this request for educational sponsorship from the Ministry of Labour and Skills to support my higher education in the United Kingdom.",
    "I have been honored to receive multiple conditional admission offers from reputable UK universities through Kaplan International Pathways and INTO University of Stirling. These programs focus on fields that are essential to Ethiopia's digital transformation and the development of a highly skilled workforce.",
    "Although I have successfully secured these academic opportunities, I am currently unable to meet the required tuition deposits needed to proceed with enrollment. I respectfully request the Ministry of Labour and Skills to consider providing educational sponsorship or an official financial guarantee in support of my studies. Government sponsorship may satisfy the financial sponsorship requirements of the institutions and assist me in completing the necessary admission and UK student visa procedures.",
    "I am fully committed to returning to Ethiopia after my studies and applying the knowledge and experience gained for the benefit of our nation.",
    "Thank you for your time, leadership, and commitment to empowering Ethiopian youth through education and skills development. I would be deeply grateful for the opportunity to receive the Ministry's support."
  ],
  signOff: "Yours faithfully,",
  senderName: "Bilal Abdulkadir Muhammed",
  contactInfo: {
    fullName: "Bilal Abdulkadir Muhammed",
    phone: "+251 941 322 948",
    email: "bilalabdulkadir286@gmail.com",
    address: "Adama, Oromia Region, Ethiopia",
    kaplanId: "P527124",
    stirlingAppId: "IN_A8351694Q"
  }
};
