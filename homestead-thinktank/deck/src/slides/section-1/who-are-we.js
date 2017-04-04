import React from 'react'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle>
    <Title>Who Are We?</Title>
    <ul>
      <li>MicroHero is a social enterprise</li>
      <li>Mission: Help people do a little good</li>
      <li>Connect companies, consumers and charities through our mobile survey tool</li>
      <li>Consumers earn real money “micro-donations” for their favorite causes</li>
      <li>Our product provides a highly engaging, ridiculously simple, and delightful mobile experience</li>
      <li>Cost-effective and timely results because people want to “do a little good”</li>
    </ul>
  </SlideLayout>
)

export default Slide
