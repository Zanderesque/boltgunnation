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

// Debug: List directories to verify file structure
console.log('Checking file structure...');
try {
  console.log('Current directory:', process.cwd());
  console.log('Directory listing:');
  fs.readdirSync('.').forEach(file => {
    console.log(
      `- ${file} ${fs.statSync(file).isDirectory() ? '(directory)' : '(file)'}`
    );
  });

  // Check if public directory exists
  if (fs.existsSync('./public')) {
    console.log('Public directory contents:');
    fs.readdirSync('./public').forEach(file => {
      console.log(`- public/${file}`);
    });
  } else {
    console.log('WARNING: public directory not found!');
  }

  // Check if .next directory exists
  if (fs.existsSync('./.next')) {
    console.log('.next directory exists');
    if (fs.existsSync('./.next/static')) {
      console.log('.next/static directory exists');
    } else {
      console.log('WARNING: .next/static directory not found!');
    }
  } else {
    console.log('WARNING: .next directory not found!');
  }
} catch (err) {
  console.error('Error checking directories:', err);
}

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);

  // Get the file path
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './public/index.html';
    console.log('Request for root, serving:', filePath);
  } else if (!filePath.includes('.')) {
    // For routes without file extensions, serve index.html
    filePath = './public/index.html';
    console.log('Route without extension, serving:', filePath);
  } else {
    // Check if the file is in public or .next/static
    if (!fs.existsSync(filePath)) {
      console.log(`File not found directly: ${filePath}`);
      if (fs.existsSync('./public' + req.url)) {
        filePath = './public' + req.url;
        console.log(`Found in public: ${filePath}`);
      } else if (fs.existsSync('./.next/static' + req.url)) {
        filePath = './.next/static' + req.url;
        console.log(`Found in .next/static: ${filePath}`);
      } else {
        console.log(`File not found in public or .next/static: ${req.url}`);
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
        console.log(`404 Not Found: ${filePath}`);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(
          `<h1>404 Not Found</h1><p>The page you requested could not be found.</p><p>Path: ${filePath}</p>`,
          'utf-8'
        );
      } else {
        // Server error
        console.log(`500 Server Error: ${err.code} for ${filePath}`);
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      console.log(`200 OK: ${filePath} (${contentType})`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Bolt Gun Nation server running on port ${PORT}`);
  console.log(`Serving static files from public/ and .next/static/`);
});
