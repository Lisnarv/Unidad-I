const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

// GET /estudiantes - Listar todos
router.get('/', (req, res) => {
  EstudianteController.listar(req, res);
});

// GET /estudiantes/:id - Obtener un estudiante por id
router.get('/:id', (req, res) => {
  EstudianteController.obtener(req, res);
});

// POST /estudiantes - Crear un nuevo estudiante
router.post('/', (req, res) => {
  EstudianteController.agregar(req, res);
});

// PUT /estudiantes/:id - Actualizar un estudiante
router.put('/:id', (req, res) => {
  EstudianteController.actualizar(req, res);
});

// DELETE /estudiantes/:id - Eliminar un estudiante
router.delete('/:id', (req, res) => {
  EstudianteController.eliminar(req, res);
});

module.exports = router;