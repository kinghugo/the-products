const connection = require('../datebase/connection')

module.exports = {

    async index(req,res){
        const products = await connection('products').select('*')
        return res.json(products)

    },

    async create(req, res){
        const {name_product, category, value, description, image} = req.body
        if (!name_product || !category || !value || !description ||!image){
            return res.status(400).send()
        }

        await connection ('products').insert({
            name_product,
            category,
            value,
            description,
            image
            
        })
        return res.json({sucess: 'Produto Cadastrado Com Sucesso'})

        


    },

    async show(req,res) {
        const {id} = req.params

        const product = await connection('products').select('*').where({id_product: id}).first()

    
            

        return product ?res.json(product):res.json({error: 'Produto não encontrado'})




    


    },

    async update(req, res){
        const {id} = req.params
        const {name_product, category , value, description,image} = req.body
        
        await connection('products')
            .where({id_product:id})
            .update({
                name_product,
                category,
                value,
                description,
                image
            })
            
            res.json({sucess:'Proutos editados com sucesso'})

        },

async destroy(req,res){
    const {id}= req.params
    
    await connection('products').where({id_product: id}).delete()
    const productDelete = await connection('products').delete().where({id_product:id})

    return productDelete ? res.json({sucess:'Item deletado comsucesso'}):res.json({error: 'Item Não Encontrado'})
    

}

}
