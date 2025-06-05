import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Edit,
  Camera,
  Link as LinkIcon,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Profile = () => {
  const profileData = {
    name: "John Doe",
    role: "Admin",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    joinDate: "January 2023",
    recentActivities: [
      { action: "Updated system settings", time: "2 hours ago" },
      { action: "Published new blog post", time: "1 day ago" },
      { action: "Modified user permissions", time: "2 days ago" },
    ],
    stats: [
      { label: "Posts Created", value: "124" },
      { label: "Users Managed", value: "1,453" },
      { label: "Comments", value: "723" },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-600 mt-2">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <User className="w-12 h-12 text-slate-600" />
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {profileData.name}
            </h2>
            <p className="text-gray-500">{profileData.role}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-3" />
              {profileData.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-3" />
              {profileData.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-3" />
              {profileData.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-3" />
              Joined {profileData.joinDate}
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {profileData.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-center"
              >
                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Edit Profile Form */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Profile Information
              </h2>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={profileData.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={profileData.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={profileData.phone}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={profileData.location}
                />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {profileData.recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
