import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../../../API/Users";
import { User, Mail, Shield, Pencil, Trash2 } from "lucide-react";
import Popup from "../../../Utils/Popup";

const UserTable = () => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [popup, setPopup] = useState({
    isOpen: false,
    type: null,
    userId: null,
  });

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(Array.isArray(response) ? response : response?.data || []);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await deleteUser(popup.userId);
      await fetchUsers();
      setError(response.message);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete user");
    } finally {
      setPopup({ isOpen: false, type: null, userId: null });
    }
  };

  const tableHeaders = [
    { icon: User, label: "Username" },
    { icon: Mail, label: "Email" },
    { icon: Shield, label: "Role" },
    { label: "Is Subscribed" },
    { label: "Created At" },
    { label: "Actions", align: "right" },
  ];

  return (
    <div className="bg-white">
      <Popup
        isOpen={popup.isOpen}
        onClose={() => setPopup({ isOpen: false, type: null, userId: null })}
        onConfirm={popup.type === "delete" ? handleDelete : undefined}
        title={popup.type === "delete" ? "Delete User" : "Edit User"}
        message={
          popup.type === "delete"
            ? "Are you sure you want to delete this user? This action cannot be undone."
            : "Are you sure you want to edit this user?"
        }
        type={popup.type}
      />

      <div className="p-6 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-gray-800">User List</h2>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4 m-6">
          <p className="text-sm font-medium text-red-800">{error}</p>
        </div>
      )}

      <div className="p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr className="bg-slate-50">
              {tableHeaders.map(({ icon: Icon, label, align }, index) => (
                <th
                  key={label}
                  className={`px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider ${
                    align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {Icon ? (
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </div>
                  ) : (
                    label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={tableHeaders.length}
                  className="px-6 py-4 text-center text-sm text-slate-500"
                >
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.user_id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 capitalize">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {user.isSubscribed ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right space-x-2">
                    <button
                      onClick={() =>
                        setPopup({
                          isOpen: true,
                          type: "edit",
                          userId: user.user_id,
                        })
                      }
                      className="inline-flex items-center text-blue-600 hover:text-blue-900 font-medium"
                    >
                      <Pencil className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setPopup({
                          isOpen: true,
                          type: "delete",
                          userId: user.user_id,
                        })
                      }
                      className="inline-flex items-center text-red-600 hover:text-red-900 font-medium"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
