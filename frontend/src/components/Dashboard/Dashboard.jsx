import React, { useState } from "react";
import {
  Users,
  Newspaper,
  Layout,
  Settings,
  UserPen,
  LogOut,
} from "lucide-react";
import Posts from "./Items/Posts/Posts";
import UsersComponent from "./Items/Users/UsersComponent";
import Sidebarsettings from "./Items/Sidebarsettings";
import DashboardItems from "./Items/DashboardItems";
import Profile from "./Items/Profile/Profile";
// home charts
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const sidebarItems = [
    {
      icon: <Layout className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Dashboard",
      section: "Dashboard",
    },
    {
      icon: <UserPen className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Profile",
      section: "Profile",
    },
    {
      icon: <Users className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Users",
      section: "users-component",
    },
    {
      icon: <Newspaper className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Posts",
      section: "view-posts",
    },
    {
      icon: <Settings className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Settings",
      section: "settings",
    },
    {
      icon: <LogOut className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Logout",
      section: "Logout",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardItems />;
      case "Profile":
        return <Profile />;
      case "users-component":
        return <UsersComponent />;
      case "view-posts":
        return <Posts />;
      case "settings":
        return <Sidebarsettings />;
      default:
        return <DashboardItems />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 md:w-64 bg-slate-900 text-white p-6">
        <h1 className="hidden md:block text-2xl font-bold mb-10 ml-3">
          Admin Panel
        </h1>
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className={`w-full flex items-center justify-center md:justify-start md:space-x-3 p-3 rounded-lg mb-2 transition duration-300 ${
                activeSection === item.section
                  ? "bg-slate-700 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto bg-gray-100">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
