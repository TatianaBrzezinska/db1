const pool = require("../db");

const UserModel = {
  getAllUsers: async () => {
    const result = await pool.query("SELECT * from users");
    return result.rows;
  },
  createUser: async (name, email) => {
    const result = await pool.query(
      "INSERT INTO users (Name, Email) VALUES ($1, $2)",
      [name, email],
    );
    return result.rows[0];
  },
  deleteUser: async (userId) => {
    await pool.query(
      "DELETE FROM users WHERE id = $1",
      [userId],
    )
  },
};

module.exports = UserModel;
