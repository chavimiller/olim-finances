const express = require("express");
const app = express();

app.get("/", (req, res) => res.json("Hello, world!"));

const PORT = procces.env.PORT || 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}!`);
});
