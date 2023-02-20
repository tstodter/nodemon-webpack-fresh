const path = require('path');

module.exports = {
  entry: './client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client'),
  },
  watchOptions: {
    aggregateTimeout: 200
  }
};