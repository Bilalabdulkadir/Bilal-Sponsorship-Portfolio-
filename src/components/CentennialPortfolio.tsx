import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  GraduationCap, 
  Linkedin, 
  Github, 
  Mail, 
  Download, 
  Check, 
  Phone, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  CheckCircle,
  Clock,
  Home
} from 'lucide-react';

export default function CentennialPortfolio() {
  const [activeSubTab, setActiveSubTab] = useState<'story' | 'leadership' | 'experience' | 'certifications' | 'residence'>('story');

  const email = 'bilalabdulkadir286@gmail.com';
  const phone = '+251941322948';
  const linkedinUrl = 'https://www.linkedin.com/in/bilalabdulkadir';
  const githubUrl = 'https://github.com/Bilalabdulkadir';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-8"
      id="centennial-portfolio-root"
    >
      {/* Immersive Academic Header */}
      <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-none relative overflow-hidden">
        {/* Decorative background shield accent */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-[#E8C766] bg-[#E8C766]/10 border border-[#E8C766]/20 px-2.5 py-1 w-fit font-mono text-[9px] uppercase tracking-widest font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Centennial College Case Docket</span>
            </div>
            <h2 className="text-2xl sm:text-3.5xl font-black text-white font-display uppercase tracking-tight">
              Residence Scholarship Portfolio
            </h2>
            <p className="text-sm font-serif italic text-neutral-300 max-w-2xl">
              "From Dera's databases to Canada's workplaces — building healthier systems, one record and one person at a time."
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] font-mono leading-none">
            <div className="bg-neutral-950 border border-neutral-800 px-3 py-2 text-neutral-400">
              <span className="text-neutral-500 block uppercase mb-1">Incoming Intake</span>
              <span className="text-[#E8C766] font-bold uppercase">Fall 2026 Term</span>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 px-3 py-2 text-neutral-400">
              <span className="text-neutral-500 block uppercase mb-1">Target Program</span>
              <span className="text-white font-bold uppercase">Workplace Wellness</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-neutral-800/60 flex flex-wrap gap-y-3 justify-between items-center text-xs text-neutral-400 font-mono">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#E8C766]" /> Toronto, Ontario, Canada</span>
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#E8C766]" /> {phone}</span>
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#E8C766]" /> {email}</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://bilalabdulkadir.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E8C766] hover:text-white transition-colors duration-150 inline-flex items-center gap-1 text-[11px] font-bold border-b border-[#E8C766]/30 hover:border-white"
            >
              <ExternalLink className="w-3 h-3" /> Live Scholarship Page
            </a>
          </div>
        </div>
      </div>

      {/* Structured Tab selector within Centennial */}
      <div className="flex flex-wrap gap-1 bg-neutral-950 p-1 border border-neutral-800 text-xs font-mono font-bold no-print">
        <button
          onClick={() => setActiveSubTab('story')}
          className={`px-4 py-2.5 rounded-none uppercase tracking-wider flex items-center gap-1.5 transition-all text-[11px] ${
            activeSubTab === 'story' ? 'bg-[#E8C766] text-neutral-950 font-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Personal Statement</span>
        </button>

        <button
          onClick={() => setActiveSubTab('leadership')}
          className={`px-4 py-2.5 rounded-none uppercase tracking-wider flex items-center gap-1.5 transition-all text-[11px] ${
            activeSubTab === 'leadership' ? 'bg-[#E8C766] text-neutral-950 font-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Leadership Essay</span>
        </button>

        <button
          onClick={() => setActiveSubTab('experience')}
          className={`px-4 py-2.5 rounded-none uppercase tracking-wider flex items-center gap-1.5 transition-all text-[11px] ${
            activeSubTab === 'experience' ? 'bg-[#E8C766] text-neutral-950 font-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Experience & Projects</span>
        </button>

        <button
          onClick={() => setActiveSubTab('certifications')}
          className={`px-4 py-2.5 rounded-none uppercase tracking-wider flex items-center gap-1.5 transition-all text-[11px] ${
            activeSubTab === 'certifications' ? 'bg-[#E8C766] text-neutral-950 font-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Certifications</span>
        </button>

        <button
          onClick={() => setActiveSubTab('residence')}
          className={`px-4 py-2.5 rounded-none uppercase tracking-wider flex items-center gap-1.5 transition-all text-[11px] ${
            activeSubTab === 'residence' ? 'bg-[#E8C766] text-neutral-950 font-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Residence Community</span>
        </button>
      </div>

      {/* Sub-tab view layouts rendered in classical paper/serif content cards inside the dark cosmic theme */}
      <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 space-y-6">
        {activeSubTab === 'story' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="text-[10px] text-[#E8C766] font-mono font-bold uppercase tracking-widest block mb-1">
                Centennial Personal Statement
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                The Day I Learned Systems Are Human
              </h3>
            </div>

            <div className="font-serif text-sm sm:text-base text-neutral-200 leading-relaxed space-y-4">
              <p className="font-sans font-bold text-neutral-100 text-base sm:text-md border-l-2 border-[#E8C766] pl-3">
                Five years ago, on a Tuesday afternoon in Dera, I sat beside a 58-year-old woman named Tigist who had been waiting three hours to renew her municipal ID. The database was down — again. As the Data Entry & Database Support Officer, I knew the problem was not the server. It was a workflow no one had ever questioned.
              </p>
              
              <p>
                I spent the next two weeks mapping the process, standardizing input fields, and training two colleagues. Within a month, duplicate records had fallen by 40%, and Tigist's daughter was able to register her newborn in under twenty minutes.
              </p>

              <div className="border border-neutral-800 bg-neutral-950 p-6 my-6 italic text-center text-lg text-[#E8C766] font-serif">
                "That day taught me something I carry into every project I touch: systems are never just technical. They are human."
                <span className="block not-italic font-sans font-extrabold text-[10px] text-neutral-500 uppercase tracking-widest mt-3">— Bilal Abdulkadir, Dera City, 2020</span>
              </div>

              <p>
                That belief is what brings me to Centennial College. For six years I have worked at the intersection of technology and people — first as a database officer serving 50,000+ municipal records, then as an IT Support Specialist where I resolved 95% of tickets within SLA and mentored more than ten colleagues through their growth. The work was deeply satisfying, and it was not enough.
              </p>
              
              <p>
                Every ticket, every data field, every system I built was ultimately a question of wellbeing: was this person able to do their job without burning out? Was this family able to access the service they needed? Was this workplace actually well, or merely functional? I want to move closer to those questions.
              </p>

              <p>
                The <strong>Workplace Wellness and Health Promotion</strong> program at Centennial is the bridge I have been looking for — a chance to pair my analytical mindset and operational experience with formal training in mental health, occupational health, and the design of healthier workplaces.
              </p>
              
              <p>
                Relocating from Addis Ababa to Canada is not a small step, and I do not approach it lightly. I have spent the past year preparing — earning certifications in cloud computing, cybersecurity infrastructure, emotional intelligence, and hospitality practice. Each one was a deliberate signal to myself that the next chapter requires more than technical skill. It requires the ability to read a room, to listen across cultures, and to lead with care.
              </p>
            </div>
          </div>
        )}

        {activeSubTab === 'leadership' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="text-[10px] text-[#E8C766] font-mono font-bold uppercase tracking-widest block mb-1">
                Centennial Leadership Essay
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                What a Fragmented Database Taught Me About People
              </h3>
            </div>

            <div className="space-y-6 font-serif text-sm sm:text-base text-neutral-200 leading-relaxed">
              
              <div className="space-y-2 border-l border-neutral-800 pl-4">
                <div className="flex justify-between font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  <span>Dera City Administration</span>
                  <span>2020 – 2022</span>
                </div>
                <h4 className="font-sans font-black text-white text-sm uppercase tracking-wide">The Role: Front Line of Public Service</h4>
                <p>
                  As Data Entry & Database Support Officer, my role was, on paper, narrow: enter records, verify them, keep the system running. In practice, I was standing at the front line of a city trying to serve tens of thousands of residents through a paper-and-spreadsheet system that was buckling under its own weight. I came to understand, very quickly, that the smallest typo on my end could become a three-hour wait for a citizen at the front counter.
                </p>
              </div>

              <div className="space-y-2 border-l border-neutral-800 pl-4">
                <div className="flex justify-between font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  <span>Academic and Professional Growth</span>
                  <span>Within first year</span>
                </div>
                <h4 className="font-sans font-black text-white text-sm uppercase tracking-wide">The Evolution: Earned, Not Assigned</h4>
                <p>
                  I was appointed on the strength of my IT background, but the leadership part was not assigned — it was earned. Within my first year, my supervisor began routing newer colleagues to me for guidance. What started as informal shoulder-to-shoulder help became structured training: I led sessions on new digital registration forms, walked team members through verification protocols, and served as the bridge between the technical side of the system and the administrative staff who used it every day.
                </p>
              </div>

              <div className="space-y-2 border-l border-neutral-800 pl-4">
                <div className="flex justify-between font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  <span>Transformation Deliverables</span>
                  <span>System Migration</span>
                </div>
                <h4 className="font-sans font-black text-white text-sm uppercase tracking-wide">The Result: 40% Fewer Duplicates, 99% Accuracy</h4>
                <p>
                  The team set a simple goal: move from manual, error-prone records to a reliable digital database. I led the design of standardized data entry protocols, implemented new digital registration forms, and embedded verification steps at the point of entry rather than after the fact. The result: a measurable reduction in entry errors, a streamlined workflow for the entire administrative team, and accurate citizen profiles that allowed public services to be delivered faster and more reliably.
                </p>
              </div>

              <div className="space-y-2 border-l border-neutral-800 pl-4">
                <div className="flex justify-between font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  <span>Managing Inertia</span>
                  <span>Systemic Auditor</span>
                </div>
                <h4 className="font-sans font-black text-white text-sm uppercase tracking-wide">The Setback: The Audit Nobody Wanted</h4>
                <p>
                  The most difficult stretch came when we surfaced the scale of the problem we had inherited: fragmented, incomplete, and sometimes contradictory resident records accumulating for years. The team was demoralized, and there was real resistance to the additional work a full audit would require. I responded by initiating a structured data audit, building a simple verification checklist, and sitting with colleagues one-on-one to walk through the inconsistencies we were finding. Leadership, I learned, is rarely about a clean plan — it is about doing the slow, unglamorous work of bringing people with you.
                </p>
              </div>

              <div className="space-y-2 border-l border-[#E8C766] pl-4">
                <div className="flex justify-between font-mono text-[11px] font-[#E8C766] uppercase">
                  <span className="text-[#E8C766] font-bold">Key Leadership Takeaway</span>
                  <span className="text-neutral-500">Post-Implementation Review</span>
                </div>
                <h4 className="font-sans font-black text-white text-sm uppercase tracking-wide text-[#E8C766]">The Lesson: Buy-In Earlier</h4>
                <p className="italic">
                  Looking back, the most important lesson is that technical skill is necessary but never sufficient. Knowing how to design a database does not by itself change an organization. What changes an organization is the ability to communicate clearly, to listen to resistance rather than override it, and to build consensus around a better way of working. If I could lead this initiative again, I would have introduced collaborative training sessions from day one. Buy-in earlier would have saved weeks of friction.
                </p>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'experience' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <div className="text-[10px] text-[#E8C766] font-mono font-bold uppercase tracking-widest block mb-1">
                Workforce Records
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                6 Years at the Intersection of IT & People
              </h3>
            </div>

            {/* Employment Timeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-neutral-800 bg-neutral-950/40 p-5 rounded-none flex flex-col justify-between">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-[#E8C766] font-bold">
                    <span>Star Dev Association</span>
                    <span>2022 – 2025</span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mt-2">IT Support Specialist</h4>
                  <ul className="mt-4 space-y-2 text-xs md:text-sm text-neutral-300 list-disc pl-4 leading-relaxed font-sans">
                    <li>Resolved 95% of technical support tickets within SLA timelines, reducing operational downtime by 15%.</li>
                    <li>Mentored 10+ staff members on troubleshooting best practices, strengthening team capability and service consistency.</li>
                    <li>Managed user accounts, system access controls, and cybersecurity & backup systems.</li>
                    <li>Maintained detailed documentation and knowledge-base articles for organizational continuity.</li>
                  </ul>
                </div>
              </div>

              <div className="border border-neutral-800 bg-neutral-950/40 p-5 rounded-none flex flex-col justify-between">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-[#E8C766] font-bold">
                    <span>Dera City Administration</span>
                    <span>2020 – 2022</span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mt-2">Data Entry & Database Officer</h4>
                  <ul className="mt-4 space-y-2 text-xs md:text-sm text-neutral-300 list-disc pl-4 leading-relaxed font-sans">
                    <li>Validated and maintained 50,000+ records with 99% accuracy across municipal databases.</li>
                    <li>Improved data quality controls, reducing duplicate records by 40%.</li>
                    <li>Led the design and rollout of standardized digital registration forms city-wide.</li>
                    <li>Supported digital registration systems, data migration, and cross-department collaboration.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project List */}
            <div className="pt-6 border-t border-neutral-800/80">
              <h4 className="text-xs font-mono font-bold text-neutral-450 uppercase tracking-widest mb-4">
                Selected Project Showcase
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-neutral-950 border border-neutral-850 p-4">
                  <h5 className="font-bold text-white text-xs uppercase tracking-wider">IT Support Data Analysis</h5>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">Python · Power BI</p>
                  <p className="text-[11px] text-neutral-500 mt-2 font-sans">
                    Analyzed IT support tickets and performance metrics to identify trends, improving response efficiency by 20%.
                  </p>
                </div>
                
                <div className="bg-neutral-950 border border-neutral-850 p-4">
                  <h5 className="font-bold text-white text-xs uppercase tracking-wider">Power BI Dashboarding</h5>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">Microsoft Power BI</p>
                  <p className="text-[11px] text-neutral-500 mt-2 font-sans">
                    Designed interactive dashboards to monitor operational performance, allowing leadership to act on real-time KPIs.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-850 p-4">
                  <h5 className="font-bold text-white text-xs uppercase tracking-wider">Cybersecurity Risk Simulation</h5>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">Forage · OPSWAT</p>
                  <p className="text-[11px] text-neutral-500 mt-2 font-sans">
                    Conducted comprehensive risk assessments and vulnerability analysis using structured CIP frameworks.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-850 p-4">
                  <h5 className="font-bold text-white text-xs uppercase tracking-wider">Cloud Collaboration Tools</h5>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">Google Drive Workspace</p>
                  <p className="text-[11px] text-neutral-500 mt-2 font-sans">
                    Implemented secure Drive-based document flows and AI-assisted task workflows to increase inter-team collaboration speed.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'certifications' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="text-[10px] text-[#E8C766] font-mono font-bold uppercase tracking-widest block mb-1">
                Continuous Professional Development
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                Verified Curricular Credentialing
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] font-bold text-[#E8C766] uppercase tracking-widest pb-1 border-b border-neutral-800">
                  Cloud Computing & AI
                </h4>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>AWS AI Practitioner Challenge · Udacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Gemini in Google Drive · Udacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Describe Cloud Computing · Microsoft</span>
                  </li>
                </ul>

                <h4 className="font-mono text-[10px] font-bold text-[#E8C766] uppercase tracking-widest pt-4 pb-1 border-b border-neutral-800">
                  Infrastructure & Operations
                </h4>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>CompTIA Security+ Prep · Cyberinterview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Critical Infrastructure Protection · OPSWAT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Cyber Security Operations · Forage Simulation</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-[10px] font-bold text-[#E8C766] uppercase tracking-widest pb-1 border-b border-neutral-800">
                  Data Science & Analytics
                </h4>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Power BI Fundamentals · Microsoft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Microsoft Fabric Analytics · Microsoft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Data Analysis Fundamentals · Microsoft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Data Analysis & Storytelling · Springpod</span>
                  </li>
                </ul>

                <h4 className="font-mono text-[10px] font-bold text-[#E8C766] uppercase tracking-widest pt-4 pb-1 border-b border-neutral-800">
                  Professional & Interpersonal Systems
                </h4>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Emotional Intelligence · Saint Louis University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Maze Specialist Certification · Maze University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8C766]">➔</span>
                    <span>Hospitality Practice · Springpod & Marriott Bonvoy</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'residence' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="text-[10px] text-[#E8C766] font-mono font-bold uppercase tracking-widest block mb-1">
                Residence Community Commitment
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                Peer Integration & Wellness Leadership
              </h3>
            </div>

            <div className="font-serif text-sm sm:text-base text-neutral-200 leading-relaxed space-y-4">
              <p>
                If I am fortunate enough to receive this scholarship, I will bring the same orientation to the residence community that I have brought to every workplace and volunteer role: a deep belief that systems — whether a database, a help desk, or a residence hall — are, at their core, a collection of human beings trying to do well by one another.
              </p>
              
              <p className="font-sans font-bold border-l-2 border-[#E8C766] pl-3 text-white text-xs sm:text-sm py-1 font-mono uppercase tracking-wider block">
                Volunteer Computer Tutor Status  ·  Since 2014
              </p>
              <p>
                I have been a Volunteer Computer Tutor, teaching digital literacy to neighbours and elders who had been left behind by the rapid spread of mobile technology. I know what it feels like to be the person in the room who does not yet speak the language of a new system, and I know the dignity of being helped without condescension.
              </p>

              <p>
                I want to be that person for incoming students at Centennial — someone who helps a first-generation international student navigate the student portal, who organizes a peer wellness check-in during exam season, or who simply listens when homesickness arrives unannounced.
              </p>

              <div className="border border-neutral-800 bg-neutral-950 p-6 italic text-center text-md text-[#E8C766] font-serif">
                "Centennial's mission is to cultivate graduates who are not only professionally capable but also community-minded. I want to be one of those graduates."
              </div>

              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mt-4">
                Thank you for considering my scholarship application. I will work hard to make Centennial's investment in my residence pathway worth your trust and full of academic contribution.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Verified Academic References Section */}
      <section className="bg-neutral-900 border border-neutral-800 p-6 md:p-8" id="centennial-references">
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-[#E8C766] bg-[#E8C766]/10 border border-[#E8C766]/20 px-2.5 py-0.5 w-fit font-mono text-[9px] uppercase tracking-widest font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verification References Panel</span>
          </div>
          <h3 className="text-xl font-black text-white font-display uppercase tracking-tight mt-2">
            Professional & Academic References
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-1">Directly validated references supporting Bilal's Canadian academic transitions:</p>
        </div>

        <div className="space-y-4 font-mono text-xs">
          
          <div className="p-4 bg-neutral-950 border border-neutral-850">
            <div className="flex flex-wrap justify-between items-start gap-1">
              <h4 className="text-sm font-black text-white uppercase tracking-wider font-sans">Abdurezak Jeylan Abdulkadir</h4>
              <span className="text-[9px] bg-[#E8C766] text-neutral-950 font-bold px-1.5 py-0.5">SDA DIRECT HEAD APPROVED</span>
            </div>
            <p className="text-[#E8C766] mt-1 text-[11px]">General Manager, Star Development Association (SDA), Dera, Ethiopia</p>
            <p className="text-neutral-400 mt-2.5 font-sans leading-relaxed">
              Direct organizational supervisor. Authorized experience reference Ref: <strong>SDA/EXPOS/25</strong> (dated Dec 30, 2025) confirming Bilal's services as lead IT Service Support Officer.
            </p>
            <p className="text-neutral-550 mt-2 text-[10px]">Email: Star3545@gmail.com | Phone: +251945332535</p>
          </div>

          <div className="p-4 bg-neutral-950 border border-neutral-850">
            <div className="flex flex-wrap justify-between items-start gap-1">
              <h4 className="text-sm font-black text-white uppercase tracking-wider font-sans">Saladin Musa</h4>
              <span className="text-[9px] bg-[#E8C766] text-neutral-950 font-bold px-1.5 py-0.5">ACADEMIC SPONSOR</span>
            </div>
            <p className="text-[#E8C766] mt-1 text-[11px]">Lecturer & Researcher, Konbolcha Institute of Technology</p>
            <p className="text-neutral-400 mt-2.5 font-sans leading-relaxed">
              Academic advisor. Verifies intellectual aptitude, technical database growth, and scholarly readiness for Canada post-graduate curriculum.
            </p>
            <p className="text-neutral-550 mt-2 text-[10px]">Email: Salahadin.seid@kiot.edu.et | Phone: +251912274777</p>
          </div>

          <div className="p-4 bg-neutral-950 border border-neutral-850">
            <div className="flex flex-wrap justify-between items-start gap-1">
              <h4 className="text-sm font-black text-white uppercase tracking-wider font-sans">Kebebew Ababu, M.Sc.</h4>
              <span className="text-[9px] bg-[#E8C766] text-neutral-950 font-bold px-1.5 py-0.5">ALUMNI ENDORSER</span>
            </div>
            <p className="text-[#E8C766] mt-1 text-[11px]">Lecturer, Jimma Institute of Technology</p>
            <p className="text-neutral-400 mt-2.5 font-sans leading-relaxed">
              Graduation faculty advisor. Attests to graduation performance in B.Sc. IT from Jimma University, providing recommendation support.
            </p>
            <p className="text-neutral-550 mt-2 text-[10px]">Email: Kebebew.ababu@ju.edu.et | Phone: +251913774808</p>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
