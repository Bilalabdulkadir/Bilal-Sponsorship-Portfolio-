import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { 
  QrCode, 
  UserPlus, 
  Linkedin, 
  Github, 
  Download, 
  Copy, 
  Check, 
  RefreshCw,
  PhoneCall,
  Mail,
  MapPin
} from 'lucide-react';

export default function QRCodeGenerator() {
  const [qrType, setQrType] = useState<'vcard' | 'linkedin' | 'github'>('vcard');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [generating, setGenerating] = useState<boolean>(false);

  // Bilal's details
  const name = 'Bilal Abdulkadir Muhammed';
  const email = 'bilalabdulkadir286@gmail.com';
  const phone = '+251941322948';
  const linkedinUrl = 'https://www.linkedin.com/in/bilalabdulkadir';
  const githubUrl = 'https://github.com/Bilalabdulkadir';

  // vCard format according to standard RFC-2426 specs
  const vcardText = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${name}`,
    `N:Muhammed;Bilal;Abdulkadir;;`,
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${email}`,
    `URL:${linkedinUrl}`,
    'ADR;TYPE=HOME:;;Adama;Oromia;Ethiopia;;',
    'ORG:Ministry of Labour and Skills Sponsorship Applicant',
    'TITLE:Software Engineer / UK Sponsorship Applicant',
    'END:VCARD'
  ].join('\n');

  const getEncodedText = () => {
    switch (qrType) {
      case 'vcard':
        return vcardText;
      case 'linkedin':
        return linkedinUrl;
      case 'github':
        return githubUrl;
    }
  };

  const getLabel = () => {
    switch (qrType) {
      case 'vcard':
        return 'vCard Contact Card';
      case 'linkedin':
        return 'LinkedIn Developer URL';
      case 'github':
        return 'GitHub Repository';
    }
  };

  useEffect(() => {
    let active = true;
    const generateQR = async () => {
      setGenerating(true);
      try {
        const text = getEncodedText();
        // High quality generation with high contrast orange accent color fitting the dark cosmic layout perfectly
        const url = await QRCode.toDataURL(text, {
          width: 256,
          margin: 1.5,
          color: {
            dark: '#000000', // Best contrast for physical scanner devices
            light: '#f97316' // Orange border / background for beautiful cosmic cohesion
          },
          errorCorrectionLevel: 'Q' // Robust error correction so physical scanning works seamlessly
        });
        if (active) {
          setQrDataUrl(url);
        }
      } catch (err) {
        console.error('Error generating QR code:', err);
      } finally {
        if (active) {
          setGenerating(false);
        }
      }
    };

    generateQR();

    return () => {
      active = false;
    };
  }, [qrType]);

  const handleCopyText = async () => {
    try {
      const text = getEncodedText();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div 
      id="qr-code-generator-card"
      className="bg-neutral-900 border border-neutral-800 p-5 rounded-none flex flex-col md:flex-row gap-5 items-center justify-between max-w-2xl w-full"
    >
      {/* Left panel: Info & Type selector */}
      <div className="flex-1 space-y-4 w-full">
        <div>
          <div className="flex items-center gap-1.5 text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 w-fit font-mono text-[9px] uppercase tracking-widest font-bold">
            <QrCode className="w-3.5 h-3.5" />
            <span>Verifiable Scan Dossier</span>
          </div>
          <h4 className="text-sm font-black text-white font-display uppercase tracking-widest mt-2">
            Institutional Contact QR
          </h4>
          <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
            Scan with any mobile camera to instantly integrate Bilal's digital credentials or launch immediate communication channels.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-3 gap-1 bg-neutral-950 p-1 border border-neutral-800 rounded-none text-[10px] font-bold font-mono">
          <button
            onClick={() => setQrType('vcard')}
            className={`py-1.5 px-1 rounded-none uppercase tracking-wider flex flex-col items-center gap-1 transition-all ${
              qrType === 'vcard' ? 'bg-orange-500 text-neutral-950 font-black' : 'text-neutral-400 hover:text-white'
            }`}
            title="Sponsors contact vCard"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span className="text-[8px] sm:text-[9px]">vCard</span>
          </button>
          
          <button
            onClick={() => setQrType('linkedin')}
            className={`py-1.5 px-1 rounded-none uppercase tracking-wider flex flex-col items-center gap-1 transition-all ${
              qrType === 'linkedin' ? 'bg-orange-500 text-neutral-950 font-black' : 'text-neutral-400 hover:text-white'
            }`}
            title="LinkedIn profile direct link"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="text-[8px] sm:text-[9px]">LinkedIn</span>
          </button>
          
          <button
            onClick={() => setQrType('github')}
            className={`py-1.5 px-1 rounded-none uppercase tracking-wider flex flex-col items-center gap-1 transition-all ${
              qrType === 'github' ? 'bg-orange-500 text-neutral-950 font-black' : 'text-neutral-400 hover:text-white'
            }`}
            title="GitHub profile direct link"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="text-[8px] sm:text-[9px]">GitHub</span>
          </button>
        </div>

        {/* Selected Data Overview */}
        <div className="bg-neutral-950 p-3 border border-neutral-850 rounded-none space-y-1 text-[10px] font-mono text-neutral-400">
          <div className="text-orange-500 font-extrabold uppercase text-[8px] tracking-widest flex justify-between items-center bg-neutral-900 px-2 py-0.5 mb-1.5">
            <span>Encoding: {getLabel()}</span>
            {generating && <RefreshCw className="w-2.5 h-2.5 animate-spin" />}
          </div>
          {qrType === 'vcard' && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5"><PhoneCall className="w-3 h-3 text-orange-500" /> {phone}</div>
              <div className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-orange-500" /> {email}</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-orange-500" /> Adama, Oromia, Ethiopia</div>
            </div>
          )}
          {qrType === 'linkedin' && (
            <div className="text-white break-all text-[11px] font-semibold">{linkedinUrl}</div>
          )}
          {qrType === 'github' && (
            <div className="text-white break-all text-[11px] font-semibold">{githubUrl}</div>
          )}
        </div>
      </div>

      {/* Right panel: QR Code Display Card */}
      <div className="flex flex-col items-center justify-center p-3.5 bg-neutral-950 border border-neutral-800 rounded-none w-full md:w-auto relative aspect-square max-w-[180px] sm:max-w-none">
        {qrDataUrl ? (
          <div className="relative group overflow-hidden border-2 border-orange-500 p-1 bg-orange-500">
            <img 
              src={qrDataUrl} 
              alt={`QR Code showing ${getLabel()}`}
              className="w-32 h-32 select-none"
              referrerPolicy="no-referrer"
            />
            
            {/* Hover overlay with action links */}
            <div className="absolute inset-0 bg-neutral-950/90 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={handleCopyText}
                className="p-1 px-3 bg-orange-500 text-neutral-950 text-[10px] font-bold font-mono uppercase tracking-wider flex items-center gap-1 hover:bg-orange-400 transition-colors cursor-pointer"
                title="Copy raw encoded data to clipboard"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              
              <a
                href={qrDataUrl}
                download={`bilal_sponsorship_qd_${qrType}.png`}
                className="p-1 px-3 bg-neutral-900 border border-neutral-800 text-orange-500 text-[10px] font-bold font-mono uppercase tracking-wider flex items-center gap-1 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Download QR code PNG image"
              >
                <Download className="w-3 h-3" /> Download
              </a>
            </div>
          </div>
        ) : (
          <div className="w-32 h-32 flex items-center justify-center bg-neutral-900 border border-neutral-800 text-neutral-500">
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
        )}

        <span className="text-[8px] font-mono font-bold tracking-widest text-neutral-500 uppercase mt-2 select-none">
          SECURE SCAN-CARD
        </span>
      </div>
    </div>
  );
}
