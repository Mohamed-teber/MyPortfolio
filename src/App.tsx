/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { StatusCard } from './components/home/StatusCard';
import { TechStack } from './components/home/TechStack';
import { TopologyViewer } from './components/home/TopologyViewer';
import { About } from './components/about/About';
import { Experience } from './components/about/Experience';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Certifications } from './components/certifications/Certifications';
import { Contact } from './components/contact/Contact';
import { CvModal } from './components/ui/CvModal';
import { InteractiveTerminal } from './components/home/InteractiveTerminal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Top 3-Zone Navigation */}
      <Navbar
        onOpenCvModal={() => setCvModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenCvModal={() => setCvModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Operational Telemetry & Interactive Topology Section */}
        <section className="py-12 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <StatusCard onOpenTerminal={() => setTerminalOpen(true)} />
            <TopologyViewer />
          </div>
        </section>

        {/* Enterprise Tech Stack Inventory */}
        <section className="py-16 sm:py-20 border-t border-slate-900 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <div className="text-xs font-mono font-medium uppercase tracking-wider text-cyan-400 mb-2">
                Ecosystem & Tooling
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Enterprise Technology Inventory
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Core technologies actively deployed in production environments, categorized by architectural layer.
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        {/* About & Philosophy */}
        <About onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Professional Experience & Education */}
        <Experience />

        {/* Technical Skills & Proficiency Matrix */}
        <Skills />

        {/* Featured Case Studies & Projects */}
        <Projects onOpenContact={handleOpenContact} />

        {/* Industry Certifications */}
        <Certifications />

        {/* Contact & Inquiry Channel */}
        <Contact onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Simulated PowerShell Shell */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
