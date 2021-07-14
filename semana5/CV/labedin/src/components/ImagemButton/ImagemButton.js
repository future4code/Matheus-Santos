import React from 'react';
import { ImagemButtoncss } from './ImagemButtoncss';

function ImagemButton(props) {
    return (
        <ImagemButtoncss>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButtoncss>

    )
}

export default ImagemButton;