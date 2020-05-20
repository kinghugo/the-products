import React from 'react';
import './style.css'
import banner from '../../assets/banner.svg'
import { useForm } from "react-hook-form"
import api from "../../service/api"
import {useHistory} from "react-router-dom"



function Login() {
    const { register, handleSubmit } = useForm()

    const history = useHistory(

    )
    async function submitLogin(data) {
        try { 
            await api.post('login',data)
            history.push('home')
            
        } catch (error) {
            alert ('Erro ao fazer o login')

        }

    }

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
            </form>
            <img src={banner} alt= "banner do login"/>
        </main>

    )
}

export default Login;