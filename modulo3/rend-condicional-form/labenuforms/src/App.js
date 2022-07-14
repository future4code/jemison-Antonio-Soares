import React,{ useState }from 'react'

import { DadosGerais } from './Components/Etapa1';
import {EnsinoSuperior} from './Components/Etapa2'
import {InformacoesGerais} from './Components/Etapa3'
import {EtapaFinal} from './Components/EtapaFinal'


function App() {

  const [etapa,setEtapa] = useState('01')


  const renderizar =() => {

 switch (etapa){

    case'01':
    return <DadosGerais mudaPagina ={mudaPagina} />
    break
  

    case'02':
    return <EnsinoSuperior mudaPagina ={mudaPagina} />
    break
  

    case'03':
    return <InformacoesGerais mudaPagina ={mudaPagina} />
    break
  

    case'04':
    return <EtapaFinal mudaPagina ={mudaPagina} />
    break
  

    default:
       
    
  
   }
 }

function mudaPagina(props)  {
  setEtapa(props)

 }



  return (
    <div>
   {renderizar()}
    </div>


  )
}


export default App;


