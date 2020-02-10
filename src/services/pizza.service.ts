import PizzaServiceModel from '../config/models/services/pizza_service.model';
import { Request,Response } from 'express'
import Pizza from '../models/pizza.model'
const { modelo:Ingredient } = require('../models/ingredient.model')
import { Error } from 'mongoose';

const service:PizzaServiceModel = {

    Agregar: (req:Request,res:Response) => {

        const body = req.body

        for (const key in body) {
           body[key] = body[key].toLowerCase()
        }

        const pizza = new Pizza(body)

        pizza.save((err:Error) => {
            if(err) return res.status(500).json(err)
            res.json({
                succes: true,
                message: 'pizza agregada correctamente.'
            })
        })
    },

    Listar: (req:Request,res:Response) => {

        Pizza.find({})
            .populate('ingredients')
            .exec((err:Error,pizza) => {
                if(err) return res.status(500).json(err)
                res.json({succes: true, pizza})
            })
    },

    Actualizar: (req:Request,res:Response) => {
        let id = req.params.id
        const body = req.body

        for (const key in body) {
           body[key] = body[key].toLowerCase()
        }

        Pizza.findByIdAndUpdate(id,body,{new:true},(err:Error,pizza:any) => {
            if( err ) return res.status(500).json(err)
            res.json({succes: true, message: 'pizza actualizada correctamente.',pizza})
        }) 
    },

    Eliminar: (req:Request,res:Response) => {
        let id = req.params.id
        Pizza.findByIdAndRemove(id,(err:Error) => {
            if( err ) return res.status(500).json(err)

            res.json({succes: true, message: 'pizza eliminada correctamente.'})
        })
    },

    Agregar_Ingredients: (req:Request,res:Response) => {
        let id = req.params.id
        let ingredient = req.body.ingredient


        Pizza.findById(id)
            .exec( async (err:Error, pizza:any) => {
                if(err) return res.status(500).json(err)
                if(!pizza) return res.status(404).json({succes: false, message: 'no existe la pizza solicitada'})

                let ingredients = await pizza.ingredients

                for (const item of ingredients) {
                    if (item == ingredient) {
                        return res.status(400).json({ success: false, message: 'ingrediente ya registrado' })
                    }
                }

                await ingredients.push(ingredient)
                
                pizza.save((err:Error) => {
                    if(err) return res.status(500).json(err)
                    res.json({ success: true, pizza })
                })
                
            })
    },

    Eliminar_Ingredients: (req:Request,res:Response) => {
        let id = req.params.id
        let ingredient = req.body.ingredient


        Pizza.findById(id)
            .exec( async (err:Error, pizza:any) => {
                if(err) return res.status(500).json(err)
                if(!pizza) return res.status(404).json({succes: false, message: 'no existe la pizza solicitada'})

                const ingredients =  await pizza.ingredients
               
                for (const i in ingredients) {
                    if ( ingredients[i] == ingredient ) {
                        ingredients.splice(i, 1);
                    }
                }

                pizza.save((err:Error) => {
                    if(err) return res.status(500).json(err)
                    res.json({ success: true, message:'ingrediente eliminado de la pizza',pizza })
                })
                
            })
    }
}


module.exports = service