import React, { Component } from 'react'
import Heading from './Heading'
// import React from 'react'
import {connect} from 'react-redux'
import Park from './Park'
import uuid from 'react-uuid'


class Region extends Component {
    
    state = {
        regionName: '',
        regionParks: []
    }


    componentDidMount() { 
        const stateHash = {midwest: ["OH", "IN", "ND", "SD", "MO", "NE", "KS", "MI", "IA", "MI", "IL"],
        southeast: ["KY", "TN", "NC", "VA", "WV", "GA", "FL", "SC", "AL", "MS", "LA", "AR"],
        northwest: ["MT", "WY", "OR", "WA", "AK"], 
        northeast: ["ME", "VT", "RI", "NY", "MA", "CT", "NH", "MD", "PA", "NJ", "DE"], 
        southwest: ["NV", "AZ", "NM", "UT", "CO", "CA", "HI", "OK"]} 

        const regionName = this.props.match.url.split('/')[1].toLowerCase()
        if (regionName === "midwest") {
            this.setState({
                regionName: "midwest",
                regionParks: this.props.parks.filter(park => stateHash.midwest.includes(park.states))
            })
        } else if (regionName === "northeast") {
            this.setState({
                regionName: "northeast",
                regionParks: this.props.parks.filter(park => stateHash.northeast.includes(park.states)).slice(0,40)
            })
        } else if (regionName === "southeast") {
            this.setState({
                regionName: "southeast",
                regionParks: this.props.parks.filter(park => stateHash.southeast.includes(park.states))
            })
        } else if (regionName === "southwest") {
            this.setState({
                regionName: "southwest",
                regionParks: this.props.parks.filter(park => stateHash.southwest.includes(park.states))
            })        
        } else if (regionName === "northwest") {
            this.setState({
                regionName: "northwest",
                regionParks: this.props.parks.filter(park => stateHash.northwest.includes(park.states))
            })
        } 
    }

    render() { 

        const parksContainer = {
            display: 'block',
            textAlign: 'center'
        }

        return (
            <>
                <Heading textColor="brown">PARKS IN THE {this.state.regionName.toUpperCase()} </Heading>
                
                <div className="parks-container" style ={parksContainer}>
                    {this.state.regionParks.map(park => <Park key={uuid()} region={this.state.regionName} name={park.fullName} id={park.id} description={park.description} image={park.images[0].url? park.images[0].url : "https://www.nps.gov/common/uploads/structured_data/3C7D2D96-1DD8-B71B-0BB7225181B9E6B6.jpg" } />)}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      parks: state.parksReducer.parks
    }
}
export default connect(mapStateToProps)(Region);