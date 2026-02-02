require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./routes/authRouter");

app.get("/", (req, res) => res.json());
app.use("/auth", authRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}!`);
});
