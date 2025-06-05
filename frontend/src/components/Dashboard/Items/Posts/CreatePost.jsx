import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../../../../API/Posts";
import { getCategory } from "../../../../API/Category";
import PostPreview from "./PostPreview";

const INITIAL_STATE = {
  title: "",
  content: "",
  category_id: "",
  timeread: "",
  user: 83, // Your default user ID
};

const QUILL_MODULES = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const QUILL_FORMATS = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "script",
  "indent",
  "color",
  "background",
  "font",
  "align",
  "link",
  "image",
];

const TIMEREAD = ["5 min", "10 min", "15 min", "30 min", "1 hour"];

const CreatePost = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const selectedCategory = categories.find(
      (cat) => cat.id === parseInt(categoryId)
    );

    setFormData((prev) => ({
      ...prev,
      category_id: categoryId,
    }));

    setSelectedCategoryName(selectedCategory ? selectedCategory.category : "");
    setError("");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategory();
        const data = Array.isArray(response) ? response : response?.data;
        setCategories(data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Title is required");
      return false;
    }
    if (!formData.category_id) {
      setError("Please select a category");
      return false;
    }
    if (!formData.content.trim()) {
      setError("Content is required");
      return false;
    }
    if (!formData.timeread) {
      setError("Please select reading time");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      await createPost(formData);
      // Optionally redirect or show success message
      setFormData(INITIAL_STATE);
      setSelectedCategoryName("");
      setIsPreview(false);
    } catch (err) {
      setError(err.message || "Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = () => {
    setFormData(INITIAL_STATE);
    setSelectedCategoryName("");
    setIsPreview(false);
  };

  if (isPreview) {
    return (
      <PostPreview
        post={{
          ...formData,
          category: selectedCategoryName, // Use category name for display
        }}
        onPost={handleSubmit}
        onDelete={handleDelete}
        onClose={() => setIsPreview(false)}
      />
    );
  }

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

      {error && (
        <div className="mb-4 p-2 text-red-500 bg-red-50 rounded" role="alert">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Post Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post Content
        </label>
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={handleChange("content")}
          modules={QUILL_MODULES}
          formats={QUILL_FORMATS}
          placeholder="Write your post here..."
          className="h-64"
        />
      </div>

      <div className="flex justify-between items-center mt-20">
        <div className="space-x-4">
          <select
            value={formData.category_id}
            onChange={handleCategoryChange}
            className={`mr-5 px-3 py-2 border ${
              error && error.includes("category")
                ? "border-red-300"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Select Post Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>

          <select
            name="timeread"
            value={formData.timeread}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Time Read</option>
            {TIMEREAD.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="space-x-4">
          <button
            onClick={() => validateForm() && setIsPreview(true)}
            disabled={isSubmitting}
            className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Preview Post
          </button>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
