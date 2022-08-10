
import {Card,Header,Button} from '../Styled/TelaInicial';
import CardDePessoas from './Pessoas';
import logo from '../Imagens/logo.jpeg'


function TelaInicial(props) {



    return(
            <Card>

                <Header>

                    <div>
                        
                        <img src={logo}></img>
                        <h1>AstroMatch </h1>
                        <h6>(Projeto Baseado no APP Tinder )</h6>
                        
                        
                    </div>

                    <Button>
                        <button onClick={() => props.trocaTela('matchs')}>Matchs ❤️</button>
                    </Button>

                </Header>

              <CardDePessoas />


            </Card>
          
    )
}

export default TelaInicial;