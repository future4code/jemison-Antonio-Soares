import React from "react";
import {useNavigate} from 'react-router-dom';
import { useRequestData } from "../hooks/useRequestData";
import { URLBase } from "../API/apis";
import {DetalhesDasTrips, Header, HeaderPAGES,Button,FooterTrips} from '../CSS/ListTripsPageSTYLED'



 export function ListaDeViagensUsuario (){
     
 const [viagem, isLoading, error] = useRequestData(`${URLBase}/trips`)
 const listaDeViagens=  viagem && viagem.trips.map((item)=>{

  
  return(
     

    <DetalhesDasTrips>

<p> {item.name} </p>

<Header>DESCRIÇÃO DA VIAGEM </Header>
<p>{item.description}</p>
<Header>DURAÇÃO</Header>
<p>{item.durationInDays}</p>
<Header>DATA DA VIAGEM </Header>
<p> {item.date} </p>
      
    </DetalhesDasTrips>


  
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
      
     <FooterTrips>
      <HeaderPAGES>LISTA DE VIAGENS </HeaderPAGES>
      <Button onClick={ goToSingUp}>GARANTA JÁ SUA VIAGEM</Button>
      <Button onClick={goToLastPage}>PAGINA INICIAL</Button>
      </FooterTrips> 
 
        

         {isLoading && <p>Carregando Viagens</p>}
         {!isLoading && error && <p>Ocorreu um erro com as Viagens</p>}
         {!isLoading && viagem && viagem.trips.length > 0 && listaDeViagens }
         {!isLoading && viagem && viagem.trips.length === 0 &&( <p>Não há Viagens</p>)}
        
        
        
 
 
      </div>
 )
    
}

