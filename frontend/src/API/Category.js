import axios from "axios";

export const createCategory = async (newCategory) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/posts/createCategory",
      newCategory
    );
    console.log("category created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating new category:", error);
    throw error;
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get("http://localhost:3000/posts/getCategory");
    return response.data;
  } catch (error) {
    console.error("Error getting the categories:", error);
    throw error;
  }
};

export const deleteCategory = async (catId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/posts/deleteCategory/${catId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
