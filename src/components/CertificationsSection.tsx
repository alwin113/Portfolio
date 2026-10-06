import React from 'react';
import { Award, Calendar, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Verified Credentials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Honors
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Professional course accomplishments from Infosys Springboard and honorary civic defense credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all hover:bg-slate-900 group"
            >
              <div className="space-y-4">
                {/* Issuer Badge & Date */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                    <Award className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className="font-mono text-slate-400">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Competencies Acquired (Unboxed list with separators) */}
                <div className="pt-2">
                  <p className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider mb-2">
                    Key Topics Covered:
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="text-slate-300 font-medium">{skill}</span>
                        {sIdx < cert.skillsLearned.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer / Verification */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credential Verified</span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>Springboard</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
