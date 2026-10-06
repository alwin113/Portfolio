import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Academic Background
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Progressive academic qualifications in computer applications, programming logic, and relational database systems.
          </p>
        </div>

        {/* Education Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, idx) => (
            <div
              key={edu.degree}
              className="relative bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all hover:bg-slate-900 group"
            >
              {/* Top Row: Degree & Status */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="space-y-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {edu.institution}
                  </p>
                </div>
                
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md shrink-0 ${
                  idx === 0 
                    ? 'text-emerald-400 bg-emerald-950/50 border border-emerald-500/20' 
                    : 'text-indigo-400 bg-indigo-950/50 border border-indigo-500/20'
                }`}>
                  {edu.status}
                </span>
              </div>

              {/* Unboxed Metadata Line with typographic separators */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800/70">
                <span className="flex items-center gap-1 font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {edu.period}
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {edu.location}
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="font-medium text-slate-200">
                  Score: {edu.grade}
                </span>
              </div>

              {/* Curriculum & Key Details */}
              {edu.details && (
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
