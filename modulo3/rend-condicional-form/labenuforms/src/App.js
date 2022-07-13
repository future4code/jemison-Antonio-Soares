import React,{ useState }from 'react'

import { DadosGerais } from './Components/Etapa1';
import {EnsinoSuperior} from './Components/Etapa2'
import {InformacoesGerais} from './Components/Etapa3'
import {EtapaFinal} from './Components/EtapaFinal'


function App() {

  const [etapa,setEtapa] = useState('DadosGerais')


  const renderizar =() => {

 switch (etapa){

    case'DadosGerais':
    return <DadosGerais mudaPagina ={mudaPagina} />
    break
  

    case'EnsinoSuperior':
    return <EnsinoSuperior mudaPagina ={mudaPagina} />
    break
  

    case'InformacoesGerais':
    return <InformacoesGerais mudaPagina ={mudaPagina} />
    break
  

    case'EtapaFinal':
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


