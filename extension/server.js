const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );
    const filePath = path.join(__dirname, req.url);
    const contentType = getContentType(filePath);

    fs.readFile(filePath, "utf-8", (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".csv":
            return "text/csv";
        default:
            return "text/plain";
    }
}

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
