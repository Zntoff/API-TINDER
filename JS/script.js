const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Middleware
app.use(bodyParser.json());

// Base de datos simulada (para fines de ejemplo)
const users = [];

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Validar los campos
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  // Verificar si el usuario ya está registrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'El usuario ya está registrado.' });
  }

  // Agregar el nuevo usuario a la base de datos simulada
  const newUser = { name, email, password };
  users.push(newUser);

  return res.status(201).json({ message: 'Usuario registrado exitosamente.' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
