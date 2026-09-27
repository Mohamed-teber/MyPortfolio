import { ExperienceItem, EducationItem } from '../types/experience';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Support and Security Technician',
    company: 'HLi Consulting in Tunisia',
    location: 'Tunisia, Tunis',
    type: 'Full-time',
    startDate: 'Nov 2024',
    endDate: 'Aug 2025',
    current: true,
    responsibilities: [
      'Installation of ESXi and vSphere',
      'Deployment of virtual infrastructure',
      ' Installation and configuration Grafana and synchronization with AD',
      'Installation and configuration of Active Directory',
    ],
    keyAchievements: [
      'Designed and deployed a complete virtualized IT infrastructure using VMware ESXi/vSphere, Windows environments, pfSense firewall, Active Directory, Wazuh, Grafana, and Zabbix',
      'implementing centralized security, monitoring, and infrastructure management.'
    ],
    technologies: ['VMware vSphere 8.0', 'Microsoft 365', 'Entra ID', 'PowerShell 7', 'Veeam v12', 'Fortinet FortiGate', 'Dell PowerEdge', 'CIS Benchmarks'],
  },
  {
    id: 'exp-2',
    role: 'Systems & Network Infrastructure Administrator',
    company: 'Nexis Groupe Solutions',
    location: 'Paris, France',
    type: 'Full-time',
    startDate: 'Mar 2020',
    endDate: 'Dec 2022',
    current: false,
    description: 'Managed daily operations, network perimeter, and server infrastructure across 6 regional office sites and 850 concurrent users.',
    responsibilities: [
      'Administered Windows Server 2019 environment including AD DS, DNS, DHCP, NPS (802.1X), and DFS namespace file clusters.',
      'Configured and maintained Cisco Catalyst 3850/9300 switch stacks, configuring 802.1Q VLANs, RSTP, dynamic trunking, and port security.',
      'Deployed Fortinet FortiGate 100F firewalls in high-availability (Active/Passive) with IPsec VPN mesh interconnecting regional offices.',
      'Supervised monthly WSUS security patching cycles and conducted vulnerability remediations across 400+ Windows endpoints.',
    ],
    keyAchievements: [
      'Successfully overhauled regional network infrastructure with zero unscheduled downtime during business hours.',
      'Implemented 802.1X EAP-TLS network authentication for all corporate laptops via Microsoft CA certificates.',
      'Reduced tier-3 support escalation tickets by 42% through self-healing health check scripts.',
    ],
    technologies: ['Windows Server 2019', 'Active Directory', 'Cisco Catalyst', 'Fortinet FortiGate', 'Hyper-V', 'PRTG Monitoring', '802.1X', 'WSUS'],
  },
  {
    id: 'exp-3',
    role: 'IT Systems & Network Support Engineer',
    company: 'TechnoCore IT Managed Services',
    location: 'Paris, France',
    type: 'Full-time',
    startDate: 'Sep 2018',
    endDate: 'Feb 2020',
    current: false,
    description: 'Provided Tier 2/3 systems administration, endpoint rollout, and network troubleshooting for managed service provider (MSP) client contracts.',
    responsibilities: [
      'Provisioned and deployed Dell PowerEdge servers, configured hardware RAID controllers, and monitored iDRAC alerts.',
      'Maintained daily Veeam backup verification tasks and carried out scheduled file-level and VM-level restore drills.',
      'Supported Microsoft 365 end-user applications, Exchange hybrid routing, and Outlook connectivity issues.',
      'Documented infrastructure topology diagrams, standard operating procedures (SOP), and ITIL disaster runbooks.',
    ],
    keyAchievements: [
      'Delivered 98.4% first-contact SLA resolution rate for client operational requests.',
      'Standardized automated Windows 10 image deployment via MDT/WDS reducing PC prep time from 3 hours to 35 minutes.',
    ],
    technologies: ['VMware ESXi 6.7', 'Windows Server 2016', 'Microsoft 365', 'Veeam Backup', 'Dell iDRAC', 'MDT/WDS', 'ITIL v3'],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: 'Master of Science (MSc) in Network Systems & Cloud Infrastructure',
    institution: 'Université Sorbonne Paris Nord / École d’Ingénieurs',
    location: 'Paris, France',
    year: '2016 - 2018',
    details: 'Specialization in Enterprise Virtualization, Distributed Systems, Network Security Protocols, and Cryptography.',
  },
  {
    degree: 'Bachelor of Science (BSc) in Computer Science & Networking',
    institution: 'Institut Universitaire de Technologie (IUT)',
    location: 'Paris, France',
    year: '2013 - 2016',
    details: 'Focus on Computer Architecture, Cisco CCNA routing/switching foundations, and Operating Systems.',
  },
];
