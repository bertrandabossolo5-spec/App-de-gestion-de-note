const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Bonjour le Monstre l@frim95 ! Le serveur Node.js fonctionne à merveille.\n');
});

server.listen(port, hostname, () => {
  console.log(`Serveur en cours d'exécution sur http://${hostname}:${port}/`);
});
