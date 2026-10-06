import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'classic' | 'modern'>('classic');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
RESUME: C ALWIN ABISHEK
Email: ${resumeData.personal.email} | ${resumeData.personal.altEmail}
Phone: ${resumeData.personal.phone}
LinkedIn: ${resumeData.personal.linkedinUrl}
Address: ${resumeData.personal.address}

CAREER OBJECTIVE:
${resumeData.personal.careerObjective}

EDUCATION:
- Master of Computer Applications (MCA) | Dr. G.R. Damodaran College of Science (2024 - 2026) | Pursuing
- Bachelor of Computer Applications (BCA) | Sree Saraswathi Thyagaraja College of Arts and Science (2021 - 2024) | 50% till 5th sem
- Higher Secondary Certificate (HSC) | RGM HR Sec School, Udumalai (2020 - 2021) | 64%
- Secondary School Leaving Certificate (SSLC) | RGM HR Sec School, Udumalai (2018 - 2019) | 45%

TECHNICAL SKILLS:
- Programming Languages: Intermediate in C, C++, VB.NET
- Databases: SQL Views & SQL Tables, Relational Schema Design

CERTIFICATIONS:
1. Explore Variables and Data Types in VB.NET from Infosys Springboard (Feb 12, 2023)
2. SQL Views and SQL Tables from Infosys Springboard (March 26, 2023)
3. National Cadet Corps (NCC) Certificate

SOFT SKILLS:
- Communication
- Teamplayer

PERSONAL DETAILS:
- Date of Birth: ${resumeData.personal.dob}
- Nationality: ${resumeData.personal.nationality}
- Father's Name: ${resumeData.personal.fatherName}
- Mother's Name: ${resumeData.personal.motherName}
- Languages Known: ${resumeData.personal.languages.join(', ')}
- Address: ${resumeData.personal.address}

DECLARATION:
${resumeData.personal.declaration}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white print:fixed-none">
      
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto print:border-none print:shadow-none print:bg-white print:w-full print:max-w-none">
        
        {/* Modal Top Control Bar (Hidden when printing) */}
        <div className="no-print bg-slate-950/90 border-b border-slate-800 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-white text-sm sm:text-base">
              Resume Preview & PDF Export
            </span>
            <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('classic')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  activeTab === 'classic'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Official Resume
              </button>
              <button
                onClick={() => setActiveTab('modern')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  activeTab === 'modern'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Executive Layout
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Copy resume text to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Area */}
        <div className="p-4 sm:p-8 md:p-12 max-h-[85vh] overflow-y-auto bg-white text-slate-900 print:max-h-none print:p-0 print:overflow-visible">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase font-display">
                  {resumeData.personal.fullName}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-indigo-700">
                  {resumeData.personal.headline}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{resumeData.personal.email}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{resumeData.personal.phone}</span>
                  </span>
                  <span>·</span>
                  <a 
                    href={resumeData.personal.linkedinUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-indigo-700 hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/{resumeData.personal.linkedinUsername}</span>
                  </a>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Madathukulam, Tamil Nadu</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Career Objective */}
          <section className="mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {resumeData.personal.careerObjective}
            </p>
          </section>

          {/* Section 2: Education (Formatted matching original resume table) */}
          <section className="mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-400">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-400 font-bold text-slate-900">
                    <th className="p-2 border-r border-slate-400">Qualification</th>
                    <th className="p-2 border-r border-slate-400">Name of Institution</th>
                    <th className="p-2 border-r border-slate-400">Year of Passing</th>
                    <th className="p-2">Percentage / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2 font-semibold border-r border-slate-300">MCA</td>
                    <td className="p-2 border-r border-slate-300">
                      Dr. G.R. Damodaran College of Science, Coimbatore
                    </td>
                    <td className="p-2 border-r border-slate-300 font-mono">2024 – 2026</td>
                    <td className="p-2 font-medium text-emerald-700">Pursuing (Currently Enrolled)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2 font-semibold border-r border-slate-300">BCA</td>
                    <td className="p-2 border-r border-slate-300">
                      Sree Saraswathi Thyagaraja College of Arts and Science, Pollachi
                    </td>
                    <td className="p-2 border-r border-slate-300 font-mono">2021 – 2024</td>
                    <td className="p-2 font-medium">50% till 5th sem (Graduated)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2 font-semibold border-r border-slate-300">HSC (12th)</td>
                    <td className="p-2 border-r border-slate-300">
                      RGM HR Sec School, Udumalai
                    </td>
                    <td className="p-2 border-r border-slate-300 font-mono">2020 – 2021</td>
                    <td className="p-2 font-medium">64%</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2 font-semibold border-r border-slate-300">SSLC (10th)</td>
                    <td className="p-2 border-r border-slate-300">
                      RGM HR Sec School, Udumalai
                    </td>
                    <td className="p-2 border-r border-slate-300 font-mono">2018 – 2019</td>
                    <td className="p-2 font-medium">45%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Technical Skills */}
          <section className="mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              <p>
                <span className="font-semibold text-slate-900">Programming Languages: </span>
                Intermediate in C, C++, VB.NET
              </p>
              <p>
                <span className="font-semibold text-slate-900">Databases & Architecture: </span>
                SQL Views, Relational SQL Tables, Database Normalization, Joins
              </p>
              <p>
                <span className="font-semibold text-slate-900">Web Technologies & Tools: </span>
                HTML5, CSS3, JavaScript, Git & GitHub, CI/CD Deployments
              </p>
            </div>
          </section>

          {/* Section 4: Certifications */}
          <section className="mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications
            </h2>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-800">
              <li>
                <span className="font-semibold">Explore Variables and Data Types in VB.NET</span> from{' '}
                <span className="font-semibold">Infosys Springboard</span> (February 12, 2023)
              </li>
              <li>
                <span className="font-semibold">SQL Views and SQL Tables</span> from{' '}
                <span className="font-semibold">Infosys Springboard</span> (March 26, 2023)
              </li>
              <li>
                <span className="font-semibold">National Cadet Corps (NCC) Certificate</span> (Discipline, Leadership & Civic Service)
              </li>
            </ol>
          </section>

          {/* Section 5: Soft Skills */}
          <section className="mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span className="font-medium">Communication</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span className="font-medium">Teamplayer & Collaboration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span className="font-medium">Analytical Problem Solving</span>
              </div>
            </div>
          </section>

          {/* Section 6: Personal Details */}
          <section className="mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-xs text-slate-800">
              <div>
                <span className="font-semibold text-slate-900">Date of Birth: </span>
                {resumeData.personal.dob} ({resumeData.personal.dobFormatted})
              </div>
              <div>
                <span className="font-semibold text-slate-900">Nationality: </span>
                {resumeData.personal.nationality}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Father's Name: </span>
                {resumeData.personal.fatherName}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Mother's Name: </span>
                {resumeData.personal.motherName}
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-slate-900">Languages Known: </span>
                {resumeData.personal.languages.join(', ')}
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-slate-900">Address: </span>
                {resumeData.personal.address}
              </div>
            </div>
          </section>

          {/* Section 7: Declaration */}
          <section className="pt-4 border-t border-slate-300">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 mb-2">
              Declaration
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
              "{resumeData.personal.declaration}"
            </p>

            <div className="flex justify-between items-end text-xs text-slate-800 pt-2">
              <div className="space-y-1">
                <p><span className="font-semibold">Place:</span> Madathukulam</p>
                <p><span className="font-semibold">Date:</span> {new Date().toLocaleDateString('en-GB')}</p>
              </div>
              <div className="text-right space-y-1">
                <div className="font-display font-bold text-slate-900 text-sm tracking-wide">
                  C Alwin Abishek
                </div>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                  Candidate Signature
                </p>
              </div>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
};
