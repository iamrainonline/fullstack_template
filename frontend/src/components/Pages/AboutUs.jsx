import React from "react";
import {
  Globe2,
  Users,
  Heart,
  Award,
  BookOpenCheck,
  Languages,
  Palette,
  Baby,
  CheckCircle,
  Quote,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white py-24 text-gray-900">
      {/* Hero Section - Preschool Focused */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Award className="w-4 h-4 mr-2" />
            Internationally Accredited Preschool
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Little Global Citizens Preschool
            </span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We are a nurturing international preschool where children ages 2-5
            discover the joy of learning through play, exploration, and
            multicultural experiences. Our caring environment helps young
            learners develop confidence, curiosity, and foundational skills for
            lifelong learning.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center text-gray-600">
              <Baby className="w-5 h-5 text-blue-600 mr-2" />
              Ages 2-5 Years
            </div>
            <div className="flex items-center text-gray-600">
              <Globe2 className="w-5 h-5 text-blue-600 mr-2" />
              International Curriculum
            </div>
            <div className="flex items-center text-gray-600">
              <Languages className="w-5 h-5 text-blue-600 mr-2" />
              Bilingual Education
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-3xl transform rotate-6"></div>
          <img
            src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg"
            alt="Happy preschoolers playing in multicultural classroom"
            className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] transform -rotate-2 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-sm text-gray-600 font-medium">
              Years Experience
            </div>
          </div>
        </div>
      </div>

      {/* Our Identity Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A community of passionate educators dedicated to early childhood
              development through play-based, internationally-minded learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Heritage</h3>
              <p className="text-gray-600">
                Founded in 2012, we've grown from a small bilingual playgroup to
                an internationally recognized preschool with a diverse community
                representing over 30 nationalities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Philosophy</h3>
              <p className="text-gray-600">
                We believe early childhood should be filled with wonder,
                discovery, and joyful learning. Our approach balances structured
                activities with child-led exploration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Community</h3>
              <p className="text-gray-600">
                A warm, inclusive environment where children, families, and
                educators from all backgrounds come together to learn and grow.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Global Mindedness</h4>
                <p className="text-sm text-gray-600">
                  Nurturing curiosity about the world and appreciation for
                  diverse cultures
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Nurturing Care</h4>
                <p className="text-sm text-gray-600">
                  Creating a safe, loving environment where children thrive
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpenCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Playful Learning</h4>
                <p className="text-sm text-gray-600">
                  Engaging children through joyful, developmentally appropriate
                  activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Educational Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A balanced methodology that combines the best international early
              childhood practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-3xl flex items-center justify-center mr-6">
                  <BookOpenCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Our Curriculum
                </h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our play-based curriculum incorporates elements from
                internationally recognized approaches including Reggio Emilia,
                Montessori, and the International Baccalaureate Primary Years
                Programme (PYP) framework adapted for early years.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Language Development:</strong> Bilingual immersion
                    (English + choice of Spanish/French/Mandarin)
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Creative Expression:</strong> Daily art, music, and
                    movement activities
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Early STEM:</strong> Hands-on exploration of
                    science, technology, engineering, and math concepts
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mr-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Our Educators
                </h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our teaching team consists of passionate early childhood
                specialists with international experience and multilingual
                capabilities. We maintain a low teacher-to-child ratio to ensure
                individualized attention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Qualifications:</strong> All lead teachers hold
                    advanced degrees in Early Childhood Education
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Ratio:</strong> 1:5 for toddlers (2-3 years), 1:8
                    for preschoolers (4-5 years)
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Professional Development:</strong> Ongoing training
                    in the latest early childhood research and methodologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Environment Section */}
      <div className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Learning Environment
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Purposefully designed spaces that inspire wonder, creativity, and
              discovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Creative Studios</h3>
              <p className="text-gray-600 mb-4">
                Bright, open spaces for art, music, and imaginative play with
                natural materials and quality instruments.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Art studio with child-safe materials
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sensory Play Areas</h3>
              <p className="text-gray-600 mb-4">
                Specially designed zones for tactile exploration, water play,
                and sensory development activities.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Sand/water tables & tactile walls
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Outdoor Discovery</h3>
              <p className="text-gray-600 mb-4">
                Nature-inspired playground with gardens, climbing structures,
                and exploration stations.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Certified natural playground
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">What Parents Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "The bilingual program has been incredible for our daughter. She
                switches between English and Spanish effortlessly, and the
                teachers make learning so joyful."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div className="text-left">
                  <div className="font-semibold">Mariana Torres</div>
                  <div className="text-sm text-gray-600">
                    Parent of Sofia, Age 3
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "We love the international focus - our son comes home talking
                about festivals from different cultures and has developed such
                curiosity about the world."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  J
                </div>
                <div className="text-left">
                  <div className="font-semibold">James Wilson</div>
                  <div className="text-sm text-gray-600">
                    Parent of Noah, Age 4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
