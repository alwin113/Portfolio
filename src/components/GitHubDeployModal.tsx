import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  FileCode
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const gitCommands = `git init
git add .
git commit -m "Initial commit: C Alwin Abishek Portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main`;

  const workflowSnippet = `name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci || npm install

      - name: Build project
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-base sm:text-lg">
                Deploy to GitHub Pages with GitHub Actions
              </h2>
              <p className="text-xs text-slate-400">
                Step-by-step instructions to get your portfolio live on the web for free
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close deploy instructions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Quick status bar */}
          <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-semibold text-emerald-300">
                Project is already configured and GitHub Pages ready!
              </p>
              <p className="text-slate-300 leading-relaxed">
                <code className="text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded font-mono">vite.config.ts</code> has base path set to <code className="text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded font-mono">./</code> and the workflow file is saved at <code className="text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded font-mono">.github/workflows/deploy.yml</code>.
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-sm font-bold text-white">Create a GitHub Repository & Push Code</h3>
              </div>
              <button
                onClick={() => copyToClipboard(gitCommands, 1)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              >
                {copiedStep === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedStep === 1 ? 'Copied Commands' : 'Copy Commands'}</span>
              </button>
            </div>
            
            <p className="text-xs text-slate-400 pl-8">
              Open your terminal in this project root folder and execute:
            </p>

            <div className="ml-8 bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-300 overflow-x-auto">
              <pre>{gitCommands}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-sm font-bold text-white">Enable GitHub Actions in Repository Settings</h3>
            </div>
            
            <div className="ml-8 bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 space-y-2.5 text-xs text-slate-300">
              <ol className="list-decimal list-inside space-y-1.5 leading-relaxed">
                <li>Go to your repository on GitHub (<code className="text-indigo-400 font-mono">github.com/&lt;user&gt;/&lt;repo&gt;</code>).</li>
                <li>Click on the <strong className="text-white">Settings</strong> tab at the top.</li>
                <li>In the left sidebar, click on <strong className="text-white">Pages</strong> (under "Code and automation").</li>
                <li>
                  Under <strong className="text-white">Build and deployment &rarr; Source</strong>, select{' '}
                  <span className="font-semibold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                    GitHub Actions
                  </span>{' '}
                  (instead of "Deploy from a branch").
                </li>
              </ol>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-sm font-bold text-white">The GitHub Actions Workflow File</h3>
              </div>
              <button
                onClick={() => copyToClipboard(workflowSnippet, 3)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              >
                {copiedStep === 3 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedStep === 3 ? 'Copied YAML' : 'Copy Workflow'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 pl-8">
              This file is automatically included in your repo at <code className="text-slate-300 font-mono">.github/workflows/deploy.yml</code>. Whenever you push to <code className="text-slate-300 font-mono">main</code>, GitHub Actions builds and deploys your site in under 60 seconds.
            </p>

            <details className="ml-8 text-xs text-slate-400 cursor-pointer">
              <summary className="hover:text-indigo-400 py-1 font-mono">View workflow YAML</summary>
              <div className="mt-2 bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-slate-300 overflow-x-auto max-h-48 text-[11px]">
                <pre>{workflowSnippet}</pre>
              </div>
            </details>
          </div>

          {/* Result */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-200">Your live website address will be:</p>
              <p className="text-sm font-mono text-indigo-400 font-medium">
                https://&lt;your-username&gt;.github.io/&lt;your-repo-name&gt;/
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Got it!
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
