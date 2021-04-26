import React from 'react'
import Heading from './Heading'
import RegionSection from './RegionSection'

const Home = () => {

    const handleClick = (e) => { 
        
    } 
    return (
        <div>
        <Heading>Select the region of the country you'll Be traveling to! </Heading>
        <button onClick={handleClick}>SouthWest</button>
        <button onClick={handleClick}>Pacific NorthWest</button>
        <button onClick={handleClick}>Pacific NorthWest</button>
        <RegionSection background='papayaWhip' textColor='orange' ></RegionSection>/RegionSection>
        </div>
    )
}

export default Home 