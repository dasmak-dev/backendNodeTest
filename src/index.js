const express = require('express');
const morgan = require('morgan');
const { mock } = require('./resources/mock');

// Creación del servidor
const app = express();
const port = 3000;

// Configuración del servidor
app.set('port', port);
app.use(morgan('dev'));
app.listen(app.get('port'), () => {
  console.log(`Servidor arrancado en el puerto ${app.get('port')}`);
  console.log(`http://localhost:${app.get('port')}`);
});

// Ruta de prueba
app.get('/personas', (req, res) => {
  res.json(getPersonas()); 
});