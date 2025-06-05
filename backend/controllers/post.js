import { db } from "../db.js";

export const createPost = (req, res) => {
  const { title, content, category_id, user, timeread } = req.body;

  const sql =
    "INSERT INTO posts (title, content, creator, time_read, category) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [title, content, user, timeread, category_id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Post has been created");
  });
};

export const editPost = (req, res) => {
  const { id } = req.params;
  const { title, content, category_id, user, timeread } = req.body;
  const sql =
    "UPDATE posts SET title = ?, content = ?, creator = ?, time_read = ?, category = ? WHERE id = ?";

  db.query(
    sql,
    [title, content, user, timeread, category_id, id],
    (err, data) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Failed to update post", details: err });
      if (data.affectedRows === 0)
        return res.status(404).json({ message: "Post not found" });
      return res.status(200).json({ message: "Post updated successfully" });
    }
  );
};

export const getPosts = (req, res) => {
  const q =
    "SELECT U.email, U.role, U.username, P.title, P.category, P.content, P.time_read, P.created_at, P.id, PC.color, PC.category FROM posts P INNER JOIN users U on P.creator = U.user_id INNER JOIN post_categories PC on pc.id = P.category";
  db.query(q, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve posts", details: err });
    }
    if (!data.length) {
      return res.status(401).json({ message: "No posts found or created" });
    }
    return res.status(200).json(data);
  });
};

export const deletePost = (req, res) => {
  const postId = req.params.id;
  const sql = "DELETE FROM posts WHERE id = ?";

  db.query(sql, [postId], (err, data) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to delete post",
        details: err,
      });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({
        message: "Post not found or already deleted",
      });
    }
    return res.status(200).json({
      message: "Post successfully deleted",
    });
  });
};

// create Categories
export const createCategory = (req, res) => {
  const { category, color } = req.body;

  const sql = "INSERT INTO post_categories (category, color) VALUES (?, ?)";
  db.query(sql, [category, color], (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json(err);
    }
    return res.json("Category has been created");
  });
};

export const getCategory = (req, res) => {
  const q = "SELECT * FROM post_categories";
  db.query(q, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve posts", details: err });
    }
    if (!data.length) {
      return res
        .status(401)
        .json({ message: "No categories found or created" });
    }
    return res.status(200).json(data);
  });
};

export const deleteCategory = (req, res) => {
  const catId = req.params.id;
  const sql = "DELETE FROM post_categories WHERE id = ?";

  db.query(sql, [catId], (err, data) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to delete category",
        details: err,
      });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({
        message: "category not found or already deleted",
      });
    }
    return res.status(200).json({
      message: "category successfully deleted",
    });
  });
};

// comments
export const createComment = (req, res) => {
  const { blogId, comment, userId } = req.body;

  const sql =
    "INSERT INTO post_comments (userId, blogId, comment) VALUES (?, ?, ?)";
  db.query(sql, [userId, blogId, comment], (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json(err);
    }
    return res.json("Comment has been created");
  });
};

export const getComments = (req, res) => {
  const { id } = req.query;
  const sql =
    "SELECT PC.comment, PC.date, U.role, U.username FROM post_comments PC inner JOIN users U on U.user_id = PC.userId inner JOIN posts P on P.id = PC.blogId WHERE P.id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve comments", details: err });
    }
    if (!data.length) {
      return res.status(401).json({ message: "No comments found or created" });
    }
    return res.status(200).json(data);
  });
};
