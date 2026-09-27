import React, { useState } from 'react';
import { CERTIFICATIONS } from '../../data/certifications';
import { CertificationCard } from './CertificationCard';
import { SectionTitle } from '../ui/SectionTitle';

export const Certifications: React.FC = () => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('All');

  const issuers = ['All', 'Microsoft', 'VMware', 'Veeam', 'Cisco', 'Fortinet', 'PeopleCert'];

  const filteredCerts = selectedIssuer === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.issuer === selectedIssuer);

  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Verified Credentials"
            title="Industry Certifications & Authorizations"
            subtitle="Formally recognized credentials spanning Microsoft Azure & 365, VMware vSphere, Veeam Data Protection, Cisco Networking, and ITIL."
            className="mb-0"
          />

          {/* Issuer Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl">
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedIssuer === issuer
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};
