import React, { Component } from 'react'
// import React from 'react'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import Park from './Park'
import uuid from 'react-uuid'


class Region extends Component {
    
    state = {
        regionName: '',
        regionParks: []
    }

    componentDidMount() { 
        const stateHash = {midwest: ["OH", "IN", "ND", "SD", "MO", "NE", "KS", "MI", "IA", "MI", "IL"],
        northeast: ["ME", "VT", "RI", "NY", "MA", "CT", "NH", "MD", "PA", "NJ", "DE"], 
        southeast: ["KY", "TN", "NC", "VA", "WV", "GA", "FL", "SC", "AL", "MS", "LA", "AR"],
        northwest: ["MT", "WY", "OR", "WA", "AK", "CA"], 
        southwest: ["NV", "AZ", "NM", "UT", "CO", "CA", "HI", "OK"]} 

        const regionName = this.props.match.url.split('/')[1].replace(/[\W/]/, '' ).toLowerCase()
        if (regionName === "midwest") {
            this.setState({
                ...this.state,
                regionParks: this.props.parks.filter(park => stateHash.midwest.includes(park.states))
            })
        } else if (regionName === "northeast") {
            this.setState({
                ...this.state,
                regionParks: this.props.parks.filter(park => stateHash.northeast.includes(park.states))
            })
        } else if (regionName === "southeast") {
            this.setState({
                ...this.state,
                regionParks: this.props.parks.filter(park => stateHash.southeast.includes(park.states))
            })
        } else if (regionName === "southwest") {
            this.setState({
                ...this.state,
                regionParks: this.props.parks.filter(park => stateHash.southwest.includes(park.states))
            })        
        } else if (regionName === "northwest") {
            this.setState({
                ...this.state,
                regionParks: this.props.parks.filter(park => stateHash.northwest.includes(park.states))
            })
        } 
    }

    render() { 

    return (
        <div className="region">
            <h1>hello</h1>
            <div className="parks-container">
            {this.state.regionParks.map(park => <Park key={uuid()} name={park.fullName} id={park.id} description={park.description} image={park.images[0].url? park.images[0].url : "https://www.nps.gov/common/uploads/structured_data/3C7D2D96-1DD8-B71B-0BB7225181B9E6B6.jpg" } imgcaption={park.images[0].title}/>)}
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      parks: state.parksReducer.parks
    }
}

export default connect(mapStateToProps)(Region);