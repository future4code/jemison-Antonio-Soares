import React from 'react';
import styled from 'styled-components';
import { HeaderPai } from './Components/Header/header';
import { MainPai, NavDireita, NavEsquerda, NavMeio } from './Components/Main/main';
import { FooterPai, FooterPaiH4} from './Components/Footer/footer';
import foto from './Components/img/logo.png';


function App() {
  return (
    <div className='DivPai'>
          
               
                  <HeaderPai>
                    <img src ={foto}/>

                    <h1>LABzap</h1>


                  </HeaderPai>
               
               


               <main>

                <MainPai>
                 


                 <NavDireita>
                <nav className='NavEsquerda'>
                 
                 </nav>
                 </NavDireita>



                 <NavMeio>
                 <nav className='NavMeio'>
                 
                 <label>Remetente: <input type="text" id="User" name="name" /></label>
                 <label>Mensagem: <input type="text" id="User" name="mensagem" /></label> <button>Enviar Mensagem</button>



                 </nav>
                 </NavMeio>


                 <NavEsquerda>
                 <nav className='NavDireita'>
                 
                 </nav>
                 </NavEsquerda>
 



               </MainPai>

               </main>



               

                <FooterPai>

                 <h1>Desenvolvido por Antônio Marcos - CEP:08820-235</h1>

                </FooterPai>

                 
      
    </div>
  );
}

export default App;
