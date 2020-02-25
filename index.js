const http = require("http");
const url = require("url");
const fs = require("fs");
const { Client } = require("pg");
const hostname = "localhost";
const port = process.env.PORT;

const sqlClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

sqlClient.connect();

const server = http.createServer((req, serverResponse) => {
  const requestUrl = url.parse(req.url, true);

  if ((requestUrl.pathname = "/")) {
    fs.readFile(__dirname + "/index.html", function(error, file) {
      if (error) {
        serverResponse.statusCode = 404;
        serverResponse.end(JSON.stringify(error));
      }
      serverResponse.statusCode = 200;
      serverResponse.setHeader("Content-Type", "text/html");
      serverResponse.end(file);
    });
  }
  // GET random quote
  else if (requestUrl.pathname == "/getQuote" && req.method === "GET") {
    sqlClient.query(
      `SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1;`,
      (err, sqlResponse) => {
        if (err) throw err;
        const quote =
          sqlResponse &&
          sqlResponse.rows &&
          sqlResponse.rows[0] &&
          sqlResponse.rows[0].quote;
        serverResponse.statusCode = 200;
        serverResponse.setHeader("Content-Type", "text/plain");
        serverResponse.end(quote);
      }
    );
  }
  // POST new quote
  else if (requestUrl.pathname == "/postQuote" && req.method === "POST") {
    const postQuery = `INSERT INTO quotes (quote) VALUES ($1);`;
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const values = [body];
      sqlClient.query(postQuery, values, error => {
        if (error) throw error;
        serverResponse.statusCode = 200;
        serverResponse.setHeader("Content-Type", "text/plain");
        serverResponse.end("New quote added to database: " + body);
      });
    });
    // Invalid request
  } else {
    serverResponse.statusCode = 404;
    serverResponse.setHeader("Content-Type", "text/plain");
    serverResponse.end("This is an invalid request!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
