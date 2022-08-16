import React from "react";
import {useNavigate} from 'react-router-dom';



export function ListaDeViagensAdm (){
    const navigate = useNavigate();
    const goToCreTriPag = () =>{
      navigate("/admin/trips/creat")
    }
    const goToTripDetPag = () =>{
      navigate("/admin/trips/:id")
    }
    return(
        <p>
        <h1>AdminHome</h1>
        <h1>Para o administrador ver a lista de viagens e 
          poder deletá-las ou acessar o detalhe de cada uma delas</h1>
     <button onClick={ goToCreTriPag }>CreateTrip</button>
     <button onClick={goToTripDetPag}>TripDetails</button>
      
            
        </p>
    )
}

