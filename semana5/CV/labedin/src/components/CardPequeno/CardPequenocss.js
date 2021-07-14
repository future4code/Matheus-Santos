import styled from "styled-components";


export const CardPequenocss = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;

  img {
    width: 40px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

    h4 {
      margin-bottom: 15px;
    }
  }
`;
