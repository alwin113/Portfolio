import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Check, ArrowRight } from 'lucide-react';
import { resumeData, Project } from '../data/resumeData';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'C/C++' | 'SQL' | 'Software Dev'>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              Featured Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Software & Database Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Practical implementations illustrating relational database structuring, object-oriented C++ designs, and responsive web platforms.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {(['All', 'SQL', 'C/C++', 'Software Dev'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 rounded-2xl overflow-hidden transition-all hover:bg-slate-900/80 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image container with fallback */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/alwin-profile.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-indigo-300">
                    {project.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack inline unboxed typography */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-indigo-300 text-[11px]">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-slate-700" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-800/50 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={resumeData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-indigo-400">
                  {activeProjectModal.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeProjectModal.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Architecture & Deliverables:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {activeProjectModal.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
