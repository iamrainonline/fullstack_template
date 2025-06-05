import React from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const PostPreview = ({ post, onPost, onDelete, onClose }) => {
  return (
    <div className="mx-auto p-10 bg-white rounded-lg border">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {post.title}
        </h1>
        <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {post.category}
        </span>
      </div>

      <div className="ql-snow">
        <div
          className="ql-editor prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300"
        >
          ← Back to Editor
        </button>

        <div className="space-x-4">
          <button
            onClick={onDelete}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300"
          >
            Delete
          </button>
          <button
            onClick={onPost}
            className="px-6 py-2 bg-slate-800 text-white  rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
