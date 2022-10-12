import React from "react";
import {useNavigate} from 'react-router-dom';
import {URLBase} from '../API/apis'
import {useForm} from '../hooks/useForm'
import axios from 'axios'
import { Button, Formulario,ConteinerPai } from "../CSS/LoginPageSTYLED";


export function LoginAdm  (){


  const {form,onChange} = useForm ({email: "" , password:"" })

// acoes dos botoes 
    const navigate = useNavigate();

    const goToUserPage=(navigate)=>{
      navigate(`/admin/trips/list`)
  }

   const goToLastPage = () =>{
    navigate(-1)
   }

// fim das acoes dos botoes 


   const fazerLogin = (event) => {

    event.preventDefault() 
    axios.post(`${URLBase}/login`,form)

        .then((response) => {

            console.log(response.data);

            localStorage.setItem("token", response.data.token)
            goToUserPage(navigate);
        })
        .catch((error) => console.log(error.message))
    
   }


   

    
  return(
      
    <ConteinerPai>
            
            <Formulario onSubmit={fazerLogin}>

                <h1> LOGIN ADMINISTRADOR </h1>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" 
                    id="email" 
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" 
                    required 
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" 
                    id="senha" 
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" 
                    pattern="^.{3,}$" 
                    title="mínimo de 3 caracteres"
                    required 
                />

                <Button type="submit" >LOGIN </Button>
                <Button onClick={goToLastPage} >HOME </Button>
            </Formulario>
        </ConteinerPai>
      
  )
}

