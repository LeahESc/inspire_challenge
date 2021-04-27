import React  from 'react'

const ParkCark = ({name, id, description, image, imgcaption}) => {

  const [isFlipped, setFlipped] = useState(props.isFlipped);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(props.isFlipped);
      setRotation((c) => c + 180);
    }
  }, [props.isFlipped]);

  
    const handleClick = (e) => {
      e.preventDefault();
      setFlipped(!isFlipped);
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <YOUR_FRONT_CCOMPONENT>
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_FRONT_CCOMPONENT>
  
          <YOUR_BACK_COMPONENT>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_BACK_COMPONENT>
        </ReactCardFlip>
      )
    }
  }
    

export default ParkCard;