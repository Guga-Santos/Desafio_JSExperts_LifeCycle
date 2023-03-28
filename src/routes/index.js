const routes = {
  '/:get': (req, res) => {
    res.writeHead(200);
    res.write('Bem-vindo à Página Inicial');
    return res.end()
  },
  '/youtube:get': (req, res) => {
    res.writeHead(200);
    res.write('Página da playslist do Youtube');
    return res.end();
  },
  '/spotify:get': (req, res) => {
    res.writeHead(200);
    res.write('Página da playslist do Spotify');
    return res.end();
  },
  default: (req, res) => {
    res.writeHead(404);
    res.write('Bad Request: Page Not Found!');
    return res.end();
  }
}

module.exports = routes;