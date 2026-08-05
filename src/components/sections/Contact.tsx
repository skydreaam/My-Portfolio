'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import styles from '@/styles/Contact.module.css';
import { staggerChildren, textRise } from '../animations/variants';

export default function Contact() {
  return (
    <footer id="contact" className={styles.contactSection}>
      {/* Main Get In Touch Area */}
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contentWrapper}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 className={styles.title} variants={textRise}>
            GET IN TOUCH
          </motion.h2>

          <motion.p className={styles.subtitle} variants={textRise}>
            I&apos;m always open to discussing new opportunities and interesting projects.<br />
            Let&apos;s create something amazing together!
          </motion.p>

          {/* Social / Direct Action Links */}
          <motion.div className={styles.linksGroup} variants={textRise}>
            <a
              href="mailto:mauzarkc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaEnvelope className={styles.linkIcon} />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/skydreaam"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaGithub className={styles.linkIcon} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kariel-coleen-mauzar-7b685127a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaLinkedin className={styles.linkIcon} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Separate Bottom Footer Strip */}
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          © 2026 KaryelDev • Every pixel, every line, with a blue heart.
        </div>
      </div>
    </footer>
  );
}