import React from 'react';
import { PERSONAL_INFO } from '../../data/personal';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { FileText, Download, CheckCircle, Award, Terminal, ShieldCheck, HeartHandshake, Server } from 'lucide-react';

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Profile & Philosophy"
          title="Engineering Reliable Infrastructure Foundations"
          subtitle="Combining meticulous systems administration discipline with modern cloud identity and high-resiliency automation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <strong className="text-white font-medium">IT Systems, Cloud & Network Infrastructure Engineer</strong> with over 7 years of hands-on experience building, scaling, and safeguarding corporate IT environments. My journey began with core operating systems and physical networking, evolving through virtualization clusters into today's hybrid cloud ecosystems.
            </p>

            <p>
              Throughout my career, I have observed that the most devastating outages stem not from software bugs, but from fragile architectures—untested backups, unmanaged directory permission sprawl, single points of failure in storage or switching fabrics, and human error in repetitive operations.
            </p>

            <p>
              My engineering philosophy revolves around three foundational tenets:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Defense in Depth & Zero Trust</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Never trust, always verify. From 802.1X network access control to Entra Conditional Access and CIS Level 2 GPO baselines, every layer is authenticated and hardened.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fault-Tolerant Redundancy</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Zero single point of failure (SPOF) designs. Multi-node VMware vSphere clusters, redundant vSAN fabrics, active/passive firewalls, and dual ISP routing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-800/40 text-blue-400 shrink-0 mt-0.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Automate What You Repeat</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Leveraging PowerShell 7 and PowerCLI to eliminate manual drudgery in user onboarding, license reclamation, inventory audits, and routine server patching.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                icon={<FileText className="w-4 h-4" />}
                onClick={onOpenCvModal}
              >
                Inspect Full Resume
              </Button>
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Mohamed-Teber-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Info Box / Key highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-semibold text-white font-display flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Quick Snapshot</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Current Location:</span>
                  <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Total Experience:</span>
                  <span className="text-slate-200 font-medium">7+ Years in Systems & Networks</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="text-slate-200 font-medium">VMware, M365, Active Directory</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Backup & Resiliency:</span>
                  <span className="text-slate-200 font-medium">Veeam Certified Engineer (VMCE)</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Languages:</span>
                  <span className="text-slate-200 font-medium">French (Native) · English (Professional)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Availability:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Immediate
                  </span>
                </div>
              </div>
            </div>

            {/* IT Operations Principles card */}
            <div className="bg-gradient-to-br from-slate-900/40 to-slate-950/60 border border-slate-800/80 rounded-2xl p-6 text-xs text-slate-400 space-y-3">
              <div className="text-slate-200 font-medium flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-cyan-400" />
                <span>Collaborative Operations & ITIL</span>
              </div>
              <p className="leading-relaxed">
                Strong proponent of empathetic user support paired with rigorous ITIL change management. Clear documentation, transparent incident post-mortems, and close alignment with business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
