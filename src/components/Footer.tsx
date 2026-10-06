import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface FooterProps {
  onOpenDeployGuide: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & info */}
          <div className="space-y-1 text-center md:text-left">
            <p className="font-display font-bold text-white text-sm">
              {resumeData.personal.fullName}
            </p>
            <p className="text-slate-500">
              MCA Student (Dr. GRD) · BCA Graduate (STC) · Ready for IT Roles
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-white transition-colors cursor-pointer"
            >
              GitHub Pages Guide
            </button>
            <a
              href={resumeData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Top</span>
          </button>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {resumeData.personal.fullName}. All rights reserved.
          </p>
          <p>
            Configured with GitHub Actions CI/CD for automated GitHub Pages hosting.
          </p>
        </div>
      </div>
    </footer>
  );
};
