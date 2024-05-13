const { createServer } = require("node:http");

const db = [
  {
    id: 1,
    title: "Why did the scarecrow win an award?",
    comedian: "Unknown",
    year: "Unknown",
  },
  {
    id: 2,
    title: "Parallel lines have so much in common...",
    comedian: "Unknown",
    year: "Unknown",
  },
  {
    id: 3,
    title: "Why don't scientists trust atoms?",
    comedian: "Unknown",
    year: "Unknown",
  },
  {
    id: 4,
    title: "I told my wife she was drawing her eyebrows too high.",
    comedian: "Unknown",
    year: "Unknown",
  },
  {
    id: 5,
    title: "I'm reading a book on anti-gravity.",
    comedian: "Unknown",
    year: "Unknown",
  },
];

const requestHandler = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    getJokes(req, res);
  } else if (req.url === "/jokes/1" && req.method === "PATCH") {
    updateJokes(req, res);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: true, Message: "Not Found" }));
  }
};

function getJokes(req, res) {
  res.writeHead(200);
  res.end(JSON.stringify({ data: db, message: "Data Fetched Successfully" }));
}

function updateJokes(req, res) {
  const id = +req.url.split("/")[2];
  console.log(id);
  res.end(JSON.stringify({ id }));
}

const server = createServer(requestHandler);

server.listen(3000, () => {
  console.log("Server is running");
});
