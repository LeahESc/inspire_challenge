import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.textColor? props.textColor : 'brown'}
  `

export default Heading