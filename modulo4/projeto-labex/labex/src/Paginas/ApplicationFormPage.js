import React, { useEffect, useState } from "react";
import axios from 'axios'
import { URLBase } from "../API/apis";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { Contry } from "../paises/country";
import { ConteinerPai, Formulario,Button,HeaderPAGES,Header } from "../CSS/ApplicationFormPageSTYLED";


    export function UsuarioSeIncreverParaViagem () {

       
        const navigate = useNavigate ()

        const pathVoltar = () =>{
          navigate(-1)
      }
      
          const [idTrip, setIdTrip] = useState('')
      
          const {form, onChange, clear} = useForm({ name: "", age: "",applicationText: "",profession: "",country: ""})
      
          
          const ApplytoTrip = () => {
      
            const body = {
              ... form
            }
      
            axios.post(`${URLBase}/trips/${idTrip}/apply`,body)
              .then((response) => {
                console.log(response)
              })
              .catch((err) => {
                console.log(err)
              })
          }
      
          const upDate = (e) =>{
            setIdTrip(e.target.value)
          }
         
          
      
          const [data] = useRequestData(`${URLBase}/trips`)
      
          const listaDeViagens = data && data.trips.map((item) => {
            return <option key={item.id} value={item.id}> {item.name}</option>;
        })
      
      
       
        
          const getContry = Contry.map((list) =>{
              return (
                  <option  key={list} > {list} </option>
              )
          })
      
      
          console.log(idTrip)
          return(
              <ConteinerPai>
                <HeaderPAGES>Formulário de Viagem</HeaderPAGES>
                  
                  <Formulario>
                    
                      <select 
                          placeholder='ESCOLHA SUA VIAGEM '
                          name="id"
                          onChange={upDate}
                          value={idTrip}
                          >
                          <option value="" hidden >Escolha sua viagem</option>
                          {listaDeViagens}
                      </select>
      
                      <input
                          type={"text"}
                          placeholder="NOME COMPLETO"
                          name="name"
                          onChange={onChange}
                          required
                          pattern={"^.{3,}$"}
                          title="name: mínimo 3 letras e menos de 15"
                          value={form.name }
                      />
      
                      <input
                          type={"number"}
                          placeholder="IDADE +18 "
                          name="age"
                          onChange={onChange}
                          required
                          min="18"
                          title="Apenas maiores de 18 anos"
                          value={form.age}
                      />
      
                      <select
                          name="country"
                          onChange={onChange}
                          value={form.country}
                      > 
                      <option> Escolha seu país</option>
                          {getContry}
                      </select>
      
                      <input
                          type={"text"}
                          placeholder="PROFISSÂO"
                          name="profession"
                          onChange={onChange}
                          required
                          pattern="[a-zA-Z ]{10,30}"
                          title="mínimo de 10 caracteres"
                          value={form.profession}
                      />
      
                      <input
                          type={"text"}
                          placeholder="POR QUE VOCÊ QUER IR ?"
                          name="applicationText"
                          onChange={onChange}
                          required
                          pattern="[a-zA-Z ]{30,100}"
                          title="mínimo de 30 caracteres"
                          value={form.applicationText}
                      />
                  <Button onClick={pathVoltar}>VOLTAR</Button>
                  <Button onClick={ApplytoTrip}>ENVIAR FORMULARIO</Button>
                  </Formulario>
                  
      
                  
              </ConteinerPai>
        )
      }