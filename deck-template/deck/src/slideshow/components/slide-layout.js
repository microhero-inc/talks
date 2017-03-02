import React from 'react'
import styled from 'styled-components'

const SlideLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.middle ? 'center' : 'flex-start'};
  align-items: ${props => props.center ? 'center' : 'stretch'};
`

export default SlideLayout
