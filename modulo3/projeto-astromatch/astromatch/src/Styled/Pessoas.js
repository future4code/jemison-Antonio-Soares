import styled from 'styled-components'






export const medidaImagens = styled.img`
  width: 100%;
  height: 100%;
`;


export const ImagemPessoas = styled.div`
      height: 400px;
      position: relative;
      width: 300px;
      
      
      
` 

export const Imagem = styled(medidaImagens)`
  object-fit: contain;
  object-position: center;
  position: relative;
  
`

export const DescricaoPessoa = styled.div`
  height: 50%;
  position: absolute;
  bottom: 0px;
  width: 30%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5px;
  margin-top:150px;
`

export const Nome = styled.p`
  font-weight: bold;
  font-size: 24px;
  
`

export const Biografia = styled.p`
  margin-top: 5px;
`

export const FooterBotao = styled.div`
    display:flex;
    justify-content: space-between;
    background: none;
    margin-top: 250px;
    
    button{
        cursor:pointer;
        border: none;
        background-color: whitesmoke;
    }
    
    img{
      
      width:70px
    }
` 