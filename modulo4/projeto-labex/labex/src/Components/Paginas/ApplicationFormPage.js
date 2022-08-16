import React from "react";
import {useNavigate} from 'react-router-dom';



 export function FormularioDeViagens (){
    const navigate = useNavigate();

const goToHome = () =>{
  navigate("/")
}
   
    return(
    
        <p>
            <h1>ApplicationForm</h1>
            <h1> Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</h1>
     <button onClick={ goToHome }>Home</button>
     
        </p>
        
    )
}

