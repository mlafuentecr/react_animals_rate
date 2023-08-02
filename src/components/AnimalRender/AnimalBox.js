import { useState } from 'react';

export default function AnimalBox({animal}) {
    const [animalLiked, setanimalLiked] = useState(0);
    const [heardType, setheardType] = useState('');

    function animalLike(){
      
        setanimalLiked(animalLiked+1)
   
        
        if(animalLiked===0) setheardType('')
        if(animalLiked===1) setheardType('heart1')
        if(animalLiked===2) setheardType('heart2')
        if(animalLiked === 3)  {
            setanimalLiked(1)
            setheardType('')
        }

      }

  return (
    <a onClick={animalLike}>
        <img src={require(`../../assets/images/${animal}.png`)} alt={animal} /> 
        <div>
            {animal} 
            {heardType !=="" ? <img className={`heart ${heardType}`} src={require(`../../assets/images/${heardType}.png`)} alt={animal} /> : ''}
        </div>
    </a>
  )
}
