import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle>
    <Title>Ideally, we would be able to...</Title>
    <ul>
      <li>Work on a codebase that can grow with us <b>(longevity)</b></li>
      <li>Build fast, launch early, deploy often <b>(workload)</b></li>
      <li>Not be tied to a single platform <b>(cross-platform)</b></li>
      <li>Reuse code when/where it makes sense <b>(consistency)</b></li>
      <li>Not sacrifice user experience <b>(native)</b></li>
    </ul>
  </SlideLayout>
)

export default Slide
