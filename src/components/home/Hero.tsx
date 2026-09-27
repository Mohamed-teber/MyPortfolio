import React from 'react';
import { PERSONAL_INFO } from '../../data/personal';
import { Button } from '../ui/Button';
import { FileText, ArrowRight, ShieldCheck, Server, Cloud, Network, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onOpenContact }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-900/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability status line */}
            <div className="inline-flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Senior IT / Systems & Networks</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> Tunis, Tunisia
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] text-balance">
                Infrastructure{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  IT Systems
                </span>
                , Networks.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I design, deploy, and harden enterprise-grade datacenter virtualization, Microsoft 365 hybrid migrations, and ransomware-proof disaster recovery architectures.
              </p>
            </div>

            {/* Core Domain Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>VMware vSphere </span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Cloud className="w-4 h-4 text-sky-400" />
                <span>Microsoft 365 & Entra ID</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Active Directory </span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Network className="w-4 h-4 text-indigo-400" />
                <span>Fortinet & PfSense </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a href="#projects">
                <Button size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  View Infrastructure Projects
                </Button>
              </a>
              <Button
                size="lg"
                variant="secondary"
                icon={<FileText className="w-4 h-4 text-cyan-400" />}
                onClick={onOpenCvModal}
              >
                Curriculum Vitae
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onOpenContact}
              >
                Contact Me
              </Button>
            </div>

            {/* Quantitative Proof Row */}
            <div className="pt-8 border-t border-slate-900/90 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {PERSONAL_INFO.metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Portrait & Systems Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing element */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-md -z-10" />

              <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Image Container with Safe Fallback */}
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-950">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Mohamed Teber - IT Systems & Network Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03]"
                    onError={(e) => {
                      // Fallback in case of image load delay
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
                  <div className="fallback-container hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <Server className="w-16 h-16 text-cyan-400/80 mb-3" />
                    <span className="text-lg font-bold font-display text-white">Mohamed Teber</span>
                    <span className="text-xs text-slate-400 mt-1">Systems & Network Technician</span>
                  </div>

                  {/* Subtle contrast gradient for caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Overlay badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-mono font-medium">VMware & M365 Specialist</span>
                    </div>
                    <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>6+ Years Exp</span>
                    </div>
                  </div>
                </div>

                {/* Quick specs footer below image */}
                {/* <div className="p-5 bg-slate-900/60 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Key Certifications:</span>
                    <span className="text-slate-200 font-mono">AZ-104 · MS-102 · VCP-DCV · CCNA</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Core Methodologies:</span>
                    <span className="text-slate-200">ITIL v4 · Zero Trust · CIS Hardening</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
