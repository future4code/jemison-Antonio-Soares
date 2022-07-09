import React, {useState} from "react";
import { InputMensagem, Balao, Section, MainInput, ConteinerPai } from './StyledComMsg'

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
                <p>{pessoa.nome}</p>
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
                        placeholder="Escreva seu nome" size={15}
                        value = {inputUsuario}
                        onChange = {handleInputUsuario}
                        /> 
                    <label/>
                   
                    <InputMensagem>
                    <input 
                        placeholder="Escreva sua mensagem" size={40}
                        value = {inputMensagem}
                        onChange = {handleInputMensagem}
                    />
                    </InputMensagem> 
                    <button onClick={addUsuario}>Enviar</button>
                </MainInput>
                
            </Section>
        </ConteinerPai>
    );
  }


