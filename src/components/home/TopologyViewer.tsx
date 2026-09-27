import React, { useState } from 'react';
import { Server, Cloud, ShieldCheck, Database, Laptop, Lock, ArrowRight, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export const TopologyViewer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('virtualization');

  const nodes: Record<string, { title: string; subtitle: string; tech: string; description: string; specs: string[] }> = {
    virtualization: {
      title: 'Enterprise Compute & Virtualization Fabric',
      subtitle: 'Tier-3 Datacenter Multi-Node Cluster',
      tech: 'VMware vSphere 8.0 · vCenter Server · vSAN ESA',
      description: 'Fault-tolerant 3-node Dell PowerEdge R750 cluster running VMware ESXi 8.0. Automated Distributed Resource Scheduler (DRS) and High Availability (HA) with NVMe software-defined storage pooling.',
      specs: ['192 CPU Cores & 1.5 TB ECC RAM', '68 TB vSAN NVMe Storage Array (RAID-5 ESA)', 'Dual redundant 25GbE Mellanox fabrics', 'Zero-downtime vMotion live workload migrations'],
    },
    perimeter: {
      title: 'Perimeter Defense & SD-WAN Interconnect',
      subtitle: 'Campus Core & Branch Gateway Architecture',
      tech: 'Fortinet FortiGate 100F HA · Cisco Catalyst 9300',
      description: 'Active/Passive FortiGate NGFW cluster providing deep packet SSL inspection, IPS/IDS signatures, and automated SD-WAN failover across redundant fibre circuits.',
      specs: ['Sub-second automated circuit failover', 'Dynamic BGP routing over IPsec mesh VPN', '802.1X EAP-TLS port-level Network Access Control', 'Dedicated isolated VLANs: Corp, VoIP, IoT, Guest'],
    },
    identity: {
      title: 'Hybrid Cloud Identity & Directory Services',
      subtitle: 'Zero Trust Directory Federation',
      tech: 'Windows Server 2022 AD DS · Entra ID · Intune',
      description: 'Two-tier Active Directory forest aligned with Microsoft Tiered Administrative Model and CIS Level 2 hardening. Seamless SSO synchronization with Microsoft 365 via Entra Connect.',
      specs: ['Pass-the-hash neutralization via Tier-0 OU isolation', 'Conditional Access requiring compliant Intune hardware', 'Windows LAPS local administrator password randomization', 'FIDO2 / Microsoft Authenticator number matching enforced'],
    },
    backup: {
      title: 'Immutable Cyber Resiliency & Disaster Recovery',
      subtitle: '3-2-1-1-0 Ransomware-Proof Architecture',
      tech: 'Veeam Backup & Replication v12 · Hardened Linux Repo',
      description: 'Isolated physical Rocky Linux repository with immutable XFS reflinking and single-use non-domain credentials. Secondary archive copy to AWS S3 Glacier with Object Lock.',
      specs: ['RTO: 14 minutes with Instant VM Recovery', 'RPO: < 1 hour for all transactional databases', '30-day hardware immutable retention window', 'Automated daily SureBackup verification sandbox'],
    },
  };

  const currentNode = nodes[selectedNode];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider mb-1">
            Architecture Blueprint
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Enterprise Infrastructure Topology
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Interactive map demonstrating standard high-availability system topologies deployed across client projects.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
          <Activity className="w-3.5 h-3.5" />
          <span>Active Architecture Specification</span>
        </div>
      </div>

      {/* Interactive Topology Node Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={() => setSelectedNode('virtualization')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            selectedNode === 'virtualization'
              ? 'bg-cyan-950/40 border-cyan-500/80 shadow-sm shadow-cyan-950'
              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Server className={`w-4 h-4 ${selectedNode === 'virtualization' ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span className="text-xs font-mono font-semibold text-slate-300">01. Virtualization</span>
          </div>
          <div className="text-xs font-bold text-white truncate">VMware vSphere Cluster</div>
          <div className="text-[10px] text-slate-500 mt-0.5">3-Node Dell R750 vSAN</div>
        </button>

        <button
          onClick={() => setSelectedNode('perimeter')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            selectedNode === 'perimeter'
              ? 'bg-cyan-950/40 border-cyan-500/80 shadow-sm shadow-cyan-950'
              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Lock className={`w-4 h-4 ${selectedNode === 'perimeter' ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span className="text-xs font-mono font-semibold text-slate-300">02. Perimeter</span>
          </div>
          <div className="text-xs font-bold text-white truncate">Fortinet HA & Cisco</div>
          <div className="text-[10px] text-slate-500 mt-0.5">SD-WAN & 802.1X NAC</div>
        </button>

        <button
          onClick={() => setSelectedNode('identity')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            selectedNode === 'identity'
              ? 'bg-cyan-950/40 border-cyan-500/80 shadow-sm shadow-cyan-950'
              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Cloud className={`w-4 h-4 ${selectedNode === 'identity' ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span className="text-xs font-mono font-semibold text-slate-300">03. Cloud Identity</span>
          </div>
          <div className="text-xs font-bold text-white truncate">Entra ID & AD DS</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Zero Trust & Intune MDM</div>
        </button>

        <button
          onClick={() => setSelectedNode('backup')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            selectedNode === 'backup'
              ? 'bg-cyan-950/40 border-cyan-500/80 shadow-sm shadow-cyan-950'
              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Database className={`w-4 h-4 ${selectedNode === 'backup' ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span className="text-xs font-mono font-semibold text-slate-300">04. Disaster Recovery</span>
          </div>
          <div className="text-xs font-bold text-white truncate">Veeam Immutable</div>
          <div className="text-[10px] text-slate-500 mt-0.5">RTO 14m · S3 WORM</div>
        </button>
      </div>

      {/* Node detail display */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">{currentNode.tech}</span>
            <h4 className="text-lg font-bold text-white mt-0.5">{currentNode.title}</h4>
          </div>
          <span className="text-xs text-slate-400 font-mono">{currentNode.subtitle}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {currentNode.description}
        </p>

        <div className="space-y-2 pt-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Engineered Architectural Invariants
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {currentNode.specs.map((spec, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
