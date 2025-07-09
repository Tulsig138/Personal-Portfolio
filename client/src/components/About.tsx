import React from 'react';
import { User, Heart, Coffee, Target, Award, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
     { icon: Award, number: '5+', label: 'Certificates Earned' },
  { icon: Target, number: '6+', label: 'Personal Projects' },
  { icon: Coffee, number: '500+', label: 'Hours of Learning' },
  { icon: Heart, number: '100%', label: 'Passion for Tech' },
  ];

  const interests = [
    'Web Development',
    'DSA',
    'C++',
    'Cloud Computing',
    'AWS',
    'Open Source',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Story</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I’m a Computer Science student at Vignan's Foundation for Science, Technology & Research, passionate about building impactful web applications using the MERN stack.. My journey began with a curiosity 
                for how things work, which led me to discover the exciting world of web development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, 
                you'll find me exploring new technologies, or enjoying a good cup of coffee.
              </p>
            </div>

            {/* Interests */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Innovation</h4>
                    <p className="text-gray-400 text-sm">Always exploring new technologies and methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Quality</h4>
                    <p className="text-gray-400 text-sm">Committed to delivering high-quality, maintainable code</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Collaboration</h4>
                    <p className="text-gray-400 text-sm">Believing in the power of teamwork and communication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;