import React from 'react' 
import { CardPequenocss } from './CardPequenocss' 


function CardPequeno(props) {
    return (
        <CardPequenocss>
            <img src={ props.imagem} /> 
            <div>
                <h4>{ props.nome }</h4> 
                <p>{ props.descricao }</p>
            </div>
        </CardPequenocss>
    )
} 
export default CardPequeno;