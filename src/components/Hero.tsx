import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Zap, Globe } from 'lucide-react';
import profileImg from '../assets/profile.jpg'; // ✅ Your profile image
// import { Link } from 'react-router-dom'; // Uncomment if using Router

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt="Tulsi Gupta"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-bounce"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">CSE Student at</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Vignan University
              </span>
            </h1>

            <p className="text-xl py-4 sm:text-2xl text-gray-300 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and creative solutions
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>React & Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Full Stack</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span>MERN Stack</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/Tulsi-Resume.pdf"
              download
              className="group flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-2 px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>

            {/* If you're using React Router instead of sections, use this instead: */}
            {/* 
            <Link to="/contact" className="...">
              <Mail size={20} />
              <span>Get in Touch</span>
            </Link> 
            */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: 'https://github.com/tulsig138', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/tulsi-gupta-6b248a274/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:tulsig138@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
