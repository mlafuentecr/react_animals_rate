import {StyledAnimalWrap} from './StyledAnimalWrap';
import AnimalBox from './AnimalBox'
function AnimalRender({animals}){

    if(animals.length>0){
      return <StyledAnimalWrap >{ animals.map(animal => <AnimalBox key={animal} animal={animal} />)}</StyledAnimalWrap>;
    }else{
      return 'Nothing';
    }
 
}
export default AnimalRender;