import { Code, Cpu, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-400 mb-6">
              I&apos;m a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              I love turning ideas into reality through clean, efficient, and scalable code.
            </p>
            <p className="text-gray-400 mb-8">
              With experience in both frontend and backend development, I bring a comprehensive 
              approach to building web applications that are both beautiful and functional.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Code className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-white">Clean Code</span>
              </div>
              <div className="flex items-center">
                <Cpu className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-white">Performance</span>
              </div>
              <div className="flex items-center">
                <Server className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-white">Scalability</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-blue-400 text-4xl font-bold mb-2">2+</h4>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-blue-400 text-4xl font-bold mb-2">15+</h4>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-blue-400 text-4xl font-bold mb-2">5+</h4>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-blue-400 text-4xl font-bold mb-2">10+</h4>
              <p className="text-gray-300">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
