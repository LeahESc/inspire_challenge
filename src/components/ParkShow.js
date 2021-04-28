import React from 'react'
import {connect} from 'react-redux'
import { Container, List, Image } from 'semantic-ui-react'
import Heading from './Heading'
import uuid from 'react-uuid'

const ParkShow = ({parks, match}) => {
    
    const matchedPark = parks.find(park => park.id == match.url.split('/')[3])

    return (
        <div> 
            <Image key={uuid()} centered src={matchedPark.images[0].url} size='big'></Image>
            <Container key={uuid()} >
            <Heading textColor='brown'>
                {matchedPark.fullName}
            </Heading>
            <div className="park-description">
                {matchedPark.description}
            </div>
                <h2>Weather Information:</h2>
            <div className="park-description">
                {matchedPark.weatherInfo}
            </div>
            <List>
                <h2>Activities: </h2>
                {matchedPark.activities.map(a => <List.Item key={uuid()} icon='leaf' content={a.name} />)}
            </List>
            </Container>
            </div>
      
    )
}
const mapStateToProps = (state) => {
    return {
      parks: state.parksReducer.parks
    }
}

export default connect(mapStateToProps)(ParkShow);