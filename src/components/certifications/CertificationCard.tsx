import React from 'react';
import { Certification } from '../../data/certifications';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  cert: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  const getIssuerColor = (issuer: string) => {
    switch (issuer) {
      case 'Microsoft': return 'text-sky-400 border-sky-800/40 bg-sky-950/30';
      case 'VMware': return 'text-emerald-400 border-emerald-800/40 bg-emerald-950/30';
      case 'Veeam': return 'text-emerald-400 border-emerald-800/40 bg-emerald-950/30';
      case 'Cisco': return 'text-cyan-400 border-cyan-800/40 bg-cyan-950/30';
      case 'Fortinet': return 'text-red-400 border-red-800/40 bg-red-950/30';
      default: return 'text-cyan-400 border-cyan-800/40 bg-cyan-950/30';
    }
  };

  return (
    <div className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between space-y-5">
      <div className="space-y-3.5">
        {/* Header with issuer tag and badge code */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg border ${getIssuerColor(cert.issuer)}`}>
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {cert.issuer}
              </span>
            </div>
          </div>

          <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300 font-semibold">
            {cert.badgeCode}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-base font-bold text-white leading-snug">
            {cert.name}
          </h3>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Key topics covered */}
        <div className="pt-2 space-y-1.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Validated Competencies
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cert.keyTopics.map((topic) => (
              <span
                key={topic}
                className="text-[11px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer credential ID & date */}
      <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>ID: {cert.credentialId}</span>
        </div>
        <span>Issued {cert.issueDate}</span>
      </div>
    </div>
  );
};
