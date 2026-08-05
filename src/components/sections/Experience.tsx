'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Experience.module.css';
import { staggerChildren, textRise } from '../animations/variants';

const experiences = [
  {
    role: 'Software Developer Intern',
    company:
      'Center for Artificial Intelligence and Smart Technologies (CAIST) BatStateU - TNEU',
    period: 'February 2026 – May 2026',
    description:
      'Contributed to software development projects within a collaborative team environment, developing and maintaining application features using modern development technologies. Participated in debugging, testing, and documenting projects to ensure quality and reliability, while collaborating closely with developers and fellow interns to deliver project requirements on time.',
  },
];

const education = [
  {
    institution: 'Batangas State University - TNEU',
    degree: 'Bachelor of Science in Information Technology',
    period: '2022 – 2026',
    subText: 'Overall GWA: 1.65',
  },
  {
    institution: 'Lemery Senior High School',
    degree: 'TVL - ICT: Programming and Animation',
    period: '2020 – 2022',
    subText: 'Senior High School',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.sectionContainer}>
      {/* Inner Container to enforce max-width consistency */}
      <div className={styles.experienceContainer}>
        {/* Header */}
        <motion.div
          className={styles.mainHeader}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.span className={styles.badge} variants={textRise}>
            MY JOURNEY
          </motion.span>
          <motion.h2 className={styles.mainTitle} variants={textRise}>
            EXPERIENCE & EDUCATION
          </motion.h2>
        </motion.div>

        {/* Grid Container */}
        <div className={styles.gridWrapper}>
          {/* Left Column: Experience */}
          <motion.div
            className={styles.columnBox}
            variants={textRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>Experience</h3>
              <p className={styles.subtitle}>My professional journey.</p>
            </div>

            <motion.div
              className={styles.timeline}
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className={styles.timelineItem}
                  variants={textRise}
                >
                  <div className={styles.dot} />
                  <motion.div
                    className={styles.card}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <h4 className={styles.cardTitle}>{exp.role}</h4>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.period}>{exp.period}</span>
                    <p className={styles.description}>{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            className={styles.columnBox}
            variants={textRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>Education</h3>
              <p className={styles.subtitle}>My academic background.</p>
            </div>

            <motion.div
              className={styles.timeline}
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className={styles.timelineItem}
                  variants={textRise}
                >
                  <div className={styles.dot} />
                  <motion.div
                    className={styles.card}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <h4 className={styles.cardTitle}>{edu.institution}</h4>
                    <span className={styles.company}>{edu.degree}</span>
                    <span className={styles.period}>{edu.period}</span>
                    {edu.subText && (
                      <p className={styles.description}>{edu.subText}</p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}