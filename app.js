const http = require("http");

const server = http.createServer((req, res) => {
  res.end("🚀 DevOps CI/CD Project is Running!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
