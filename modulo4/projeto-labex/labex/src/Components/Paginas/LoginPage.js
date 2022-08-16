import React from "react";
import {useNavigate} from 'react-router-dom';



export function LoginAdm  (){
    const navigate = useNavigate();
    const goToAdmPag = () =>{
      navigate("/admin/trips/list")
    }
    
  return(
      
      <p>
        <h1>Para fazermos login como administrador</h1>
    
         
        
         <div id="login">
          <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <label for="nome_login">Seu nome</label>
            <input id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com"/>
          </p>
           
          <p> 
            <label for="email_login">Seu e-mail</label>
            <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" /> 
          </p>
           
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label for="manterlogado">Manter-me logado</label>
          </p>
           
          <p> 
          <button onClick={ goToAdmPag }>Logar Administrador</button>
          </p>
           
         
        </form>
      </div>
      
      </p>
      
  )
}

