import React from 'react'
import Heading from './Heading'
import RegionButton from './RegionButton'

const Home = (props) => {

    const handleClick = (e) => {
        let region = e.target.textContent
        props.history.push(`/${region}/parks`) 
    } 


    return (
        <div>
        <Heading>Select the region of the country you'll Be traveling to! </Heading>
        <RegionButton onClick={handleClick} background='papayaWhip' textColor='orange'>Southwest</RegionButton>
        <RegionButton onClick={handleClick} background='papayaWhip' textColor='orange'>Nortwest</RegionButton>
        <RegionButton onClick={handleClick} background='papayaWhip' textColor='orange'>Midwest</RegionButton>
        <RegionButton onClick={handleClick} background='papayaWhip' textColor='orange'>Southeast</RegionButton>
        <RegionButton onClick={handleClick} background='papayaWhip' textColor='orange'>Northeast</RegionButton>
        </div>
    )
}

export default Home 