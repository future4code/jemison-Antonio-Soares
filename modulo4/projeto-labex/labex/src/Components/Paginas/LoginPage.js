import React from "react";
import {useNavigate} from 'react-router-dom';



export function LoginAdm  (){
    const navigate = useNavigate();
    const goToAdmPag = () =>{
      navigate("/admin/trips/list")
    }
    
  return(
      
      <p>
         <button onClick={ goToAdmPag }>AdminHome</button> 
      </p>
      
  )
}

