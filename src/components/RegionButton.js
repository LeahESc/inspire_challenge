import styled from 'styled-components'

const RegionButton = styled.button`
    display: inline-block;
    width: 30rem;
    height: 30rem;
    position: relative;
    margin: 2% 2% 5% 2%;
    padding: 30px;
    border-radius: 1rem;
    border-width: 15px;
    border-color: ${props => props.borderColor};
    background: url(${props => props.background}) 25% 25% no-repeat;
    color: ${props => props.color};
    font-family: 'Titan One', cursive;
    font-size: 3rem;
    
    &:hover { 
    transform: translateY(-3px);
    box-shadow: 0 .2rem 1rem rgba(0, 0, 0, 1);
    cursor: pointer;
    }
    `
export default RegionButton