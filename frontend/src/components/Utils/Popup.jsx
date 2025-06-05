import React from "react";

const Popup = ({ isOpen, onClose, onConfirm, title, message, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200">
          <h3
            className={`text-lg font-semibold ${
              type === "delete" ? "text-red-600" : "text-blue-600"
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          <p className="text-slate-600">{message}</p>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-slate-50 rounded-b-lg flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              type === "delete"
                ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {type === "delete" ? "Delete" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
