import React, { useState } from "react";
import CreateUser from "./CreateUser";
import UsersTable from "./UsersTable";

const UsersContent = () => {
  const [activeTab, setActiveTab] = useState("users");

  const tabs = [
    { id: "users", label: "Users List" },
    { id: "subscribed", label: "Subscribed Users" },
    { id: "create", label: "Create User" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersTable />;
      case "subscribed":
        return <UsersTable subscribed={true} />;
      case "create":
        return <CreateUser />;
      default:
        return <UsersTable />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 ">
      <div className="">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          {/* Header Section */}
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Users</h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage your users, view subscriptions, and create new accounts.
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

export default UsersContent;
