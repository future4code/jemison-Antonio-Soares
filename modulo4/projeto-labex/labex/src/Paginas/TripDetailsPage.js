import React from "react";
import {useNavigate} from 'react-router-dom';



export function AprovacaoDeViagensAdm(){
    const navigate = useNavigate();
    const backToHome = () =>{
      navigate("/")
    }
    
  return(
      
      <p>
        <h1>Formularios dos usuarios para aprovar ou reprovar </h1>
        <ul>
          <li>aprovar o formulario que o usuario fez,e reprovar tbm</li>
          <li>ao aprovar ou reprovar apagar a requisão da lista de aprovações</li>
        
        
        
        
        </ul>

         <button onClick={ backToHome }>home</button> 
      </p>
      
  )
}

