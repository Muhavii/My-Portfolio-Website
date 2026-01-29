"use client";

import { motion } from 'framer-motion';
import { Github, GitFork, Star, Users } from 'lucide-react';
import Image from 'next/image';

export default function GitHubSection() {
  return (
    <section id="github" className="py-6">
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
              GitHub Activity
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              My contributions and activity on GitHub.
            </p>
          </div>

          <div className="space-y-8">
            {/* GitHub Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white mb-3">
                  <Github className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-blue-700">15+</p>
                <p className="text-sm text-slate-600 mt-1">Repositories</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600 text-white mb-3">
                  <GitFork className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-purple-700">200+</p>
                <p className="text-sm text-slate-600 mt-1">Commits</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-green-50 to-green-100/50 p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-600 text-white mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-green-700">Active</p>
                <p className="text-sm text-slate-600 mt-1">This Year</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-600 text-white mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-orange-700">5+</p>
                <p className="text-sm text-slate-600 mt-1">Collaborations</p>
              </div>
            </div>

            {/* GitHub Contributions Chart */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Contribution Graph</h3>
                <a 
                  href="https://github.com/Muhavii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Profile →
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-white p-4">
                <Image
                  src="https://ghchart.rshah.org/0a6ed1/Muhavii"
                  alt="GitHub Contributions"
                  width={800}
                  height={150}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-sm text-slate-600">
                Check out my repositories and contributions on{' '}
                <a 
                  href="https://github.com/Muhavii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-blue-200 hover:decoration-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
