import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  // Check User

  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    // Check password (returns boolean if correct)
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or Password");

    // Create a token and sign it on the unique id
    // Example: "This user Id is the same Id as the Id in the user's post"
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};

//  CHECK AUTH FOR TOKEN REQUEST

export const checkAuth = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(401);

  try {
    const user = jwt.verify(token, "jwtkey");
    res.status(200).json({ authenticated: true, userId: user.id });
  } catch (err) {
    res.sendStatus(401);
  }
};
