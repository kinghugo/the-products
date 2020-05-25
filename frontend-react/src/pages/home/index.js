import React, { useState, useEffect } from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRight, FiX, FiPower } from "react-icons/fi";
import api from '../../service/api'



export default function Home() {
    const [newProduct, setProduct] = useState([])
    const [newProductDetail, setProductDetail] = useState([])
    const nameUser = localStorage.getItem('name')
    const id = localStorage.getItem('id')



    useEffect(() => {
        api.get('products')
            .then(res => {
                setProduct(res.data)

            })
    }, [id])


    async function handleDetail(id) {
        await api.get(`product/${id}`)
            .then(res => {
                setProductDetail(res.data)

            })
        document.getElementById('modal').classList.add('mostrar')

    }
    function closeDetail() {
        document.getElementById('modal').classList.remove('mostrar')


    }
    async function handleDelete(id) {

        try {
            await api.delete(`product/${id}`)
            setProduct(newProduct.filter(product => product.id_product !== id))
            closeDetail()
        } catch (error) {
            alert('erro ao deletar o produto')

        }
    }
    function formatPrice(price) {
        return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)
    }

    
    const history = useHistory()
    function handleLogout() {

        localStorage.clear()
        history.push('/')

    }


    return (
        <section className="home-container">



            <header>

                <h1>Bem Vindo, {nameUser} </h1>
                <Link to="/newProduct" className="btn">Cadastrar Novo Produto </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color='1F53e4' />


                </button>

            </header>
            <div>
                <ul>


                    {
                        newProduct.map(product => (
                            <li key={product.id_product}>
                                <img src={product.image} alt={`image ${product.name_product}`} />
                                <h2>{product.name_product} </h2>
                                <span>{formatPrice(product.value)}</span>
                                <Link to="/home" onClick={() => handleDetail(product.id_product)} className='back-link'>
                                    Detalhes
                                <FiArrowRight size={18} color="000" />
                                </Link>

                            </li>

                        ))

                    }

                </ul>
            </div>
            <aside id="modal">
                <section>

                    <FiX color="000" size={18} onClick={() => closeDetail()} />
                    <h3>Detalhe Do Produto {newProductDetail.name_product}</h3>
                    <div>
                        <img src={newProductDetail.image} alt={`image Detail ${newProductDetail.name_product}`} />
                        <div className="container">
                            <p>{newProductDetail.description}</p>
                            <span>{formatPrice(newProductDetail.value)}</span>
                            <Link to={`/editProduct/${newProductDetail.id_product}`} className='btn'>Editar Produto</Link>
                            <button className='btn btn-ligth' onClick={() => handleDelete(newProductDetail.id_product)}>Excluir produto</button>


                        </div>

                    </div>


                </section>

            </aside>

        </section>

    )
        
}
