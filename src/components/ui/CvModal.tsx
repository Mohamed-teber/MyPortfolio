import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/personal';
import { EXPERIENCES, EDUCATIONS } from '../../data/experience';
import { CERTIFICATIONS } from '../../data/certifications';
import { SKILL_CATEGORIES } from '../../data/skills';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from './Button';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CV Actions Bar (Top) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-cyan-400">
              DOCUMENT: Mohamed-Teber-CV.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={PERSONAL_INFO.cvUrl}
              download="Mohamed-Teber-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 space-y-8 bg-white font-sans text-slate-800 leading-normal">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-base sm:text-lg font-semibold text-cyan-700 mt-1">
                  {PERSONAL_INFO.title}
                </h2>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
                <div>{PERSONAL_INFO.location}</div>
                <div>{PERSONAL_INFO.phone}</div>
                <div className="text-cyan-800 font-medium">{PERSONAL_INFO.email}</div>
                <div>linkedin.com/in/mohamed-teber</div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Key Competencies Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-900 border-b border-slate-200 pb-1">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-0.5">
                  <span className="font-bold text-slate-900">{cat.title}: </span>
                  <span className="text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-sm font-bold text-slate-950">{exp.role}</span>
                      <span className="text-xs font-semibold text-slate-700"> · {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-600">
                      {exp.startDate} – {exp.endDate} | {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 italic">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800 marker:text-cyan-700">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1 flex flex-wrap gap-1">
                    <span className="text-[10px] font-bold text-slate-600">Technologies:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-2 bg-slate-50 border border-slate-200 rounded-md">
                  <div className="font-bold text-slate-900 leading-snug">{cert.name}</div>
                  <div className="text-[11px] text-slate-600 font-mono mt-0.5">
                    {cert.issuer} · ID: {cert.credentialId} ({cert.issueDate})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Degrees</span>
            </h3>

            <div className="space-y-2 text-xs">
              {EDUCATIONS.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <div className="text-slate-700">{edu.institution} - {edu.location}</div>
                  </div>
                  <span className="font-mono text-slate-600 text-xs">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
