const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://johnahn:abcd1234@boilerplate.fgv8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("MongoDB connected..");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("port", process.env_PORT || 5000);

app.get("/", (req, res) => {
  res.send("안녕");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 서버 대기 중");
});
