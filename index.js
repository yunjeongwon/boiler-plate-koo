const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB connected..");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("port", process.env_PORT || 5000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("안녕");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true });
  });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 서버 대기 중");
});
