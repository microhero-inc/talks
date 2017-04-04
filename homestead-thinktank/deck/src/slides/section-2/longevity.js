import React from 'react'
import SlideLayout from '../../slideshow/components/slide-layout'
import Title from '../../slideshow/components/title'
import backersImg from '../../images/backers.png'
import appsImg from '../../images/apps.png'

const Slide = () => (
  <SlideLayout middle center>
    <Title>Longevity</Title>
    <br />
    <br />

    <div>
      <img src={backersImg} />
    </div>

    <div>
      <img src={appsImg} />
    </div>
  </SlideLayout>
)

export default Slide
