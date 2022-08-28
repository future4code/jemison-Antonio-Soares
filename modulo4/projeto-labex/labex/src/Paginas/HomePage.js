import React from "react";
import {useNavigate} from 'react-router-dom';
import {Button,ConteinerPai, Header, HeaderPAGES} from '../CSS/HomePageSTYLED'


export function PaginaInicial (){

    const navigate = useNavigate();
  const goToAdmPag = () =>{
    navigate("/login")
  }
  const goToListTrip = () =>{
    navigate("/trips/list")
  }
 

    return(

     <ConteinerPai>

         

          <HeaderPAGES> LABEX</HeaderPAGES>
          <p> Tá afim de ter a melhor experiancia da sua vida?</p>
          <Header>Escolha uma das nossas Viagens  🛫 </Header>

         <Button onClick={ goToAdmPag }>LOGIN ADMINISTRADOR</Button>
          <Button onClick={goToListTrip}>LISTA DE VIAGENS </Button>
     </ConteinerPai>
    
    )
}

