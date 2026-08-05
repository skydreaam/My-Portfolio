import type { Metadata } from 'next';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kariel Coleen Mauzar | Portfolio',
  description: 'Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}