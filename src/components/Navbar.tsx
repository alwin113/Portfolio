import React, { useState } from 'react';
import { FileText, Github, Menu, X, Mail, Sparkles, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Personal', href: '#personal-details' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single Brand text element wordmark */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            {resumeData.personal.fullName}
          </span>
          <span className="hidden sm:inline text-xs text-slate-400 font-normal">
            / MCA
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links with subtle hover underlines */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-8 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDeployGuide}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="GitHub Actions & GitHub Pages deployment instructions"
          >
            <Github className="w-3.5 h-3.5 text-slate-400" />
            <span>GitHub Deploy</span>
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="p-2 text-indigo-400 hover:text-indigo-300 bg-indigo-950/50 rounded-lg border border-indigo-800/40"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Full Interactive Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GitHub Pages Deployment Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
