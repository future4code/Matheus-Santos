import React from "react";
import styled from "styled-components";

export const Estilizacao = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;

  input {
    margin: 15px;
  }

  select {
    margin: 15px;
  }
`; 

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`;