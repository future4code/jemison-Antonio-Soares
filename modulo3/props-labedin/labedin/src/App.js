import React from 'react';
import './App.css';

import antonio from './img/antonio.webp'
import logolabenu from './img/unnamed.jpeg'
import logistica from './img/logistica.png'
import home from './img/home2.jpeg'
import email from './img/email.jpeg'

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno  from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={antonio} 
          nome="Antônio-DEV" 
          descricao="Oi, eu sou o Antônio, Sou Aluno da escola Labenu, gosto de exercícios de HTML e CSS, e gosto de assistir séries ."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
       
       <div >
       <CardPequeno
          imagem={home} 
          nome="Endereço"
          descricao="Mogi Das Cruzes - São Paulo"

        />
      </div >

      <div >
       <CardPequeno
          imagem={email} 
          nome="Email"
          descricao="atmarcos28@gmail.com"

        />
      </div>



      </div>
     




      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logolabenu} 
          nome="Labenu" 
          descricao="Estou me tornando um Desenvolvedor Web Full Stack pronto para o mercado de trabalho. São mais de 1000 horas de programação que vai me tornar um profissionl completo tanto no Back-End quanto no Front-End." 
        />
        
        <CardGrande 
          imagem={logistica} 
          nome="Logistica" 
          descricao="Supervisiona o adequado armazenamento dos produtos. Planeja e organiza a disposição das mercadorias estocadas, facilitando sua identificação, localização e manuseio. Elabora relatórios diários de produção e qualidade. Identifica desvios dos padrões nos processos produtivos e desenvolve ações corretivas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
