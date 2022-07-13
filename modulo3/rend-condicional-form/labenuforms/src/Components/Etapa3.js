import React, {useState} from 'react'

export function  InformacoesGerais ({mudarPagina}) {
    
// estados

const [graducao , setGraducao]= useState('')
const [cursoComplementar , setCursoComplementar]= useState('')


// eventos
function handleGraduacao (e) {
  setGraducao(e.target.value)
 }

function handleCursoComplementar (e) {
  setCursoComplementar(e.target.value)
 }

function   handleSubmite  (e) {
  e.preventDefault()
  mudarPagina('EtapaFinal')
}




  return(

      <div>

         <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>

         <form  onSubmit={handleSubmite}  />

        <label>7. Por que você não terminou um curso de graduação ? </label><br/>
        <input type="text" value={graducao} onChange={handleGraduacao} /><br/>



        <label>8. Você fez algum curso complementar ? </label><br/>

        <input type="text" value={cursoComplementar} onChange={handleCursoComplementar} /> <br/>


      </div>

  )
}