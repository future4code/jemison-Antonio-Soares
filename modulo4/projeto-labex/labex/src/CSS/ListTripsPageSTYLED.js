import styled from "styled-components"



export const DetalhesDasTrips=styled.div`
    display: flex;
    flex-direction:column;
    margin: 0 auto;
    width: 50%;
    padding: 30px;
    border: 5px solid #483D8B ;
    
  
    p{
        font-size: 16px;
        padding: 5px;
        border: 1px solid ;
        margin: 4px 0 4px 0;
        font-weight: bold;
        text-align: center;
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
        width: 50%;
        margin-top: 2px;
        background: #483D8B ;
        font-weight: bold;
        color: black;
        font-size:15px ;
             
`

export const FooterTrips=styled.div`

    position:relative;
    margin-top:3%;
    margin-bottom:5%;
    width: max-content;
    padding: 30px;
    border: 5px solid #483D8B ;
    
`