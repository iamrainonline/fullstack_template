const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or Password");

    const token = jwt.sign(
      { id: data[0].user_id, username: data[0].username },
      process.env.JWT_SECRET
    );

    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

exports.logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};

exports.checkAuth = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(401);

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res
      .status(200)
      .json({ authenticated: true, userId: user.id, name: user.username });
  } catch (err) {
    res.sendStatus(401);
  }
};
