const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

const port = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyparser.json());

app.get("/api/message", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`listening on port ${port}`));
