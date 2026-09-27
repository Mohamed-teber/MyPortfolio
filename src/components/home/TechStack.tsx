import React, { useState } from 'react';
import { TECHNOLOGIES, Technology } from '../../data/technologies';
import { Server, Cloud, Shield, Database, Terminal, Cpu, HardDrive, Network, Key, Layers, Code, Activity, FileText, Laptop, Lock, ShieldAlert, Users, Check } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Virtualization',
    'Cloud & Systems',
    'Network & Security',
    'Storage & Backup',
    'Tools & Scripting',
  ];

  const filteredTechs = activeCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === activeCategory);

  // Helper to render icon based on name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck': return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Users': return <Users className="w-5 h-5 text-sky-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-sky-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-amber-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-indigo-400" />;
      case 'Key': return <Key className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-slate-400" />;
      default: return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Category selector buttons */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTechs.map((tech) => (
          <div
            key={tech.name}
            className="group bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-5 rounded-xl transition-all duration-200"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 group-hover:border-slate-700 shrink-0">
                {renderIcon(tech.icon)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h4>
                </div>
                <div className="text-[11px] font-mono text-cyan-400/90">
                  {tech.category}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-0.5">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
