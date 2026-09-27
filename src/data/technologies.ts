export interface Technology {
  name: string;
  category: 'Virtualization' | 'Cloud & Systems' | 'Network & Security' | 'Storage & Backup' | 'Tools & Scripting';
  description: string;
  icon: string;
}

export const TECHNOLOGIES: Technology[] = [
  { name: 'VMware vSphere ESXi', category: 'Virtualization', description: 'Enterprise bare-metal hypervisor architecture', icon: 'Server' },
  { name: 'vCenter Server', category: 'Virtualization', description: 'Centralized management & cluster automation', icon: 'Cpu' },
  { name: 'VMware vSAN', category: 'Virtualization', description: 'Software-defined enterprise storage pooling', icon: 'HardDrive' },
  { name: 'Microsoft 365', category: 'Cloud & Systems', description: 'SaaS productivity, Exchange Online, Teams & SharePoint', icon: 'Cloud' },
  { name: 'Microsoft Entra ID', category: 'Cloud & Systems', description: 'Cloud identity, MFA & Conditional Access policies', icon: 'ShieldCheck' },
  { name: 'Active Directory DS', category: 'Cloud & Systems', description: 'Domain controller architecture, Kerberos, FSMO & trusts', icon: 'Users' },
  { name: 'Windows Server', category: 'Cloud & Systems', description: '2022/2019/2016 DNS, DHCP, GPO, IIS & failover clustering', icon: 'Terminal' },
  { name: 'Microsoft Intune', category: 'Cloud & Systems', description: 'Endpoint management, MDM, MAM & Autopilot provisioning', icon: 'Laptop' },
  { name: 'Cisco Catalyst', category: 'Network & Security', description: 'Layer 2/3 enterprise switching, VLANs & trunking', icon: 'Network' },
  { name: 'Fortinet FortiGate', category: 'Network & Security', description: 'Next-gen firewall, UTM inspection & SD-WAN tunnels', icon: 'Shield' },
  { name: 'Site-to-Site IPsec', category: 'Network & Security', description: 'Encrypted site interconnects & remote SSL VPN portals', icon: 'Lock' },
  { name: '802.1X Network Access', category: 'Network & Security', description: 'Port security with RADIUS / Microsoft NPS authentication', icon: 'Key' },
  { name: 'Veeam Backup & Replication', category: 'Storage & Backup', description: 'VM & physical backups, Instant VM Recovery & CDP', icon: 'Database' },
  { name: 'Linux Hardened Repositories', category: 'Storage & Backup', description: 'Ransomware-proof immutable storage with XFS reflinking', icon: 'ShieldAlert' },
  { name: 'Dell PowerEdge / iDRAC', category: 'Storage & Backup', description: 'Rackmount enterprise servers & out-of-band management', icon: 'Layers' },
  { name: 'PowerShell 7', category: 'Tools & Scripting', description: 'Active Directory & cloud infrastructure automation modules', icon: 'Code' },
  { name: 'PRTG & Zabbix', category: 'Tools & Scripting', description: 'SNMP network monitoring, latency graphing & alerts', icon: 'Activity' },
  { name: 'ITIL v4 Framework', category: 'Tools & Scripting', description: 'Service management, SLA compliance & change advisory', icon: 'FileText' },
];
