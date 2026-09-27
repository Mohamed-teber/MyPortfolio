import React from 'react';
import { SkillCategory } from '../../types/skill';
import { Server, Cloud, ShieldCheck, Network, DatabaseBackup, Terminal, ChevronRight } from 'lucide-react';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'DatabaseBackup': return <DatabaseBackup className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      default: return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
            {getIcon(category.icon)}
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-display">
              {category.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {category.description}
            </p>
          </div>
        </div>

        {/* Skill list with subtle progress lines */}
        <div className="space-y-4 pt-3">
          {category.skills.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex items-baseline justify-between text-xs">
                <span className="font-semibold text-slate-200">{skill.name}</span>
                <span className="font-mono text-[11px] text-cyan-400 tabular-nums">
                  {skill.experienceYears} yrs
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/60">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {skill.highlight && (
                <div className="text-[11px] text-slate-400 flex items-center gap-1 font-light">
                  <span className="text-cyan-500">›</span>
                  <span className="truncate">{skill.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
