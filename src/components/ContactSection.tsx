import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, Copy, Check, MapPin, MessageSquare } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(resumeData.personal.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSentStatus('Please fill in your name, email, and message.');
      return;
    }

    const mailtoSubject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:${resumeData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentStatus('Opening your mail client to send your message...');
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Collaboration
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Open for software developer trainee positions, IT roles, and collaborative technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-indigo-400 font-semibold">
                  <Mail className="w-4 h-4" />
                  <span>Email Addresses</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-800/80 px-2 py-1 rounded cursor-pointer transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Primary'}</span>
                </button>
              </div>

              <div className="space-y-1">
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="block text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                >
                  {resumeData.personal.email}
                </a>
                <a
                  href={`mailto:${resumeData.personal.altEmail}`}
                  className="block text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {resumeData.personal.altEmail} (STC)
                </a>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>Direct Mobile</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-800/80 px-2 py-1 rounded cursor-pointer transition-colors"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy Number'}</span>
                </button>
              </div>

              <div>
                <a
                  href={`tel:${resumeData.personal.phoneRaw}`}
                  className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  {resumeData.personal.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-sky-400 font-semibold">
                <Linkedin className="w-4 h-4" />
                <span>Professional Network</span>
              </div>

              <div>
                <a
                  href={resumeData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-white hover:text-sky-400 transition-colors"
                >
                  linkedin.com/in/{resumeData.personal.linkedinUsername}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 space-y-1">
              <div className="flex items-center gap-2.5 text-xs text-rose-400 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <p className="text-xs text-slate-300">
                {resumeData.personal.location}
              </p>
            </div>

          </div>

          {/* Contact form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Recruiter or Hiring Lead"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Subject / Opportunity
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Opportunity for Software Engineer Trainee / IT Professional"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Alwin, we came across your resume and portfolio..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              {sentStatus && (
                <p className="text-xs text-indigo-300 bg-indigo-950/40 p-3 rounded-lg border border-indigo-800/40">
                  {sentStatus}
                </p>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
