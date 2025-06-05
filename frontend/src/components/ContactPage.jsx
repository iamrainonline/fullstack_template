import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, User, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Contact Information Section */}
          <div className="bg-slate-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-6">
                Contact Us
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                We're here to help and answer any question you might have.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-white w-6 h-6" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-400">1234 Innovation Plaza</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-white w-6 h-6" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-white w-6 h-6" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-400">support@innovate.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="p-12 bg-white space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Send us a Message
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 flex items-center">
                  <User className="mr-2 text-slate-600" size={18} />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 flex items-center">
                  <Mail className="mr-2 text-slate-600" size={18} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 flex items-center">
                  <MessageCircle className="mr-2 text-slate-600" size={18} />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
