import React from 'react'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'
import Subtitle from '../../slideshow/components/subtitle'

const Slide = () => (
  <SlideLayout middle>
    <Title>SITREP</Title>
    <Subtitle>as of Sept 2016</Subtitle>
    <ul>
      <li>Self funded - limited cash reserves</li>
      <li>Bills/Family/Mortgage</li>
      <li>iOS Only, no web or Android</li>
      <li>Strong visual identity</li>
      <li>Excellent "beta" version</li>
      <li>Strong user aquisition</li>
      <li>Weak customer aquisition</li>
    </ul>
  </SlideLayout>
)

export default Slide
