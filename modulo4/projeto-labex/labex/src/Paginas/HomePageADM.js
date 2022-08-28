import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {useRequestData} from '../../src/hooks/useRequestData'
import { URLBase } from "../API/apis";
import axios from "axios";
import { Header,Button,DetalhesDasTrips, HeaderPAGES,FooterTrips} from "../CSS/HomePageADMSTYLED";



export function PaginaInicialAdm (){

  const [viagem, isLoading, error] = useRequestData(`${URLBase}/trips`)

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

const deletTrip = (id) =>{

  const headers = {
      headers:{
          auth:localStorage.getItem('token'),
      }
  }

  axios.delete(`${URLBase}/trips/${id}`, headers)
      .then((response)=>{
              alert('Viagem deletada')
      })
      .catch((error) =>{
          console.log(error)
      })
}




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

     

      <Button onClick={() =>deletTrip(item.id)} >DELETAR VIAGEM  </Button> 
      
    </DetalhesDasTrips>


  
  )
  
  })


    return(
        <p>
          <HeaderPAGES>TELA INICIAL DO ADMINISTRADOR </HeaderPAGES>
          <FooterTrips>
         <Button onClick={ goToCreTriPag }>CRIAR UMA VIAGEM </Button>
         <Button onClick={goToTripDetPag}>CANDIDATURAS</Button>
         <Button onClick={goToBack}>LOGOUT</Button>
         </FooterTrips>
            
        
         <HeaderPAGES>VIAGENS </HeaderPAGES>

         {isLoading && <p>Carregando Viagens</p>}
         {!isLoading && error && <p>Ocorreu um erro com as Viagens</p>}
         {!isLoading && viagem && viagem.trips.length > 0 && listaDeViagens }
         {!isLoading && viagem && viagem.trips.length === 0 &&( <p>Não há Viagens</p>)}
        
        
        
        </p>
    )
}

