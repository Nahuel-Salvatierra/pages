// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createConnection } = require('typeorm');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Importar la entidad Plantilla
const { Plantilla } = require('./entity/Plantilla');

// Conexión con la base de datos
createConnection({
  type: 'sqlite',
  database: path.join(__dirname, 'database.sqlite'),
  entities: [
    // Agrega aquí las entidades que definas para TypeORM (por ejemplo, Plantilla)
  ],
  synchronize: true,
  logging: true,
})
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    // Rutas para plantillas
    const plantillaRoutes = require('./routes/plantilla');
    app.use('/plantillas', plantillaRoutes);

    // Lanza el servidor una vez que se ha establecido la conexión con la base de datos
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
