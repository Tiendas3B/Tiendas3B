const http = require('http');
const fs = require('fs');
const path = require('path');
const redirects = require('./redirects.js');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  // Ruta raíz - servir index.html
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error cargando la página');
        return;
      }
      res.end(data);
    });
    return;
  }

  // Buscar la ruta en los redirects
  if (redirects[url]) {
    res.writeHead(301, { 'Location': redirects[url] });
    res.end();
  } else {
    // Si no existe, mostrar página de error
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>No encontrado</title>
      </head>
      <body>
        <h1>404 - Enlace no encontrado</h1>
        <p>El enlace <code>${url}</code> no existe.</p>
        <a href="/">Volver al inicio</a>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
