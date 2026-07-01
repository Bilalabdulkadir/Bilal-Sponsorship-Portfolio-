import React, { useState } from 'react';
import { 
  Mail, 
  User, 
  FileText, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'UK Educational Sponsorship Inquiry',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  // Bilal's professional email
  const recipientEmail = 'bilalabdulkadir286@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getMailtoUrl = () => {
    const subjectLine = encodeURIComponent(formData.subject);
    const bodyContent = encodeURIComponent(
      `Sponsorship Inquiry / Official Message\n` +
      `========================\n\n` +
      `From: ${formData.name}\n` +
      `Sender Email: ${formData.email}\n` +
      `Timestamp: ${new Date().toLocaleString()}\n\n` +
      `Message Details:\n` +
      `------------------------\n` +
      `${formData.message}\n\n` +
      `========================\n` +
      `Sent via Interactive Verification Portal`
    );
    return `mailto:${recipientEmail}?subject=${subjectLine}&body=${bodyContent}`;
  };

  const getRawMessageText = () => {
    return (
      `To: ${recipientEmail}\n` +
      `Subject: ${formData.subject}\n\n` +
      `From: ${formData.name} <${formData.email}>\n\n` +
      `Message:\n` +
      `${formData.message}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    
    // Simulate high-quality feedback & launch direct email
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      // Trigger native email client on client machine
      window.location.href = getMailtoUrl();
    }, 900);
  };

  const handleCopyPayload = async () => {
    try {
      await navigator.clipboard.writeText(getRawMessageText());
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'UK Educational Sponsorship Inquiry',
      message: ''
    });
    setSuccess(false);
  };

  return (
    <section 
      id="contact-section" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 scroll-mt-20 no-print"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 rounded-none">
        
        {/* Left column: Context and direct contacts */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 w-fit font-mono text-[9px] uppercase tracking-widest font-bold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              <span>Primary Inquiry Pipeline</span>
            </div>
            
            <h3 className="text-xl font-black text-white uppercase tracking-widest font-display">
              Send Direct Inquiry
            </h3>
            
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Have questions regarding Kaplan Pathway Certificates, CAS schedules, course modules, or institutional partnerships? Submit this form to establish dynamic communication.
            </p>

            <ul className="space-y-3 font-mono text-[11px] text-neutral-400 pt-2 border-t border-neutral-850">
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-extrabold w-4">➔</span>
                <span>Direct Mailbox: <strong className="text-white">{recipientEmail}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-extrabold w-4">➔</span>
                <span>Usability: Launches desktop or mobile mail client</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-extrabold w-4">➔</span>
                <span>Alternative: One-click payload copy for webmail clients</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-950/70 p-4 border border-neutral-850 rounded-none space-y-2 text-[10px] text-neutral-500 font-mono leading-normal">
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-orange-500 tracking-wider uppercase mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Response Framework</span>
            </div>
            <p>Typically processes messages in under 24 business hours. Verification assets and digital copies of secured UK Kaplan CAS offers are instantly deliverable.</p>
          </div>
        </div>

        {/* Right column: Form body */}
        <div className="lg:col-span-7 bg-neutral-950 p-6 border border-neutral-850 rounded-none relative">
          
          {success ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 py-8 animate-fadeIn">
              <CheckCircle className="w-12 h-12 text-orange-500" />
              <div className="space-y-1">
                <h4 className="text-white font-black uppercase font-display tracking-widest text-sm">
                  Email Client Initiated!
                </h4>
                <p className="text-xs text-neutral-400 max-w-sm">
                  We've prepared your message payload and triggered your device's native mail app.
                </p>
              </div>

              {/* Payload actions */}
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-none text-left w-full text-[11px] font-mono space-y-2 max-h-[160px] overflow-y-auto">
                <div className="text-[10px] text-neutral-550 font-bold uppercase border-b border-neutral-800 pb-1 flex justify-between">
                  <span>Prepared message payload:</span>
                  <span className="text-orange-500">Ready to Send</span>
                </div>
                <div className="text-neutral-400 whitespace-pre-line">{getRawMessageText()}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full pt-2">
                <button
                  onClick={handleCopyPayload}
                  className="flex-1 py-2 px-3 bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-850 text-neutral-300 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  title="Copy ready message payload to paste in Gmail/Outlook"
                >
                  {copiedPayload ? <Check className="w-3.5 h-3.5 text-orange-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPayload ? 'Payload Copied!' : 'Copy Raw Message'}
                </button>
                
                <button
                  onClick={resetForm}
                  className="flex-1 py-2 px-3 bg-orange-500 hover:bg-orange-600 text-neutral-950 font-black font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Write Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Sender Name */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-neutral-500 tracking-wider uppercase font-mono">
                  Your Full Name / Institution
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                    <User className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Kaplan Admissions Officer"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-3 py-2 pl-9 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Sender Email */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-neutral-500 tracking-wider uppercase font-mono">
                  Operational Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. official@mols.gov.et"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-3 py-2 pl-9 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-neutral-500 tracking-wider uppercase font-mono">
                  Subject Focus
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                    <FileText className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="UK Educational Sponsorship Inquiry"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-3 py-2 pl-9 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-neutral-500 tracking-wider uppercase font-mono">
                  Message Body
                </label>
                <div className="relative">
                  <span className="absolute top-2.5 left-3 text-neutral-500">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, confirmation targets, or review schedules here..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-3 py-2 pl-9 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors font-mono resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-neutral-950 py-2.5 px-4 rounded-none font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all text-center select-none cursor-pointer"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    Preparing Client Mailbox...
                  </span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-neutral-950 font-black" />
                    <span>Launch Secure Email Client</span>
                  </>
                )}
              </button>
              
              <div className="text-[9px] font-mono text-neutral-550 text-center uppercase tracking-wide">
                Sends via pre-formatted <span className="text-orange-500">Mailto URL</span>. Client privacy is fully respected.
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
