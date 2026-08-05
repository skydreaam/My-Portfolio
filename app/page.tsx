'use client';

import { useState } from 'react';
import Preloader from '@/components/common/Preloader';

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Project';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Animated Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main Page Content */}
      <main 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: 'opacity 0.6s ease-in-out',
          visibility: isLoading ? 'hidden' : 'visible' 
        }}
      >
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
      </main>
    </>
  );
}