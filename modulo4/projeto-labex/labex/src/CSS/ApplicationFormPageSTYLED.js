import styled from "styled-components"


export const ConteinerPai=styled.div`
    width: max-content;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `


export const Formulario =styled.form`
    display: flex;
    flex-direction:column;
    margin: 0 auto;
    width: max-content;
    padding: 30px;
    border: 5px solid blue ;
    
    label{
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        border-top: 3px solid black;
        border-bottom: 1px solid black;
    }
    input{
        font-size: 16px;
        padding: 5px;
        border: 2px solid ;
        margin: 4px 0 4px 0;
        font-weight: bold;
    }

    select{
        background-color:#836FFF;
        font-size: 16px;
        padding: 5px;
        border: 2px solid ;
        margin: 4px 0 4px 0;
        font-weight: bold;
    }
  
     `


export const Button=styled.button`
        padding:10px ;
        width: 100%;
        margin-top: 2px;
        font-weight: bold;
        color: white;
        font-size:20px ;
        :hover{
            background-color: red;
        }
`

export const Header=styled.header`
        padding:10px ;
        width: 50%;
        margin-top: 2px;
        background: #836FFF ;
        font-weight: bold;
        color: black;
        font-size:15px ;
             
`

export const HeaderPAGES=styled.header`
        padding:10px ;
        width: 100%;
        margin-top: 10px;
        background: #483D8B ;
        font-weight: bold;
        color: black;
        font-size:15px ;
        margin-bottom:20%;

             
`