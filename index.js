const express = require("express");
const app = express();

app.get("/", ({ query }, res) => {
  const message = query.p ? `Hello ${query.p}` : "Hello everyone";
  return res.json({ message: message });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port ${port}`));
