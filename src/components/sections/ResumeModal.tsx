'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegFileAlt, FaCopy, FaDownload, FaTimes, FaCheck } from 'react-icons/fa';
import styles from '@/styles/ResumeModal.module.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

const sections = [
  { title: 'Professional Summary', entries: [{ title: '', detail: '', paragraphs: ['Information Technology fresh graduate specializing in Business Analytics with hands-on experience in full-stack web development, software testing, database management, and data analytics. Experienced in developing web applications using Laravel, ReactJS, PHP, JavaScript, and MySQL, with exposure to AI-powered solutions and predictive analytics. Seeking a Junior Software Developer, Full-Stack Developer, or related role where I can contribute to real-world projects while continuing to strengthen my technical skills.'], bullets: [] }] },
  { title: 'Education', entries: [
    { title: 'Batangas State University', detail: 'August 2022 - August 2026', paragraphs: ['Batangas City, Batangas', 'BS in Information Technology, Specialized in Business Analytics', 'Relevant coursework: Software Development, Systems Quality Assurance, Web Systems and Technologies, Data Analytics'], bullets: [] },
    { title: 'Lemery Senior High School', detail: '2020 - 2022', paragraphs: ['Lemery, Batangas', 'Senior High School, TVL-ICT (Information and Communication Technology)', 'Relevant topic: Java Programming & Animation'], bullets: [] },
  ] },
  { title: 'Experience', entries: [
    { title: 'Software Engineer Intern', detail: 'February 2026 - May 2026', paragraphs: ['Center for Artificial Intelligence and Smart Technologies (CAIST) BatStateU - TNEU'], bullets: [
      'Developed a full-stack Food Ordering System using Laravel, ReactJS, Tailwind CSS, and MySQL, applying the complete Software Development Life Cycle from planning and database design to implementation and testing.',
      'Contributed to an internal CAIST project through system documentation, manual and automated testing using PHPUnit and Playwright, and basic penetration testing using OWASP ZAP, Nmap, Nikto, and Burp Suite.',
      'Served as project manager, coordinating task assignments, progress tracking through Gantt charts, and team collaboration throughout the development lifecycle.',
      'Proposed and led an AI-powered recommendation feature prototype, designing its workflows, business logic, and technical specifications for potential future integration.',
    ] },
  ] },
  { title: 'Projects', entries: [
    { title: 'SmartResto: A Business Analytics Driven Decision Support System for Casa Gatchalian', detail: 'Capstone Project', paragraphs: ['Technologies: Laravel, React.js, MySQL, Hostinger'], bullets: [
      'Developed a web-based Point-of-Sale (POS) system for automated order processing and transaction recording.',
      'Implemented an online reservation and booking module for managing room and event reservations.',
      'Built a centralized business analytics dashboard with interactive visualizations, real-time performance monitoring, and AI-powered predictive insights.',
      'Applied predictive analytics and demand forecasting to historical sales and order data to identify trends, peak periods, and customer behavior patterns.',
    ] },
    { title: 'Centralized Gas Station Management & Mobile POS System', detail: 'Under development', paragraphs: ['CJG Gasoline Station', 'Technologies: React, TypeScript, Vite, Tailwind CSS, Node.js, PostgreSQL, Prisma, REST API'], bullets: [
      'Developing a web-based management system to centralize operations across three gasoline station branches, covering sales, fuel inventory and reconciliation, staff shifts, customer loyalty, reporting, and business analytics.',
      'Building the frontend with React and TypeScript and a Node.js/TypeScript REST API, with PostgreSQL and Prisma for relational data management.',
      'Collaborating with the client to translate real-world operational requirements into functional system modules and workflows.',
      'Implementing responsive interfaces, data validation, reporting dashboards, and application testing using modern development tools and practices.',
    ] },
  ] },
];
const skills = [
  ['Programming Languages', 'Java, Python, JavaScript, PHP, C++'],
  ['Frameworks & Libraries', 'HTML, Tailwind CSS, Laravel, Next.js, React.js, Flutter'],
  ['Database & Backend', 'SQL, MySQL, Firebase'],
  ['Data Analysis', 'Google Colab, Looker Studio, Power BI'],
  ['Design & Tools', 'Figma, Canva, Git, GitHub'],
  ['AI/ML Tools', 'Codex, Gemini, Claude, DeepSeek, ChatGPT'],
];

export default function ResumeModal({ isOpen, onClose, pdfUrl = '/files/Kariel-Resume (1).pdf' }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const handleCopyText = async () => {
    if (!resumeRef.current) return;
    try {
      await navigator.clipboard.writeText(resumeRef.current.innerText);
      setCopyError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className={styles.modalContainer} role="dialog" aria-modal="true" aria-labelledby="resume-name" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} onClick={(event) => event.stopPropagation()}>
            <div className={styles.topBar}>
              <div className={styles.topTitle}><FaRegFileAlt /> Resume</div>
              <div className={styles.actionGroup}>
                <button className={styles.actionBtn} onClick={handleCopyText} aria-label={copied ? 'Resume text copied' : 'Copy resume text'}>
                  {copied ? <FaCheck /> : <FaCopy />}<span>{copied ? 'Copied!' : copyError ? 'Try copying again' : 'Copy Text'}</span>
                </button>
                <a href={pdfUrl} download className={`${styles.actionBtn} ${styles.primaryBtn}`} aria-label="Download resume PDF"><FaDownload /><span>Download PDF</span></a>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close resume"><FaTimes /></button>
              </div>
            </div>
            <div ref={resumeRef} className={styles.resumeContent}>
              <header className={styles.headerSection}>
                <h1 id="resume-name" className={styles.candidateName}>Kariel Coleen G. Mauzar</h1>
                <div className={styles.contactMeta}>
                  <span>Lemery, Batangas</span>
                  <a href="mailto:mauzarkc@gmail.com">mauzarkc@gmail.com</a>
                  <a href="tel:09496080398">09496080398</a>
                  <a href="https://www.linkedin.com/in/kariel-coleen-mauzar/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kariel-coleen-mauzar/</a>
                </div>
              </header>
              {sections.map((section) => (
                <section key={section.title} className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  {section.entries.map((entry, index) => (
                    <div key={entry.title || index} style={{ marginBottom: '1.25rem' }}>
                      {entry.title && <div className={styles.itemHeader}><h3 className={styles.itemTitle}>{entry.title}</h3><span className={styles.itemDate}>{entry.detail}</span></div>}
                      {entry.paragraphs.map((paragraph) => <p key={paragraph} className={styles.summaryText}>{paragraph}</p>)}
                      {entry.bullets.length > 0 && <ul className={styles.bulletList}>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                    </div>
                  ))}
                </section>
              ))}
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillsGrid}>{skills.map(([label, value]) => <div key={label} className={styles.skillCategory}><span>{label}:</span> {value}</div>)}</div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
