import axios from "axios";

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });

    // ✅ Return success if login worked
    return { success: true, user: res.data };
  } catch (err) {
    console.error("Login failed:", err);

    // ❌ Return failure if login failed
    return {
      success: false,
      message: err.response?.data?.message || "Invalid credentials",
    };
  }
};
