import React from 'react'
import styled from 'styled-components'

const RegionSection = styled.section`
    max-width: 30%; 
    margin-left: 15%;
    padding: 10px;
    background: ${props => props.background};
    color: ${props => props.textColor}
    `
export default RegionSection