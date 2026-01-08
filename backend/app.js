const express = require("express");
const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/", (req, res) => {
  res.send("Finance Accounts Management API running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
