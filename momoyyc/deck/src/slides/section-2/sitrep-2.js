import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'
import Subtitle from '../../slideshow/components/subtitle'

const DimLi = styled.li`
  opacity: 0.25
`

const Slide = () => (
  <SlideLayout middle>
    <Title>SITREP</Title>
    <Subtitle>as of Sept 2016</Subtitle>
    <ul>
      <DimLi>Self funded - limited cash reserves</DimLi>
      <DimLi>Bills/Family/Mortgage</DimLi>
      <li><b>iOS Only, no web or Android</b></li>
      <DimLi>Strong visual identity</DimLi>
      <DimLi>Excellent "beta" version</DimLi>
      <DimLi>Strong user aquisition</DimLi>
      <DimLi>Weak customer aquisition</DimLi>
    </ul>
  </SlideLayout>
)

export default Slide
