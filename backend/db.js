import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to Database MySQL");
  }
});

// Handle database errors
db.on("error", (err) => {
  console.error("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("Database connection was closed. Reconnecting...");
    db.connect();
  } else {
    throw err;
  }
});

export default db;
