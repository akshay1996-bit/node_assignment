//garbage collection command
//node --trace_gc server.js <filename>

const http = require("http");
const fs = require("fs");

const file = "./panda.mp4";

const port = 3000;


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("index.html", (err, data) => {
      if (err) console.log(err);
      else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/books") {
    res.write(
      JSON.stringify([
        {
          name: "Power of Now",
          Author: "Eckhart Tolle",
          published: "Oxford",
        },
        {
          name: "Diary of a Young Girl",
          Author: "Anne Frank",
          published: "London St.",
        },
        {
          name: "To Kill a Mocking Bird",
          Author: "Harper Lee",
          published: "Arrow Books",
        },
      ])
    );
    res.end();
  } else if (req.url === "/video") {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-type": "video/mp4" });
        res.end(data);
      }
    });
  }
});

server.listen(port, (err) => {
  if (err) {
    console.log(`Something went wrong ${err}`);
  } else {
    console.log(`server started running on port ${port}`);
  }
});
