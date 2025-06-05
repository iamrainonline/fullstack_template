import React, { useEffect, useState } from "react";
import { getPosts, deletePost, editPost } from "../../../../API/Posts";
import { Pencil, Trash2, ArrowRight, Edit } from "lucide-react";
import Popup from "../../../Utils/Popup";
import { Link } from "react-router-dom";
import EditPost from "./EditPost";

const AllPosts = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [popup, setPopup] = useState({
    isOpen: false,
    postId: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(Array.isArray(response) ? response : response?.data || []);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch posts");
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async () => {
    try {
      await deletePost(popup.postId);
      await fetchPosts();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete post");
    } finally {
      setPopup({ isOpen: false, postId: "" });
    }
  };

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!posts.length) {
    return <div className="text-center py-8 text-gray-500">No posts found</div>;
  }
  if (isEditing) {
    const selectedPost = posts.find((post) => post.id === postId);
    return (
      <EditPost
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        postId={postId}
        post={selectedPost}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Popup
        isOpen={popup.isOpen}
        onClose={() => setPopup({ isOpen: false, postId: "" })}
        onConfirm={handleDelete}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        type="delete"
      />

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
        >
          <div className="p-5 border-b border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-slate-800 line-clamp-1">
                {post.title}
              </h3>
              <span
                className="px-3 py-1 rounded-full text-xs text-white font-medium"
                style={{ backgroundColor: post.color }}
              >
                {post.category}
              </span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span>Id {post.id}</span>
              <span className="mx-2"> </span>
              <span>Editor: {post.username}</span>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div
              className="text-slate-600 text-sm mb-4"
              dangerouslySetInnerHTML={{
                __html: post.content.substring(0, 300) + " (...)",
              }}
            />
            <div className="text-xs text-slate-500">
              Created: {new Date(post.created_at).toLocaleDateString()}
            </div>
          </div>

          <div className="border-t border-slate-100 p-4 mt-auto flex items-center justify-between">
            <div className="space-x-4">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setPostId(post.id);
                }}
                className="inline-flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                <Pencil className="w-4 h-4 mr-1" />
                Edit
              </button>
              <button
                onClick={() => setPopup({ isOpen: true, postId: post.id })}
                className="inline-flex items-center px-3 py-1.5 text-sm text-red-600 hover:text-red-900 hover:bg-red-50 rounded-md transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </button>
            </div>
            <Link
              to={`/blogpost/${post.id}`}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              {" "}
              Read More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
