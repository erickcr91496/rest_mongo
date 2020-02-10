import { Router } from "express"
const { Agregar,Listar,Eliminar,Actualizar,Agregar_Ingredients,Eliminar_Ingredients } = require('../services/pizza.service')


const router = Router();

router.route('/pizza')
    .post(Agregar)
    .get(Listar)

router.route('/pizza/:id')
    .delete(Eliminar)
    .put(Actualizar)

router.route('/pizza/ingredient/:id')
    .put(Agregar_Ingredients)
    .delete(Eliminar_Ingredients)

module.exports = router