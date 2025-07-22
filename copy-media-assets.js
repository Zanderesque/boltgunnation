const fs = require("fs");
const path = require("path");

// Script to copy WordPress media assets to Next.js public directory
const sourceDir = "../wp-content/uploads";
const targetDir = "./public/media";

// Create media directory structure
const mediaStructure = ["images", "documents", "videos", "audio"];

// Create directories
mediaStructure.forEach((dir) => {
  const dirPath = path.join(targetDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log("Media directory structure created in Next.js project");
console.log("Next steps:");
console.log(
  "1. Manually copy images from wp-content/uploads/ to public/media/images/"
);
console.log("2. Organize by content type (hero images, thumbnails, etc.)");
console.log("3. Optimize images using next/image component");
