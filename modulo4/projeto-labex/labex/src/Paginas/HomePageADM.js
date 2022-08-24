import React from "react";
import {useNavigate} from 'react-router-dom';



export function PaginaInicialAdm (){

// acoes dos botoes 
    const navigate = useNavigate();
    const goToCreTriPag = () =>{
      navigate("/admin/trips/creat")
    }
    const goToTripDetPag = () =>{
      navigate("/admin/trips/:id")
    }

    const goToBack=()=>{
      navigate(-1)
    }
      
// acoes dos botoes 

 
    return(
        <p>
        <h1>Tela inicial do administrador </h1>
        <ul>
          <li>botao para ir para formulario de criar viagens para os usuarios</li>
          <li>ao clickar em uma viagem que ia estar nessa tela ir para aprovação dos candidatos</li>
          <li>exibir a lista de viagens , poder excluir uma viagem e acessar as informações das viagens</li>
        </ul>
        
     <button onClick={ goToCreTriPag }>Criar uma viagem para os usuarios</button>
     <button onClick={goToTripDetPag}>aprovar viagens de usuarios e ver detalhes das viagens </button>
    <button onClick={goToBack}>Logout</button>
            
        </p>
    )
}

