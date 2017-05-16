import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'
import Quote from '../../slideshow/components/quote'

const Slide = () => (
  <SlideLayout middle>
    <Title>So what's the catch?</Title>
    <ul>
      <li>RN is still early, APIs are likely to change</li>
      <li>Not all native iOS & Android components have RN counterparts</li>
      <li>upgrades are a PITA (recently some new tools have surfaced that help a lot)</li>
      <li>Introduces a massive dependency (as essentially every framework does)</li>
      <li>Platform-specific performance tuning </li>
      <li>Javascript.<b><sup>*</sup></b> (but it’s getting a lot better)</li>

    </ul>
  </SlideLayout>
)

export default Slide
