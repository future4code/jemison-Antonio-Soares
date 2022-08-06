import React, { useEffect, useState } from "react";
import axios from 'axios'
import {ImagemPessoas , Imagem , DescricaoPessoa,Nome,Biografia,FooterBotao } from "../Styled/Pessoas";
import like from '../Imagens/coracao.png'
import deslike from '../Imagens/x vermelho.png'

const getProfileToChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/antonio-marcos-jemison/person"
const choosePerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/antonio-marcos-jemison/choose-person"



function CardDePessoas () {

    // estado para atualizar as pessoas na tela inicial 

   const [pessoas ,setPessoas]= useState({})

   // requisicao para baixar as pessoas


   useEffect(() =>{
    perfil()
 },[])  

     const perfil = () =>{
          axios.get(getProfileToChoose)

         .then((response) =>{
           setPessoas(response.data.profile)
         })

         .catch((erro)=>{
          console.log(erro)
          })
       
     }
   



//choosePerson


const escolhePessoa = (choice)  =>{
   
    const body ={
        id:pessoas.id,
        choice:choice,
    }
    
  axios.post(choosePerson,body)

  .then((response) =>{
    
    perfil(response.data.profile)
  })

  .catch((erro) =>{
    console.log(erro)
  })



}


// eventos para dar match ou não


const likePessoa = () =>{
    escolhePessoa(true)
}

const deslikePessoa = () =>{
    escolhePessoa(false)
}


// retornar para inicial

return(

    // card da tela inical q vai aparecer as pessoas para o match
    
    <div>
       <ImagemPessoas>
        
       <Imagem  src={pessoas.photo} alt='Usuario' />
       
      
       </ImagemPessoas>


       <DescricaoPessoa>

        <Nome> {pessoas.name}, {pessoas.age} </Nome>
        <Biografia> {pessoas.bio} </Biografia>

     </DescricaoPessoa>




     <FooterBotao>

       
         <button onClick={deslikePessoa}><img src ={deslike} /></button>
         <button onClick={likePessoa}><img src ={like} /></button>

     </FooterBotao>

     </div>

)



}


export default CardDePessoas;