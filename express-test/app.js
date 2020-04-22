const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("请求开始...", ", 1. ", req.method, ", 2. ", req.url);
  next();
});

app.use((req, res, next) => {
  //假设处理cookie
  req.cookies = {
    userId: "abc123",
  };
  next();
});

app.use((req, res, next) => {
  //假设处理post data
  setTimeout(() => {
    req.body = {
      a: 100,
      b: 200,
    };
    next();
  }, 1000);
});

app.use("/api", (req, res, next) => {
  console.log("use api", req.cookies, " ", req.body);
  next();
});

app.get("/api", (req, res, next) => {
  console.log("get api", req.cookies, " ", req.body);
  next();
});

app.post("/api", (req, res, next) => {
  console.log("post api", req.cookies, " ", req.body);
  next();
});

//模拟登入
function loginCheck(req, res, next) {
  console.log("登入成功");
  setTimeout(() => {
    next();
  });
}

app.get("/api/get-cookie", loginCheck, (req, res, next) => {
  console.log("get api/cookie", req.cookies, " ", req.body);
  res.json({
    error: 0,
    data: req.cookies,
  });
});

app.post("/api/get-post-data", (req, res, next) => {
  console.log("get api/get-post-data", req.cookies, " ", req.body);
  res.json({
    error: 0,
    data: req.body,
  });
});

app.use((req, res, next) => {
  console.log("处理404");
  res.json({
    error: -1,
    msg: "404 not found",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
