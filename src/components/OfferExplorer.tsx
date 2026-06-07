import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  CheckSquare, 
  BadgeHelp,
  ShieldCheck,
  ChevronRight,
  Coins
} from 'lucide-react';
import { universityOffers } from '../data';

interface OfferExplorerProps {
  initialUniversityId?: string | null;
}

export default function OfferExplorer({ initialUniversityId }: OfferExplorerProps) {
  const [selectedId, setSelectedId] = useState<string>(initialUniversityId || universityOffers[0].id);

  useEffect(() => {
    if (initialUniversityId) {
      setSelectedId(initialUniversityId);
    }
  }, [initialUniversityId]);

  const offer = universityOffers.find(o => o.id === selectedId) || universityOffers[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {/* Tab Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-neutral-900 pb-4">
        <div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display sm:text-3xl">Offer Explorer</h2>
          <p className="text-xs text-neutral-500 font-mono mt-1">Examine study specifications, conditions, and costs by university</p>
        </div>

        {/* Dynamic Buttons list */}
        <div className="flex flex-wrap gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-none w-full sm:w-auto overflow-x-auto whitespace-nowrap no-print">
          {universityOffers.map((univ) => (
            <button
              key={univ.id}
              onClick={() => setSelectedId(univ.id)}
              className={`px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${
                univ.id === selectedId
                  ? 'bg-orange-500 text-neutral-950 font-black'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
              }`}
            >
              {univ.id === 'asu_london' ? 'ASU London' : univ.name.replace('University of ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* University Main Specs and Modules details card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 print:grid-cols-1 gap-8">
        
        {/* LEFT COLUMN: Overview Summary, Reference Details */}
        <div className="space-y-6 lg:col-span-2 print:col-span-1">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900 p-6 sm:p-8 rounded-none border border-neutral-800 shadow-none space-y-6"
            >
              {/* Card Main Title block */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-805 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-none bg-neutral-950 border border-neutral-800 text-orange-500 font-mono">
                      {offer.programmeType}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-none bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono">
                      {offer.referenceType}: {offer.referenceId}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight mt-1">{offer.name}</h3>
                  <p className="text-neutral-500 text-xs font-mono mt-0.5">{offer.subName}</p>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-none bg-neutral-950 border border-neutral-800 text-xs font-mono">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  <div>
                    <span className="block text-[8px] text-neutral-500 uppercase font-bold tracking-wider">Verification Index</span>
                    <span className="font-bold text-white block uppercase mt-0.5">Approved Offer</span>
                  </div>
                </div>
              </div>

              {/* Degrees Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Pathway Info Block */}
                <div className="p-5 rounded-none border border-neutral-805 bg-neutral-950/60 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-500">Step 1: Pathway Certificate</span>
                  <h4 className="font-extrabold text-white text-sm uppercase tracking-wide leading-tight">{offer.pathwayProgramme}</h4>
                  
                  <div className="divide-y divide-neutral-805 space-y-2 pt-2 text-xs text-neutral-300 font-mono">
                    <div className="flex justify-between py-1 pt-2">
                      <span className="text-neutral-500 font-bold">Pathway Intake</span>
                      <span className="font-bold text-white">{offer.intakeDates}</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2">
                      <span className="text-neutral-500 font-bold">Pathway Fees</span>
                      <span className="font-bold text-orange-400">£{offer.pathwayFee.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Degree Info Block */}
                <div className="p-5 rounded-none border border-neutral-855 bg-neutral-950/60 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-500">Step 2: Progressing Degree</span>
                  <h4 className="font-extrabold text-white text-sm uppercase tracking-wide leading-tight">{offer.degreeProgramme}</h4>
                  
                  <div className="divide-y divide-neutral-805 space-y-2 pt-2 text-xs text-neutral-300 font-mono">
                    <div className="flex justify-between py-1 pt-2">
                      <span className="text-neutral-500 font-bold">Postgrad Start</span>
                      <span className="font-bold text-white">{offer.degreeStart}</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2">
                      <span className="text-neutral-500 font-bold">Postgrad Duration</span>
                      <span className="font-bold text-white">{offer.degreeDuration}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Conditions List */}
              <div className="space-y-3">
                <h4 className="font-black text-white text-xs tracking-widest uppercase font-mono">Pathway &amp; Degree Conditions</h4>
                
                {/* IELTS Condition details */}
                <div className="p-4 rounded-none bg-orange-500/10 border border-orange-500/20 flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 font-mono uppercase tracking-widest">English Proficiency Target</span>
                    <p className="text-white text-xs font-bold leading-relaxed mt-0.5 font-sans">
                      {offer.ieltsCondition}
                    </p>
                  </div>
                </div>

                {/* Other conditions checklist box */}
                <div className="space-y-2 pt-1 text-xs">
                  {offer.otherConditions.map((cond, idx) => (
                    <div key={idx} className="flex gap-2.5 py-1 text-neutral-350">
                      <CheckSquare className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-mono text-[11px]">{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* RIGHT COLUMN: Interactive Fee Breakdown Card and Action lists */}
        <div className="space-y-6">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="bg-neutral-905 border border-neutral-800 text-neutral-100 p-6 sm:p-8 rounded-none"
            >
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest font-mono mb-4">Financial Ledger Summary</h3>
              
              <div className="space-y-5 text-xs font-mono">
                
                <div className="flex justify-between items-center bg-black p-3 rounded-none border border-neutral-800">
                  <div>
                    <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold">Pre-visa CAS Deposit</p>
                    <p className="text-lg font-black text-orange-500 font-mono mt-0.5">£{offer.initialDeposit.toLocaleString()}</p>
                  </div>
                  <Coins className="w-5 h-5 text-orange-500" />
                </div>

                <div className="divide-y divide-neutral-800 space-y-3.5 pt-2">
                  <div className="flex justify-between pt-3.5">
                    <span className="text-neutral-500 font-bold">Academic Pathway Cost:</span>
                    <span className="font-extrabold text-white">£{offer.pathwayFee.toLocaleString()}</span>
                  </div>
                  
                  {offer.id === 'asu_london' ? (
                    <div className="flex justify-between pt-3.5">
                      <span className="text-neutral-500 font-bold">Degree tuition (p/yr):</span>
                      <span className="font-extrabold text-white">£{offer.degreeFee.toLocaleString()}</span>
                    </div>
                  ) : (
                    offer.degreeFee > 0 && (
                      <div className="flex justify-between pt-3.5">
                        <span className="text-neutral-500 font-bold">Degree Tuition Block:</span>
                        <span className="font-extrabold text-white">£{offer.degreeFee.toLocaleString()}</span>
                      </div>
                    )
                  )}

                  {offer.pathwayFeeNote && (
                    <p className="text-[10px] text-neutral-500 italic pt-2 leading-relaxed">
                      * {offer.pathwayFeeNote}
                    </p>
                  )}

                  <div className="flex justify-between pt-3.5 font-black text-white uppercase text-[10px] tracking-widest">
                    <span>Est. Sponsoring Scope:</span>
                    <span className="text-orange-500 font-black text-xs">
                      £{(offer.pathwayFee + (offer.degreeFee || 0)).toLocaleString()} Total
                    </span>
                  </div>
                </div>

                {/* Return Commitment details */}
                <div className="bg-neutral-950 p-4 rounded-none border border-dashed border-neutral-800 space-y-1 mt-6 text-[10px]">
                  <p className="text-orange-500 font-bold uppercase tracking-widest text-[8px]">Return Accountability</p>
                  <p className="text-neutral-400 leading-relaxed font-sans">
                    Government sponsorship guarantees that and safeguards 100% of the applicant's research outcomes for immediate deployment in Ethiopia.
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick tips panel */}
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-none text-xs space-y-3 text-neutral-400 leading-relaxed font-sans no-print">
            <h4 className="font-black text-white font-sans flex items-center gap-1.5 uppercase tracking-wide text-xs">
              <BadgeHelp className="w-4 h-4 text-orange-500" /> Selection Advice
            </h4>
            <p>
              Under Ministry of Labour regulations, multiple parallel offers ensure redundancy. The Stirling and NTU courses are optimized for high-intensity data and cloud computing infrastructures, which directly map to Digital Ethiopia frameworks.
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
