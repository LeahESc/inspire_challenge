import React from 'react'
import {Card, Button } from 'semantic-ui-react'


const ParkCardBack = ({handleClick, description, name}) => {


    return (
        <Card>
            <Card.Content header={name}/>
            <Card.Content description={description} />
            <Button  basic color='teal' content='Teal' onClick={handleClick}>Flip</Button>
        </Card>
    )
}
export default ParkCardBack