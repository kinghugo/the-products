import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import './style.css'
import api from "../../service/api";


export default function NewUser() {
    const { register, handleSubmit } = useForm()

    const history = useHistory()

    async function onSubmit(data) {
        try {
            await api.post("/users", data)
            alert ('Usuário Criado Com Sucesso')
            history.push('/')

        } catch (error) {
            alert('Erro ao Cadastrar')
        }
    }
    return (
        <section className="newUser-container">
            <div>
                <h1>Cadastrar Novo Usuário</h1>
                <span>Insira os Dados Corretamente Para Cadastro Do Novo usuario</span>
                <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="000" />
                Voltar Para o Login
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Nome Do Usuario"
                    name="name_user"
                    ref={register}

                />
                <input
                    placeholder="Nome Para Login"
                    name="username"
                    ref={register}

                />
                <input
                    placeholder="Senha"
                    name="Password"
                    ref={register}
                    type="Password"


                />

            
                
                <button className="btn">Cadastrar</button>

            </form>
        </section>
    )
}