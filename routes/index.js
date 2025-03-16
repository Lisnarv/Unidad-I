const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

/* GET home page (/) */
router.get('/', (req, res) => {
  res.render('index', { title: 'Inicio', message: 'Bienvenido al sistema de estudiantes' });
});

/* GET /vista-estudiantes */
router.get('/vista-estudiantes', (req, res) => {
  const lista = EstudianteController.estudiantes;
  res.render('estudiantes', { estudiantes: lista });
});

module.exports = router;