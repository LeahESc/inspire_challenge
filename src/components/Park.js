import React  from 'react'
import ReactCardFlip from 'react-card-flip'
import ParkCardFront from './ParkCardFront'
import ParkCardBack from './ParkCardBack'
import {useState} from 'react'

const Park = ({name, id, description, image, region}) => {

  const [isFlipped, setFlipped] = useState();
  
  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  }
  
  const cardContainer  = {
    display: 'inline-block',
    padding: '.8rem',
    maxWidth: '60rem',
    maxHeight: '40rem',
    verticalAlign: 'bottom'
  }

  return (
    <div className="card-container" style={cardContainer}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <ParkCardFront handleClick={handleClick} id={id} image={image} name={name} region={region}></ParkCardFront>
        <ParkCardBack handleClick={handleClick} description={description} name={name}></ParkCardBack>
      </ReactCardFlip>
    </div>
  )
}
  
    

export default Park;