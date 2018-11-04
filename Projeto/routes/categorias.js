const express = require('express')
const router = express.Router()

const controller = require('../controllers/categorias')

router.get('/', controller.list)
router.get('/nova', controller.novaForm)
router.post('/nova', controller.nova)
router.get('/editar/:id', controller.editarForm)
router.post('/editar/:id', controller.editar)
router.get('/excluir/:id', controller.excluir)

module.exports = router