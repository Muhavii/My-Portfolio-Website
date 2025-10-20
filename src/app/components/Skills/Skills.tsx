import { Code2, Database, Cpu, Server, GitBranch } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
