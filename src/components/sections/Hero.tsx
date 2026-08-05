'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { fadeInUp, hoverScale, staggerChildren, textRise } from '../animations/variants';
import styles from '@/styles/Hero.module.css';
import ResumeModal from '@/components/sections/ResumeModal'; // Make sure path matches where you placed ResumeModal.tsx

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="profile" className={styles.heroSection}>
        <div className={styles.container}>
          
          {/* Left: Profile Photo with Soft Blue Ambient Backdrop Glow */}
          <motion.div 
            className={styles.imageWrapper}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Ambient Blue Glow */}
            <div className={styles.glow} />

            <Image 
              src="/images/profile.JPG" 
              alt="Kariel Coleen Mauzar"
              width={400} 
              height={400} 
              unoptimized={true} /* This is the crucial fix */
              className={styles.profileImg}
            />
          </motion.div>

          {/* Right: Info Content */}
          <motion.div 
            className={styles.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            variants={staggerChildren}
          >
            <motion.div className={styles.badge} variants={textRise}>
              <span className={styles.dot} /> Available for work
            </motion.div>

            <motion.h1 className={styles.name} variants={textRise}>KARIEL COLEEN MAUZAR</motion.h1>
            <motion.h2 className={styles.tagline} variants={textRise}>
              Software Developer | Front-end Web Developer | UI/UX | Business Analytics
            </motion.h2>
            
            <motion.p className={styles.bio} variants={textRise}>
              Turning ideas into responsive and user-friendly web applications. 
              I'm an Information Technology graduate specializing in Business Analytics, 
              passionate about software development, continuous learning, 
              and creating digital solutions that make a difference.
            </motion.p>

            {/* Action Buttons */}
            <div className={styles.buttonGroup}>
              <motion.button 
                variants={hoverScale} 
                whileHover="hover" 
                whileTap="tap" 
                className={styles.hireBtn}
              >
                Hire Me
              </motion.button>

              <motion.button 
                variants={hoverScale} 
                whileHover="hover" 
                whileTap="tap" 
                className={styles.resumeBtn}
                onClick={() => setIsResumeOpen(true)}
              >
                View Resume
              </motion.button>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a 
                href="mailto:mauzarkc@gmail.com" 
                className={`${styles.socialIcon} ${styles.mailIcon}`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kariel-coleen-mauzar-7b685127a/" 
                target="_blank" 
                rel="noreferrer" 
                className={`${styles.socialIcon} ${styles.linkedinIcon}`}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a 
                href="https://github.com/skydreaam" 
                target="_blank" 
                rel="noreferrer" 
                className={`${styles.socialIcon} ${styles.githubIcon}`}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Modal Popup */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        pdfUrl="/files/Kariel Coleen Mauzar - Resume.pdf" 
      />
    </>
  );
}