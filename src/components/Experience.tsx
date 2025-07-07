import React from 'react';
import { Award, BookOpen, GraduationCap, Medal, FileBadge, Calendar } from 'lucide-react';


const Achievements = () => {
  const milestones = [
    {
      id: 1,
      title: 'Completed HTML & CSS Certification',
      organization: 'KG Coding',
      location: 'Online',
      period: 'May 2024',
      type: 'Certificate',
      description: 'Successfully completed a structured HTML course with real-world mini projects and earned a certificate.',
      achievements: [
        'Built static pages using HTML & CSS',
        'Received certificate from KG Coding',
        'Learned responsive design fundamentals',
      ],
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      icon: BookOpen,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Cambridge PET Certification',
      organization: 'Cambridge University',
      location: 'Online/Center-Based',
      period: 'B2 Level',
      type: 'Language Certification',
      description: 'Earned the Cambridge PET (Preliminary English Test) certification demonstrating B2 level proficiency in English language skills.',
      achievements: [
        'Certified B2 Level in English (PET)',
        'Proficient in reading, writing, listening, and speaking',
        'Awarded by Cambridge Assessment English',
      ],
      technologies: ['English Language', 'Communication', 'PET'],
      icon: FileBadge,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Painting Competition Winner',
      organization: 'College Event',
      location: 'On Campus',
      period: 'Feb 2023',
      type: 'Award',
      description: 'Secured 1st place in a national-level painting competition organized by the college cultural committee.',
      achievements: [
        'Ranked 1st among 100+ participants',
        'Theme: Indian Heritage & Art',
        'Awarded trophy and certificate',
      ],
      technologies: ['Creativity', 'Visual Art', 'Theme Representation'],
      icon: Medal,
      color: 'from-yellow-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Introduction to Packet Tracer',
      organization: 'Cisco Networking Academy',
      location: 'Online',
      period: 'March 2024',
      type: 'Certification',
      description: 'Completed Cisco’s introductory course on networking concepts and learned to simulate networks using Packet Tracer.',
      achievements: [
        'Understood basics of IP addressing & routing',
        'Practiced with real-time simulations',
        'Certificate from Cisco Networking Academy',
      ],
      technologies: ['Networking', 'Cisco Packet Tracer', 'Subnetting'],
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Leadership and Team Effectiveness',
      organization: 'NPTEL',
      location: 'Online',
      period: 'Oct 2024',
      type: 'Certification',
      description: 'Completed an NPTEL course on developing leadership qualities and enhancing teamwork in organizations.',
      achievements: [
        'Learned team building and conflict resolution',
        'Certificate from NPTEL and IIT faculty',
        'Improved communication and leadership abilities',
      ],
      technologies: ['Leadership', 'Teamwork', 'Soft Skills'],
      icon: Award,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications, awards, and milestones from my learning journey as a software engineer
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

          <div className="space-y-12">
            {milestones.map((item) => (
              <div key={item.id} className="relative flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{item.organization}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <div className="flex items-center space-x-1 text-purple-300">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{item.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies / Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-20 border border-current rounded-full text-sm text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great!</h3>
            <p className="text-gray-400 mb-6">
              Looking forward to internships, freelance opportunities, or collaborations.
            </p>
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
