import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/190'}
          />

          <Post
            nomeUsuario={'laurinha'}
            fotoUsuario={'https://picsum.photos/50/49'}
            fotoPost={'https://picsum.photos/200/191'}
          />



           <Post
            nomeUsuario={'milena'}
            fotoUsuario={'https://picsum.photos/50/48'}
            fotoPost={'https://picsum.photos/200/192'}
          />
          
        </MainContainer>
)

}


export default App;
