"use client";

import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Server, GitBranch } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const skills = [
  {
    category: 'Core Languages',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    category: 'Web Technologies',
    icon: <Server className="w-8 h-8 text-green-500" />,
    items: ['React', 'Node.js', 'Express.js', 'Django', 'HTML5', 'CSS', 'Bootstrap', 'RESTful APIs']
  },
  {
    category: 'Databases',
    icon: <Database className="w-8 h-8 text-purple-500" />,
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore']
  },
  {
    category: 'Cloud & Tools',
    icon: <GitBranch className="w-8 h-8 text-yellow-500" />,
    items: ['Firebase', 'Cloudinary', 'Git', 'GitHub', 'Vercel', 'Railway']
  },
  {
    category: 'Web3 & AI/ML',
    icon: <Cpu className="w-8 h-8 text-red-500" />,
    items: ['Ethereum', 'Solidity', 'TensorFlow', 'PyTorch', 'Keras', 'Pandas']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-6">
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
              My Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with on a daily basis.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -6, borderColor: "rgb(59, 130, 246)" }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-slate-600 text-sm group-hover:text-slate-700 transition-colors"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
