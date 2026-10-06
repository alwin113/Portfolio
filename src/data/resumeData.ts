export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  status: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  skillsLearned: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'C/C++' | 'SQL' | 'Software Dev';
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const resumeData = {
  personal: {
    fullName: "C Alwin Abishek",
    shortName: "Alwin Abishek",
    headline: "Aspiring IT Professional & Software Developer",
    careerObjective: "To secure a challenging position as an IT professional to use my software and analytical skills for the progress of the organization and attain career targets.",
    email: "25mca003@grd.edu.in",
    altEmail: "21bca005@stc.ac.in",
    phone: "+91 9345772980",
    phoneRaw: "9345772980",
    linkedinUrl: "https://www.linkedin.com/in/alwin-abishek-",
    linkedinUsername: "alwin-abishek-",
    location: "Madathukulam, Tiruppur, Tamil Nadu, India",
    address: "187/7 Thiru senthil theatre backside main road, madathukulam",
    dob: "10/02/2004",
    dobFormatted: "February 10, 2004",
    nationality: "Indian",
    fatherName: "MJ Caleb",
    motherName: "C Parimala",
    languages: ["Tamil", "English"],
    declaration: "I hereby declare that the information stated above is true to the best of my knowledge and belief."
  },

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. G.R. Damodaran College of Science (Autonomous)",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 - 2026",
      grade: "Pursuing",
      status: "Currently Enrolled",
      details: "Advanced curriculum covering Enterprise Application Development, Relational Databases, Algorithms, Cloud Computing, and Software Architecture."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sree Saraswathi Thyagaraja College of Arts and Science (Autonomous)",
      location: "Pollachi, Tamil Nadu",
      period: "2021 - 2024",
      grade: "Graduated (50% till 5th Sem)",
      status: "Completed",
      details: "Foundational training in C, C++, Data Structures, Database Management Systems, VB.NET, Operating Systems, and Computer Networks."
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "RGM Higher Secondary School",
      location: "Udumalpet, Tamil Nadu",
      period: "2020 - 2021",
      grade: "64%",
      status: "Completed",
      details: "Computer Science and Mathematics major stream with rigorous academic focus."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC - 10th)",
      institution: "RGM Higher Secondary School",
      location: "Udumalpet, Tamil Nadu",
      period: "2018 - 2019",
      grade: "45%",
      status: "Completed",
      details: "General secondary curriculum under the Tamil Nadu State Board."
    }
  ] as EducationItem[],

  skillCategories: [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "C",
          level: "Intermediate",
          experience: "Core Academic & Projects",
          description: "Pointers, memory allocation, low-level data structures, and procedural algorithmic logic."
        },
        {
          name: "C++",
          level: "Intermediate",
          experience: "Core Academic & Projects",
          description: "Object-Oriented Programming (OOP), classes, inheritance, polymorphism, templates, and STL."
        },
        {
          name: "VB.NET",
          level: "Certified",
          experience: "Infosys Springboard Certified",
          description: "Event-driven Windows desktop forms, data types, control structures, and database connectivity."
        }
      ]
    },
    {
      category: "Database & Backend",
      skills: [
        {
          name: "SQL & Relational Databases",
          level: "Certified & Advanced",
          experience: "Infosys Springboard Certified",
          description: "SQL Views, joins, indexing, primary/foreign key relations, subqueries, and table normalizations."
        },
        {
          name: "Database Design",
          level: "Intermediate",
          experience: "Coursework & Projects",
          description: "Entity-Relationship (ER) modeling, schema definition, and ACID transaction safety."
        }
      ]
    },
    {
      category: "Web & Software Tools",
      skills: [
        {
          name: "Web Fundamentals",
          level: "Working Knowledge",
          experience: "Modern Web Projects",
          description: "HTML5, CSS3, modern JavaScript, responsive interfaces, and DOM manipulation."
        },
        {
          name: "Git & GitHub",
          level: "Intermediate",
          experience: "Version Control & CI/CD",
          description: "Git branching, repository management, GitHub Actions deployment workflows."
        }
      ]
    },
    {
      category: "Soft Skills & Leadership",
      skills: [
        {
          name: "Team Collaboration",
          level: "Exemplary",
          experience: "College & Group Projects",
          description: "Demonstrated ability to work cooperatively within diverse software teams and cohort study groups."
        },
        {
          name: "Effective Communication",
          level: "Professional",
          experience: "Bilingual (Tamil & English)",
          description: "Clear technical and interpersonal verbal and written communication."
        },
        {
          name: "Discipline & Dedication",
          level: "Certified (NCC)",
          experience: "National Cadet Corps",
          description: "Trained under rigorous National Cadet Corps drills cultivating leadership, integrity, and focus."
        }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      id: "cert-sql",
      title: "SQL Views and SQL Tables",
      issuer: "Infosys Springboard",
      date: "March 26, 2023",
      description: "Mastered enterprise database concepts including structured query design, multi-table joins, view virtualization, data security through views, and integrity constraints.",
      credentialUrl: "https://infyspringboard.onwingspan.com",
      skillsLearned: ["SQL Views", "Complex Joins", "Table Schema Design", "Query Optimization"],
      image: "/src/assets/images/certificate_infosys_1791275030685.jpg"
    },
    {
      id: "cert-vbnet",
      title: "Explore Variables and Data Types in VB.NET",
      issuer: "Infosys Springboard",
      date: "February 12, 2023",
      description: "Comprehensive certification covering VB.NET memory architecture, variable declarations, primitive & composite data types, scope control, and arithmetic parsing.",
      credentialUrl: "https://infyspringboard.onwingspan.com",
      skillsLearned: ["VB.NET", "Data Types & Variables", ".NET Framework", "Type Casting"],
      image: "/src/assets/images/certificate_infosys_1791275030685.jpg"
    },
    {
      id: "cert-ncc",
      title: "National Cadet Corps (NCC) Certificate",
      issuer: "Ministry of Defence, Government of India",
      date: "Academic Cadet Tenure",
      description: "Successfully underwent rigorous military drill training, camp leadership exercises, national integration camps, and community service initiatives.",
      skillsLearned: ["Leadership", "Team Coordination", "Crisis Discipline", "Community Service"],
      image: "/src/assets/images/certificate_infosys_1791275030685.jpg"
    }
  ] as Certification[],

  projects: [
    {
      id: "proj-1",
      title: "Relational SQL Inventory & Billing Management System",
      category: "SQL",
      description: "An optimized relational database schema and querying system for inventory tracking, customer orders, and automated invoice calculation utilizing optimized SQL Views and transactions.",
      technologies: ["SQL", "Relational Database Design", "Views", "Subqueries"],
      features: [
        "Dynamic SQL views aggregating sales revenue and real-time inventory counts",
        "Referential integrity enforcement across customer, item, and transaction tables",
        "Optimized indexing reducing execution times for multi-table joins"
      ],
      image: "/src/assets/images/project_preview_db_1791275006587.jpg",
      githubUrl: "https://github.com",
      demoUrl: "#"
    },
    {
      id: "proj-2",
      title: "C++ High-Performance Data Structures & Search Engine",
      category: "C/C++",
      description: "Modular C++ software suite implementing customized balanced binary trees, hash tables, and sorting algorithms with interactive terminal benchmarks and memory profilers.",
      technologies: ["C++", "C", "Object-Oriented Programming", "Memory Management"],
      features: [
        "Object-oriented class hierarchy adhering to strict encapsulation and RAII guidelines",
        "Benchmarked against standard library containers with microsecond accuracy",
        "Zero memory leakage verified through custom pointer tracking"
      ],
      image: "/src/assets/images/project_preview_algo_1791275019158.jpg",
      githubUrl: "https://github.com",
      demoUrl: "#"
    },
    {
      id: "proj-3",
      title: "Modern Student Portal & Digital Portfolio Web App",
      category: "Software Dev",
      description: "A fast, responsive web application for showcasing academic qualifications, certified achievements, and continuous deployment through GitHub Actions.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "GitHub Actions CI/CD"],
      features: [
        "Fully interactive resume view with dedicated high-fidelity print and PDF export",
        "Continuous automated build and deployment to GitHub Pages via GitHub Actions",
        "Strict accessibility standards (WCAG AA) and responsive mobile design"
      ],
      image: "/src/assets/images/project_preview_db_1791275006587.jpg",
      githubUrl: "https://github.com",
      demoUrl: "#"
    }
  ] as Project[]
};
