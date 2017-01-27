const path = require('path');
const dist = path.join(__dirname, '../docs');

module.exports = {
  paths: {
    dist,
    baseUrl: '/',
  },
  ports: {
    frontend: 3006,
  },
};
