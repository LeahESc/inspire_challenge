import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: ${props => props.textColor? props.textColor : 'pink'}
  `

export default Heading