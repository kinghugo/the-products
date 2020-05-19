
const express = require('express')
const productsControllers = require('./controlers/produts.controllers')
const routes = express.Router()

routes.get('products/', productsControllers.index)
routes.post('product/', productsControllers.create)
routes.get('product/:id' , productsControllers.show)
routes.put('product/:id', productsControllers.update)
routes.delete('product/:id',productsControllers.destroy)

module.exports = routes
