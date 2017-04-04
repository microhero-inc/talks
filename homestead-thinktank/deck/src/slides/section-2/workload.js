import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'
import Quote from '../../slideshow/components/quote'

const Slide = () => (
  <SlideLayout middle center>
    <Title>Workload</Title>
    <Quote>Learn once, write everywhere</Quote>
  </SlideLayout>
)

export default Slide
