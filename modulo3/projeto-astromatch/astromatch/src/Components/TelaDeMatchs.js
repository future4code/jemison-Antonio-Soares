import React, { useEffect, useState } from "react";
import axios from 'axios'
import {ListaDeMatch ,Header,BotaoHeader,ContainerMatchs,BotaoMain } from "../Styled/TelaDeMatchs";
import deslike from '../Imagens/x vermelho.png'

const getMatches ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/antonio-marcos-jemison/matches"
const clear ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/antonio-marcos-jemison/clear"

function TelaDeMatch (props) {

// estado para atualizar a  lista quando do match

const [lista,setLista] = useState([])


// lista da api 


const pegaLista =() =>{

    axios.get(getMatches)
        .then((response) =>{
         
 

     setLista(response.data.matches)

     })

        .catch((erro) =>{
         console.log(erro) 
     })

}

    useEffect(() =>{
     pegaLista()
     }, [])



     // apaga 


const apagaPerfil = () =>{
        axios
        .put(clear)
        .then((response) => { 
            pegaLista()
            alert ('Você não quer namorar mesmo né ? 🥲 ')
        })
        .catch((erro) =>{
            console.log(erro)
        })
}




return(

  <>
     <ListaDeMatch>

             <Header>
                <div>
                    <h1>Matchs 😈 </h1>
                </div>

                <BotaoHeader>
                    <button onClick={() => props.trocaTela('inicial')}>HOME 🏠 </button>
                </BotaoHeader>

            </Header>




            {lista.map((item) => {
                return (
                    <ContainerMatchs>
                        <img  src={item.photo}  key={lista.id} />
                         <nome>{item.name}</nome>
                    </ContainerMatchs>
                )
            })}
            <BotaoMain>
                
                <button onClick={apagaPerfil}><img src ={deslike} /></button>
            </BotaoMain>







     </ListaDeMatch>
  
  
  </>



)



}

 
export default TelaDeMatch;