import React from 'react'
import SlideLayout from '../slideshow/components/slide-layout'
import Title from '../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle>
    <Title>Who's this talk for?</Title>
    <ul>
      <li>You're a javascript developer</li>
    </ul>
  </SlideLayout>
)

export default Slide
