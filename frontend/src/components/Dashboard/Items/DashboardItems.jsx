import React from "react";
import {
  Users,
  Eye,
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react";

const DashboardItems = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+14%",
      isIncrease: true,
      icon: <Users className="w-5 h-5" />,
      description: "Total registered users",
    },
    {
      title: "Active Sessions",
      value: "452",
      change: "+23%",
      isIncrease: true,
      icon: <Activity className="w-5 h-5" />,
      description: "Current active users",
    },
    {
      title: "Total Posts",
      value: "892",
      change: "+7%",
      isIncrease: true,
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Posts created",
    },
    {
      title: "Page Views",
      value: "45.2K",
      change: "-2%",
      isIncrease: false,
      icon: <Eye className="w-5 h-5" />,
      description: "Views this month",
    },
  ];

  const recentActivity = [
    { user: "John Doe", action: "created a new post", time: "2 minutes ago" },
    {
      user: "Jane Smith",
      action: "updated their profile",
      time: "5 minutes ago",
    },
    {
      user: "Mike Johnson",
      action: "commented on a post",
      time: "10 minutes ago",
    },
    { user: "Sarah Wilson", action: "liked a post", time: "15 minutes ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
              <span
                className={`text-sm font-medium flex items-center ${
                  stat.isIncrease ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
                {stat.isIncrease ? (
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 ml-1" />
                )}
              </span>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Posts */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Popular Posts
          </h2>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">
                    How to get started with React
                  </h3>
                  <p className="text-sm text-gray-500">
                    Views: 1,234 • Comments: 56
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItems;
