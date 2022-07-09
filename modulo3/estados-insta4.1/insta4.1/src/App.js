import React, { useState } from 'react'
import styled from 'styled-components'
import Post from  './components/Post/Post'
import  Footer  from './components/Footer/Footer'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Divpai  = styled.div`
 display:flex;
 flex-direction:column;
 padding:3vw;
 border:solid 0.01vw; 
 border-radius:10%;
 margin:1vw;
 


`
const DivFooter =styled.footer`

font-size:10px;
display:flex;
 flex-direction:column;
 padding:5vw;
 border:solid 0.01vw; 
 border-radius:10%;
 margin:1vw;
 align-items:center;

 .linkFooter{
   color:black;
   font-size:25px;
   
 }

`

function App() {

  const [inputNome, setInputNome] = useState("")
  const [inputFotoPerfil, setInputFotoPerfil] = useState("")
  const [inputPublicacao, setInputPublicacao] = useState("")
 
  const [postsInsta, setPostInsta] = useState ([
  {nomeUsuario:"paulinha",fotoUsuario:"https://picsum.photos/50/49",fotoPost:"https://picsum.photos/200/149"},
  {nomeUsuario:"laurinha" , fotoUsuario:"https://picsum.photos/50/48" ,fotoPost:"https://picsum.photos/200/148"},
  {nomeUsuario:"milena", fotoUsuario:"https://picsum.photos/50/47", fotoPost:"https://picsum.photos/200/147"}
  
])


const listaDePessoas = postsInsta.map((item, index) => {
  return(
  
  <Post key={index} 
    nomeUsuario={item.nomeUsuario}
    fotoUsuario={item.fotoUsuario}
    fotoPost={item.fotoPost} 
   
  
    
    />
  
  
  )
  })

//
const handleInputNome = (e) => {
  setInputNome(e.target.value)
}
//
const handleinputFotoPerfil = (e) => {
  setInputFotoPerfil(e.target.value)
}
//
const handleinputPublicacao = (e) => {
  setInputPublicacao(e.target.value)
}





// adicionar item
const addPost = (e) => {
 e.preventDefault()

 setPostInsta([...postsInsta,{nomeUsuario:inputNome, fotoUsuario:inputFotoPerfil,fotoPost:inputPublicacao}])
 setInputNome("")
 setInputFotoPerfil("")
 setInputPublicacao("")

}


//

  return (

    <MainContainer>
      <Divpai>

      
      <label>Nome Usuario:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputNome}
        onChange={handleInputNome}
      />
      
      <label>Foto Perfil:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputFotoPerfil}
        onChange={handleinputFotoPerfil}
      />

      <label> Foto Publicação :</label>
      <input
        placeholder='Insira seu nome !'
        value={inputPublicacao}
        onChange={handleinputPublicacao}
      />
      
      <button onClick={addPost}>Adicionar</button>
      
      
      </Divpai>
      {listaDePessoas}


       <DivFooter>

        <Footer />
          <a className='linkFooter' href="https://picsum.photos/">Fotos 📷 </a>

      </DivFooter>


    </MainContainer>
  
 

)
 
}

export default App;
