// Posts.jsx
import React, { useState } from "react";
import AllEvents from "./AllEvents";
import CreatePost from "./CreatePost";
import CreateCategory from "./CreateCategory";

const Posts = () => {
  const [activeTab, setActiveTab] = useState("post-list");

  const tabs = [
    { id: "post-list", label: "Post List" },
    { id: "create-post", label: "Create New" },
    { id: "categories-list", label: "Post Categories" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "create-post":
        return <CreatePost />;
      case "post-list":
        return <AllEvents />;
      case "categories-list":
        return <CreateCategory />;
      default:
        return <AllEvents />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          {/* Header Section */}
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Posts</h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage your blog posts, view all posts, and create new content.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-slate-200 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-sm font-medium relative
                  ${
                    activeTab === tab.id
                      ? "text-blue-600 bg-blue-50/50"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                  }
                  ${
                    activeTab === tab.id
                      ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : ""
                  }
                  transition-colors duration-150 ease-in-out
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
