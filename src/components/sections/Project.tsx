'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from '../../styles/Projects.module.css';
import { staggerChildren, textRise } from '../animations/variants';

const projectsData = [
  {
    id: 1,
    num: '01',
    title: 'SmartResto',
    image: '/images/project1.png',
    liveUrl: 'https://casagatchalian.com/',
    description:
      'A Business Analytics–Driven Decision Support System for Casa Gatchalian. featuring POS-based sales tracking, online booking management, customer analytics, and a business intelligence dashboard with AI-powered forecasting to support data-driven decision-making.',
    tags: ['Laravel', 'React', 'Tailwind', 'MySQL'],
  },
  {
    id: 2,
    num: '02',
    title: 'Casa Gatchalian Lakehouse',
    image: '/images/project2.png',
    liveUrl: 'https://casagatchalian.com/lakehouse',
    description:
      'A web-based Point-of-Sale (POS) system for Casa Gatchalian Lakehouse with automated receipt generation, sales calculations, and an administrative dashboard for transaction monitoring.',
    tags: ['Laravel', 'React', 'Tailwind', 'MySQL'],
  },
  {
    id: 3,
    num: '03',
    title: 'Food Ordering System',
    image: '/images/project3.png',
    liveUrl: 'https://github.com/KARYEL-002/food-ordering-system.git',
    description:
      'Full-stack food ordering platform complete with menu customization, cart workflow, and automated order tracking.',
    tags: ['Laravel', 'React', 'MySQL'],
  },
  {
    id: 4,
    num: '04',
    title: 'HCI Mobile App Prototype',
    image: '/images/project4.png',
    liveUrl: 'https://hci-app-df46c.firebaseapp.com/',
    description:
      'User-centric mobile interface prototype focusing on intuitive navigation, modern design patterns, and cross-platform usability.',
    tags: ['Figma', 'React Native', 'Firebase'],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // Calculates the active index based on scroll position in mobile view
  const handleScroll = () => {
    if (!gridRef.current) return;
    const { scrollLeft, clientWidth } = gridRef.current;
    
    // Calculates current item based on horizontal offset
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(Math.max(index, 0), projectsData.length - 1));
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Header Info */}
      <motion.div
        className={styles.projectsHeader}
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 className={styles.title} variants={textRise}>
          PROJECTS
        </motion.h2>
        <motion.p className={styles.subtitle} variants={textRise}>
          My recent works and UI designs
        </motion.p>
      </motion.div>

      {/* Grid / Mobile Carousel Container */}
      <motion.div
        ref={gridRef}
        onScroll={handleScroll}
        className={styles.projectsGrid}
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} className={styles.card} variants={textRise}>
            {/* Image Frame */}
            <div className={styles.imageContainer}>
              <span className={styles.projectNumber}>{project.num}</span>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Content Area */}
            <div className={styles.cardContent}>
              <div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>

              {/* Card Footer with Tech Stack Pills & View Live Link */}
              <div className={styles.cardFooter}>
                <div className={styles.tagList}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewLink}
                  aria-label={`View live site for ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Swipe Indicators */}
      <div className={styles.carouselIndicators}>
        {projectsData.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.indicatorDot} ${
              idx === activeIndex ? styles.activeIndicatorDot : ''
            }`}
          />
        ))}
      </div>
    </section>
  );
}