import React, { useEffect, useState, useContext } from "react";
import { getPosts, deletePost } from "../../../../API/Posts";
import {
  Pencil,
  Trash2,
  ArrowRight,
  Calendar,
  User,
  Eye,
  Clock,
  Plus,
  Search,
  ChevronDown,
  LayoutGrid,
  List,
} from "lucide-react";
import Popup from "../../../Utils/Popup";
import { Link, useNavigate } from "react-router-dom";
import EditPost from "./EditPost";
import { AuthContext } from "../../../../context/authContext";
import { motion, AnimatePresence } from "framer-motion";

const AllEvents = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [popup, setPopup] = useState({ isOpen: false, postId: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const { isAuthenticated, authLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      const postsData = Array.isArray(response)
        ? response
        : response?.data || [];
      setPosts(postsData);
      setFilteredPosts(postsData);

      // Extract unique categories
      const uniqueCategories = [
        ...new Set(postsData.map((post) => post.category)),
      ];
      setCategories(uniqueCategories);

      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch posts");
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!authLoading && !isAuthenticated && (isEditing || popup.isOpen)) {
      navigate("/login");
    }
  }, [isAuthenticated, authLoading, navigate, isEditing, popup.isOpen]);

  useEffect(() => {
    let results = posts;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(results);
  }, [searchTerm, selectedCategory, posts]);

  const handleDelete = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      await deletePost(popup.postId);
      await fetchPosts();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete post");
    } finally {
      setPopup({ isOpen: false, postId: "" });
    }
  };

  const handleEdit = (postId) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setIsEditing(true);
    setPostId(postId);
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </motion.div>
          <p className="text-gray-600 text-lg">Loading posts...</p>
        </div>
      </div>
    );
  }

  // Editing view
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

  // Error state (show *only if no posts were fetched*)
  if (error && posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8 bg-white rounded-2xl shadow-xl border border-red-100 backdrop-blur-sm bg-opacity-80"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Oops!</h3>
          <p className="text-red-600 text-lg font-medium mb-4">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  // No posts found
  if (!posts.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-white rounded-2xl shadow-xl max-w-md backdrop-blur-sm bg-opacity-80"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No Posts Yet
          </h3>
          <p className="text-gray-600 mb-6">
            Start creating amazing blog posts to share with your audience.
          </p>
          {isAuthenticated && (
            <button
              onClick={() => handleEdit("new")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
            >
              Create Your First Post
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  // Main content
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <span className="text-blue-600 font-medium tracking-wide text-sm uppercase">
              Blog Posts
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Evenimente și{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Postări
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă perspective, povești și idei de la noi
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search posts..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-3 pr-8 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Posts */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-2"
                >
                  <div className="relative h-[170px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"
                      style={{ backgroundColor: post.color || "#6366f1" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        style={{ backgroundColor: post.color || "#6366f1" }}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg backdrop-blur-sm bg-white/20"
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-[19px] font-bold text-white line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-white/90 mt-2">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.username}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div
                      className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          post.content.substring(0, 200) +
                          (post.content.length > 200 ? "..." : ""),
                      }}
                    />
                  </div>

                  <div className="border-t border-gray-100 p-6 bg-gradient-to-r from-gray-50 to-blue-50/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isAuthenticated && (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleEdit(post.id)}
                              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            >
                              <Pencil className="w-4 h-4" />
                              Edit
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() =>
                                setPopup({ isOpen: true, postId: post.id })
                              }
                              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </motion.button>
                          </>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to={`/blogpost/${post.id}`}
                          className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Eye className="w-4 h-4" />
                          Citiți
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"
                        style={{ backgroundColor: post.color || "#6366f1" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:bg-gradient-to-l"></div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg backdrop-blur-sm bg-white/20">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <User className="w-3 h-3" />
                          <span>{post.username}</span>
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <div
                        className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html:
                            post.content.substring(0, 300) +
                            (post.content.length > 300 ? "..." : ""),
                        }}
                      />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isAuthenticated && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleEdit(post.id)}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-all duration-200"
                              >
                                <Pencil className="w-3 h-3" />
                                Edit
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                  setPopup({ isOpen: true, postId: post.id })
                                }
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-all duration-200"
                              >
                                <Trash2 className="w-3 h-3" />
                                Delete
                              </motion.button>
                            </>
                          )}
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={`/blogpost/${post.id}`}
                            className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded text-xs font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <Eye className="w-3 h-3" />
                            Citiți
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>

      <Popup
        isOpen={popup.isOpen}
        onClose={() => setPopup({ isOpen: false, postId: "" })}
        onConfirm={handleDelete}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        type="delete"
      />
    </div>
  );
};

export default AllEvents;
