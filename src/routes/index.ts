import pizza = require('./pizza.route')
import ingredients = require('./ingredient.route')

const root = [pizza,ingredients]

module.exports = { root }
