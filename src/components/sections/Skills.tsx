'use client';

import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaPhp, FaJs, FaLaravel, FaReact, FaFlutter, FaDatabase, FaFigma, FaGithub, FaCode, FaLayerGroup, FaServer, FaChartPie, FaPalette, FaWrench
} from 'react-icons/fa6';
import { 
  SiCplusplus, SiNextdotjs, SiMysql, SiFirebase, SiGooglecolab, SiLooker, SiCanvas, SiTailwindcss
} from 'react-icons/si';
import styles from '../../styles/Skills.module.css';
import { staggerChildren, textRise } from '../animations/variants';

// Custom Power BI Icon SVG
const PowerBiIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="1em" 
    height="1em" 
    fill="currentColor" 
    className={className} 
    style={style}
  >
    <path d="M10.5 4.508a.75.75 0 01.75.75v13.484a.75.75 0 01-1.5 0V5.258a.75.75 0 01.75-.75zM15 8.258a.75.75 0 01.75.75v9.734a.75.75 0 01-1.5 0V9.008a.75.75 0 01.75-.75zM6 12.008a.75.75 0 01.75.75v5.984a.75.75 0 01-1.5 0v-5.984a.75.75 0 01.75-.75z" />
  </svg>
);

const skillCategories = [
  {
    title: 'Languages',
    description: 'Core languages I use to build and automate',
    categoryIcon: FaCode,
    skills: [
      { name: 'PYTHON', icon: FaPython, color: '#3776AB' },
      { name: 'JAVASCRIPT', icon: FaJs, color: '#F7DF1E' },
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'SQL', icon: FaDatabase, color: 'var(--text-heading)' }, // Adaptive Theme Color
      { name: 'JAVA', icon: FaJava, color: '#E51F24' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    ],
  },
  {
    title: 'Frameworks',
    description: 'Modern web stacks, mobile, and UI systems',
    categoryIcon: FaLayerGroup,
    skills: [
      { name: 'NEXT.JS', icon: SiNextdotjs, color: 'var(--text-heading)' }, // Adaptive Theme Color
      { name: 'REACT.JS', icon: FaReact, color: '#61DAFB' },
      { name: 'LARAVEL', icon: FaLaravel, color: '#FF2D20' },
      { name: 'FLUTTER', icon: FaFlutter, color: '#02569B' },
      { name: 'TAILWIND', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Database & Backend',
    description: 'Data persistence and backend fundamentals',
    categoryIcon: FaServer,
    skills: [
      { name: 'MYSQL', icon: SiMysql, color: '#4479A1' },
      { name: 'FIREBASE', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Data Analytics',
    description: 'Reporting, data visualization, and notebooks',
    categoryIcon: FaChartPie,
    skills: [
      { name: 'GOOGLE COLAB', icon: SiGooglecolab, color: '#F9AB00' },
      { name: 'LOOKER STUDIO', icon: SiLooker, color: '#4285F4' },
      { name: 'POWER BI', icon: PowerBiIcon, color: '#F2C811' },
    ],
  },
  {
    title: 'UI/UX & Design',
    description: 'Interface design and visual asset creation',
    categoryIcon: FaPalette,
    skills: [
      { name: 'FIGMA', icon: FaFigma, color: '#EA4C89' },
      { name: 'CANVA', icon: SiCanvas, color: '#00C4CC' },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'Daily tools and version control systems',
    categoryIcon: FaWrench,
    skills: [
      { name: 'GITHUB', icon: FaGithub, color: 'var(--text-heading)' }, // Adaptive Theme Color
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        {/* Header */}
        <motion.div
          className={styles.skillsHeader}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.h2 className={styles.title} variants={textRise}>SKILLS</motion.h2>
          <motion.p className={styles.subtitle} variants={textRise}>Tools & Technologies</motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className={styles.cardsGrid}>
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.categoryIcon;
            return (
              <motion.div 
                key={idx} 
                className={styles.card}
                variants={textRise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Header Row */}
                <div className={styles.cardHeader}>
                  <div className={styles.categoryIconBox}>
                    <CategoryIcon className={styles.categoryIcon} />
                  </div>
                  <div className={styles.headerText}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDesc}>{category.description}</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className={styles.pillsContainer}>
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skillIdx} className={styles.pill}>
                        <SkillIcon className={styles.pillIcon} style={{ color: skill.color }} />
                        <span className={styles.pillName}>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}