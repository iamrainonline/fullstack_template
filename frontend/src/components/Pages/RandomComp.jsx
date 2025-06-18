import React, { useState } from "react";
import {
  Baby,
  BookOpenCheck,
  Globe2,
  Smile,
  Star,
  GraduationCap,
  Users,
  Award,
  Heart,
  Shield,
  Lightbulb,
  Music,
  Palette,
  Play,
  Languages,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Quote,
} from "lucide-react";

const RandomComp = () => {
  const [activeTab, setActiveTab] = useState("curriculum");

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "300+", label: "Happy Students", icon: Users },
    { number: "25+", label: "Expert Teachers", icon: GraduationCap },
    { number: "12", label: "Languages Offered", icon: Languages },
  ];

  const curriculumFeatures = [
    {
      title: "International Baccalaureate Primary Years",
      description:
        "Comprehensive IB PYP curriculum fostering inquiry-based learning and international-mindedness",
      icon: Globe2,
    },
    {
      title: "Multilingual Education",
      description:
        "Native-level instruction in English, Spanish, French, and Mandarin with cultural immersion",
      icon: Languages,
    },
    {
      title: "STEAM Integration",
      description:
        "Science, Technology, Engineering, Arts, and Mathematics woven into daily learning experiences",
      icon: Lightbulb,
    },
    {
      title: "Creative Arts Program",
      description:
        "Music, visual arts, drama, and dance to nurture creativity and self-expression",
      icon: Palette,
    },
  ];

  const ageGroups = [
    {
      age: "2-3 Years",
      title: "Early Explorers",
      description:
        "Gentle introduction to structured learning through play, sensory exploration, and social interaction in a nurturing multilingual environment.",
      features: [
        "Sensory learning stations",
        "Language immersion",
        "Social skills development",
        "Creative expression",
      ],
      icon: Baby,
      color: "from-pink-400 to-rose-500",
    },
    {
      age: "4-5 Years",
      title: "Young Discoverers",
      description:
        "Pre-academic skills development through hands-on activities, collaborative projects, and early literacy in multiple languages.",
      features: [
        "Early literacy & numeracy",
        "Scientific inquiry",
        "Cultural awareness",
        "Physical development",
      ],
      icon: Star,
      color: "from-purple-400 to-indigo-500",
    },
    {
      age: "6-8 Years",
      title: "Global Learners",
      description:
        "Comprehensive primary education with emphasis on critical thinking, global citizenship, and academic excellence across all subjects.",
      features: [
        "IB PYP curriculum",
        "Research skills",
        "Digital literacy",
        "Community service",
      ],
      icon: GraduationCap,
      color: "from-blue-400 to-cyan-500",
    },
    {
      age: "9-10 Years",
      title: "Future Leaders",
      description:
        "Advanced primary education preparing students for secondary school with leadership opportunities and specialized programs.",
      features: [
        "Advanced academics",
        "Leadership training",
        "Independent projects",
        "Peer mentoring",
      ],
      icon: Award,
      color: "from-green-400 to-emerald-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Parent of Emma, Age 7",
      content:
        "The multicultural environment has given Emma such a beautiful perspective on the world. She's fluent in three languages and loves learning about different cultures.",
      rating: 5,
    },
    {
      name: "Marco Rodriguez",
      role: "Parent of twins, Age 5",
      content:
        "The teachers here truly understand child development. My twins have thrived academically and socially. The IB curriculum is exceptional.",
      rating: 5,
    },
    {
      name: "Dr. Amina Hassan",
      role: "Parent of Omar, Age 9",
      content:
        "Omar has developed incredible critical thinking skills and confidence. The school's approach to nurturing the whole child is remarkable.",
      rating: 5,
    },
  ];

  const facilities = [
    "State-of-the-art STEAM laboratories",
    "Multilingual library with 10,000+ books",
    "Creative arts studios and music rooms",
    "Indoor and outdoor play areas",
    "Technology-integrated classrooms",
    "Organic school garden",
    "Multi-purpose sports facilities",
    "Quiet zones for reflection and mindfulness",
  ];

  return (
    <div className="bg-white text-gray-900 mt-40">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                IB World School Candidate
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Where Young Minds
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Flourish Globally
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Nurturing internationally-minded citizens from ages 2-10 through
                innovative pedagogy, multicultural experiences, and a commitment
                to academic excellence in a caring community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/8923267/pexels-photo-8923267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="International school students collaborating"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Our Mission & Core Values
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            We inspire young learners to become confident, caring, and
            internationally-minded individuals who contribute positively to
            their communities and the world.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Citizenship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fostering understanding and appreciation of diverse cultures,
                  languages, and perspectives to prepare students for our
                  interconnected world.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Caring Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building empathy, kindness, and social responsibility through
                  collaborative learning and community service initiatives.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Innovation & Inquiry
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Encouraging curiosity, critical thinking, and creative
                  problem-solving through hands-on exploration and
                  research-based learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Learning Journey by Age
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored educational experiences that grow with your child, from
              early exploration to advanced primary education.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {ageGroups.map((group, index) => (
              <div key={index} className="group">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${group.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform`}
                    >
                      <group.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {group.age}
                      </div>
                      <h3 className="text-2xl font-bold">{group.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {group.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {group.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              World-Class Curriculum
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our internationally recognized programs combine academic rigor
              with creative exploration and cultural understanding.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["curriculum", "languages", "arts", "technology"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {activeTab === "curriculum" && (
              <div className="grid md:grid-cols-2 gap-8">
                {curriculumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "languages" && (
              <div className="text-center">
                <Languages className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Multilingual Excellence
                </h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Students develop fluency in multiple languages through
                  immersive programs taught by native speakers and certified
                  international educators.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {["English", "Spanish", "French", "Mandarin"].map((lang) => (
                    <div key={lang} className="bg-blue-50 p-4 rounded-xl">
                      <div className="font-semibold text-blue-900">{lang}</div>
                      <div className="text-sm text-blue-700">
                        Native instruction
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "arts" && (
              <div className="text-center">
                <Palette className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Creative Arts Program
                </h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Nurturing creativity and self-expression through comprehensive
                  arts education including visual arts, music, drama, and dance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <Music className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Music</h4>
                    <p className="text-sm text-gray-600">
                      Orchestra, choir, and individual instrument lessons
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Visual Arts</h4>
                    <p className="text-sm text-gray-600">
                      Painting, sculpture, and digital art creation
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <Play className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Drama & Dance</h4>
                    <p className="text-sm text-gray-600">
                      Theater productions and cultural dance forms
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "technology" && (
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Technology Integration
                </h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Preparing students for the digital future through coding,
                  robotics, and innovative learning technologies integrated
                  across all subjects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <h4 className="font-semibold mb-4">Digital Literacy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Coding fundamentals
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Robotics programming
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Digital citizenship
                      </li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-4">Innovation Labs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        3D printing & design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Virtual reality learning
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        AI-assisted learning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Purpose-built learning environments designed to inspire
              creativity, collaboration, and academic excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 mb-3" />
                <p className="font-medium text-gray-900">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-700">
              Hear from our school community about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enrollment */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Ready to Begin Your Child's Global Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our diverse community of learners and give your child the
                foundation they need to thrive in our interconnected world.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Main Campus</div>
                    <div className="text-gray-300">
                      123 International Avenue, Education District
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      admissions@internationalschool.edu
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">School Hours</div>
                    <div className="text-gray-300">
                      Monday - Friday: 8:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Visit</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Parent Name"
                    className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Child's Age"
                    className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Questions or Special Requests"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomComp;
