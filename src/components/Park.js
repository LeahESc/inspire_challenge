import React  from 'react'
import ReactCardFlip from 'react-card-flip'
import ParkCardFront from './ParkCardFront'
import ParkCardBack from './ParkCardBack'
import {useState} from 'react'

const Park = ({name, id, description, image, imgcaption, region}) => {

  const [isFlipped, setFlipped] = useState();
  const [rotation, setRotation] = useState(0);

  // useEffect(() => {
  //   if (isFlipped !== isFlipped) {
  //     setFlipped(isFlipped);
  //     setRotation((c) => c + 180);
  //   }
  // }, [isFlipped]);

  
    const handleClick = (e) => {
      e.preventDefault();
      setFlipped(!isFlipped);
    }
  

  return (
    <div className="card-container">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <ParkCardFront handleClick={handleClick} parkId={id} image={image} name={name} region={region}></ParkCardFront>
      <ParkCardBack handleClick={handleClick} description={description} name={name}></ParkCardBack>
    </ReactCardFlip>
    </div>
  )
}
  
    

export default Park;