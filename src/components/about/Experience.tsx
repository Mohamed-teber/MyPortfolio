import React from 'react';
import { EXPERIENCES, EDUCATIONS } from '../../data/experience';
import { SectionTitle } from '../ui/SectionTitle';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Track Record"
          title="Professional Experience & Education"
          subtitle="Progressive engineering history spanning managed service providers, mid-market enterprises, and cloud infrastructure consulting."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-bold font-display text-white flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Career Trajectory</span>
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                      exp.current
                        ? 'bg-cyan-500 border-cyan-400 ring-4 ring-cyan-500/20'
                        : 'bg-slate-950 border-slate-700 group-hover:border-cyan-400'
                    }`}
                  />

                  <div className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 transition-all duration-200 space-y-4">
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-slate-300 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      {/* Clean unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.startDate} – {exp.endDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.type}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Responsibilities & Projects
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-cyan-400 font-bold mt-0.5">›</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5 text-xs">
                      <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Measurable Impact & Achievements</span>
                      </div>
                      <ul className="space-y-1 text-slate-300 pl-5 list-disc marker:text-cyan-500">
                        {exp.keyAchievements.map((ach, idx) => (
                          <li key={idx} className="leading-relaxed font-light">
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies used */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Degrees */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold font-display text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-4">
              {EDUCATIONS.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="text-xs font-mono text-cyan-400">{edu.year}</div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-medium text-slate-300">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/60 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Continuous Learning badge */}
            <div className="bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-2">
              <div className="font-semibold text-slate-300">Continuing Technical Education</div>
              <p className="leading-relaxed">
                Regularly engaging in hands-on enterprise labs including Microsoft Learn, VMware Hands-on Labs (HOL), and Fortinet Fast Track training to stay ahead of infrastructure developments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
