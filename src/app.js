import express from "express";
import cors from "cors";

const users = [];

const tweets = [];

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  users.push({ username, avatar });
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push({
    username: req.body.username,
    avatar: users.find((user) => user.username === req.body.username).avatar,
    tweet: req.body.tweet,
  });
  console.log(tweets);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length < 10) {
    res.send(tweets);
  } else {
    res.send(tweets.slice(-10));
  }
});

app.listen(5000);
