import express from "express";

const app = express();
const port = 5340;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
