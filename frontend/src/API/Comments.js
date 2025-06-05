import axios from "axios";

export const addComment = async (newComment) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/posts/createComment",
      newComment
    );
    console.log("Comment created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating new comment:", error);
    throw error;
  }
};

export const getComments = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/posts/getComments",
      {
        params: { id },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting the comments:", error);
    throw error;
  }
};
