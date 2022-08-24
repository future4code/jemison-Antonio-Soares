import React from "react";
import {useNavigate} from 'react-router-dom';
import {URLBase} from '../API/apis'
import {useForm} from '../hooks/useForm'


import axios from 'axios'


export function LoginAdm  (){


  const [form,onChange] = useForm ({email: "" , password:"" })

// acoes dos botoes 
    const navigate = useNavigate();

    const goToUserPage=(navigate)=>{
      navigate(`/admin/trips/list`)
  }

   const goToLastPage = () =>{
    navigate(-1)
   }

// fim das acoes dos botoes 



// funcao para logar como adm 


   const fazerLogin = (event) => {

    event.preventDefault() //evita que a página seja renderizada novamente ao enviar o formulário
    axios.post(`${URLBase}/login`,form)

        .then((response) => {

            console.log(response.data);

            localStorage.setItem("token", response.data.token)
            goToUserPage(navigate);
        })
        .catch((error) => console.log(error.message))
    
   }


   // fim da funcao 

    
  return(
      
    <div>
            <h1> Login Admistrador </h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="email" //colocar igual ao htmlFor do label
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" //faz validações de e-mail
                    required //torna campo obrigatório
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="senha" //colocar igual ao htmlFor do label
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" //oculta senha
                    pattern="^.{3,}$" //padrão Regex
                    title="mínimo de 3 caracteres"
                    required //torna campo obrigatório
                />

                <button type="submit" >Logar </button>
                <button onClick={goToLastPage} >home </button>
            </form>
        </div>
      
  )
}

