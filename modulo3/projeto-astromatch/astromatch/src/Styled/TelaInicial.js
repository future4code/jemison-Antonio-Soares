import styled from 'styled-components'


export const Card = styled.div`
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
    padding: 10px 100px;
    align-items: center;
    margin-top: 10px;

` 

export const Header = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
   
    img{
        width:90px;
        height:60px;
        margin-right:100px;
        border-radius: 70%;
    }
  
` 

export const Button = styled.div`
    margin-left: 200px;


` 