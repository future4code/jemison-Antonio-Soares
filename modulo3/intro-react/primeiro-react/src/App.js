import antonioperfil from './img/antonio-perfil.jpeg';
import './App.css';

function App() {
  const apresentacao = `Olá Meu nome e Antônio, Seja Bem-Vindo!`
  
  const paragrafo ='Este é meu primeiro site React!'
  const mensagem = () =>{
    alert('Boa Noite !!!')
  }

  return (
    <div className="App">

    <h1>{apresentacao}</h1>

   <img src={antonioperfil} className='antonio-perfil' alt='Antonio foto no espelho' />

  <h3>{paragrafo}</h3>

   <button onClick={mensagem}>Clique Aqui!</button>


      
    </div>
  );
}

export default App;
