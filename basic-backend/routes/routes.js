const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');

const routes = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/') {
    homeController(req, res);
  } else if (url.pathname === '/about') {
    aboutController(req, res);
  } else if (url.pathname === '/data') {
    dataController(req, res);
  } else if (url.pathname === '/greet') {
    const name = url.searchParams.get('name') || 'Guest';

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
};

module.exports = routes;
