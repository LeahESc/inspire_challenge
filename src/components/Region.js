import React from 'react'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import ReactCardFlip from 'react-card-flip'

const Region = ({parks, match, history}) =>  {
    const stateHash = {midwest: ["OH", "IN", "ND", "SD", "MO", "NE", "KS", "MI", "IA", "MI", "IL"],
                        northeast: ["ME", "VT", "RI", "NY", "MA", "CT", "NH", "MD", "PA", "NJ", "DE"], 
                        southeast: ["KY", "TN", "NC", "VA", "WV", "GA", "FL", "SC", "AL", "MS", "LA", "AR"],
                        }
    const regionName = match.url.split('/')[1].replace(/[\W/]/, '' ).toLowerCase()
    // const [stateCodes, setParks] = useState() 
    // const regionParks = {parks}
    let setRegionParks
    
    useEffect(() => {
        if (regionName === "midwest") {
            setRegionParks = parks.filter(park => stateHash.midwest.includes(park.states))
        } else if (regionName === "northeast") {
            setRegionParks = parks.filter(park => stateHash.northeast.includes(park.states))
        } else if (regionName == "southeast") {
            setRegionParks = parks.filter(park => stateHash.southeast.includes(park.states))
        } else if (regionName === "southwest") {
            setRegionParks = parks.filter(park => stateHash.southwest.includes(park.states))
        } else if (regionName === "pacific northwest") {
            setRegionParks = parks.filter(park => stateHash.northwest.includes(park.states))
        } 
        return setRegionParks.map(park => <Park name={park.fullName} id={park.id} description={park.descriptio} image={park.images[0].url} imgcaption={park.images[0].title}/>)
    }, [])
   
    return (
        <div className="region">
            <h1>hello</h1>
            <p> this component will display all the parks as parkcards in a designated region</p>
            {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <ParkCardFront image={setRegion}>
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_FRONT_CCOMPONENT>
  
          <YOUR_BACK_COMPONENT>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_BACK_COMPONENT>
        </ReactCardFlip> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      parks: state.parksReducer.parks
    }
}

export default connect(mapStateToProps)(Region);