
const express = require('express')
const productsControllers = require('./controlers/produts.controllers')
const routes = express.Router()

routes.get('/', productsControllers.index)
routes.post('/', productsControllers.create)
routes.get('/:id' , productsControllers.show)
routes.put('/:id', productsControllers.update)
routes.delete('/:id',productsControllers.destroy)
module.exports = routes
