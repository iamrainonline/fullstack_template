import axios from "axios";

export const loginUser = async (loginUser) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      loginUser
    );
    console.log("User logged in successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
