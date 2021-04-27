import React from 'react'
import {connect} from 'react-redux'
import { Container, List } from 'semantic-ui-react'
import Carousel from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Heading from './Heading'

const ParkShow = ({parks, match, history}) => {
    
    const matchedPark = parks.find(park => park.id == match.url.split('/')[3])

    return (
        <div> 
            <h1>Hello!</h1>
            {/* <Carousel >
                <div>
                    <img src={matchedPark.images[0].url} />
                    <p className="legend">{matchedPark.images[0].title}</p>
                </div>
                <div>
                    <img src={matchedPark.images[1].url} />
                    <p className="legend">{matchedPark.images[1].title}</p>
                </div>
                <div>
                    <img src={matchedPark.images[1].url} />
                    <p className="legend">{matchedPark.images[2].title}</p>
                </div>
            </Carousel> */}
            <Container>
            <Heading textColor='crimson'>
                {matchedPark.fullName}
            </Heading>
            <div className="park-description">
                {matchedPark.description}
            </div>
            <div className="park-description">
                {matchedPark.weatherInfo}
            </div>
            <List>
                {matchedPark.activities.map(a =>  <List.Item icon='leaf' content={a.name} />)}
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