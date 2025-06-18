import React, { useState, useContext, useEffect } from "react";
import { Newspaper, Layout, Settings, UserPen, LogOut } from "lucide-react";
import Posts from "./Items/Posts/Posts";
import UsersComponent from "./Items/Users/UsersComponent";
import Sidebarsettings from "./Items/Sidebarsettings";
import DashboardItems from "./Items/DashboardItems";
import Profile from "./Items/Profile/Profile";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard"); // Fixed: capitalize to match switch cases
  const { logout, isAuthenticated, authLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, authLoading, navigate]);

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
      icon: <Newspaper className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Posts",
      section: "view-posts",
    },
    {
      icon: <Settings className="w-6 h-6 md:w-5 md:h-5" />,
      name: "Settings",
      section: "settings",
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      // Still navigate away even if logout fails
      navigate("/");
    }
  };

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

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex bg-gray-100 mt-[125px]">
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
          <button
            onClick={handleLogout}
            className="hover:bg-red-800 bg-red-600 text-white w-full flex items-center justify-center md:justify-start md:space-x-3 p-3 rounded-lg mb-2 transition duration-300"
          >
            <LogOut className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:inline">Logout</span>
          </button>
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
