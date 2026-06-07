import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  BookOpen, 
  Coins, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  TrendingUp, 
  ChevronRight, 
  Globe2, 
  CheckCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { universityOffers, contributionAreas, supportingDocuments } from '../data';

interface DashboardProps {
  onSelectDoc: (docId: string) => void;
  onSelectUniversity: (id: string) => void;
}

export default function Dashboard({ onSelectDoc, onSelectUniversity }: DashboardProps) {
  // Exchange rate: 1 GBP = 153.50 ETB (Ethiopian Birr, realistic 2026/mid estimate)
  const exchangeRate = 153.5;
  const [currency, setCurrency] = useState<'GBP' | 'ETB'>('GBP');
  const [selectedContribution, setSelectedContribution] = useState<string | null>('digital_trans');

  const formatCurrency = (val: number) => {
    if (currency === 'GBP') {
      return `£${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `${(val * exchangeRate).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} ETB`;
    }
  };

  const activeContrib = contributionAreas.find(c => c.id === selectedContribution) || contributionAreas[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-8"
    >
      {/* Overview Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="dashboard-widgets">
        <div className="bg-neutral-900 p-5 rounded-none border border-neutral-800 flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-500 font-mono font-bold uppercase tracking-widest">Admission Offers</p>
            <p className="text-xl font-black text-white font-display uppercase tracking-tight">5 Reputable UK</p>
          </div>
        </div>

        <div className="bg-neutral-900 p-5 rounded-none border border-neutral-800 flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-500 font-mono font-bold uppercase tracking-widest font-bold">Avg. Pathway Fee</p>
            <p className="text-xl font-black text-white font-display uppercase tracking-tight">
              {formatCurrency(21500)}
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 p-5 rounded-none border border-neutral-800 flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-500 font-mono font-bold uppercase tracking-widest font-bold">Stirling Initial</p>
            <p className="text-xl font-black text-white font-display uppercase tracking-tight">
              {formatCurrency(3364)}
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 p-5 rounded-none border border-neutral-800 flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-500">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-500 font-mono font-bold uppercase tracking-widest font-bold">Supporting Docs</p>
            <p className="text-xl font-black text-white font-display uppercase tracking-tight">7 Authenticated</p>
          </div>
        </div>
      </section>

      {/* Main Grid: Objective & Contributions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Objective Statement & Quick Profile */}
        <section className="lg:col-span-7 space-y-6" id="objective-container">
          <div className="bg-neutral-900 p-6 md:p-8 rounded-none border border-neutral-800">
            <div className="flex items-center gap-2 text-orange-500 mb-4 bg-orange-500/10 border border-orange-500/20 w-fit px-3 py-1 font-mono text-[10px] uppercase tracking-wider font-extrabold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Sponsorship Request</span>
            </div>
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight font-display sm:text-3xl">Objective</h2>
            <div className="text-neutral-300 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                I am respectfully requesting educational sponsorship from the Ministry of Labour and Skills
                to support my higher education in the United Kingdom. My training focuses on advanced technology,
                computer science, and digital innovation — fields that are essential to Ethiopia's digital transformation 
                and to developing a highly skilled workforce.
              </p>
              <p className="text-neutral-500 text-sm">
                With verified conditional offers across data science, AI, cyber ecosystems, and enterprise computing, 
                this training is optimized to return direct academic and industrial capital into Ethiopia's labor market 
                modernization campaigns.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono font-bold text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Adama, Oromia, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-orange-500" />
                <span>Kaplan ID: P527124</span>
              </div>
            </div>
          </div>

          {/* Return Commitment Guarantee Panel */}
          <div className="bg-neutral-900 p-6 md:p-8 rounded-none border border-neutral-800 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xs font-bold text-orange-500 tracking-wider uppercase font-mono mb-4">
              Return Commitment Guarantee
            </h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
              I am fully committed to returning to Ethiopia after completing these postgraduate degrees to lead 
              strategic software engineering directives, mentor junior engineers, and advise the Ministry on 
              high-growth digital labor solutions.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-800 pt-5 text-center">
              <div>
                <p className="text-2xl font-black text-white font-display">100%</p>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-mono font-bold mt-1">Ethio-Return</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white font-display">2027+</p>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-mono font-bold mt-1">Impact Start</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white font-display">UK</p>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-mono font-bold mt-1">Standard Spec</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Contributions list & Highlight */}
        <section className="lg:col-span-5 space-y-6" id="contributions-panel">
          <div className="bg-neutral-900 p-6 md:p-8 rounded-none border border-neutral-800 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 text-orange-500 mb-4 bg-orange-500/10 border border-orange-500/20 w-fit px-3 py-1 font-mono text-[10px] uppercase tracking-wide font-extrabold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>National Development</span>
              </div>
              <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight font-display sm:text-3xl">Contribution Areas</h2>
              <p className="text-neutral-500 text-xs mb-6 font-mono">
                Active strategic fields Bilal intends to modernize upon repatriation:
              </p>

              {/* Grid of contribution items */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {contributionAreas.map((item) => {
                  const isActive = selectedContribution === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedContribution(item.id)}
                      className={`p-3 text-left rounded-none border text-xs font-bold uppercase tracking-wider transition-all ${
                        isActive 
                          ? 'border-orange-500 bg-orange-500 text-neutral-950 shadow-none font-black' 
                          : 'border-neutral-800 bg-neutral-950 hover:bg-neutral-850 text-neutral-300'
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              {/* Interactive display of selected contribution detail */}
              <motion.div
                key={activeContrib.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral-950 border border-neutral-800 p-5 rounded-none"
              >
                <h4 className="font-extrabold text-orange-500 text-xs uppercase tracking-wider flex items-center gap-2 font-mono">
                  <span className="w-1.5 h-1.5 rounded-none bg-orange-500" />
                  {activeContrib.title}
                </h4>
                <p className="text-neutral-300 text-xs leading-relaxed mt-2.5 font-sans">
                  {activeContrib.description}
                </p>
              </motion.div>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono font-bold text-neutral-550">
              <span className="flex items-center gap-1.5 text-orange-500/80">
                <ShieldCheck className="w-4 h-4" /> Guaranteed Alignment
              </span>
              <span className="text-neutral-600">Digital Ethiopia 2025</span>
            </div>
          </div>
        </section>

      </div>

      {/* Offers Comparison Table Block */}
      <section className="bg-neutral-900 p-6 md:p-8 rounded-none border border-neutral-800" id="degree-matrix">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-2 bg-orange-500/10 border border-orange-500/20 w-fit px-2.5 py-0.5 rounded-none font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Academic Offers Chart</span>
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display sm:text-3xl">Comparative Matrix</h2>
            <p className="text-neutral-500 text-xs font-mono mt-1">UK University Admissions offers, tuition rates and CAS deposits</p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center bg-neutral-950 p-1 border border-neutral-800 rounded-none w-fit no-print">
            <button 
              onClick={() => setCurrency('GBP')}
              className={`px-3 py-1.5 rounded-none text-xs font-extrabold uppercase tracking-wide sm:px-4 ${currency === 'GBP' ? 'bg-orange-500 text-neutral-950' : 'text-neutral-400 hover:text-white'}`}
            >
              GBP (£)
            </button>
            <button 
              onClick={() => setCurrency('ETB')}
              className={`px-3 py-1.5 rounded-none text-xs font-extrabold uppercase tracking-wide sm:px-4 ${currency === 'ETB' ? 'bg-orange-500 text-neutral-950' : 'text-neutral-400 hover:text-white'}`}
            >
              ETB (Birr)
            </button>
          </div>
        </div>

        {/* Desktop Responsive Table */}
        <div className="overflow-x-auto -mx-6 md:mx-0 whitespace-nowrap">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-neutral-800 text-left">
              <thead>
                <tr className="bg-neutral-950 border-b border-neutral-800">
                  <th className="py-3 px-4 text-[10px] font-bold tracking-widest uppercase text-neutral-450 font-mono">Institution</th>
                  <th className="py-3 px-4 text-[10px] font-bold tracking-widest uppercase text-neutral-450 font-mono">Intended Postgraduate Program</th>
                  <th className="py-3 px-4 text-[10px] font-bold tracking-widest uppercase text-neutral-450 text-right font-mono">Pathway Tuition</th>
                  <th className="py-3 px-4 text-[10px] font-bold tracking-widest uppercase text-neutral-450 text-right font-mono">Degree Tuition</th>
                  <th className="py-3 px-4 text-[10px] font-bold tracking-widest uppercase text-neutral-450 text-right font-mono">Initial Deposit</th>
                  <th className="py-3 px-4 text-[10px] font-bold tracking-widest uppercase text-neutral-450 text-center font-mono font-bold no-print">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-xs">
                {universityOffers.map((offer) => (
                  <tr key={offer.id} className="hover:bg-neutral-950 transition-colors">
                    <td className="py-4 px-4 text-white">
                      <div className="font-bold">{offer.name}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5 font-mono">{offer.subName}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[9px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded-none bg-neutral-950 border border-neutral-800 text-orange-500 mr-2">
                        {offer.programmeType}
                      </span>
                      <span className="text-neutral-200 font-semibold">{offer.degreeProgramme}</span>
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-neutral-300">
                      {formatCurrency(offer.pathwayFee)}
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-neutral-300">
                      {offer.degreeFee > 0 ? formatCurrency(offer.degreeFee) : <span className="text-neutral-600">—</span>}
                    </td>
                    <td className="py-4 px-4 text-right font-mono font-extrabold text-orange-500 bg-orange-500/5">
                      {formatCurrency(offer.initialDeposit)}
                    </td>
                    <td className="py-4 px-4 text-center no-print flex justify-center">
                      <button 
                        onClick={() => onSelectUniversity(offer.id)}
                        className="text-white hover:text-orange-500 font-bold uppercase tracking-wider text-[11px] font-mono inline-flex items-center gap-0.5 transition-colors"
                      >
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sub-note */}
        <div className="bg-neutral-950 p-4 border-l-2 border-orange-500 rounded-none mt-6">
          <p className="text-[11px] text-neutral-400 leading-relaxed font-mono">
            <strong className="text-orange-500">* Currency Conversion Statement:</strong> The conversion above is evaluated at a baseline exchange index of <strong>1 GBP = {exchangeRate} ETB</strong>. Nottingham, Bournemouth, Westminster, and ASU offers have a standard combined Kaplan pathway deposit requirement of £5,260.00, whereas the University of Stirling requires £3,364.00 (which accounts for £3,000 tuition and £364 UniPlan medical insurance premium) to generate a CAS.
          </p>
        </div>
      </section>

      {/* Supporting Documents Visual Portal */}
      <section className="bg-neutral-900 p-6 md:p-8 rounded-none border border-neutral-800" id="support-documents-hub">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-orange-500 mb-2 bg-orange-500/10 border border-orange-500/20 w-fit px-2.5 py-0.5 rounded-none font-mono">
            <CheckCircle className="w-3.5 h-3.5" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Verification Dossier</span>
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight font-display sm:text-3xl">Supporting Documents</h2>
          <p className="text-neutral-500 text-xs font-mono mt-1">Click on any offer letter or invoice to examine official conditions inside the Interactive Reader</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportingDocuments.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => onSelectDoc(doc.id)}
              className="group border border-neutral-850 hover:border-orange-500 bg-neutral-950 hover:bg-neutral-900 rounded-none p-5 cursor-pointer transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold font-mono text-neutral-500 tracking-wider uppercase">{doc.section}</span>
                  <span className="text-[9px] font-bold font-mono text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-none">
                    {doc.pageCount} Pages
                  </span>
                </div>
                <h3 className="font-extrabold text-white text-sm uppercase tracking-wide group-hover:text-orange-500 transition-colors line-clamp-1 font-display">
                  {doc.title}
                </h3>
                <p className="text-[10px] text-neutral-550 font-mono mt-1">{doc.institution}</p>
                <p className="text-neutral-400 text-xs mt-3 line-clamp-2 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-neutral-400 group-hover:text-orange-500 transition-colors font-mono uppercase tracking-widest text-[10px] no-print">
                <span>View Document</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact card on Dashboard */}
      <section className="bg-neutral-900 p-6 md:p-8 rounded-none border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 no-print" id="dashboard-contact-banner">
        <div className="space-y-1">
          <h3 className="text-base font-black text-white uppercase tracking-wider font-display">Need Additional Verification?</h3>
          <p className="text-neutral-400 text-xs">Original wet-ink copies and electronic credential transcripts of all offers are available for instantaneous matching.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:bilalabdulkadir286@gmail.com" className="bg-orange-500 hover:bg-orange-600 text-neutral-950 text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-none flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> Email Bilal
          </a>
          <a href="tel:+251941322948" className="bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-bold font-mono tracking-wide px-5 py-3 rounded-none flex items-center gap-2 transition-colors">
            <Phone className="w-4 h-4 text-orange-500" /> +251 941 322 948
          </a>
        </div>
      </section>
    </motion.div>
  );
}
