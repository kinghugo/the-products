import React from 'react';
import './style.css'
import banner from '../../assets/banner.svg'
import { useForm } from "react-hook-form"
import api from "../../service/api"
import {useHistory, Link} from "react-router-dom"



function Login() {
    const { register, handleSubmit } = useForm()

    const history = useHistory(

    )
    async function submitLogin(data) {
        try { 
           const response = await api.post('login',data)
            localStorage.setItem('name', response.data.name_user)
            localStorage.setItem('id', response.data.name_user)
            history.push('home')
            
        } catch (error) {
            alert ('Erro ao fazer o login')

        }

    }
    const sendToregister = () => history.push('/register')

    return (
        <main className='login-container'>
            <form onSubmit={handleSubmit(submitLogin)}>
                <input
                    name="username"
                    placeholder="Nome do Usuário"
                    ref={register}
                />
                <input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    ref={register}
                />
                <button className='btn btn-color'>Entrar</button>
                <button className="btn btn-color" onClick={() =>sendToregister()} >Cadastrar Novo Usuário</button>

            </form>
            <img src={banner} alt= "banner do login"/>
        </main>

    )
}

export default Login;