import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">About Me</h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden">
            <img
              src="https://picsum.photos/200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">John Doe</h4>
            <p className="text-sm text-slate-600">Tech Enthusiast & Writer</p>
          </div>
        </div>

        <p className="text-slate-600 text-sm">
          Passionate about web development, AI, and creating content that helps
          others learn and grow. With over 5 years of experience in the tech
          industry, I share insights about modern web development, best
          practices, and emerging technologies.
        </p>

        <div className="pt-4 border-t border-slate-100">
          <div className="text-sm text-slate-600 mb-2">Connect with me:</div>
          <div className="flex space-x-3">
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              to="#"
              className="p-2 text-slate-600 hover:text-red-600 transition-colors"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="text-sm">
            <span className="font-medium text-slate-700">Location:</span>
            <span className="text-slate-600 ml-2">Bucuresti</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-slate-700">Expertise:</span>
            <span className="text-slate-600 ml-2">
              React, Node.js, Web Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
