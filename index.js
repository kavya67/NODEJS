const express = require("express");
const app = express();


app.use("/product", (req, res, next) => {
  res.json({
    say: "Hello",
  });
});

app.use("/", (req, res, next) => {
    res.json({
      name: "kavya",
    });
  });
  
app.listen(3000);
