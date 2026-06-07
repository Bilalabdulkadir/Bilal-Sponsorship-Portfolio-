import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Printer, 
  CheckCircle, 
  Building2, 
  ArrowLeft, 
  Download,
  Award,
  Calendar,
  Layers,
  Coins,
  ShieldAlert,
  Search
} from 'lucide-react';
import { supportingDocuments } from '../data';
import { DocumentMeta } from '../types';

interface DocumentReaderProps {
  initialDocId?: string | null;
  onBack?: () => void;
}

export default function DocumentReader({ initialDocId, onBack }: DocumentReaderProps) {
  const [selectedDocId, setSelectedDocId] = useState<string>(initialDocId || supportingDocuments[0].id);
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    if (initialDocId) {
      setSelectedDocId(initialDocId);
      setActivePage(1);
    }
  }, [initialDocId]);

  const activeDoc = supportingDocuments.find(d => d.id === selectedDocId) || supportingDocuments[0];

  const handleDocChange = (docId: string) => {
    setSelectedDocId(docId);
    setActivePage(1);
  };

  // Render high-fidelity simulated PDF contents for each page of the selected document
  const renderSimulatedPDFPage = () => {
    switch (selectedDocId) {
      case 'doc-sponsorship-letter':
        return renderCoverLetterPage();
      case 'doc-stirling':
        return renderStirlingPage();
      case 'doc-ntu':
        return renderNTUPage();
      case 'doc-bournemouth':
        return renderBournemouthPage();
      case 'doc-westminster':
        return renderWestminsterPage();
      case 'doc-asu-london':
        return renderASUPage();
      case 'doc-invoice':
        return renderInvoicePage();
      default:
        return (
          <div className="flex flex-col items-center justify-center p-12 text-slate-400">
            <FileText className="w-16 h-16 mb-4 opacity-50" />
            <p className="font-display font-medium">Please select a supporting document page to preview.</p>
          </div>
        );
    }
  };

  // Section 2: PDF Sponsorship Letter Mock Pages
  const renderCoverLetterPage = () => {
    if (activePage === 1) {
      return (
        <div className="p-8 sm:p-12 space-y-6 font-serif">
          <div className="border-b border-dashed border-slate-200 pb-5 text-sans text-[10px] text-slate-500 flex justify-between uppercase tracking-wider font-semibold">
            <span>Bilal Abdulkadir Muhammed</span>
            <span>Date: Adama, 2026</span>
          </div>
          <div className="text-sans space-y-1 text-xs text-slate-700 font-semibold not-italic">
            <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-widest">Sponsor Destination</span>
            <p className="text-sm font-bold text-slate-900 leading-tight">Her Excellency Muferihat Kamil Ahmed</p>
            <p className="text-slate-700">Minister of Labour and Skills</p>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider">Federal Democratic Republic of Ethiopia</p>
          </div>
          <div className="bg-slate-50 border-l-2 border-slate-900 p-4 font-sans text-xs sm:text-sm">
            <p className="font-bold text-slate-400 text-[9px] uppercase tracking-widest">Subject Reference</p>
            <p className="font-bold text-slate-900 uppercase mt-0.5 leading-snug">
              Request for Educational Sponsorship for UK Studies in Advanced Technology, Computer Science and Digital Innovation
            </p>
          </div>
          <p className="font-semibold text-slate-900 font-sans text-xs">Dear Her Excellency Muferihat Kamil Ahmed,</p>
          <div className="text-slate-800 space-y-4 text-xs sm:text-sm leading-relaxed">
            <p>My name is Bilal Abdulkadir Muhammed, a resident of Adama, Oromia Region. I respectfully submit this request for educational sponsorship from the Ministry of Labour and Skills to support my higher education in the United Kingdom.</p>
            <p>I have been honored to receive multiple conditional admission offers from reputable UK universities through Kaplan International Pathways and INTO University of Stirling. These programs focus on fields that are essential to Ethiopia’s digital transformation and the development of a highly skilled workforce.</p>
          </div>
        </div>
      );
    } else if (activePage === 2) {
      return (
        <div className="p-8 sm:p-12 space-y-6 font-serif text-xs sm:text-sm">
          <div className="border-b border-dashed border-slate-200 pb-5 text-sans text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
            <span>Sponsorship Letter — Page 2 of 3</span>
          </div>
          <div className="text-slate-800 space-y-4 leading-relaxed">
            <p>Below is a comparative analysis of my tuition fees, representing high-quality pathways carefully chosen to optimize state fund resources. These pathway structures guarantee entry to MSc segments with optimized cost brackets:</p>
            
            <div className="font-sans text-[10px] sm:text-xs overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-150 border-t border-b border-slate-150 text-left">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="py-2 px-3 font-semibold text-slate-600">Institution</th>
                    <th className="py-2 px-3 font-semibold text-slate-600">Pathway</th>
                    <th className="py-2 px-3 font-semibold text-slate-600 text-right">Tuition</th>
                    <th className="py-2 px-3 font-semibold text-slate-600 text-right">Initial Deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 font-mono">
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold">Stirling</td>
                    <td className="py-2 px-3 font-sans">Pre-Master's (Maths &amp; DS)</td>
                    <td className="py-2 px-3 text-right">£20,995.00</td>
                    <td className="py-2 px-3 text-right">£3,391.78</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold">NTU</td>
                    <td className="py-2 px-3 font-sans">Pre-Master's (Computing)</td>
                    <td className="py-2 px-3 text-right">£18,070.00</td>
                    <td className="py-2 px-3 text-right">£5,260.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold">Westminster</td>
                    <td className="py-2 px-3 font-sans">Pre-Master's (AI &amp; Data)</td>
                    <td className="py-2 px-3 text-right">£24,970.00</td>
                    <td className="py-2 px-3 text-right">£5,260.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Every dollar utilized in academic funding acts as a direct investment into the civil frameworks of Ethiopia. The technical insights gained regarding database scalability, microprocessors, and ethics of AI will be shared openly in regional technology incubation centers.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-8 sm:p-12 space-y-6 font-serif text-xs sm:text-sm">
          <div className="border-b border-dashed border-slate-200 pb-5 text-sans text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
            <span>Sponsorship Letter — Page 3 of 3</span>
          </div>
          <div className="text-slate-800 space-y-4 leading-relaxed">
            <p>For consideration, I am prepared to deliver all original university transcripts, curriculum vitae, gap verification portfolios, study project proposals and administrative declarations the Ministry requires.</p>
            <p>I sincerely thank you for your leadership, your dedication towards professional labor standards, and your support of the digital future of Ethiopian graduates.</p>
            
            <div className="pt-8 font-sans">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Yours faithfully,</p>
              <p className="font-serif italic text-xl text-slate-900 mt-2 font-semibold">Bilal Abdulkadir Muhammed</p>
              <div className="w-36 h-0.5 bg-slate-200 my-1" />
              <p className="text-[10px] text-slate-400 mt-2">Resident of Adama, Oromia Region · +251 941 322 948</p>
            </div>
          </div>
        </div>
      );
    }
  };

  // Section 3: Stirling Acceptance & Pro Forma Mock Pages
  const renderStirlingPage = () => {
    if (activePage === 1) {
      return (
        <div className="p-8 sm:p-12 space-y-6 font-sans">
          {/* Logo simulations */}
          <div className="flex justify-between items-center border-b pb-6">
            <div className="flex items-center gap-1.5 font-display text-emerald-800 font-bold text-sm sm:text-base tracking-tight uppercase">
              <Building2 className="w-6 h-6 text-emerald-700" />
              <span>UNIVERSITY of STIRLING</span>
            </div>
            <div className="text-right text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              INTO Study Centre
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <p className="text-slate-500 font-semibold">Date: 25 May 2026</p>
            <div className="grid grid-cols-2 gap-4 text-slate-800 text-[10px] sm:text-xs">
              <div>
                <strong>Student Name:</strong> Mr Bilal Abdulkadir MUHAMMED
              </div>
              <div>
                <strong>Application ID:</strong> IN:A8351694Q
              </div>
              <div>
                <strong>Date of Birth:</strong> 13 June 1994
              </div>
              <div>
                <strong>Provider Sponsor Number:</strong> 1VDYX5Q62
              </div>
            </div>

            <div className="border border-slate-100 p-4 rounded-xl bg-slate-50">
              <h3 className="font-bold text-emerald-800 uppercase tracking-widest text-xs mb-2">Offer Conditionally Approved</h3>
              <p className="text-slate-650 text-xs leading-relaxed">
                We are delighted to confirm your application to study at INTO Stirling Study Centre has been approved conditionally, subject to the conditions listed in the box below:
              </p>
            </div>

            <div className="p-4 border border-amber-100 bg-amber-50 rounded-xl space-y-2 text-xs">
              <h4 className="font-bold text-amber-800">1. Pre-Master's Pathway (14 Sep Start):</h4>
              <p className="text-slate-700 leading-normal">
                Requirements: Progress from Pre-Master's Graduate Diploma to MSc degree. High school CV, Gap analysis.
              </p>
              <h4 className="font-bold text-amber-800 mt-2">2. English Condition:</h4>
              <p className="text-slate-700 font-semibold leading-normal">
                IELTS 5.0 overall with a minimum 4.5 in each subskill.
              </p>
            </div>
          </div>
        </div>
      );
    } else if (activePage === 2) {
      return (
        <div className="p-8 sm:p-12 space-y-6 font-sans">
          <div className="border-b pb-4 flex justify-between items-center text-xs">
            <strong className="text-slate-900 font-display uppercase tracking-wide">University of Stirling Acceptance Form</strong>
            <span className="text-slate-400 font-medium">IN_A8351694Q</span>
          </div>

          <div className="text-xs space-y-4 leading-relaxed text-slate-600">
            <p className="font-bold text-slate-950">Declaration &amp; Insurance Opt-in Statement:</p>
            <p>Please return all pages of the Acceptance Form before CAS generated. Fees must be submitted prior to study.</p>

            <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-slate-800">Medical UniPlan Insurance Range:</span>
                <span className="text-emerald-700 font-bold font-mono">£364.00 Premium</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Standard UniPlan cover provides health and accidental security cover safeguarding the student throughout the 12 months pre-masters pathways in Stirling.
              </p>
            </div>

            <div className="mt-8 border-t pt-5">
              <p className="font-semibold text-slate-900 mb-2">Student Electronically Signature Check:</p>
              <div className="border p-3 border-emerald-200 bg-emerald-50/50 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-serif italic text-lg text-slate-900 font-bold">Bilal Abdulkadir Muhammed</p>
                  <p className="text-[9px] text-slate-400 tracking-wider uppercase mt-1">Confirmed &amp; Audited Signature</p>
                </div>
                <div className="text-right text-[10px] text-slate-500">
                  <p className="font-bold text-slate-700">Date Accepted</p>
                  <p>26-May-2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-8 sm:p-12 space-y-6 font-sans">
          <div className="border-b pb-4 text-xs font-bold text-slate-450 uppercase flex justify-between">
            <span>Pro Forma Fee Invoice</span>
            <span className="text-slate-900 font-mono">Total Due: £23,184.00</span>
          </div>

          <div className="text-xs space-y-4 font-mono">
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2 text-slate-700">
              <div className="flex justify-between py-1 border-b">
                <span>Pre-Master's (Sci, Comp &amp; Eng)</span>
                <span>£21,750.00</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>Sundry Deposit Fee STS</span>
                <span>£500.00</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>UniPlan 12M Insurance Premium</span>
                <span>£364.00</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>Book / Learning Materials fee</span>
                <span>£295.00</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Enrolment Administration Fee</span>
                <span>£275.00</span>
              </div>
            </div>

            <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 space-y-2 font-sans text-xs">
              <h4 className="font-bold text-emerald-800">Pre-CAS Payment Breakdown:</h4>
              <div className="flex justify-between border-b pb-2 pt-1 font-medium">
                <span>Tuition Deposit:</span>
                <span className="font-semibold text-slate-900 font-mono">£3,000.00</span>
              </div>
              <div className="flex justify-between border-b pb-2 pt-1 font-medium">
                <span>UniPlan Medical Premium:</span>
                <span className="font-semibold text-slate-900 font-mono">£364.00</span>
              </div>
              <div className="flex justify-between font-bold text-emerald-800 pt-2 text-sm uppercase">
                <span>EXCLUDING LODGINGS DEPOSIT TOTAL:</span>
                <span className="font-mono">£3,364.00</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // Section 4: Nottingham Trent Page
  const renderNTUPage = () => {
    return (
      <div className="p-8 sm:p-12 space-y-6 font-sans">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="flex items-center gap-2 font-display text-[#d01c5a] font-bold text-base tracking-tight">
            <span className="w-8 h-8 rounded bg-[#d01c5a] flex items-center justify-center text-white text-xs font-bold font-sans">NTU</span>
            <span>Nottingham Trent University</span>
          </div>
          <span className="text-[10px] bg-slate-50 text-slate-400 font-bold px-2 py-0.5 rounded">Kaplan ID: P527124</span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="text-slate-400 text-xs">Date of Offer: Friday 08 May 2026</p>
          <h3 className="font-bold text-slate-900 text-base leading-snug font-display uppercase tracking-tight">Congratulations on your Pathway Offer!</h3>
          <p className="leading-relaxed">Your application to study at Nottingham Trent International College, progressing towards Nottingham Trent University, has been formally evaluated as successful.</p>

          <div className="border rounded-2xl overflow-hidden font-sans border-slate-100 text-xs">
            <div className="bg-slate-50 p-3 font-semibold border-b border-slate-105 text-slate-900 font-display uppercase tracking-wider text-[10px]">Course 1: Pathway Terms</div>
            <div className="p-4 space-y-2 divide-y divide-slate-100 text-slate-650">
              <div className="flex justify-between py-1"><span>Award Details</span><span className="font-bold text-slate-900">Pre-Master's for Computing</span></div>
              <div className="flex justify-between py-1 pt-2"><span>Start Date</span><span className="font-semibold text-slate-900">14 Sep 2026</span></div>
              <div className="flex justify-between py-1 pt-2"><span>Pathway Tuition</span><span className="font-bold text-slate-900 font-mono">£18,070.00</span></div>
            </div>

            <div className="bg-slate-50 p-3 font-semibold border-t border-b border-slate-105 text-slate-900 font-display uppercase tracking-wider text-[10px]">Course 2: Progressing segment (September 2027 start)</div>
            <div className="p-4 space-y-2 divide-y divide-slate-100 text-slate-650">
              <div className="flex justify-between py-1"><span>Degree Award</span><span className="font-bold text-slate-900">MSc Cloud and Enterprise Computing</span></div>
              <div className="flex justify-between py-1 pt-2"><span>Degree Tuition</span><span className="font-bold text-slate-900 font-mono">£19,900.00</span></div>
              <div className="flex justify-between py-1 pt-2"><span>Required Deposit</span><span className="font-bold text-amber-600 font-mono">£5,260.00</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Section 5: Bournemouth University Page
  const renderBournemouthPage = () => {
    return (
      <div className="p-8 sm:p-12 space-y-6 font-sans">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="flex items-center gap-2 font-display text-[#e60050] font-bold text-base tracking-tight uppercase">
            <Building2 className="w-5 h-5 text-[#e60050]" />
            <span>Bournemouth University</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold">Kaplan ID: P527124</span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="text-slate-400 text-xs">Date: Friday 08 May 2026</p>
          <h3 className="font-bold text-slate-900 text-base leading-snug font-display uppercase tracking-tight">Postgraduate Pathway Admission Offer</h3>

          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-900">
            <p className="font-semibold text-xs">Progression target: MSc Computer Animation and Visual Effects</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
              <strong className="block text-slate-400 uppercase text-[9px] font-bold">Step 1: Pre-Master's (BUIC)</strong>
              <p className="font-bold text-slate-900 mt-1">Pre-Master's 2 Terms for Business, Law or Finance</p>
              <p className="mt-2 text-slate-500">Tuition: <strong className="font-mono text-slate-800 font-bold">£17,750.00</strong></p>
            </div>

            <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
              <strong className="block text-slate-400 uppercase text-[9px] font-bold">Step 2: MSc Progression</strong>
              <p className="font-bold text-slate-900 mt-1">MSc Computer Animation and Visual Effects</p>
              <p className="mt-2 text-slate-500">Tuition: <strong className="font-mono text-slate-800 font-bold">£19,688.00</strong></p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex justify-between text-xs font-semibold text-slate-700">
            <span>Minimum Entry Progression Threshold:</span>
            <span className="text-slate-900 font-bold">Pass with at least 50%</span>
          </div>
        </div>
      </div>
    );
  };

  // Section 6: University of Westminster Page
  const renderWestminsterPage = () => {
    return (
      <div className="p-8 sm:p-12 space-y-6 font-sans">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="flex items-center gap-2 font-display text-[#113a5d] font-bold text-base tracking-tight uppercase">
            <Building2 className="w-5 h-5 text-[#113a5d]" />
            <span>University of Westminster</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold">Kaplan ID: P527124</span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="text-slate-400 text-xs">Offer Date: Friday 08 May 2026</p>
          <h3 className="font-bold text-slate-900 text-base leading-snug font-display uppercase tracking-tight">Conditional Offer — MA Artificial Intelligence, Data and Communication</h3>

          <div className="border rounded-2xl overflow-hidden font-sans border-slate-100 text-xs">
            <div className="bg-slate-50 p-3 font-semibold border-b border-slate-105 text-slate-900 font-display uppercase tracking-wider text-[10px]">Pathway Specification</div>
            <div className="p-4 space-y-2 text-slate-650">
              <p>Program: <strong className="text-slate-900">Pre-Master's 2 Terms for Law and Social Sciences</strong></p>
              <p>Host: <strong className="text-slate-900">Kaplan International College London</strong></p>
              <p>Pathway fee: <strong className="text-slate-900 font-mono">£24,970.00</strong></p>
            </div>

            <div className="bg-slate-50 p-3 font-semibold border-t border-b border-slate-105 text-slate-900 font-display uppercase tracking-wider text-[10px]">Postgraduate MA segment (September 2027 start)</div>
            <div className="p-4 space-y-2 text-slate-650">
              <p>Required Grade Progression: <strong className="text-slate-900">Pass Pre-Master's with at least 60%</strong></p>
              <p>Postgrad tuition: <strong className="text-slate-900 font-mono">£18,000.00</strong></p>
              <p>Required deposit: <strong className="text-amber-600 font-mono">£5,260.00</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Section 7: ASU London Page
  const renderASUPage = () => {
    return (
      <div className="p-8 sm:p-12 space-y-6 font-sans">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="flex items-center gap-2 font-display text-[#8c1d40] font-bold text-base tracking-tight uppercase">
            <Building2 className="w-5 h-5 text-[#8c1d40]" />
            <span>ASU London</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold">Kaplan ID: P527124</span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="text-slate-400 text-xs">Date of Offer: Thursday 07 May 2026</p>
          <h3 className="font-bold text-slate-900 text-base leading-snug font-display uppercase tracking-tight">BSc (Hons) Computer Science Pathway Admissions Offer</h3>

          <div className="bg-[#8c1d40]/5 border border-[#8c1d40]/10 p-4 rounded-xl text-slate-700 space-y-2 text-xs">
            <p>1. Pathway: <strong className="text-slate-900">Foundation Certificate 2 Terms for Science and Engineering</strong></p>
            <p>2. Host: <strong className="text-slate-900">Kaplan International College London</strong></p>
            <p>3. Tuition fee: <strong className="font-semibold text-slate-900 font-mono">£25,000.00 + £200 materials + £260 admin fee (Total: £25,460.00)</strong></p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs border border-slate-100">
            <p className="font-bold text-slate-900">Higher Progression Track:</p>
            <p>Progress directly into September 2027 start segment for a <strong className="text-slate-900">3-year BSc (Hons) Computer Science</strong> in ASU London.</p>
            <p>Degree tuition rate: <strong className="font-mono font-semibold">£23,600.00 / per annum</strong></p>
            <p>Condition: Ethiopian University Entrance Examination Certificate average of at least <strong className="text-amber-700 font-bold">500/700</strong> + IELTS UKVI 5.5.</p>
          </div>
        </div>
      </div>
    );
  };

  // Section 8: Kaplan Student Invoice Mock Pages
  const renderInvoicePage = () => {
    return (
      <div className="p-8 sm:p-12 space-y-6 font-sans">
        <div className="border-b pb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex items-center gap-1.5 font-display text-sky-800 font-bold text-sm tracking-tight uppercase">
            <Layers className="w-5 h-5 text-sky-600" />
            <span>KAPLAN INTERNATIONAL COLLEGE</span>
          </div>
          <div className="text-right text-xs">
            <p className="font-bold text-slate-900">INVOICE #129623</p>
            <p className="text-slate-400 text-[10px] uppercase font-bold mt-0.5">Date: 07/05/2026</p>
          </div>
        </div>

        <div className="text-xs space-y-4">
          <div className="grid grid-cols-2 gap-4 border-b pb-4 text-[10px] text-slate-550 font-semibold uppercase font-sans">
            <div>
              <p className="text-[8px] text-slate-400">Student Name</p>
              <p className="font-bold text-slate-800 mt-0.5">Mr Bilal Abdulkadir Muhammed</p>
              <p className="font-normal text-slate-500 mt-0.5">Adama, Oromia, Ethiopia</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] text-slate-400">Kaplan ID / Student ID</p>
              <p className="font-bold text-slate-800 mt-0.5">P527124</p>
            </div>
          </div>

          <table className="min-w-full divide-y divide-slate-100 border text-xs text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="py-2.5 px-3 font-semibold text-slate-600">Core Account Description</th>
                <th className="py-2.5 px-3 font-semibold text-slate-600 text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              <tr>
                <td className="py-2.5 px-3 font-sans text-slate-700">Foundation Certificate 2 Terms Science and Engineering Term 1</td>
                <td className="py-2.5 px-3 text-right">£12,500.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-sans text-slate-700">Foundation Certificate 2 Terms Science and Engineering Term 2</td>
                <td className="py-2.5 px-3 text-right">£12,500.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-sans text-slate-700">Learning Materials - Foundation Cert. 2T</td>
                <td className="py-2.5 px-3 text-right">£200.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-sans text-slate-700">Admissions Administration process Fee</td>
                <td className="py-2.5 px-3 text-right">£260.00</td>
              </tr>
              <tr className="font-bold text-slate-900 bg-slate-50 font-sans text-xs">
                <td className="py-2.5 px-3 text-right font-bold uppercase tracking-wider text-[10px]">TOTAL OUTSTANDING BALANCES:</td>
                <td className="py-2.5 px-3 text-right font-mono text-sm text-amber-600">£25,460.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {/* Upper action bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 border border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-white rounded-none no-print"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display sm:text-3xl">Verification Center</h2>
            <p className="text-xs text-neutral-500 font-mono mt-1">Examine physical offer documents and certificates inside the simulated interactive docket</p>
          </div>
        </div>

        {/* Page navigation controls */}
        <div className="flex items-center gap-2 no-print">
          {activeDoc.pageCount > 1 && (
            <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-none p-1 text-xs">
              <button
                onClick={() => setActivePage(p => Math.max(1, p - 1))}
                disabled={activePage === 1}
                className="p-1 px-2.5 rounded-none text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent font-bold font-mono text-[10px] uppercase"
              >
                <ChevronLeft className="w-3.5 h-3.5 inline" /> Prev
              </button>
              <span className="text-orange-500 font-mono font-bold px-2">Page {activePage} of {activeDoc.pageCount}</span>
              <button
                onClick={() => setActivePage(p => Math.min(activeDoc.pageCount, p + 1))}
                disabled={activePage === activeDoc.pageCount}
                className="p-1 px-2.5 rounded-none text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent font-bold font-mono text-[10px] uppercase"
              >
                Next <ChevronRight className="w-3.5 h-3.5 inline" />
              </button>
            </div>
          )}

          <button 
            onClick={() => window.print()}
            className="p-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-white rounded-none justify-center items-center flex gap-1.5 text-xs font-bold uppercase transition-colors font-mono"
          >
            <Printer className="w-4 h-4 text-orange-500" /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* Main Grid: Selector rail and PDF viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Navigation Rail */}
        <div className="lg:col-span-4 space-y-2 max-h-[640px] overflow-y-auto pr-1 no-print">
          <span className="block text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-3 px-1 font-mono">Select Document</span>
          {supportingDocuments.map((doc) => {
            const isSelected = doc.id === selectedDocId;
            return (
              <button
                key={doc.id}
                onClick={() => handleDocChange(doc.id)}
                className={`w-full text-left p-4 rounded-none border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-orange-500 bg-orange-500 text-neutral-950 font-black shadow-none'
                    : 'border-neutral-850 bg-neutral-900 hover:bg-neutral-850 text-neutral-300'
                }`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className={`text-[9px] font-bold font-mono uppercase px-1.5 py-0.5 rounded-none ${isSelected ? 'bg-neutral-950 text-orange-400 border border-neutral-800' : 'bg-neutral-950 border border-neutral-800 text-neutral-400'}`}>
                    {doc.pageCount} Pages
                  </span>
                  <span className={`text-[9px] font-bold tracking-widest uppercase font-mono ${isSelected ? 'text-neutral-850' : 'text-neutral-500'}`}>{doc.section}</span>
                </div>
                <h3 className={`font-extrabold mt-3 text-xs sm:text-sm line-clamp-1 font-sans uppercase tracking-wide ${isSelected ? 'text-neutral-950' : 'text-white'}`}>
                  {doc.title}
                </h3>
                <p className={`text-[10px] mt-1 font-bold font-mono ${isSelected ? 'text-neutral-900' : 'text-neutral-550'}`}>
                  {doc.institution}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Side: Simulated PDF page */}
        <div className="lg:col-span-8 print:col-span-12 flex flex-col h-full">
          {/* Header block within page viewer background */}
          <div className="bg-neutral-950 border-t border-l border-r border-neutral-800 p-3 px-5 text-xs text-neutral-400 rounded-t-none flex justify-between items-center sm:text-xs">
            <span className="flex items-center gap-1.5 font-bold font-mono uppercase tracking-wide">
              <FileText className="w-4 h-4 text-orange-500" />
              {activeDoc.title}
            </span>
            <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-widest font-mono">Interactive Docket View</span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-b-none text-neutral-100 flex-1 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedDocId}-${activePage}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="h-full"
              >
                {renderSimulatedPDFPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
