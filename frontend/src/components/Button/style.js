import styled from "styled-components";

export const Container = styled.button`
  height: 48px;
  width: 100%;

  cursor: pointer;
  outline: none;
  border: 0;
  border-radius: 5px;

  background-color: ${({theme: {color}})=> color.tomato100};
  color: ${({theme: {color}})=> color.light100};
`