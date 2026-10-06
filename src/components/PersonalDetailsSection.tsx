import React from 'react';
import { UserCheck, MapPin, Calendar, Globe, HeartHandshake, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const PersonalDetailsSection: React.FC = () => {
  return (
    <section id="personal-details" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Personal Profile
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Personal Details & Declaration
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Official background particulars and candidate veracity declaration as documented in the resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Table / Grid (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-lg font-bold text-white pb-3 border-b border-slate-800">
              Biographical Details
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 text-xs sm:text-sm">
              <div className="space-y-1">
                <dt className="text-slate-500 font-medium text-xs">Date of Birth</dt>
                <dd className="font-semibold text-slate-200">
                  {resumeData.personal.dob} ({resumeData.personal.dobFormatted})
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-slate-500 font-medium text-xs">Nationality</dt>
                <dd className="font-semibold text-slate-200">
                  {resumeData.personal.nationality}
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-slate-500 font-medium text-xs">Father's Name</dt>
                <dd className="font-semibold text-slate-200">
                  {resumeData.personal.fatherName}
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-slate-500 font-medium text-xs">Mother's Name</dt>
                <dd className="font-semibold text-slate-200">
                  {resumeData.personal.motherName}
                </dd>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <dt className="text-slate-500 font-medium text-xs">Languages Known</dt>
                <dd className="font-semibold text-slate-200 flex items-center gap-2">
                  <span>Tamil (Native)</span>
                  <span className="text-slate-600">·</span>
                  <span>English (Professional Working)</span>
                </dd>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <dt className="text-slate-500 font-medium text-xs">Permanent Residential Address</dt>
                <dd className="text-slate-300 leading-relaxed font-mono text-xs">
                  {resumeData.personal.address}
                </dd>
              </div>
            </dl>
          </div>

          {/* Declaration Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Formal Candidate Declaration</span>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-4 py-1">
                "{resumeData.personal.declaration}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Place: Madathukulam</span>
                <span>Date: {new Date().toLocaleDateString('en-GB')}</span>
              </div>
              <div className="pt-2 text-right">
                <p className="font-display font-bold text-white text-base">
                  {resumeData.personal.fullName}
                </p>
                <p className="text-[11px] text-indigo-400 font-mono">
                  Authorized Portfolio Record
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
