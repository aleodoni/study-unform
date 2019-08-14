import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  height: 320px;
  padding: 0 30px;
  background: #7159c1;
  color: #fff;

  display: flex;
  align-items: center;
`;

export const Formulario = styled.div`
  label {
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;
    border: 2px solid #25242c;
    border-radius: 5px;
    padding: 15px 21px;
    margin-top: 8px;
    font-size: 14px;
    margin-bottom: 15px;
    color: #19181f;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 15px 21px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;
    &:hover {
      cursor: pointer;
      background: ${darken(0.1, "#7159c1")};
    }
  }

  h1 {
    color: #fff;
    margin-bottom: 15px;
  }
`;
