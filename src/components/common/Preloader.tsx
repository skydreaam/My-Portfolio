'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Preloader.module.css';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloaderContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className={styles.contentWrapper}>
            {/* Main Animated Title */}
            <motion.h1
              className={styles.brandTitle}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Karyel<span className={styles.accentText}>Dev</span>
            </motion.h1>

            {/* Pixel Particles */}
            <div className={styles.pixelContainer}>
              {[...Array(8)].map((_, i) => (
                <motion.span
                  key={i}
                  className={styles.pixel}
                  initial={{ opacity: 0, y: 10, x: (i - 4) * 15 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-10, -30, -50],
                    x: (i - 4) * 18 + (i % 2 === 0 ? 10 : -10),
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Subtitle / Typewriter Effect */}
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              Pixels with a purpose.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}