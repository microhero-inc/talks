import React from 'react'
import SlideLayout from '../slideshow/components/slide-layout'
import Title from '../slideshow/components/title'
import SubTitle from '../slideshow/components/subtitle'

const Slide = () => (
  <SlideLayout center middle title>
    <Title>MicroHero Inc.</Title>
    <SubTitle>Slide Subtitle</SubTitle>
  </SlideLayout>
)

export default Slide
