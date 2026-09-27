export interface Certification {
  id: string;
  name: string;
  issuer: 'Microsoft' | 'VMware' | 'Cisco' | 'Fortinet' | 'Veeam' | 'PeopleCert';
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl?: string;
  badgeCode: string;
  description: string;
  keyTopics: string[];
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'az-104',
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    issueDate: '2023',
    credentialId: 'MSFT-9843210-AZ',
    badgeCode: 'AZ-104',
    description: 'Validates enterprise expertise in managing Azure subscriptions, virtual networks, storage, compute virtual machines, and Entra ID governance.',
    keyTopics: ['Entra ID & RBAC', 'Azure Virtual Networks & VPN', 'Azure Virtual Machines', 'Storage Accounts & Backup'],
  },
  {
    id: 'ms-102',
    name: 'Microsoft 365 Certified: Enterprise Administrator Expert (MS-102)',
    issuer: 'Microsoft',
    issueDate: '2023',
    credentialId: 'MSFT-6721094-MS',
    badgeCode: 'MS-102',
    description: 'Expertise in deploying and managing Microsoft 365 tenant infrastructure, identity synchronization, Intune security, and compliance policies.',
    keyTopics: ['Tenant Management', 'Identity Synchronization', 'Conditional Access', 'Endpoint Management'],
  },
  {
    id: 'vcp-dcv',
    name: 'VMware Certified Professional - Data Center Virtualization (VCP-DCV)',
    issuer: 'VMware',
    issueDate: '2022',
    credentialId: 'VMW-3490218-DCV',
    badgeCode: 'VCP-DCV',
    description: 'Comprehensive mastery of VMware vSphere 7.x/8.x architectures, ESXi hypervisors, vCenter management, High Availability, and distributed networking.',
    keyTopics: ['vSphere HA & DRS', 'vSAN Configuration', 'Distributed vSwitch (vDS)', 'vCenter Lifecycle'],
  },
  {
    id: 'vmce',
    name: 'Veeam Certified Engineer (VMCE)',
    issuer: 'Veeam',
    issueDate: '2023',
    credentialId: 'VMCE-2023-88194',
    badgeCode: 'VMCE',
    description: 'Technical proficiency in sizing, configuring, and optimizing enterprise data protection and disaster recovery topologies using Veeam Backup & Replication.',
    keyTopics: ['Scale-Out Repositories', 'Hardened Linux Immutability', 'SureBackup Verification', 'Instant VM Recovery'],
  },
  {
    id: 'ccna',
    name: 'Cisco Certified Network Associate (CCNA 200-301)',
    issuer: 'Cisco',
    issueDate: '2021',
    credentialId: 'CSCO-13904581',
    badgeCode: 'CCNA',
    description: 'Foundational and advanced network infrastructure skills encompassing IP routing, VLAN trunking, Spanning Tree, OSPF, and network security baselines.',
    keyTopics: ['IP Routing (OSPF/Static)', 'VLANs & Trunks (802.1Q)', 'ACLs & Port Security', 'Wireless LAN Controllers'],
  },
  {
    id: 'nse4',
    name: 'Fortinet NSE 4 - Network Security Professional',
    issuer: 'Fortinet',
    issueDate: '2022',
    credentialId: 'FNT-8812903-NSE4',
    badgeCode: 'NSE-4',
    description: 'Configuration, management, and daily monitoring of FortiOS on FortiGate next-generation security appliances.',
    keyTopics: ['FortiGate HA Clusters', 'IPsec & SSL VPN', 'Security Profiles & UTM', 'SD-WAN Routing'],
  },
  {
    id: 'itil-v4',
    name: 'ITIL® 4 Foundation in IT Service Management',
    issuer: 'PeopleCert',
    issueDate: '2020',
    credentialId: 'GR671049210MT',
    badgeCode: 'ITIL-4',
    description: 'Understanding of the ITIL service value system, incident management, problem resolution, change enablement, and continual service improvement.',
    keyTopics: ['Service Value System', 'Incident & Problem Management', 'Change Enablement', 'Guiding Principles'],
  },
];
