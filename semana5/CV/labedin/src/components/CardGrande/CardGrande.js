import React from 'react';
import { CardGrandcss } from './CardGrandecss'

function CardGrande(props) {
    return (
        <CardGrandcss>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </CardGrandcss>
    )
}

export default CardGrande;