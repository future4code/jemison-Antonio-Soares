import React from "react";
import {useNavigate} from 'react-router-dom';



export function CriarViagemParaUsuarioAdm (){


  
    const navigate = useNavigate();
      const backToHome = () =>{
        navigate("/")
      }
      
    return(
        
        <p>
          <h1>Formulário para o administrador criar uma nova viagem</h1>
           <button onClick={ backToHome }>home</button> 
        </p>
        
    )
}

