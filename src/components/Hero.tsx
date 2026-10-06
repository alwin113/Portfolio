import React from 'react';
import { 
  FileText, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Printer, 
  ChevronRight, 
  ExternalLink,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2,
  Database,
  Code2
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenDeployGuide,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-950/20 via-slate-950/0 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Typography (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator with unboxed metadata */}
            <div className="flex items-center gap-2.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for IT & Software Engineering Roles</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">Batch 2024–2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
                {resumeData.personal.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-indigo-300">
                {resumeData.personal.headline}
              </p>
            </div>

            {/* Career Objective Block */}
            <div className="relative pl-4 border-l-2 border-indigo-500/60 bg-slate-900/40 p-4 rounded-r-xl border-y border-r border-slate-800/40">
              <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-1">
                Career Objective
              </p>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                "{resumeData.personal.careerObjective}"
              </p>
            </div>

            {/* Unboxed Metadata Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                MCA (Dr. GRD) & BCA (STC)
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400" />
                {resumeData.personal.location}
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-300">Tamil & English</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
                <ChevronRight className="w-4 h-4 text-indigo-200" />
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4 text-slate-400" />
                <span>Print / Save PDF</span>
              </button>

              <a
                href={resumeData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Fast Contact Channels */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{resumeData.personal.email}</span>
              </a>
              <span className="text-slate-700" aria-hidden="true">/</span>
              <a
                href={`tel:${resumeData.personal.phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{resumeData.personal.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive Technical Dossier (5 cols on desktop, no profile picture) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-60"></div>

              {/* Dossier Card Container */}
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-7 space-y-6">
                
                {/* Header with Monogram */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-display font-bold text-xl text-indigo-400 tracking-wider">
                      CA
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">
                        {resumeData.personal.fullName}
                      </h3>
                      <p className="text-xs text-indigo-300 font-mono">
                        Candidate Dossier & Resume
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 rounded-md">
                    <span>Verified</span>
                  </div>
                </div>

                {/* Key Summary Rows */}
                <div className="space-y-4 text-xs">
                  
                  {/* Row 1: Academic Standing */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Current Program</span>
                      </span>
                      <span className="font-mono text-emerald-400">2024 – 2026</span>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      Master of Computer Applications (MCA)
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Dr. G.R. Damodaran College of Science, Coimbatore
                    </p>
                  </div>

                  {/* Row 2: Undergraduate */}
                  <div className="space-y-1 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                        <span>Undergraduate Degree</span>
                      </span>
                      <span className="font-mono text-slate-400">2021 – 2024</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">
                      Bachelor of Computer Applications (BCA)
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Sree Saraswathi Thyagaraja College, Pollachi
                    </p>
                  </div>

                  {/* Row 3: Technical Focus */}
                  <div className="space-y-1 pt-3 border-t border-slate-800/80">
                    <div className="text-slate-400 font-medium flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Core Technical Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['C', 'C++', 'SQL Views', 'VB.NET', 'HTML/CSS'].map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-indigo-300 font-mono text-[11px] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Certifications */}
                  <div className="space-y-1 pt-3 border-t border-slate-800/80">
                    <div className="text-slate-400 font-medium flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Accreditations</span>
                    </div>
                    <p className="text-slate-300 text-xs">
                      Infosys Springboard (VB.NET & SQL) · NCC Cadet
                    </p>
                  </div>

                </div>

                {/* Quick actions inside card */}
                <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={onOpenResume}
                    className="w-full py-2 text-center font-medium text-slate-200 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Open Full CV
                  </button>
                  <button
                    onClick={onOpenDeployGuide}
                    className="w-full py-2 text-center font-medium text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-800/40 rounded-lg transition-colors cursor-pointer"
                  >
                    Deploy to GitHub
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
