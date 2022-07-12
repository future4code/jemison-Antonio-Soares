import styled from "styled-components";



export const ConteinerPai = styled.div`
display: flex;
align-items: center;
margin-left: 30vw;
margin-top: 1vw;



`




export const Balao = styled.div`
    border: solid .04vw;
    border-radius: 1vw;
    box-shadow: 0.2vw 0.2vw 0.5vw grey;
    width:fit-content ;
    align-items: flex-end;
    margin: 1vw;
`


export const Section = styled.section`
border: 0.02vw solid;
height: 80vh;
width: 40vw;
display: flex;
flex-direction: column;
justify-content: flex-end;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
word-break:break-all;

img{
    margin-left:30px;
    width:40px;

}


`


export const MainInput = styled.main`
display: flex;
margin: 0.5vw;


button{
    background-color:green;
     margin: 1px;
       color: white;
       padding: 10px;
       border-radius: 100%;
    

}
input {
    height:30px;
    width:150px
}
`

export const InputMensagem = styled.div`
margin: 0vw 0.5vw ;

input {
    width:250px
}
`

