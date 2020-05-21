const routes = require('express').Router()
const productsControllers = require('./controlers/produts.controllers')
const loginController = require('./controlers/loginController')
const userController = require('./controlers/userController')



routes.get('/products/', productsControllers.index)
routes.post('/product/', productsControllers.create)
routes.get('/product/:id' , productsControllers.show)
routes.put('/product/:id', productsControllers.update)
routes.delete('/product/:id',productsControllers.destroy)

routes.post('/login', loginController.access)

routes.post ('/users', userController.store)


module.exports = routes
