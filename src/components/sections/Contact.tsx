'use client';

import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUpRightFromSquare, FaBriefcase, FaCode } from 'react-icons/fa6';
import styles from '@/styles/Contact.module.css';
import { staggerChildren, textRise } from '../animations/variants';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('Job Opportunity');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:mauzarkc@gmail.com?subject=${encodeURIComponent(inquiryType)}&body=${encodeURIComponent(body)}`;
  };

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
          <div className={styles.intro}>
          <span className={styles.eyebrow}>HAVE SOMETHING IN MIND?</span>
          <motion.h2 className={styles.title} variants={textRise}>
            LET&apos;S WORK<br />TOGETHER<span className={styles.titleDot}>.</span>
          </motion.h2>

          <motion.p className={styles.subtitle} variants={textRise}>
            A role to fill or an idea to bring to life? Tell me what you&apos;re working on. I&apos;d love to hear about it.
          </motion.p>
          <div className={styles.availability}><span /> Open to opportunities &amp; projects</div>
          <a className={styles.directEmail} href="mailto:mauzarkc@gmail.com">mauzarkc@gmail.com <FaArrowUpRightFromSquare aria-hidden="true" /></a>
          </div>

          <form className={styles.inquiryForm} onSubmit={handleSubmit}>
            <div className={styles.formHeading}><h3>Start a conversation</h3><p>A few details are all we need to get started.</p></div>
            <fieldset className={styles.inquiryChoices}>
              <legend>I&apos;d like to discuss a</legend>
              {['Job Opportunity', 'Project Inquiry'].map((type) => (
                <label key={type}>
                  <input type="radio" name="inquiryType" value={type} checked={inquiryType === type} onChange={() => setInquiryType(type)} />
                  {type === 'Job Opportunity' ? <FaBriefcase aria-hidden="true" /> : <FaCode aria-hidden="true" />} {type}
                </label>
              ))}
            </fieldset>
            <div className={styles.fieldRow}>
              <label className={styles.formField} htmlFor="contact-name">Name
                <input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" />
              </label>
              <label className={styles.formField} htmlFor="contact-email">Email
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
              </label>
            </div>
            <label className={styles.formField} htmlFor="contact-message">Message
              <textarea id="contact-message" name="message" rows={5} required maxLength={3000} placeholder="Tell me about the role or project you have in mind." />
            </label>
            <button type="submit" className={styles.submitButton}><span>Create Email Draft</span><FaArrowUpRightFromSquare aria-hidden="true" /></button>
            <p className={styles.formNote}>Opens your email app with a draft ready for you to send.</p>
          </form>

          {/* Social / Direct Action Links */}
          <motion.div className={styles.linksGroup} variants={textRise}>
            <a
              href="mailto:mauzarkc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaEnvelope className={styles.linkIcon} />
              <span>Email Me</span>
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
