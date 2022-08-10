import React from "react";
import {useNavigate} from 'react-router-dom';



export function ListaDeDetalhes (){
    const navigate = useNavigate();
    const backToHome = () =>{
      navigate("/")
    }
    
  return(
      
      <p>
         <button onClick={ backToHome }>home</button> 
      </p>
      
  )
}

