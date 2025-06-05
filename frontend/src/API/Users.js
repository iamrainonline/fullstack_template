import axios from "axios";

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/users/createUser",
      newUser
    );
    console.log("User created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users/getUsers");
    return response.data;
  } catch (error) {
    console.error("Error getting the  users:", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/users/deleteUser/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
