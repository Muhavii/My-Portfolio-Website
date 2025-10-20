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
    description: 'Graduated with a B- (Minus). Participated in computer club and mathematics contests.'
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
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            My educational journey from early years to higher education.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {education.map((item) => (
            <div key={item.id} className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white ring-4 ring-gray-900">
                {item.icon}
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-sm text-gray-400">{item.year}</span>
                </div>
                <h4 className="text-lg font-medium text-blue-400">{item.institution}</h4>
                {item.degree && (
                  <p className="text-gray-300 mt-1">
                    {item.degree} {item.field && `in ${item.field}`}
                    {item.grade && (
                      <span className="block text-sm text-blue-400 mt-1">
                        {item.grade}
                      </span>
                    )}
                  </p>
                )}
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}