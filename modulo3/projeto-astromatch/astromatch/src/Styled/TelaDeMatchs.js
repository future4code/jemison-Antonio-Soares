import styled from 'styled-components'



export const ListaDeMatch = styled.div`

   display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: flex-start;
    border: 2px solid black;
    background-color: whitesmoke;
    margin-left: 30px;
    min-height: 600px;
    max-width: 400px;
    width: 100%;
    padding: 10px 150px;
    align-items: center;
    margin-top: 10px;

` 
export const Header = styled.div`
   border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

`

export const ContainerMatchs = styled.div`
    box-shadow: 1px 1px 1px 1px ;
    margin-top: 20px;
    
  
   
   img{
       width:50px;
       height:50px;
       border-radius:50px;
       margin-top:8px;
       margin-left:10px;
   }
   
   nome{
    font-size:20px ;
    margin-left:150px;
   }

`

export const BotaoMain = styled.div`
    margin-top: 30px;
    margin-left: 150px;
    size: 150px;

    
    button{
        cursor:pointer;
        border: none;
        background-color: whitesmoke;
    }
    
    img{
      margin-left:100px;
      width:50px;
    }
    

` 

export const BotaoHeader = styled.div`
    margin-left: 100px;


` 
