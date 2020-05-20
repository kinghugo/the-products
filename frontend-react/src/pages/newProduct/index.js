import React from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useForm } from "react-hook-form"
import api from '../..//service/api'


export default function NewProduct() {
    const { register, handleSubmit, setValue } = useForm()


    const history = useHistory()
    const id_product = +history.location.pathname.split('/')[2] || null
    var title = '', button = ''

    id_product!== null ? title = 'Editar Produto' : title = 'Cadastrar Novo Produto' 

    id_product!== null ? button = 'Editar ' : button = 'Cadastrar'

    if (id_product !== null) {

        api.get(`product/${id_product}`)
            .then(res => { 
                register(setValue('name_product', res.data.name_product))
                register(setValue('category', res.data.category))
                register(setValue('value', res.data.value))
                register(setValue('image', res.data.image))
                register(setValue('description', res.data.description))
            })


    }

    async function onSubmit(data) {
        try {

           id_product!== null ? api.put(`product/${id_product}`,data): api.post('product', data)
            history.push('/home')

        } catch (error) {
            alert('Erro ao cadastrar o Produto,tente novamente ou mais tarde')


        }

    }


    return (
        <section className="newProduct-container">
            <div>
            <h1>{title}</h1>
                <span>Insira os Dados Corretamente Para Cadastro Do Novo Produto</span>
                <Link to="/home" className="back-link">
                    <FiArrowLeft size={16} color="000" />
                Voltar Para a Home
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Nome do Produto"
                    name="name_product"
                    ref={register}

                />
                <input
                    placeholder="Categoria"
                    name="category"
                    ref={register}

                />
                <input
                    placeholder="valor"
                    name="value"
                    ref={register}

                />

                <input
                    placeholder="Link Imagem"
                    name="image"
                    ref={register}

                />
                <textarea name='description' placeholder="Escreva a Descrição Do Su Produto aqui.." ref={register} />
                <button className="btn">{button}</button>

            </form>
        </section>
    )

}
