import React, { useState } from 'react';
import { ExternalLink, Github, Star, GitBranch, Eye, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: '#',
      demo: '#',
      stars: 45,
      forks: 12,
      date: '2024-01'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Redux', 'Tailwind'],
      github: '#',
      demo: '#',
      stars: 32,
      forks: 8,
      date: '2023-12'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
      github: '#',
      demo: '#',
      stars: 28,
      forks: 6,
      date: '2023-11'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media application with user management, post creation, real-time messaging, and file uploads.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      github: '#',
      demo: '#',
      stars: 38,
      forks: 15,
      date: '2023-10'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and dynamic content management.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
      github: '#',
      demo: '#',
      stars: 25,
      forks: 4,
      date: '2023-09'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and emoji support.',
      image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      github: '#',
      demo: '#',
      stars: 41,
      forks: 9,
      date: '2023-08'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Stats */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                    <GitBranch className="w-3 h-3" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 rounded-full text-purple-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;