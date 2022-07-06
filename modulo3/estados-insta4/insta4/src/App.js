import React from 'react'
import styled from 'styled-components'
import Post from  './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {



  const posts = [
  {nomeUsuario:"paulinha",fotoUsuario:"https://picsum.photos/50/49",fotoPost:"https://picsum.photos/200/149"},
  {nomeUsuario:"laurinha" , fotoUsuario:"https://picsum.photos/50/48" ,fotoPost:"https://picsum.photos/200/148"},
  {nomeUsuario:"milena", fotoUsuario:"https://picsum.photos/50/47", fotoPost:"https://picsum.photos/200/147"}
  
]


const postMapeado = posts.map((postagens,index) => {

return(

<Post key={index} 
  nomeUsuario={postagens.nomeUsuario}
  fotoUsuario={postagens.fotoUsuario}
  fotoPost={postagens.fotoPost}

/>

)



})

console.log(postMapeado)

  return (

  <MainContainer>
    
    {postMapeado}

  </MainContainer>

  )}
  
export default App;
