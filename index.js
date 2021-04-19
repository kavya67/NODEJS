const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.json({
    name: "kavya",
  });
});

app.use("/product", (req, res, next) => {
  res.json({
    say: "Hello",
  });
});
app.listen(3000);
