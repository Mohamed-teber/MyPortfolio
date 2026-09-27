import React, { useEffect } from 'react';
import { Project } from '../../types/project';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky modal header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{project.date}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Hero Project Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge and Solution section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Details breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Technical Implementation & Architecture Decisions</span>
            </h3>
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3">
              {project.architectureDetails.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="font-mono text-cyan-400 font-semibold shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs sm:text-sm text-slate-200 space-y-1">
            <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Verified Operational Outcome</span>
            </div>
            <p className="leading-relaxed pl-5 text-slate-300">
              {project.outcome}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Tech Stack & Tools Employed
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-950 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Back to Projects
          </Button>

          <Button
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
          >
            Discuss Similar Project
          </Button>
        </div>
      </div>
    </div>
  );
};
