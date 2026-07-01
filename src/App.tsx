import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  LayoutDashboard, 
  FileText, 
  BookOpen, 
  FolderLock, 
  Printer, 
  ShieldAlert,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import SponsorshipLetter from './components/SponsorshipLetter';
import OfferExplorer from './components/OfferExplorer';
import DocumentReader from './components/DocumentReader';
import QRCodeGenerator from './components/QRCodeGenerator';
import ContactForm from './components/ContactForm';
import CentennialPortfolio from './components/CentennialPortfolio';

type TabType = 'overview' | 'letter' | 'offers' | 'reader' | 'centennial';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [selectedUnivId, setSelectedUnivId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectDoc = (docId: string) => {
    setSelectedDocId(docId);
    setActiveTab('reader');
  };

  const handleSelectUniversity = (univId: string) => {
    setSelectedUnivId(univId);
    setActiveTab('offers');
  };

  const tabsList = [
    { id: 'overview' as TabType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'letter' as TabType, label: 'Ministry Letter', icon: FileText },
    { id: 'offers' as TabType, label: 'Offer Explorer', icon: BookOpen },
    { id: 'reader' as TabType, label: 'Document Center', icon: FolderLock },
    { id: 'centennial' as TabType, label: 'Centennial Canada', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans flex flex-col justify-between selection:bg-orange-500 selection:text-neutral-950">
      
      {/* Upper Status Line */}
      <div className="bg-neutral-900 text-neutral-400 text-[10px] sm:text-xs py-2 px-4 border-b border-neutral-800 flex justify-between items-center no-print">
        <span className="flex items-center gap-1.5 font-bold font-mono uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          UK Sponsorship Request Docket · FY-2026
        </span>
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-extrabold hidden md:inline font-mono">
          Prepared for the Ministry of Labour and Skills, FDRE, Ethiopia
        </span>
      </div>

      {/* Main App Bar / Header */}
      <header className="bg-neutral-950 border-b border-neutral-900 sticky top-0 z-40 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo Brand Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-none bg-orange-500 flex items-center justify-center font-display text-black font-black text-lg border border-orange-500">
              BM
            </div>
            <div>
              <h1 className="text-sm font-black text-neutral-100 font-display tracking-tight uppercase leading-none sm:text-base">
                Bilal Abdulkadir Muhammed
              </h1>
              <p className="text-[10px] sm:text-xs text-orange-500 font-bold font-mono tracking-widest uppercase mt-1.5 leading-none">
                Sponsorship Portfolio
              </p>
            </div>
          </div>

          {/* Desktop Tab Controls */}
          <nav className="hidden md:flex items-center bg-neutral-900/80 p-1 rounded-none border border-neutral-800">
            {tabsList.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== 'reader') setSelectedDocId(null);
                    if (tab.id !== 'offers') setSelectedUnivId(null);
                  }}
                  className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-orange-500 text-neutral-950'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-850/50'
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-bold">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-neutral-950 border border-orange-500 px-3 py-1.5 rounded-none font-mono uppercase tracking-widest text-[9px] transition-all duration-150 active:scale-95 cursor-pointer"
              title="Print Portfolio / Export PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Portfolio
            </button>
            <span className="flex items-center gap-1.5 bg-neutral-900 text-orange-500 border border-neutral-800 px-3 py-1.5 rounded-none font-mono uppercase tracking-widest text-[9px]">
              KAPLAN ID: P527124
            </span>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/in/bilalabdulkadir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-none text-neutral-400 hover:text-orange-500 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/Bilalabdulkadir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-none text-neutral-400 hover:text-orange-500 transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu and print actions trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => window.print()}
              className="p-2 text-orange-500 hover:text-white border border-neutral-800 rounded-none hover:bg-neutral-900 transition-colors"
              title="Print Portfolio / Export PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white border border-neutral-800 rounded-none hover:bg-neutral-900"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 py-3 px-4 space-y-2.5 no-print sticky top-16 z-30">
          {tabsList.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'reader') setSelectedDocId(null);
                  if (tab.id !== 'offers') setSelectedUnivId(null);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left p-3 rounded-none text-xs font-bold uppercase tracking-wider flex items-center gap-3 ${
                  isActive ? 'bg-orange-500 text-neutral-950' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <TabIcon className="w-4 h-4 flex-shrink-0" />
                {tab.label}
              </button>
            );
          })}
          
          <button
            onClick={() => {
              window.print();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left p-3 rounded-none text-xs font-bold uppercase tracking-wider flex items-center gap-3 border border-orange-500/20 bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-neutral-950 transition-all duration-150"
          >
            <Printer className="w-4 h-4 flex-shrink-0" />
            Print Portfolio (PDF)
          </button>

          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono font-bold text-orange-500">
            <span>KAPLAN ID: P527124</span>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/bilalabdulkadir" className="text-neutral-400 hover:text-white font-mono">LINKEDIN</a> · 
              <a href="https://github.com/Bilalabdulkadir" className="text-neutral-400 hover:text-white font-mono">GITHUB</a>
            </div>
          </div>
        </div>
      )}

      {/* Main Core Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Dashboard 
                onSelectDoc={handleSelectDoc} 
                onSelectUniversity={handleSelectUniversity} 
              />
            </motion.div>
          )}
          {activeTab === 'letter' && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <SponsorshipLetter />
            </motion.div>
          )}
          {activeTab === 'offers' && (
            <motion.div
              key="offers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <OfferExplorer 
                initialUniversityId={selectedUnivId} 
              />
            </motion.div>
          )}
          {activeTab === 'reader' && (
            <motion.div
              key="reader"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <DocumentReader 
                initialDocId={selectedDocId} 
                onBack={() => setActiveTab('overview')} 
                
              />
            </motion.div>
          )}
          {activeTab === 'centennial' && (
            <motion.div
              key="centennial"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <CentennialPortfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Verification Inquiry Form */}
      <ContactForm />

      {/* Application Footer */}
      <footer className="bg-black text-neutral-400 py-12 px-4 mt-12 border-t border-neutral-900 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left panel: Credentials and profiles */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="space-y-1.5">
              <h4 className="text-white font-black font-display text-base uppercase tracking-wider">Bilal Abdulkadir Muhammed</h4>
              <p className="text-xs text-neutral-400 font-medium">Prepared for the Ministry of Labour and Skills, Federal Democratic Republic of Ethiopia</p>
              <p className="text-[10px] text-neutral-600 font-mono font-bold uppercase tracking-widest mt-2">© 2026. ALL RIGHTS RESERVED.</p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider pt-2">
              <a href="https://www.linkedin.com/in/bilalabdulkadir" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
                <Linkedin className="w-4.5 h-4.5" /> LinkedIn
              </a>
              <a href="https://github.com/Bilalabdulkadir" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
                <Github className="w-4.5 h-4.5" /> GitHub
              </a>
              <a href="mailto:bilalabdulkadir286@gmail.com" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
                <Mail className="w-4.5 h-4.5" /> Email Bilal
              </a>
            </div>
          </div>

          {/* Right panel: Live QR Code generator widget */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <QRCodeGenerator />
          </div>

        </div>
      </footer>

    </div>
  );
}
