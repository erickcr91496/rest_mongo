import { Router } from "express"
const { Agregar,Listar,Eliminar,Actualizar } = require('../services/ingredient.service')


const router = Router();

router.route('/ingredients')
    .post(Agregar)
    .get(Listar)

router.route('/ingredients/:id')
    .delete(Eliminar)
    .put(Actualizar)

module.exports = router
//lllllllllllll