import React, { useState, useEffect } from "react";
import {
  createCategory,
  getCategory,
  deleteCategory,
} from "../../../../API/Category";
import { Plus, Trash2 } from "lucide-react";
import Popup from "../../../Utils/Popup";

const CreateCategory = () => {
  const [categoryData, setCategoryData] = useState({
    category: "",
    color: "#000000",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popup, setPopup] = useState({
    isOpen: false,
    postId: "",
  });
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategory();
      setCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await createCategory(categoryData);
      setCategoryData({ category: "", color: "#000000" });
      fetchCategories();
    } catch (error) {
      console.error("Error creating category:", error);
      setError("Failed to create category");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
      setPopup({ isOpen: false, catId: "" });
    } catch (error) {
      console.error("Error deleting category:", error);
      setError("Failed to delete category");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Popup
        isOpen={popup.isOpen}
        onClose={() => setPopup({ isOpen: false, catId: "" })}
        onConfirm={() => handleDelete(popup.catId)}
        title="Delete Post"
        message="Are you sure you want to delete this category? This action cannot be undone."
        type="delete"
      />

      {/* Left side - Create Category Form */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
          Create New Category
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Category Name
              </label>
              <input
                type="text"
                id="category"
                value={categoryData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter category name"
              />
            </div>
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Color
              </label>
              <input
                type="color"
                id="color"
                value={categoryData.color}
                onChange={handleChange}
                className="h-9 w-16 p-1 border border-slate-200 rounded-md cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Category
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Categories List */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
          Existing Categories
        </h3>
        {loading ? (
          <p className="text-center text-slate-500 text-sm">
            Loading categories...
          </p>
        ) : error ? (
          <p className="text-center text-red-500 text-sm">{error}</p>
        ) : (
          <div className="space-y-2">
            {categories.length > 0 ? (
              categories?.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-2 border border-slate-100 rounded-md hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full border border-slate-200"
                      style={{ backgroundColor: category?.color }}
                    ></div>
                    <span className="text-sm font-medium text-slate-700">
                      {category?.category}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setPopup({ isOpen: true, catId: category.id })
                    }
                    className="inline-flex items-center px-2 py-1 text-sm text-red-600 hover:text-red-900 hover:bg-red-50 rounded-md transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-slate-500 text-sm py-4">
                No categories yet
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCategory;
