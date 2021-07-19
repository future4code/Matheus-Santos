import React from 'react' 
import { Estilizacao } from './Estilizacao'

class Etapa1 extends React.Component {    
    render(){
        return (
            <Estilizacao>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <label> 1. Qual o seu nome? </label> 
                <input />
                <label> 2. Qual a sua idade? </label> 
                <input /> 
                <label> 3. Qual seu email? </label> 
                <input /> 
                <label> 4. Qual a sua escolaridade? </label> 
                <select> 
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option> 
                    <option value="Ensino médio completo">Ensino médio completo</option> 
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option> 
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
            </Estilizacao>
        )
    }
} 

export default Etapa1