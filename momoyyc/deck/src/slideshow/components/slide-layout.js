import styled from 'styled-components'
import logo from '../../images/microhero-logo-with-tagline.png'

const SlideLayout = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.middle ? 'center' : 'stretch'};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: ${props => {
    if (props.title) return '1.5rem'
    if (props.section) return '1.25rem'
    return '1rem'
  }};
  background: white bottom left no-repeat;
  background-image: ${props => !props.title && `url(${logo})`};
  background-size: 160px;
  max-width: 100%;
  max-height: 100%;
`

export default SlideLayout
