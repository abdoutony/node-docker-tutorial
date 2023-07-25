// index.js
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Hello from docker with nodejs");
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
