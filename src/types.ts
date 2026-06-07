export interface UniversityOffer {
  id: string;
  name: string;
  subName?: string;
  programmeType: string; // e.g., "Pre-Master's + MSc", "Foundation + BSc"
  pathwayProgramme: string;
  degreeProgramme: string;
  referenceId: string;
  referenceType: 'Kaplan ID' | 'Reference' | 'Application ID';
  pathwayFee: number;
  pathwayFeeNote?: string;
  degreeFee: number;
  degreeFeeNote?: string;
  initialDeposit: number;
  totalInvoice: number;
  intakeDates: string;
  degreeStart: string;
  degreeDuration: string;
  ieltsCondition: string;
  otherConditions: string[];
  pdfLink: string;
  pdfPages: number;
}

export interface ContributionArea {
  id: string;
  title: string;
  description: string;
}

export interface DocumentMeta {
  id: string;
  section: string;
  title: string;
  institution: string;
  pageCount: number;
  description: string;
  pdfLink: string;
}
