import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { SectionTitle } from '../ui/SectionTitle';
import { Search, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (!searchQuery.trim()) return cat;

    const matchedSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.highlight && s.highlight.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return {
      ...cat,
      skills: matchedSkills,
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Technical Competencies"
            title="Systems & Network Engineering Skills"
            subtitle="Deep hands-on proficiency across modern enterprise computing, high-availability virtualization, cloud identity, and cyber defense."
            className="mb-0"
          />

          {/* Quick Skill Search input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skills (e.g. vSAN, Intune)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <SkillCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-400">
              No specific skill matches for "{searchQuery}". Try searching for VMware, M365, Active Directory, or Veeam.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
