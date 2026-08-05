'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRegFileAlt,
  FaCopy,
  FaDownload,
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCheck,
} from 'react-icons/fa';
import styles from '@/styles/ResumeModal.module.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string; // Replace with your actual PDF file path in /public
}

export default function ResumeModal({
  isOpen,
  onClose,
  pdfUrl = '/files/Kariel Coleen Mauzar - Resume.pdf',
}: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const resumeText = `
KARIEL COLEEN G. MAUZAR
09496080398 | mauzarkc@gmail.com | Bagong Sikat, Lemery Batangas

SUMMARY
Information Technology fresh graduate with a specialization in Business Analytics and foundational knowledge in software and web development, system design, and data analysis. Experienced in developing functional, user-focused applications and working collaboratively on technology-driven projects. Familiar with modern development tools and technologies, with strong problem-solving, adaptability, and attention to detail. Seeking an entry-level Software Developer, Web Developer, or IT-related role where I can apply my technical skills, contribute to team projects, and continue developing professionally.

KEY SKILLS
- Programming Languages: Java, Python, JavaScript, PHP, C++
- Frameworks & Libraries: HTML, Tailwind CSS, Laravel, Next.js, React.js, Flutter
- Database & Backend: SQL, MySQL, Firebase
- Data Analysis: Google Colab, Looker Studio, Power BI
- Design & Tools: Figma, Canva, Git, GitHub

PROFESSIONAL EXPERIENCE
Software Engineer Intern | Junior Dev
Center for Artificial Intelligence and Smart Technologies (CAIST) BatStateU - TNEU (February 2026 - May 2026)
- Designed and developed a fully functional Food Ordering System using Laravel, ReactJS, Tailwind CSS, and MySQL, following the complete SDLC.
- Contributed to Leonaidas (CAIST project), handling software documentation (DFDs, Use Case Diagrams, ERDs, flowcharts, user manuals, test cases) and automated testing using PHPUnit and Playwright.
- Performed basic penetration testing using Kali Linux, OWASP ZAP, Nmap, Nikto, and Burp Suite.
- Served as project manager overseeing task delegation, Gantt charts, and version control via CodeStash.

Capstone Project: SmartResto (Business Analytics Driven Decision Support System for Casa Gatchalian)
- Developed a web-based management system integrating POS, booking, and real-time dashboards using Laravel, React.js, MySQL, and Hostinger.

EDUCATION
Bachelor of Science in Information Technology (BSIT)
Batangas State University - TNEU - Alangilan Campus (August 2022 - 2026)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContainer}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Header */}
            <div className={styles.topBar}>
              <div className={styles.topTitle}>
                <FaRegFileAlt /> Executive Resume
              </div>

              <div className={styles.actionGroup}>
                <button className={styles.actionBtn} onClick={handleCopyText}>
                  {copied ? <FaCheck style={{ color: '#10b981' }} /> : <FaCopy />}
                  <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                </button>

                <a href={pdfUrl} download className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                  <FaDownload /> <span>Download PDF</span>
                </a>

                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Scrollable Resume Area */}
            <div className={styles.resumeContent}>
              {/* Header Info */}
              <header className={styles.headerSection}>
                <h1 className={styles.candidateName}>Kariel Coleen G. Mauzar</h1>
                <p className={styles.candidateRole}>SOFTWARE DEVELOPER • FRONT-END WEB DEVELOPER • BUSINESS ANALYTICS</p>
                <div className={styles.contactMeta}>
                  <span className={styles.metaItem}>
                    <FaPhone /> 09496080398
                  </span>
                  <span className={styles.metaItem}>
                    <FaEnvelope /> mauzarkc@gmail.com
                  </span>
                  <span className={styles.metaItem}>
                    <FaMapMarkerAlt /> Bagong Sikat, Lemery Batangas
                  </span>
                </div>
              </header>

              {/* Summary */}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Summary</h2>
                <p className={styles.summaryText}>
                  Information Technology fresh graduate with a specialization in Business Analytics
                  and foundational knowledge in software and web development, system design, and data
                  analysis. Experienced in developing functional, user-focused applications and
                  working collaboratively on technology-driven projects. Familiar with modern
                  development tools and technologies, with strong problem-solving, adaptability, and
                  attention to detail. Seeking an entry-level Software Developer, Web Developer,
                  or IT-related role where I can apply my technical skills, contribute to team projects,
                  and continue developing professionally.
                </p>
              </section>

              {/* Key Skills */}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Key Skills</h2>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCategory}>
                    <span>Programming Languages:</span> Java, Python, JavaScript, PHP, C++
                  </div>
                  <div className={styles.skillCategory}>
                    <span>Frameworks & Libraries:</span> HTML, Tailwind CSS, Laravel, Next.js, React.js, Flutter
                  </div>
                  <div className={styles.skillCategory}>
                    <span>Database & Backend:</span> SQL, MySQL, Firebase
                  </div>
                  <div className={styles.skillCategory}>
                    <span>Data Analysis:</span> Google Colab, Looker Studio, Power BI
                  </div>
                  <div className={styles.skillCategory}>
                    <span>Design & Tools:</span> Figma, Canva, Git, GitHub
                  </div>
                </div>
              </section>

              {/* Professional Experience */}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Professional Experience</h2>
                
                {/* CAIST Experience */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemTitle}>Software Engineer Intern | Junior Dev</span>
                    <span className={styles.itemDate}>Feb 2026 – May 2026</span>
                  </div>
                  <p className={styles.summaryText} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#82c8e5', marginBottom: '0.4rem' }}>
                    Center for Artificial Intelligence and Smart Technologies (CAIST) BatStateU - TNEU
                  </p>
                  <ul className={styles.bulletList}>
                    <li>
                      Designed and developed a fully functional Food Ordering System using Laravel, ReactJS, Tailwind CSS, and MySQL, following the complete SDLC.
                    </li>
                    <li>
                      Contributed to <em>Leonaidas</em> (internal CAIST project), handling software documentation (DFDs, Use Case Diagrams, ERDs, flowcharts, user manuals, test cases), as well as manual/automated testing with PHPUnit and Playwright.
                    </li>
                    <li>
                      Performed basic penetration testing using tools such as Kali Linux, OWASP ZAP, Nmap, Nikto, and Burp Suite.
                    </li>
                    <li>
                      Served as Project Manager overseeing task delegation, progress tracking via Gantt charts, and version control collaboration using CodeStash.
                    </li>
                  </ul>
                </div>

                {/* Capstone Experience */}
                <div>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemTitle}>SmartResto: Capstone Project</span>
                    <span className={styles.itemDate}>2025–2026</span>
                  </div>
                  <p className={styles.summaryText} style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.4rem' }}>
                    A Business Analytics Driven Decision Support System for Casa Gatchalian
                  </p>
                  <ul className={styles.bulletList}>
                    <li>Developed a web-based management system integrating POS, booking, and real-time dashboards to streamline operations.</li>
                    <li><strong>Key Features:</strong> Reservation system, POS for sales tracking, financial reporting, and AI-driven analytics.</li>
                    <li><strong>Technologies:</strong> Laravel, React.js, MySQL, and Hostinger.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.itemHeader}>
                  <span className={styles.itemTitle}>Bachelor of Science in Information Technology (BSIT)</span>
                  <span className={styles.itemDate}>August 2022 – 2026</span>
                </div>
                <p className={styles.summaryText} style={{ fontSize: '0.78rem' }}>
                  Batangas State University - TNEU - Alangilan Campus
                </p>
              </section>

              {/* Reference */}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>References</h2>
                <p className={styles.summaryText} style={{ fontStyle: 'italic', fontSize: '0.75rem' }}>
                  Available upon request.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}