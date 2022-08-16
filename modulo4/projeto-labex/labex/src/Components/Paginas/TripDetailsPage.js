import React from "react";
import {useNavigate} from 'react-router-dom';



export function ListaDeDetalhes (){
    const navigate = useNavigate();
    const backToHome = () =>{
      navigate("/")
    }
    
  return(
      
      <p>
        <h1> Para o administrador ver o detalhe de uma viagem específica,
           bem como os candidatos que aplicaram para ela</h1>
         <button onClick={ backToHome }>home</button> 
      </p>
      
  )
}

