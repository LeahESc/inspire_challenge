import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ParkCardFront = ({handleClick, image, name, parkId}) => {

    const goToShoPage = () => { 

    }

    return (
        <Card >
            <Image src={image} wrapped ui={false} style={{ borderRadius: 5, padding: '.5rem' }} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Button onClick={handleClick}>Learn More</Button>
                <Link className="btn"  to={`${parkId}`}> Take Me There!</Link>
            </Card.Content>
      </Card>
    )
}
export default ParkCardFront