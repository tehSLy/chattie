const express = require("express");
const app = express();
app.listen(process.env.PORT || 80);
app.use(express.static("dist"));


