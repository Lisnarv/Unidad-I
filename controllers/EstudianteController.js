const Estudiante = require('../models/Estudiante');

class EstudianteController {
  constructor() {
    // Arreglo en memoria para los estudiantes
    this.estudiantes = [];
    // ID autoincremental
    this.nextId = 1;
  }

  // GET /estudiantes
  listar(req, res) {
    res.json(this.estudiantes);
  }

  // GET /estudiantes/:id
  obtener(req, res) {
    const id = parseInt(req.params.id, 10);
    const estudiante = this.estudiantes.find(est => est.id === id);
    if (estudiante) {
      res.json(estudiante);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  }

  // POST /estudiantes
  agregar(req, res) {
    const { nombre, edad, carrera } = req.body;
    const nuevoEstudiante = new Estudiante(this.nextId++, nombre, edad, carrera);
    this.estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
  }

  // PUT /estudiantes/:id
  actualizar(req, res) {
    const id = parseInt(req.params.id, 10);
    const { nombre, edad, carrera } = req.body;
    const estudiante = this.estudiantes.find(est => est.id === id);

    if (estudiante) {
      estudiante.nombre = nombre !== undefined ? nombre : estudiante.nombre;
      estudiante.edad = edad !== undefined ? edad : estudiante.edad;
      estudiante.carrera = carrera !== undefined ? carrera : estudiante.carrera;
      res.json(estudiante);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  }

  // DELETE /estudiantes/:id
  eliminar(req, res) {
    const id = parseInt(req.params.id, 10);
    const index = this.estudiantes.findIndex(est => est.id === id);
    if (index >= 0) {
      this.estudiantes.splice(index, 1);
      res.json({ message: 'Estudiante eliminado' });
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  }
}

// Exportamos una instancia única de la clase
module.exports = new EstudianteController();
