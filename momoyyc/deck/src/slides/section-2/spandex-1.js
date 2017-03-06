import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle center>
    <Title>Reusability</Title>
    <p>Build components with react-native-web</p>
  </SlideLayout>
)

export default Slide
