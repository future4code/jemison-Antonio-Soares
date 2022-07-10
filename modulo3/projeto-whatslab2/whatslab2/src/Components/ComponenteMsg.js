import React, {useState} from "react";
import { InputMensagem, Balao, Section, MainInput, ConteinerPai } from './StyledComMsg'
import Click from './img/click.png'

export function Main () {

    const [inputMensagem, setInputMensagem] = useState ("")
    const [inputUsuario, setInputUsuario] = useState ("")
    const [usuario, setUsuario] = useState ([{nome:" digitando.... ", mensagem:" "}])

    function handleInputUsuario (e){
        setInputUsuario(e.target.value)
    }
    function handleInputMensagem (e){
        setInputMensagem(e.target.value)
    }

    const addUsuario = (e) => {
        e.preventDefault()

        setUsuario ([...usuario, {nome:inputUsuario, mensagem:inputMensagem}])
        setInputMensagem("")
        setInputUsuario("")
    }
   
    const mensagensMapeada = usuario.map((pessoa, index) => {
        return(
            <Balao key={index}>
                <b>
                  <u>
                  <p>{pessoa.nome}</p>
                  </u>
                </b>
                <p>{pessoa.mensagem}</p>
            </Balao>
        )
    })

  


    
    return (
        <ConteinerPai>
         
            <Section>
           
                <div>
                    {mensagensMapeada}
                </div>
                <MainInput>
                   
                    <label/>
                        <input 
                        placeholder="Nome" 
                        value = {inputUsuario}
                        onChange = {handleInputUsuario}
                        /> 
                    <label/>
                   
                    <InputMensagem>

                    <input 
                        placeholder="Escreva sua mensagem"  
                        value = {inputMensagem}
                        onChange = {handleInputMensagem}
                    />
                    </InputMensagem> 
                    <img className="click" src={Click} alt="" onClick={addUsuario}></img>  
                </MainInput>
                
            </Section>
            
            
        </ConteinerPai>
        
    );
  }

