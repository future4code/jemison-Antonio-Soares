import React, { useState } from 'react'


export function DadosGerais({mudarPagina}) {

  // estados

  const [nome,setNome] = useState('')
  const [idade,setIdade] = useState('')
  const [email,setEmail] = useState('')
  const [escolaridade,setEscolaridade] = useState('InformacoesGerais')


// eventos
function handleNome  (e) {
  setNome(e.target.value)
 }

function handleIdade (e) {
    setIdade(e.target.value)
  }

function handleEmail  (e) {
    setEmail(e.target.value)
  }
function handleEscolaridade (e) {
    setEscolaridade(e.target.value)
  }
    
function handleSubmite (e) {
    e.preventDefault()
    mudarPagina(escolaridade)

 }





    return(
        <div>

            <h1> ETAPA 1 - DADOS GERAIS</h1>

            <form  onSubmit={handleSubmite}>

            <label>1. Qual o Seu Nome ? </label><br/>
            <input type="text" value={nome} onChange={handleNome} /><br/>

            <label>2. Qual o Sua idade? </label><br/>
            <input type="text" value={idade} onChange={handleIdade}  /><br/>

            <label>3. Qual o Seu E-mail ? </label><br/>
            <input type="text" value={email} onChange={handleEmail}  /> <br/>

            <label>4. Qual o Sua Escolaridade ? </label><br/>

            <select value={escolaridade} onChange={handleEscolaridade}> 

             <option  selected value='InformacoesGerais'>Ensino Medio Incompleto</option>
             <option selected value='InformacoesGerais'>Ensino Medio Completo </option>
             <option selected value='EnsinoSuperior'>Superior Incompleto</option>
             <option selected value='EnsinoSuperior'>Superior Completo</option>

            

            </select><br/>

            <input type="submit" value="Proxima Etapa" />
          </form>
          
        </div>
    )
}