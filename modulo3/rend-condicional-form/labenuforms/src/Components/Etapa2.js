import React ,{ useState } from 'react'


export function EnsinoSuperior({mudarPagina}) {

// estados

  const [curso , setCurso]= useState("")
  const [unidade , setUnidade]= useState("")

 
  // eventos
function handleCurso  (e) {
    setCurso(e.target.value)
   }

function handleUnidade  (e) {
    setUnidade(e.target.value)
   }


function handleSubmite  (e) {
    e.preventDefault()
    mudarPagina('04')
}




    return(
        <div>

           <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

           <form  onSubmit={handleSubmite}  />

          <label>5. Qual Curso ? </label><br/>
          <input type="text" value={curso} onChange={handleCurso} /><br/>

          <label>6. Qual a Unidade ? </label><br/>
          <input type="number" value={unidade} onChange={handleUnidade}  /><br/>

        </div>

    )
}