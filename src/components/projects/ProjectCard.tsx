import React from 'react';
import { Project } from '../../types/project';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail Image with Safe Fallback */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = parent.querySelector('.fallback-container');
                if (fallback) fallback.classList.remove('hidden');
              }
            }}
          />

          {/* Fallback container */}
          <div className="fallback-container hidden absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
            <Layers className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="text-xs font-semibold text-slate-300">{project.title}</span>
          </div>

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Category tag on image corner */}
          <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-mono text-cyan-300">
            {project.category}
          </div>

          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-500 text-slate-950 p-1.5 rounded-lg shadow-md">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-4">
          <div>
            <div className="text-xs text-slate-500 font-mono mb-1">{project.date}</div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Key Metrics grid */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                <div className="text-sm font-bold font-mono text-white tabular-nums">{m.value}</div>
                <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer: technologies */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-[10px] font-mono text-slate-500">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
};
