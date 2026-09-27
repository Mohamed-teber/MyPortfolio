import { SkillCategory } from '../types/skill';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'virtualization',
    title: 'Virtualization & Datacenter',
    description: 'High-availability multi-node virtualization, compute clustering, and SAN/NAS storage arrays.',
    icon: 'Server',
    skills: [
      { name: 'VMware vSphere ESXi 7.x / 8.x', level: 95, experienceYears: 7, highlight: 'Cluster sizing, vSAN, HA, DRS, vMotion' },
      { name: 'vCenter Server Management', level: 94, experienceYears: 7, highlight: 'Lifecycle Manager, Distributed vSwitches' },
      { name: 'Dell PowerEdge & HPE ProLiant', level: 90, experienceYears: 6, highlight: 'iDRAC9, iLO5, RAID configurations' },
      { name: 'SAN / NAS Storage (Synology, NetApp)', level: 88, experienceYears: 5, highlight: 'iSCSI, NFS, Multi-pathing, LUN provisioning' },
      { name: 'Hyper-V & Nutanix AHV', level: 82, experienceYears: 4, highlight: 'Failover Clustering, VM migration' },
    ],
  },
  {
    id: 'cloud-microsoft',
    title: 'Microsoft 365 & Cloud Identity',
    description: 'Enterprise hybrid identity federation, modern endpoint management, and collaboration security.',
    icon: 'Cloud',
    skills: [
      { name: 'Microsoft 365 & Exchange Online', level: 96, experienceYears: 6, highlight: 'Tenant architecture, mail hygiene, retention policies' },
      { name: 'Microsoft Entra ID (Azure AD)', level: 94, experienceYears: 6, highlight: 'Entra Connect Sync, Seamless SSO, MFA' },
      { name: 'Conditional Access & Zero Trust', level: 92, experienceYears: 5, highlight: 'Risk-based access policies, compliance gates' },
      { name: 'Microsoft Intune / Endpoint Manager', level: 90, experienceYears: 5, highlight: 'Autopilot, MDM/MAM configuration profiles' },
      { name: 'Azure IaaS & Hybrid Networking', level: 85, experienceYears: 4, highlight: 'Virtual Networks, VPN Gateway, Azure Arc' },
    ],
  },
  {
    id: 'directory-systems',
    title: 'Windows Server & Directory Services',
    description: 'Core infrastructure directory services, group policy orchestration, and security hardening.',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Active Directory Domain Services (AD DS)', level: 96, experienceYears: 7, highlight: 'Forest/Domain trusts, FSMO roles, Schema upgrades' },
      { name: 'Group Policy Objects (GPO)', level: 95, experienceYears: 7, highlight: 'Enterprise baseline hardening (CIS/ANSSI standards)' },
      { name: 'Windows Server 2022 / 2019 / 2016', level: 95, experienceYears: 7, highlight: 'DNS, DHCP, Failover Clustering, IIS, WSUS' },
      { name: 'Active Directory Certificate Services (AD CS)', level: 88, experienceYears: 5, highlight: 'Two-tier PKI, 802.1X auto-enrollment' },
      { name: 'File Server & DFS Namespaces / Replication', level: 90, experienceYears: 6, highlight: 'NTFS ACL auditing, quota management' },
    ],
  },
  {
    id: 'networking',
    title: 'Networking & Perimeter Defense',
    description: 'Enterprise routing, switching, next-generation firewalls, and secure perimeter topologies.',
    icon: 'Network',
    skills: [
      { name: 'Cisco Catalyst & Nexus Switching', level: 90, experienceYears: 6, highlight: 'VLANs, 802.1Q trunks, Spanning Tree (RSTP/MST), LACP' },
      { name: 'Fortinet FortiGate Firewalls', level: 92, experienceYears: 5, highlight: 'UTM inspection, SSL deep packet inspection, SD-WAN' },
      { name: 'Site-to-Site IPsec & SSL VPN', level: 94, experienceYears: 6, highlight: 'BGP over IPsec, FortiClient EMS, MFA integration' },
      { name: 'Network Services (DHCP, DNS, RADIUS)', level: 93, experienceYears: 7, highlight: '802.1X Network Access Control, NPS server' },
      { name: 'Enterprise Wi-Fi (Aruba & Ubiquiti)', level: 86, experienceYears: 5, highlight: 'WPA3 Enterprise, guest isolation, heatmapping' },
    ],
  },
  {
    id: 'backup-recovery',
    title: 'Backup & Disaster Resiliency',
    description: 'Immutable ransomware protection, business continuity orchestration, and fast RTO/RPO SLAs.',
    icon: 'DatabaseBackup',
    skills: [
      { name: 'Veeam Backup & Replication v11 / v12', level: 95, experienceYears: 6, highlight: 'SureBackup verification, SOBR, CDP replication' },
      { name: 'Immutable Linux Repositories', level: 92, experienceYears: 4, highlight: 'Hardened Linux repositories with XFS reflinking' },
      { name: '3-2-1-1-0 Backup Architecture', level: 96, experienceYears: 6, highlight: 'Air-gapped and S3 object-locked cloud tiering' },
      { name: 'Disaster Recovery Plan (DRP/BCP)', level: 90, experienceYears: 5, highlight: 'Quarterly failover validation, RTO < 15 min' },
    ],
  },
  {
    id: 'automation-tooling',
    title: 'Scripting & Automation',
    description: 'Infrastructure-as-code basics, automated user provisioning, and operational health telemetry.',
    icon: 'Terminal',
    skills: [
      { name: 'PowerShell 7 & PowerCLI', level: 94, experienceYears: 6, highlight: 'Batch user lifecycle, VMware host provisioning, audit reports' },
      { name: 'Bash & Linux Administration', level: 86, experienceYears: 5, highlight: 'Ubuntu/Debian, Rocky Linux, systemd services' },
      { name: 'Monitoring (PRTG, Zabbix, Grafana)', level: 89, experienceYears: 5, highlight: 'SNMP trap alerts, threshold triggers, dashboarding' },
      { name: 'ITIL v4 & ITSM (ServiceNow, Jira)', level: 90, experienceYears: 6, highlight: 'Incident, problem, and change advisory workflows' },
    ],
  },
];
