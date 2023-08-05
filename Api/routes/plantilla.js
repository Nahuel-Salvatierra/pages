// backend/routes/plantillas.js
const express = require('express');
const { getRepository } = require('typeorm');
const Plantilla = require('../entities/Plantilla');

const router = express.Router();

// Ruta para obtener todas las plantillas
router.get('/', async (req, res) => {
  try {
    const plantillaRepository = getRepository(Plantilla);
    const plantillas = await plantillaRepository.find();
    res.json(plantillas);
  } catch (error) {
    console.error('Error al obtener las plantillas:', error);
    res.status(500).json({ error: 'Error al obtener las plantillas' });
  }
});

module.exports = router;
