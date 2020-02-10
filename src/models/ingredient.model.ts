import { Schema,model } from 'mongoose'

const ingredient_schema = new Schema({
    name: {
        type: String,
        required: [true,'el nombre es requerido']
    },
    calories: {
        type: Number,
        required: [true, 'la cantidad de calorias es necesaria']
    }
},{ collection: 'ingredients' })



const modelo =  model('Ingredient',ingredient_schema)

module.exports = { ingredient_schema,  modelo }