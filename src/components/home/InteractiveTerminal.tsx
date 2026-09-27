import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/personal';
import { CERTIFICATIONS } from '../../data/certifications';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            PS C:\Users\mteber&gt; System Infrastructure Shell [Version 10.0.22631.3296]
          </p>
          <p className="text-slate-400 text-xs">
            (c) Microsoft Corporation / Teber Infrastructure Management. Type <span className="text-cyan-300 font-semibold">'help'</span> to view available diagnostics commands.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    let result: React.ReactNode = null;

    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      setInput('');
      return;
    } else if (lower === 'exit' || lower === 'quit') {
      onClose();
      setInput('');
      return;
    } else if (lower === 'help' || lower === 'commands' || lower === '?') {
      result = (
        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="text-cyan-400 font-bold">Available PowerShell & Diagnostic Cmdlets:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2 font-mono">
            <div><span className="text-emerald-400">Get-ADUser</span> : Display Active Directory profile</div>
            <div><span className="text-emerald-400">Get-VM</span> : List VMware vSphere virtual cluster</div>
            <div><span className="text-emerald-400">Get-Certifications</span> : List verified credentials</div>
            <div><span className="text-emerald-400">Test-NetConnection</span> : Verify core network topology</div>
            <div><span className="text-emerald-400">Get-VeeamStatus</span> : Check immutable backup repos</div>
            <div><span className="text-emerald-400">Get-M365Tenant</span> : Query Entra ID & Exchange status</div>
            <div><span className="text-emerald-400">cls / clear</span> : Clear terminal output</div>
            <div><span className="text-emerald-400">exit</span> : Close terminal window</div>
          </div>
        </div>
      );
    } else if (lower === 'get-aduser' || lower === 'whoami') {
      result = (
        <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/80 p-3 rounded border border-slate-800">
          <div className="text-cyan-400 font-bold">DistinguishedName: CN=Mohamed Teber,OU=Engineers,DC=infra,DC=teber,DC=fr</div>
          <div>GivenName       : Mohamed</div>
          <div>Surname         : Teber</div>
          <div>Title           : Senior IT Systems, Hybrid-Cloud & Network Infrastructure</div>
          <div>EmailAddress    : {PERSONAL_INFO.email}</div>
          <div>Location        : Tunis, Tunisia</div>
          <div>UAC             : NORMAL_ACCOUNT (PasswordNeverExpires = False, MFA = Enforced)</div>
          <div>MemberOf        : Domain Admins, Enterprise Admins, VMware-Admins, M365-Global-Admins</div>
        </div>
      );
    } else if (lower === 'get-vm') {
      result = (
        <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/80 p-3 rounded border border-slate-800">
          <div className="text-cyan-400 font-bold">vCenter: vcsa-cluster01.corp.infra [vSphere 8.0 Update 2]</div>
          <div className="text-slate-400 pb-1 border-b border-slate-800 flex justify-between">
            <span>Name</span>
            <span>PowerState</span>
            <span>NumCPU</span>
            <span>MemoryGB</span>
            <span>vSAN Storage</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>PRD-DC01-PAR</span>
            <span>PoweredOn</span>
            <span>4</span>
            <span>16 GB</span>
            <span>RAID-5 (ESA)</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>PRD-DC02-PAR</span>
            <span>PoweredOn</span>
            <span>4</span>
            <span>16 GB</span>
            <span>RAID-5 (ESA)</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>PRD-VEEAM-V12</span>
            <span>PoweredOn</span>
            <span>8</span>
            <span>32 GB</span>
            <span>Immutable XFS</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>PRD-FS01-DATA</span>
            <span>PoweredOn</span>
            <span>8</span>
            <span>64 GB</span>
            <span>14.2 TB NVMe</span>
          </div>
          <div className="text-slate-500 pt-1 text-[11px]">Total Cluster Nodes: 3x Dell R750 (192 Cores, 1.5 TB RAM, 68 TB vSAN)</div>
        </div>
      );
    } else if (lower === 'get-certifications' || lower === 'get-certs') {
      result = (
        <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/80 p-3 rounded border border-slate-800">
          <div className="text-cyan-400 font-bold">Verified Certification Credentials:</div>
          {CERTIFICATIONS.map((c) => (
            <div key={c.id} className="flex justify-between py-0.5 border-b border-slate-900">
              <span className="text-white">{c.badgeCode} : {c.name.split(':')[0]}</span>
              <span className="text-cyan-300">{c.credentialId}</span>
            </div>
          ))}
        </div>
      );
    } else if (lower === 'test-netconnection' || lower === 'ping') {
      result = (
        <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/80 p-3 rounded border border-slate-800">
          <div className="text-cyan-400 font-bold">Testing Connectivity Across Core Gateways:</div>
          <div className="text-emerald-400">› PING 10.10.1.1 (FortiGate HA Cluster Core) : RTT=0.4ms [OK]</div>
          <div className="text-emerald-400">› PING 10.10.1.10 (PRD-DC01 Kerberos/LDAPS)  : RTT=0.6ms [OK]</div>
          <div className="text-emerald-400">› TCP 443 login.microsoftonline.com (Entra ID): RTT=8.2ms [OK]</div>
          <div className="text-emerald-400">› TCP 9443 vCenter Distributed Switch Fabric : RTT=0.9ms [OK]</div>
          <div className="text-cyan-300 pt-1">All interfaces responsive. Zero packet loss detected across trunk routes.</div>
        </div>
      );
    } else if (lower === 'get-veeamstatus' || lower === 'get-backup') {
      result = (
        <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/80 p-3 rounded border border-slate-800">
          <div className="text-cyan-400 font-bold">Veeam Backup & Replication v12 Server Status:</div>
          <div>Hardened Repository : Rocky Linux 9.3 (XFS Fast Clone Reflink)</div>
          <div>Immutability Flag   : Active (30-day hardware lock window)</div>
          <div>SureBackup Sandbox  : PASSED (Daily 04:00 AM Automated Verification)</div>
          <div>Cloud Tier (SOBR)   : AWS S3 Glacier (WORM compliance enabled)</div>
          <div className="text-emerald-400 font-semibold">Target RTO: 14 min | Target RPO: &lt; 1 hour | Status: HEALTHY</div>
        </div>
      );
    } else if (lower === 'get-m365tenant') {
      result = (
        <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/80 p-3 rounded border border-slate-800">
          <div className="text-cyan-400 font-bold">Microsoft 365 Hybrid Tenant Metrics:</div>
          <div>Directory Sync      : Entra Connect (Seamless SSO + Password Hash Sync)</div>
          <div>Total Cloud Users   : 1,840 Active Mailboxes</div>
          <div>Conditional Access  : Strict (Compliant Device + FIDO2/MFA Enforced)</div>
          <div>Intune MDM          : 1,200+ Windows/macOS/iOS Enrolled Devices</div>
          <div className="text-emerald-400">Security Score       : 84.6% (Top 5% peer benchmark)</div>
        </div>
      );
    } else {
      result = (
        <div className="text-xs text-red-400 font-mono">
          Command '{cmd}' not recognized. Type <span className="text-white underline">'help'</span> for a list of diagnostics commands.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: result }]);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-950 border border-slate-800 rounded-xl max-w-3xl w-full h-[520px] flex flex-col shadow-2xl overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-slate-300">
              PowerShell - Mohamed Teber [IT Systems Admin Console]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen output */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              {item.command !== 'welcome' && (
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <span>PS C:\Users\mteber&gt;</span>
                  <span className="text-white font-mono">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-xs text-cyan-400 font-bold shrink-0">PS C:\&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or commands like 'Get-VM', 'Get-ADUser', 'Get-Certifications'..."
            className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder-slate-600 font-mono"
          />
          <button
            type="submit"
            className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
            title="Execute command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
