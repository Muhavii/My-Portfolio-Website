"use client";

import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    title: 'University',
    institution: 'Zetech University',
    degree: 'Bachelor of Science in Computer Science',
    field: 'Computer Science',
    year: '2022 - 2025',
    grade: 'Classification: Second Class Honours, Upper Division',
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
    description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Artificial Intelligence, and Software Engineering.'
  },
  {
    id: 2,
    title: 'High School',
    institution: 'Chavakali High School',
    year: '2018 - 2022',
    icon: <School className="w-6 h-6 text-green-500" />,
    description: 'Graduated on 2022. Participated in computer club and mathematics contests.'
  },
  {
    id: 3,
    title: 'Primary School',
    institution: 'Golden Gates Primary School',
    year: '2010 - 2017',
    icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
    description: 'Scored 410 marks in KCPE. Active participant in music and drama festivals.'
  },
  {
    id: 4,
    title: 'Pre-Primary',
    institution: 'Golden Gates Elementary School, Nakuru',
    year: '2007 - 2010',
    icon: <BookOpen className="w-6 h-6 text-purple-500" />,
    description: 'Early education foundation with focus on basic literacy and numeracy skills.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-6">
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
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              My educational journey from early years to higher education.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {education.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 ring-4 ring-slate-100 border border-slate-200"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>
                <motion.div 
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                  whileHover={{ y: -4, borderColor: "rgb(59, 130, 246)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <motion.span 
                      className="text-sm text-slate-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {item.year}
                    </motion.span>
                  </div>
                  <motion.h4 
                    className="text-lg font-medium text-blue-600"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {item.institution}
                  </motion.h4>
                  {item.degree && (
                    <p className="text-slate-600 mt-1">
                      {item.degree} {item.field && `in ${item.field}`}
                      {item.grade && (
                        <span className="block text-sm text-blue-600 mt-1">
                          {item.grade}
                        </span>
                      )}
                    </p>
                  )}
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}