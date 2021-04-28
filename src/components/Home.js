import React from 'react'
import Heading from './Heading'
import RegionButton from './RegionButton'
import Title from './Title'
import swone from '../images/swone.png'
import mw from '../images/mw.png'
import ne from '../images/ne.png'
import seone from '../images/seone.png'
import nw from '../images/nw.png'


const Home = (props) => {

    const handleClick = (e) => {
        let region = e.target.textContent.toLowerCase()
        props.history.push(`/${region}/parks`) 
    } 

    const homeStyle = {
        textAlign: 'center',
        padding: '2%'   
    }

    return (
        <div className="home" style={homeStyle}>
            <Title>Park Picker</Title>
            <Heading textColor='black'>Choose a region of the country to learn more about its National Parks</Heading>
            <RegionButton onClick={handleClick} background={swone} color='white' borderColor='brown'>Southwest</RegionButton>
            <RegionButton onClick={handleClick} background={nw} color='white' borderColor='darkgreen'>Northwest</RegionButton>
            <RegionButton onClick={handleClick} background={mw} color='white' borderColor='darkblue'>Midwest</RegionButton>
            <RegionButton onClick={handleClick} background={seone} color='darkblue' borderColor='yellow'>Southeast</RegionButton>
            <RegionButton onClick={handleClick} background={ne} color='darkblue' borderColor='purple'>Northeast</RegionButton>
        </div>
    )
}

export default Home 