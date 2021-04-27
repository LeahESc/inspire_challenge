import styled from 'styled-components'

const RegionButton = styled.button`
    max-width: 40%;
    max-heighth: 20%; 
    margin-left: 10%;
    margin-bottom: 5%;
    padding: 30px;
    border-radius: 1rem;
    border-size: 10rem;
    border-color: ${props => props.textColor};
    background: ${props => props.background};
    color: ${props => props.textColor}
    `
export default RegionButton