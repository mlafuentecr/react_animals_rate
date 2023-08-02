import { useState } from 'react';
import { styled } from "styled-components";

import {Button} from './components/Button'
import AnimalRender from './components/AnimalRender';


function App() {
  
  const AnimalArr = ['Bird', 'Cow', 'Horse', 'Dog'];
  const [animalCount, setanimalCount] = useState(0);
  const [animals, setanimals] = useState([]);

  function loadAnimals() {
    if(animalCount<=3 ){
      setanimals([ ...animals, AnimalArr[animalCount]] );
      setanimalCount(animalCount + 1)
    };
  }
  
  function clearAnimals() {
    setanimals( [] );
    setanimalCount(0);
  }

  const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  `

  return (
    <div className="App">
      <ButtonWrap>
        <Button onClick={loadAnimals}  size="large">Add Animals </Button>
        <Button onClick={clearAnimals}  size="large"> clearAnimals </Button>
      </ButtonWrap>
      <AnimalRender animals={animals}/> 
    </div>
  );


}

export default App;
