import http from "http";
import url, { URLSearchParams } from "url";
import greeting from "./modules/greeting.js";
import process from "process";

const hostname = "127.0.0.1";
const port = 3000;

global.name = "Олег";

console.log(greeting());

process.on("exit", (code) => {
  console.log("Process exit with code: ", code);
});

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");

  const a = Number(queryObject["a"]);
  const b = Number(queryObject["b"]);

  if (!a || !b) {
    res.statusCode = 400;

    const error = {
      status: res.statusCode,
      message: "could not parse two numbers: a, b",
    };

    res.end(JSON.stringify(error, null, 4));
    return;
  }

  const json = {
    name: global.name,
    add: a + b,
    sub: a - b,
    div: a / b,
    mul: a * b,
  };

  res.end(JSON.stringify(json, null, 4));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
