"use client";

import { motion } from 'framer-motion';
import { Code, Cpu, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="outlook-card outlook-focus p-8 md:p-12"
          initial={{ opacity: 0, y: 24, boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}
          whileInView={{ opacity: 1, y: 0, boxShadow: "0 22px 55px rgba(10, 110, 209, 0.15)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Who I Am
              </h3>
              <p className="text-slate-600 mb-6">
                I&apos;m a passionate Full Stack Developer with a strong foundation in modern web technologies.
                I love turning ideas into reality through clean, efficient, and scalable code.
              </p>
              <p className="text-slate-600 mb-8">
                With experience in both frontend and backend development, I bring a comprehensive
                approach to building web applications that are both beautiful and functional.
              </p>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[
                  { icon: Code, label: 'Clean Code' },
                  { icon: Cpu, label: 'Performance' },
                  { icon: Server, label: 'Scalability' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <item.icon className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700" />
                    </motion.div>
                    <span className="text-slate-800 group-hover:text-blue-600 transition-colors">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Completed' },
                { value: '5+', label: 'Happy Clients' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="outlook-card p-4 text-center border border-slate-200 rounded-lg hover:border-blue-300 cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(10, 110, 209, 0.1)" }}
                >
                  <motion.p 
                    className="text-3xl font-bold text-blue-600 group-hover:text-blue-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-slate-600 mt-2 group-hover:text-slate-700 transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
