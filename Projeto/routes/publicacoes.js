const express = require('express')
const router = express.Router()

const controller = require('../controllers/publicacoes')

router.get('/categoria/:categoria', controller.list)
router.get('/nova', controller.novaForm)
router.post('/nova', controller.nova)
router.get('/:categoria/editar/:id', controller.editarForm)
router.post('/:categoria/editar/:id', controller.editar)
router.get('/:categoria/excluir/:id', controller.excluir)

module.exports = router