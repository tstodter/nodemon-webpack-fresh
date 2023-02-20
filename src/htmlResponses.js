const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);
const js = fs.readFileSync(`${__dirname}/../client/client.js`);
const bundle = fs.readFileSync(`${__dirname}/../client/bundle.js`);

const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

const getJS = (request, response) => {
  serveFile(response, js, 'application/javascript');
};

const getBundle = (request, response) => {
  serveFile(response, bundle, 'application/javascript');
};

module.exports = {
  getIndex,
  getCSS,
  getJS,
  getBundle,
};
