import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 'Database & Backend':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Web & Software Tools':
        return <Globe className="w-4 h-4 text-sky-400" />;
      case 'Soft Skills & Leadership':
        return <Users className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-indigo-400" />;
    }
  };

  const activeCategory = resumeData.skillCategories[selectedCategoryIndex];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Technical Competence
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Core Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Specialized training in C, C++, Relational SQL architectures, and disciplined engineering practices.
          </p>
        </div>

        {/* Interactive Segmented Category Filter (Clean segmented buttons adhering to design guidelines) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-8 max-w-fit">
          {resumeData.skillCategories.map((cat, idx) => {
            const isActive = idx === selectedCategoryIndex;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl p-6 transition-all hover:bg-slate-900/70 space-y-4 group"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded text-indigo-300 bg-indigo-950/70 border border-indigo-500/20 shrink-0">
                  {skill.level}
                </span>
              </div>

              {/* Unboxed Metadata Line with typographic separators */}
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span>{skill.experience}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Competency Highlights Grid */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Primary Core</span>
            <p className="text-sm font-bold text-slate-200 font-mono">C & C++ OOP</p>
          </div>
          <div className="p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Database Engine</span>
            <p className="text-sm font-bold text-slate-200 font-mono">SQL Views & Joins</p>
          </div>
          <div className="p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Desktop App</span>
            <p className="text-sm font-bold text-slate-200 font-mono">VB.NET (Certified)</p>
          </div>
          <div className="p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Leadership</span>
            <p className="text-sm font-bold text-slate-200 font-mono">NCC Discipline</p>
          </div>
        </div>

      </div>
    </section>
  );
};
