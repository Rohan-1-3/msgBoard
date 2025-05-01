import { pool } from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getMessage = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
};

const addNewMessage = async ({ id = uuid(), text, username }) => {
  await pool.query(
    "INSERT INTO messages (id, text, username) VALUES ($1, $2, $3)",
    [id, text, username]
  );
};

const deleteMessage = async (id) => {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
};

export { getAllMessages, getMessage, addNewMessage, deleteMessage };