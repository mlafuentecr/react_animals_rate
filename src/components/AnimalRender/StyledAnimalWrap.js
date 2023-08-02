import { styled } from "styled-components";

const StyledAnimalWrap = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > a{
  border: 2px solid purple;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  position: relative;

  &:hover{
    background-color:darkgrey;
  }
  }

  & img{
    border: 1px solid gray;
    padding: 10px;
    max-width: 50px;
    background-color: white;
  }
  & span{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: medium;
    margin-top: 10px;
    font-weight: 400;
  
  }
  & .heart{
    border: 0px solid red;
    display: flex;
    position: absolute;
    background-color: transparent;
    top: -16px;
    right: -8px;
    width: 30px;
  height: 30px;
    & img{
      width: 100%;
    }
    
  }
  & .heart2{
  width: 30px;
  height: 30px;
  }

`

export {StyledAnimalWrap}