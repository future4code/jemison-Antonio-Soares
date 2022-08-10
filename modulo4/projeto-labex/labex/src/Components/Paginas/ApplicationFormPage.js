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
     <button onClick={ goToHome }>Home</button>
     
        </p>
        
    )
}

