import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Award,
  FileCheck2,
  Building
} from 'lucide-react';
import { coverLetterContent } from '../data';

export default function SponsorshipLetter() {
  const [activePage, setActivePage] = useState<number>(1);

  // Split letter points or design paragraphs across pseudo-pages to mimic the physical 3-page cover letter!
  const getPageParagraphs = (page: number) => {
    switch (page) {
      case 1:
        return [
          coverLetterContent.paragraphs[0],
          coverLetterContent.paragraphs[1],
          coverLetterContent.paragraphs[2]
        ];
      case 2:
        return [
          coverLetterContent.paragraphs[3],
          "Beyond simple state modernization, undertaking research-heavy courses like Stirling's MSc Mathematics and Data Science, Nottingham's MSc Cloud Computing, and Westminster's Artificial Intelligence and Communication, directly equips me with computational modeling capacities currently underrepresented in Adama and the wider Oromia region.",
          "Government-supported study guarantees that this investment yields a long-term return. I will bind myself to standard civil re-entry programs, bringing global cloud administration, statistical optimization, and data governance schemas back directly into our local university programs and advisory panels."
        ];
      case 3:
        return [
          coverLetterContent.paragraphs[4],
          coverLetterContent.paragraphs[5]
        ];
      default:
        return [];
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display sm:text-3xl">Cover Letter</h2>
          <p className="text-xs text-neutral-500 font-mono mt-1">Official Cover Letter Addressed to Her Excellency Muferihat Kamil Ahmed</p>
        </div>

        {/* Print & Pager Action bar */}
        <div className="flex flex-wrap items-center gap-3 no-print">
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-none p-1 text-xs">
            <button
              onClick={() => setActivePage(p => Math.max(1, p - 1))}
              disabled={activePage === 1}
              className="p-1 px-2.5 rounded-none text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent font-bold uppercase tracking-wider font-mono text-[10px]"
            >
              <ChevronLeft className="w-3.5 h-3.5 inline mr-1" /> Prev
            </button>
            <span className="text-orange-500 font-mono font-bold px-2">Page {activePage} of 3</span>
            <button
              onClick={() => setActivePage(p => Math.min(3, p + 1))}
              disabled={activePage === 3}
              className="p-1 px-2.5 rounded-none text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent font-bold uppercase tracking-wider font-mono text-[10px]"
            >
              Next <ChevronRight className="w-3.5 h-3.5 inline ml-1" />
            </button>
          </div>

          <button 
            onClick={() => window.print()}
            className="p-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-white rounded-none justify-center items-center flex gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors font-mono"
          >
            <Printer className="w-4 h-4 text-orange-500" /> Print Letter
          </button>
        </div>
      </div>

      {/* Main Letter Template Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:grid-cols-1">
        
        {/* Left Aspect: The Paginated Letter Card */}
        <div className="lg:col-span-8 print:col-span-12 bg-neutral-900 border border-neutral-800 rounded-none p-6 sm:p-10 md:p-12 min-h-[640px] flex flex-col justify-between relative overflow-hidden leading-relaxed">
          
          {/* Subtle Watermark Letterhead */}
          <div className="absolute right-6 top-6 opacity-[0.02] pointer-events-none text-white">
            <Building className="w-40 h-40" />
          </div>

          <div>
            {/* Header / Stationary Metadata */}
            <div className="border-b border-dashed border-neutral-800 pb-6 mb-8 text-xs font-mono text-neutral-500 flex justify-between tracking-wide font-bold uppercase">
              <div>
                <p className="font-extrabold text-white text-[10px] tracking-widest">{coverLetterContent.senderName}</p>
                <p className="mt-1">Adama, Oromia, Ethiopia</p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-orange-500">{coverLetterContent.date}</p>
                <p className="mt-1">UK Academic Pathway Request</p>
              </div>
            </div>

            {/* Address Bloc */}
            <div className="font-sans text-xs space-y-1 text-neutral-300 mb-8">
              <span className="font-mono font-bold text-orange-500 text-[10px] uppercase tracking-widest block mb-2">Addressed To:</span>
              <p className="font-black text-white text-base uppercase tracking-tight">{coverLetterContent.recipient}</p>
              <p className="text-neutral-200 font-bold">{coverLetterContent.title}</p>
              <p className="text-neutral-500 uppercase tracking-wider text-[9px] font-mono font-extrabold">{coverLetterContent.organization}</p>
            </div>

            {/* Document Subject Statement */}
            <div className="bg-black border-l-2 border-orange-500 p-4 rounded-none mb-8 font-mono">
              <p className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest">Subject Statement</p>
              <h3 className="text-xs sm:text-sm font-bold text-white mt-1 uppercase leading-snug tracking-wide">
                {coverLetterContent.subject}
              </h3>
            </div>

            {/* Letter Body paragraphs */}
            {activePage === 1 && (
              <p className="text-xs sm:text-sm font-mono text-neutral-400 italic mb-6">
                {coverLetterContent.greetings}
              </p>
            )}

            <div className="space-y-6 text-sm text-neutral-200 leading-relaxed font-sans">
              {getPageParagraphs(activePage).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Letter Foot / Sign-off Block */}
          {activePage === 3 ? (
            <div className="mt-10 pt-6 border-t border-neutral-800 font-sans">
              <p className="text-xs text-neutral-500 tracking-wider uppercase font-bold font-mono">{coverLetterContent.signOff}</p>
              
              {/* Mock Signature Line */}
              <div className="my-6">
                <p className="font-serif italic text-2xl text-orange-400 font-normal tracking-wide">
                  Bilal Abdulkadir Muhammed
                </p>
                <div className="w-48 h-0.5 bg-neutral-805 mt-1" />
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-neutral-500 font-mono font-bold uppercase">
                <p>Kaplan Student ID: <strong className="text-white font-extrabold">P527124</strong></p>
                <p>Stirling Application ID: <strong className="text-white font-extrabold">IN_A8351694Q</strong></p>
              </div>
            </div>
          ) : (
            <div className="mt-12 text-center text-[10px] font-mono text-neutral-500 font-bold uppercase select-none border-t border-neutral-800 pt-4 flex justify-between items-center whitespace-nowrap">
              <span>Official Sponsorship Cover Letter</span>
              <span className="text-orange-500">Continued on Page {activePage + 1}...</span>
            </div>
          )}
        </div>

        {/* Right Aspect: Quick Directory Drawer & Verification */}
        <div className="lg:col-span-4 space-y-6 no-print">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-none shadow-none">
            <h3 className="text-xs font-bold text-orange-500 uppercase font-mono tracking-widest mb-4">Letter Structure</h3>
            
            <div className="space-y-5 text-xs font-sans">
              <div className="flex gap-3">
                <div className="p-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 h-fit">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase tracking-wider text-[11px]">Objective Definition (Page 1)</h4>
                  <p className="text-neutral-400 mt-1 leading-relaxed text-xs">Presents the formal request to Her Excellency Muferihat Kamil Ahmed and anchors UK studies in Adama, Ethiopia contexts.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 h-fit">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase tracking-wider text-[11px]">Strategic Justification (Page 2)</h4>
                  <p className="text-neutral-400 mt-1 leading-relaxed text-xs">Direct correlation between MSc/BSc pathways (Mathematics, Cloud Systems, Animation) and national strategic development pillars.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 h-fit">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase tracking-wider text-[11px]">Commitment Signature (Page 3)</h4>
                  <p className="text-neutral-400 mt-1 leading-relaxed text-xs">Outlines preparation list for government review and seals the legal assurance of professional return.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Widget */}
          <div className="bg-neutral-900 p-6 rounded-none border border-neutral-800 space-y-4">
            <h2 className="text-sm font-black text-white uppercase tracking-wide font-display">Applicant Directory</h2>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-neutral-950 border border-neutral-850">
                <span className="block text-[10px] text-orange-500 font-mono font-bold uppercase tracking-widest mb-1">Primary Email</span>
                <a href="mailto:bilalabdulkadir286@gmail.com" className="font-bold text-white hover:text-orange-400 transition-colors block font-mono text-[11px]">
                  bilalabdulkadir286@gmail.com
                </a>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-850">
                <span className="block text-[10px] text-orange-500 font-mono font-bold uppercase tracking-widest mb-1">Mobile Contact</span>
                <a href="tel:+251941322948" className="font-bold text-white hover:text-orange-400 transition-colors block font-mono text-[11px]">
                  +251 941 322 948
                </a>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-850">
                <span className="block text-[10px] text-orange-500 font-mono font-bold uppercase tracking-widest mb-1">Re-entry Address</span>
                <span className="font-bold text-white block text-[11px]">Adama, Oromia Region, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
