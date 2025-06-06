// /API/checkAuth.js
import axios from "axios";

const checkAuth = async () => {
  try {
    const res = await axios.get("http://localhost:3000/auth/check", {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    return { authenticated: false };
  }
};

export default checkAuth;
