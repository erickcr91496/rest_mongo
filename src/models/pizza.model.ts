import { Schema,model, Types } from 'mongoose'
import validator from 'mongoose-unique-validator';

const pizza_schema = new Schema({
    name: {
        type: String,
        required: [true,'el nombre es requerido'],
        unique: true
    },
    origin: {
        type: String,
        required: [true, 'el origen es requerido']
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }]
    
},{ collection:'pizza' })

pizza_schema.plugin(validator,{message:'el valor {VALUE} ya se encuentra asignado'})


export default model('Pizza',pizza_schema)