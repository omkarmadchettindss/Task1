const express = require("express");
const userRoutes = require("./routes/users.routes");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", userRoutes);

// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found" });
// });

app.listen(3000, () => {
  console.log(`Server listening on port : ${PORT}`);
});
