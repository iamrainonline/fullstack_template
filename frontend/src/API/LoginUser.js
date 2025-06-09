import axios from "axios";

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });

    return { success: true, user: res.data };
  } catch (err) {
    console.error("Login failed:", err);

    return {
      success: false,
      message: err.response?.data?.message || "Invalid credentials",
    };
  }
};
