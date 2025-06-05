import React, { useState, useEffect } from "react";
import { Shield, Lock, Mail, User } from "lucide-react";
import { createUser } from "../../../../API/Users";

const UserManagement = () => {
  const [err, setErr] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    userRole: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const apiCall = async () => {
      try {
        await createUser(formData);
        setFormData({ username: "", email: "", password: "", userRole: "" });
        setErr("User created successfully");
      } catch (e) {
        setErr(e.response?.data || "Failed to create user");
        console.error("Error creating user:", e);
      }
    };
    apiCall();
  };

  return (
    <div className="">
      <div className="bg-white">
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Create New User
          </h2>
        </div>

        {/* Create User Form */}
        <div className="p-6 border-b border-slate-200">
          <form onSubmit={handleCreateUser} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Username</span>
                  </div>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </div>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Password</span>
                  </div>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                  placeholder="Enter password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Role</span>
                  </div>
                </label>
                <select
                  name="userRole"
                  value={formData.userRole}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition duration-200"
            >
              Create User
            </button>

            {err && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm font-medium text-red-800">{err}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
