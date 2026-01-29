'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';

const CV_PATH = '/assets/Griffins Muteheri CV.pdf';

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateZ: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 8,
      mass: 1.2,
    },
  },
};

export default function Hero() {
  const mainText = "Hi, I'm Griffins Muteheri";
  const nameStart = mainText.indexOf('Griffins');

  return (
    <motion.section
      id="home"
      className="outlook-card outlook-focus relative overflow-hidden p-8 md:p-12"
      initial={{ opacity: 0, y: 24, boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}
      animate={{ opacity: 1, y: 0, boxShadow: "0 22px 55px rgba(10, 110, 209, 0.15)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 outlook-sheen opacity-30" />
      <div className="absolute -top-20 -right-10 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
        >
          {mainText.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.04,
              }}
              className={index >= nameStart && index < nameStart + 8 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl sm:text-2xl font-semibold text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Full Stack Developer · Creative Technologist
        </motion.h2>

        <motion.p
          className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build elegant, high-performance web applications that feel as polished as a premium inbox; organized,
          delightful, and effortless to use.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors"
          >
            Compose a Message
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 font-semibold hover:border-blue-200 hover:text-blue-700 transition-colors"
          >
            View CV
            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
