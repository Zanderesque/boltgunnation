// Simple static file server for cPanel
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);

  // Get the file path
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './public/index.html';
  } else if (!filePath.includes('.')) {
    // For routes without file extensions, serve index.html
    filePath = './public/index.html';
  } else {
    // Check if the file is in public or .next/static
    if (!fs.existsSync(filePath)) {
      if (fs.existsSync('./public' + req.url)) {
        filePath = './public' + req.url;
      } else if (fs.existsSync('./.next/static' + req.url)) {
        filePath = './.next/static' + req.url;
      }
    }
  }

  // Get the file extension
  const extname = path.extname(filePath);

  // Set the content type
  const contentType = MIME_TYPES[extname] || 'text/plain';

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(
          '<h1>404 Not Found</h1><p>The page you requested could not be found.</p>',
          'utf-8'
        );
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Bolt Gun Nation server running on port ${PORT}`);
  console.log(`Serving static files from public/ and .next/static/`);
});
