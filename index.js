const express = require("express");
const cors = require("cors");
// const path = require("path");
// const rootDir = require("./utilities/path");
require('dotenv').config()

const mongoConnect = require("./utilities/database");

const app = express();

app.use(express.urlencoded());
app.use(cors());

// const admin = require("./routes/admin");
// const home = require("./routes/home");
// app.use("/admin", admin);
// app.use("/", home);
// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
// });

// app.listen(3000);

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
