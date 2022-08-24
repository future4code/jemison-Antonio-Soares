import React from "react";
import {useNavigate} from 'react-router-dom';
import { useRequestData } from "../hooks/useRequestData";
import { URLBase } from "../API/apis";




 export function ListaDeViagensUsuario (){
     
 const [viagem, isLoading, error] = useRequestData(`${URLBase}/trips`)

 // map para a url 

 const listaDeViagens=  viagem && viagem.trips.map((nome)=>{

  
  return(
     

     

    <div>

      <header> {nome.name} </header>
      
        <p className="Descricao">{nome.description}</p>

        <p className="Diarias">{nome.durationInDays}</p>

      <p className="Data"> {nome.date} </p>

      <button>Comprar </button>
      
      
    </div>


  
  )
  
  })




// navegacao dos botoes 
 const navigate = useNavigate();
 const goToLastPage = () =>{
 navigate(-1)
 }
 const goToSingUp = () =>{
 navigate("/trips/application")
 }
   return(
     <div>
      
 
                 <h1>Lista de Viagens </h1>
                 <button onClick={ goToSingUp}>incrição para viagem</button>
                 <button onClick={goToLastPage}>Home</button>
       
 
        

         {isLoading && <p>Carregando Viagens</p>}
         {!isLoading && error && <p>Ocorreu um erro com as Viagens</p>}
         {!isLoading && viagem && viagem.trips.length > 0 && listaDeViagens }
         {!isLoading && viagem && viagem.trips.length === 0 &&( <p>Não há Viagens</p>)}
        
        
        
 
 
      </div>
 )
    
}

