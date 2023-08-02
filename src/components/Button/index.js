import { styled } from "styled-components";

const Button = styled.button`
    border: 2px solid red;
    min-width:300px;
    min-height: 50px;
    border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover{
    background-color:darkgrey;
  }
`

export {Button}