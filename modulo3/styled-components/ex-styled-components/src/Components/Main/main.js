import styled from 'styled-components'




export const MainPai= styled.div`
   
    color:black;
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    grid-template-rows: repeat(2, 100px);
    margin: 3px 4px 7px 12px;
    width:98%;
    
    


`
 export const NavDireita =styled.nav`
     background-color:orange;
     width:100%;
     height:450%;

`
export const NavMeio =styled.nav`
    
     width:100%;
     height:350%;
     display:flex;
     align-items:flex-end;

     label,input,button{
    margin-left:40px;
        align-items:center;
     }

     input{
         height:15px;
         width:200px;
     }
     

    

`

export const NavEsquerda=styled.nav`
   background-color:orange;
    width:100%;
    height:450%; 
`
