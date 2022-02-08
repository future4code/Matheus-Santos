import React from "react";
import styled, { CardVideoContainer } from "../../components/CardVideo/CardVideoContainer";

export const CardVideo = (props) => {
  return (
    <CardVideoContainer onClick={props.onClick}>
      <img src={props.video} alt="Imagem do vídeo" />
      <h4>{props.titulo}</h4> 
    </CardVideoContainer>
  );
};
