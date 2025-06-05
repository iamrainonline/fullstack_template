import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-6 sm:px-12 wrapper pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Logo and Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">MyLogo</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="text-gray-400">
              <li className="mb-3">
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  About
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-4">
              Email:{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-500 hover:text-blue-600"
              >
                support@example.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:text-blue-600"
              >
                +123 456 7890
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; 2024 MyWebsite. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
