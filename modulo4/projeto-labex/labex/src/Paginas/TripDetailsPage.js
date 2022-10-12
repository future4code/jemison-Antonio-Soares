import React from "react";
import axios from "axios";
import { URLBase } from "../API/apis";
import { useProtectedPage } from "../hooks/useProtectePage";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { ConteinerPai,Button, HeaderPAGES } from "../CSS/TripDetailsPageSTYLED";




  export function AprovacaoDeViagensAdm () {

    
    useProtectedPage() 

    const navigate = useNavigate();

    const pathVoltar = () =>{
        navigate(-1)
    }

    const params = useParams()

    const [data, loading, erro] = useRequestData(`${URLBase}/trip/${params.id}`)
      
    
    const listCandidates = data && data.trip&&data.trip.candidates.map((item) => {
     return( 
     <section key={item.id}>
        <div>
            <p>Nome: {item.name}</p> 
            <p>Idade: {item.age}</p>
            <p>País: {item.country}</p>
            <p>Profissão: {item.profession}</p>
            <p>Motivo: {item.applicationText}</p>
        </div>
        <button onClick={() =>decideCandidate(item.id, true)}>Aprovado</button>
        <button onClick={() =>decideCandidate(item.id, false)}>Reprovado</button>
    </section>
    )})

    const listApproved = data && data.trip&&data.trip.approved.map((item) =>{
        return(
            <div>
                <p>{item.name}</p>
            </div>
        )
    })

    
    const decideCandidate = (id, decision) =>{
        const body ={
            approve : decision
        }

        const headers = {
            headers:{
                auth:localStorage.getItem('token'),
            }
        }

        axios.put(`${URLBase}/trips/${params.id}/candidates/${id}/decide`, body, headers)
            .then((response)=>{
                if(decision === true){
                    alert('aceito')
                }else{alert('reprovado')}
            })
            .catch((error) =>{
                console.log(error)
            })
    }

    return(
        <ConteinerPai>
             
            <div>
                {data ? (
                        <h1>{data.trip.name}</h1>
                    ): <h1>Algo deu errado</h1>}
                     <Button onClick={pathVoltar}>Voltar</Button>
            </div>
            
            {loading && <p> Carregando  Usuários</p>}
            {!loading && erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading && data && data.trip && data.trip.candidates.length ? listCandidates: <p> Sem candidatos</p> }
            {!loading && data && data.trip && data.trip.candidates === 0 && (<p> Não há viagens</p>)}

            <div>
                <HeaderPAGES>APROVADOS</HeaderPAGES>
                {listApproved}
            </div>
            
        </ConteinerPai>
    )
}



