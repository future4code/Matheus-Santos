import React from 'react' 
import { Estilizacao } from './Estilizacao' 

class Etapa2 extends React.Component {
    render(){
        return(
            <Estilizacao>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3> 
                <label>5. Qual o curso?</label> 
                <input /> 
                <label>6. Qual a unidade de ensino?</label> 
                <input />
            </Estilizacao>
        )
    }
} 

export default Etapa2