import express from "express";
const app = express();
// serve all files inside 'public' folder
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("<html><body><h1>GET</h1></body></html>");
});
app.post("/", (req, res) => {
  res.send("<html><body><h1>POST</h1></body></html>");
});
app.listen(3000, () => {
  console.log("Express server listening on http://localhost:3000");
});
