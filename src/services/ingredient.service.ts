import IngredientServiceModel from '../config/models/services/ingredient_service.model';
import { Request,Response } from 'express'
const { modelo:Ingredient } = require('../models/ingredient.model')


const service:IngredientServiceModel = {

    Agregar: (req:Request,res:Response) => {

        const body = req.body

        for (const key in body) {
           body[key] = body[key].toLowerCase()
        }

        const ingredient = new Ingredient(body)

        ingredient.save((err:Error)  => {
            if(err) return res.status(500).json(err)
            res.json({
                succes: true,
                message: 'ingrediente agregado correctamente.'
            })
        })
    },

    Listar: (req:Request,res:Response) => {

        Ingredient.find({})
        .exec((err:Error,ingredients:any) => {
            if(err) return res.status(500).json(err)
            res.json({succes: true, ingredients})
        })

    },

    Actualizar: (req:Request,res:Response) => {
        let id = req.params.id
        const body = req.body

        for (const key in body) {
           body[key] = body[key].toLowerCase()
        }

        Ingredient.findByIdAndUpdate(id,body,{new:true},(err:Error,ingredient:any) => {
            if( err ) return res.status(500).json(err)
            res.json({succes: true, message: 'ingrediente actualizado correctamente.',ingredient})
        }) 
    },

    Eliminar: (req:Request,res:Response) => {
        let id = req.params.id
        Ingredient.findByIdAndRemove(id,(err:Error) => {
            if( err ) return res.status(500).json(err)
            res.json({succes: true, message: 'ingrediente eliminado correctamente.'})
        })
    }
}


module.exports = service