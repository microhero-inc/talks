import styled from 'styled-components'
  // justify-content: ${props => props.middle ? 'center' : 'flex-start'};

const SlideLayout = styled.div`
  flex: 1;
  align-self: ${props => props.middle ? 'center' : 'stretch'};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: ${props => {
    if (props.title) return '1.5rem'
    if (props.section) return '1.25rem'
    return '1rem'
  }};
`

export default SlideLayout
