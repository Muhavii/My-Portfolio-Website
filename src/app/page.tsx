'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Head from 'next/head';
import Hero from './components/Hero/Hero';
import GitHubSection from './components/GitHub/GitHub';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    const initialTheme = storedTheme === 'dark' || (!storedTheme && prefersDark) ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('theme-dark', initialTheme === 'dark');
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for fixed header if you have one
              behavior: 'smooth' as ScrollBehavior
            });
          }
        });
      });
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('theme-dark', nextTheme === 'dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
    }
  };

  return (
    <div className="outlook-bg">
      <Head>
        <title>Griffins Muteheri | Full Stack Developer</title>
        <meta name="description" content="Personal portfolio of Griffins Muteheri, a Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="outlook-shell">
        <header className="outlook-topbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
                <p className="text-lg font-semibold text-slate-900">Griffins Muteheri</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3 flex-1 max-w-md mx-8">
              <input
                type="search"
                placeholder="Search projects, skills, or anything..."
                className="w-full rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
              >
                Compose
                <span aria-hidden>✉️</span>
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700 transition-colors"
              >
                Quick View
              </a>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <aside className="outlook-sidebar p-5 space-y-6 h-fit sticky top-24">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Folders</h3>
              <nav className="space-y-2">
                <a className="outlook-nav-link" href="#home">
                  <span className="text-lg">🏠</span>
                  <span className="font-medium">Home</span>
                </a>
                <a className="outlook-nav-link" href="#github">
                  <span className="text-lg">💻</span>
                  <span className="font-medium">GitHub</span>
                  <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-700 outlook-badge">4</span>
                </a>
                <a className="outlook-nav-link" href="#about">
                  <span className="text-lg">👤</span>
                  <span className="font-medium">Profile</span>
                  <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 outlook-badge">1</span>
                </a>
                <a className="outlook-nav-link" href="#skills">
                  <span className="text-lg">🧰</span>
                  <span className="font-medium">Skills</span>
                  <span className="ml-auto rounded-full bg-purple-100 px-2 py-0.5 text-[11px] font-semibold text-purple-700 outlook-badge">5</span>
                </a>
                <a className="outlook-nav-link" href="#education">
                  <span className="text-lg">🎓</span>
                  <span className="font-medium">Education</span>
                  <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 outlook-badge">2</span>
                </a>
                <a className="outlook-nav-link" href="#projects">
                  <span className="text-lg">📁</span>
                  <span className="font-medium">Projects</span>
                  <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-700 outlook-badge">4</span>
                </a>
                <a className="outlook-nav-link" href="#contact">
                  <span className="text-lg">✍️</span>
                  <span className="font-medium">Compose</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-blue-500 outlook-ping" aria-hidden />
                </a>
              </nav>
            </div>

            <div className="outlook-highlight rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Today</p>
              <p className="mt-2 text-sm text-slate-700">Open to new collaborations & creative builds.</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                Status: Available
              </div>
            </div>
          </aside>

          <main className="space-y-10">
            <Hero />
            <GitHubSection />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>
        </div>

        <footer className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Griffins Muteheri. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
