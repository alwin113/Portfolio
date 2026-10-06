# C Alwin Abishek - Personal Portfolio & Resume Website

A professional, high-performance personal portfolio and interactive resume website built with React 19, TypeScript, and Tailwind CSS. Configured for automatic continuous deployment to **GitHub Pages** using **GitHub Actions**.

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

### 1. Initialize Git and Push to GitHub
If you haven't connected this project to GitHub yet, run:
```bash
git init
git add .
git commit -m "Initial commit: C Alwin Abishek Portfolio & Resume"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2. Enable GitHub Pages with GitHub Actions
1. Go to your repository on GitHub.
2. Click on **Settings** (top navigation tab).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
5. That's it! The workflow file in `.github/workflows/deploy.yml` will automatically build and publish your website whenever you push code to `main`.
6. Your portfolio will be live at: `https://<your-username>.github.io/<your-repo-name>/`

---

## ✨ Features Included

- **Hero & Profile Showcase**: Custom profile headshot, introduction, career summary, and direct action buttons (Contact Me, View Resume, LinkedIn).
- **Interactive Resume Modal & View**: Complete digital reproduction of your resume with:
  - Career Objective
  - Educational Background (MCA & BCA degrees with institutions, passing years, percentages)
  - Technical & Soft Skills matrix
  - Official Certifications (Infosys Springboard VB.NET & SQL, NCC Certification)
  - Personal Details & Declaration
  - **One-Click Print / Save as PDF** support.
- **Projects Showcase**: Highlights key technical applications in Database Systems, Algorithm Optimization (C/C++), and Web Development.
- **Photo Customizer**: Option to view high-res studio portrait or upload and preview your own photo directly with local storage persistence.
- **Interactive Contact Section**: Direct email links, phone dialer, copy-to-clipboard contact info, and an interactive message form.
- **GitHub Pages Ready**: Configured with `base: './'` in `vite.config.ts` so all assets load seamlessly without 404 path issues.
