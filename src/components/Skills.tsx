import React from 'react';
import { Code, Database, Layers, Zap, Globe, Smartphone, Server, Cloud } from 'lucide-react';

const Skills = () => {
  const roadmapSteps = [
    {
      category: 'Frontend',
      icon: Globe,
      skills: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      level: 95,
    },
    {
      category: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      color: 'from-green-500 to-emerald-500',
      level: 90,
    },
   {
  category: 'Computer Science',
  icon: Code, // or replace with Brain or Book icon from lucide-react
  skills: ['DSA', 'C++', 'Java Fundamentals', 'Problem Solving', 'OOPs Concepts'],
  color: 'from-green-500 to-blue-500',
  level: 80, // adjust based on your comfort level
},

    {
  category: 'AWS',
  icon: Cloud, // or use Server, CloudCog, or CloudLightning from lucide-react
  skills: ['EC2', 'S3', 'Lambda', 'CloudWatch', 'IAM'],
  color: 'from-yellow-500 to-orange-500',
  level: 75, // adjust based on your comfort level
},

    {
      category: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MYSQL'],
      color: 'from-yellow-500 to-amber-500',
      level: 88,
    },
   {
  category: 'Tools',
  icon: Code, // you can also use 'Wrench', 'Tool', or 'Settings' from lucide-react
  skills: ['Git', 'VS Code', 'Postman', 'MongoDB Compass', 'Netlify', 'Vercel', 'Figma'],
  color: 'from-indigo-500 to-purple-500',
  level: 92,
}

  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through different technologies and the expertise I've gained along the way
          </p>
        </div>

        <div className="relative">
          {/* Roadmap Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 group hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 bg-gradient-to-r ${step.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.category}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${step.color} transition-all duration-1000`}
                              style={{ width: `${step.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400 min-w-max">{step.level}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${step.color} bg-opacity-20 border border-current rounded-full text-sm text-white`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roadmap Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full border-4 border-gray-900 shadow-lg`}></div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'C', 'Java', 'Postman',
              'Bootstrap', 'Material-UI'
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-white font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;