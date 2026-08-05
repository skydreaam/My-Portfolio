'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import styles from '@/styles/Navbar.module.css';
import { staggerChildren, textRise } from '@/components/animations/variants';

const navLinks = [
  { name: 'Profile', href: '#profile' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <header className={styles.navbar}>
      <nav className={styles.container} aria-label="Primary navigation">
        <motion.ul
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.name} variants={textRise}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className={styles.controls}>
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle color theme"
            aria-pressed={isDarkMode}
          >
            <motion.span
              key={theme}
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isDarkMode ? <Moon size={15} color="#facc15" /> : <Sun size={15} color="#f97316" />}
            </motion.span>
          </button>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}