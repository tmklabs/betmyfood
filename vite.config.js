const path = require("path");
// imports the Node.js path module, which is used for working with file and directory paths.
export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
};

/* root: path.resolve(__dirname, 'src') sets the project's root directory to 
'src,' ensuring that Vite treats it as the main project folder.

build: { outDir: '../dist' } configures Vite to output build files into 
the '../dist' directory, keeping them separate from the source code.

server: { port: 8080 } specifies that the development server should run 
on port 8080, allowing you to access your project at http://localhost:8080. */
