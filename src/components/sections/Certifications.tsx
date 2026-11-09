'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward, FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import styles from '@/styles/Certifications.module.css';
import { staggerChildren, textRise } from '../animations/variants';

const certificates = [
  {
    title: 'AI Fundamentals: Foundations for Understanding AI',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/images/cert-ai.jpg',
    tags: ['AI & Data Science', 'AI Ethics'],
    highlights: [
      'Core concepts behind AI: machine learning, neural networks, and deep learning',
      'Understanding generative AI applications and prompt basics',
      'Ethical considerations and responsible AI deployment frameworks',
    ],
    credentialUrl: 'https://www.credly.com/badges/788c7d8d-195d-4f96-aa86-58af7905ce00/public_url',
  },
  {
    title: 'Data Science Essentials With Python',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/images/cert-python.jpg',
    tags: ['Python for Data Analysis', 'Data Science', 'Data Visualization', 'Data Analytics'],
    highlights: [
      'Data manipulation and analysis using Pandas and NumPy',
      'Data visualization techniques with Matplotlib and Seaborn',
      'Statistical techniques for exploratory data analysis',
    ],
    credentialUrl: 'https://www.credly.com/badges/e3c78a93-4ac9-4de3-950e-1b0715ba7c4b/public_url',
  },
  {
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Aug 2026',
    image: '/images/ai-fluency.png',
    tags: ['AI Fluency', 'AI Literacy', 'AI Awareness'],
    highlights: [
      'Understanding the AI Fluency Framework and its application in various industries',
    ],
    credentialUrl: 'https://verify.skilljar.com/c/xqpdzsrm47p5',
  },
  {
    title: 'Python Developer Associate',
    issuer: 'DataCamp',
    date: 'Sep 2026',
    image: '/images/datacamp.png',
    tags: ['Python Programming', 'Data Science', 'Software Development'],
    highlights: [
      'Proficiency in Python programming for data analysis and software development',
    ],
    credentialUrl: 'https://www.datacamp.com/certificate/PDEVA0011681228292',
  },
];

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // Calculates active index based on horizontal scroll offset on mobile view
  const handleScroll = () => {
    if (!gridRef.current) return;
    const { scrollLeft, clientWidth } = gridRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(Math.max(index, 0), certificates.length - 1));
  };

  return (
    <section id="certifications" className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.h2 className={styles.title} variants={textRise}>
            CERTIFICATIONS
          </motion.h2>
          <motion.p className={styles.subtitle} variants={textRise}>
            Verified credentials and continuous learning achievements
          </motion.p>
        </motion.div>

        {/* Cards Grid / Mobile Track */}
        <motion.div
          ref={gridRef}
          onScroll={handleScroll}
          className={styles.cardsGrid}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className={styles.certCard}
              variants={textRise}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Top Image Banner */}
              <div className={styles.imageWrapper}>
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={250}
                    unoptimized={true}
                    priority={idx < 2}
                    className={styles.certImage}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <FaAward className={styles.placeholderIcon} />
                  </div>
                )}
              </div>

              {/* Card Content Area */}
              <div className={styles.cardContent}>
                {/* Category Tags */}
                <div className={styles.tagsWrapper}>
                  {cert.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Bullet Points */}
                <h3 className={styles.certTitle}>{cert.title}</h3>

                <ul className={styles.highlightsList}>
                  {cert.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>

                {/* Footer Metadata */}
                <div className={styles.cardFooter}>
                  <div className={styles.metaInfo}>
                    <span className={styles.metaItem}>
                      <FaBuilding className={styles.metaIcon} /> {cert.issuer}
                    </span>
                    {cert.date && (
                      <span className={styles.metaItem}>
                        <FaCalendarAlt className={styles.metaIcon} /> {cert.date}
                      </span>
                    )}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                  >
                    Verify <FaExternalLinkAlt className={styles.btnIcon} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swipe Indicators */}
        <div className={styles.carouselIndicators}>
          {certificates.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.indicatorDot} ${
                idx === activeIndex ? styles.activeIndicatorDot : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}