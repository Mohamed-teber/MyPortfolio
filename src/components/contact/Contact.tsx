import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/personal';
import { SectionTitle } from '../ui/SectionTitle';
import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone, Linkedin, Github, Copy, Check, FileText } from 'lucide-react';

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Communication Channel"
          title="Initiate Professional Contact"
          subtitle="Looking for an experienced engineer to scale your hybrid infrastructure or lead your systems team? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold font-display text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-950/60 text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                      Telephone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social and professional networks */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Professional Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* View CV action */}
              <div className="pt-2">
                <button
                  onClick={onOpenCvModal}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 hover:border-cyan-600 text-xs font-semibold text-cyan-300 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Review Curriculum Vitae in Modal</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
