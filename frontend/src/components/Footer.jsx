import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50 relative overflow-hidden border-t border-gray-200">
      {/* Background elements matching home */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Centru de studii{" "}
                <span className="text-blue-600">Hortensia</span>
              </h3>
            </div>
            <p className="text-gray-600">
              Nurturing global citizens through innovative education since 1985.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-sky-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Programs
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Primary Years
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Middle Years
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Diploma
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Summer School
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                About
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>123 Education Blvd, International District, Singapore</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <a
                  href="mailto:info@adc-hortensia.edu"
                  className="hover:text-purple-600 transition-colors"
                >
                  info@adc-hortensia.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <a
                  href="tel:+6565551234"
                  className="hover:text-indigo-600 transition-colors"
                >
                  +65 6555 1234
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} A.D.C International Hortensia. All
            rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-800 transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-gray-800 transition-colors">
              Terms
            </Link>
            <Link to="#" className="hover:text-gray-800 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
