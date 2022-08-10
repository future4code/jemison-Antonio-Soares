import Rect from 'react'
import { useState } from 'react';
import TelaDeMatchs from './Components/TelaDeMatchs'
import TelaInicial from './Components/TelaInicial'




const App = (props) => {
  const [tela, setTela] = useState('inicial')
 

  const trocaTela = (tela) =>{
  setTela(tela)
}

   const renderizarTela = () =>{
     switch (tela) {
      case 'inicial':
         return <TelaInicial trocaTela={trocaTela}  />
      case 'matchs':
       return <TelaDeMatchs trocaTela={trocaTela}  />
    default:
         return null;
    }
   }

  return (
    
    <div>
      {renderizarTela()}
    </div>
  );
}

export default App;