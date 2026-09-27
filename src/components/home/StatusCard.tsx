import React from 'react';
import { PERSONAL_INFO } from '../../data/personal';
import { CheckCircle2, Shield, Activity, HardDrive, Wifi, Cpu, ArrowUpRight } from 'lucide-react';

interface StatusCardProps {
  onOpenTerminal: () => void;
}

export const StatusCard: React.FC<StatusCardProps> = ({ onOpenTerminal }) => {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
              Technician Status · Active
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Infrastructure & Operations Profile
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Currently accepting opportunities for Senior Systems Administrator, Hybrid-Cloud & Network Infrastructure Technician, and IT Operations Lead positions in Tunis / Remote.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-slate-950 border border-cyan-800/60 hover:bg-cyan-950/40 hover:border-cyan-600 transition-all cursor-pointer"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Launch Interactive Shell</span>
            <ArrowUpRight className="w-3 h-3 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* Grid of operational indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Uptime SLA</span>
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white tabular-nums">99.992%</div>
          <div className="text-[11px] text-slate-500">Tier-3 enterprise targets met</div>
        </div>

        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Virtual Compute</span>
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white tabular-nums">350+ VMs</div>
          <div className="text-[11px] text-slate-500">VMware ESXi 8.0 & Hyper-V</div>
        </div>

        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
          {/* <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Resiliency Target</span>
            <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
          </div> */}
          <div className="text-xl font-bold font-mono text-white tabular-nums">&lt; 15 min RTO</div>
          <div className="text-[11px] text-slate-500">Veeam v12 immutable repos</div>
        </div>

        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Perimeter Defense</span>
            <Shield className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white tabular-nums">Fortinet </div>
          <div className="text-[11px] text-slate-500">IPsec Mesh & 802.1X NAC</div>
        </div>
      </div>
    </div>
  );
};
