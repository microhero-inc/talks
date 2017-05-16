import React from 'react'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle>
    <Title>A Brief History</Title>
    <ul>
      <li>Founded in 2015 by a team of designers & developers</li>
      <li>Concept was formed by trying to help consumers harness time spent on devices and put it towards doing a little good</li>
      <li>Early efforts focused on product design/build/validation and user acquisition</li>
      <li>Limited sales and overall business strategy led original co-founders to sell</li>
      <li>Sept 2016 we bought it!</li>
      <li>Balance of technical and business skills have led to early success</li>
    </ul>
  </SlideLayout>
)

export default Slide
