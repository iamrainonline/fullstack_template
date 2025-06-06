import {
  ChevronRight,
  Globe,
  BookOpen,
  GraduationCap,
  Users,
  Star,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero section with faded image */}
      <div className="relative min-h-screen flex items-center">
        {/* Background image with left-to-right fade */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="A.D.C International Hortensia Students"
            className="w-full h-full object-cover"
          />

          {/* Gradient fade from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

          {/* Additional subtle overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-purple-50/40 to-transparent"></div>
        </div>

        {/* Content on the left side where image is faded */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium tracking-wide">
                International Education Since 1985
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>

            {/* Main title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-none mb-6">
              A.D.C
              <span className="block text-3xl md:text-4xl lg:text-5xl font-extralight text-purple-600 mt-2 tracking-wider">
                International Hortensia
              </span>
            </h1>

            {/* Mission statement */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 font-light max-w-xl">
              Where young minds flourish through innovative education, cultural
              diversity, and boundless possibilities in our interconnected
              world.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-12 mb-12">
              <div>
                <div className="text-3xl font-light text-blue-600 mb-1">
                  2,400+
                </div>
                <div className="text-gray-600 text-sm tracking-wide">
                  Students
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-purple-600 mb-1">
                  65+
                </div>
                <div className="text-gray-600 text-sm tracking-wide">
                  Countries
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-indigo-600 mb-1">
                  98%
                </div>
                <div className="text-gray-600 text-sm tracking-wide">
                  Success Rate
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-6">
              <button className="group flex items-center">
                <span className="text-2xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  Explore Our Programs
                </span>
                <ChevronRight className="w-6 h-6 ml-3 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="h-px w-0 group-hover:w-full bg-blue-400 transition-all duration-500 ml-2"></div>
              </button>

              <button className="group flex items-center">
                <span className="text-xl font-light text-gray-700 hover:text-purple-600 transition-colors duration-300">
                  Schedule a Campus Visit
                </span>
                <div className="h-px w-0 group-hover:w-full bg-purple-400 transition-all duration-500 ml-3"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features section below hero */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Why Choose A.D.C International?
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <Globe className="w-full h-full text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Global Curriculum
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                International Baccalaureate programs from Primary Years to
                Diploma Programme, fostering critical thinking and global
                citizenship in every student.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <Users className="w-full h-full text-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Diverse Community
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Students from 65 countries creating a rich tapestry of cultures,
                languages, and perspectives that enrich every learning
                experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <GraduationCap className="w-full h-full text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Future Ready
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Innovative teaching methods and personalized learning pathways
                that prepare students for the challenges and opportunities of
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
