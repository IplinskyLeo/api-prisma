import express from "express";
const app = express();

app.use(express.json());

app.getMaxListeners("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
