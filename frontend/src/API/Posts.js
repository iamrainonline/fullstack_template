import axios from "axios";

export const createPost = async (newPost) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/posts/createPost",
      newPost
    );
    console.log("post created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating new post:", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/posts/getPosts");
    return response.data;
  } catch (error) {
    console.error("Error getting the posts:", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/posts/deletePost/${postId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const editPost = (id, formData) => {
  console.log(formData, "din api");
  const response = axios.put(`http://localhost:3000/posts/editPost/${id}`, {
    title: formData.title,
    content: formData.content,
    category_id: formData.category_id,
    user: 83,
    timeread: formData.timeread,
  });
  return response.data;
};
