const express = require('express');
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemons = require('./Pokemons.js');
const Type = require('./Types.js');

const router = Router();
router.use(express.json())

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', Type);
router.use('/', Pokemons);

module.exports = router;
