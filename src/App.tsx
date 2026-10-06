/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PersonalDetailsSection } from './components/PersonalDetailsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GitHubDeployModal } from './components/GitHubDeployModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        />

        <EducationSection />

        <SkillsSection />

        <CertificationsSection />

        <ProjectsSection />

        <PersonalDetailsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <GitHubDeployModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
