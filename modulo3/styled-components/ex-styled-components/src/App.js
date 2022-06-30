import React from 'react';
import styled from 'styled-components';
import { HeaderPai } from './Components/Header/header';
import { MainPai, NavDireita, NavEsquerda, NavMeio } from './Components/Main/main';
import { FooterPai, FooterPaiH4} from './Components/Footer/footer';


function App() {
  return (
    <div className='DivPai'>
          
                <header>
                  <HeaderPai>
                    
                    <h1>O HEADER E AQUI</h1>

                  </HeaderPai>
                </header>
               


               <main>

                <MainPai>
                 


                 <NavDireita>
                <nav className='NavEsquerda'>
                 <ul>
                  <li>Página inicial</li>
    
                  </ul>
                 </nav>
                 </NavDireita>



                 <NavMeio>
                 <nav className='NavMeio'>
                 
                 <label>Remetente <input type="text" id="User" name="name" /></label>
                 <label>Mensagem: <input type="text" id="User" name="mensagem" /></label> <button>Enviar Mensagem</button>



                 </nav>
                 </NavMeio>


                 <NavEsquerda>
                 <nav className='NavDireita'>
                 <ul>
                  <li>Página inicial</li>
              
                  </ul>
                 </nav>
                 </NavEsquerda>
 



               </MainPai>

               </main>



               <footer>

                <FooterPai>

                 <h1>Desenvolvido por Antônio Marcos - CEP:08820-235</h1>

                </FooterPai>

               </footer>    
      
    </div>
  );
}

export default App;
