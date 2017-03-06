import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import CodeBlock from '../../slideshow/components/code-block'
import img1 from '../../images/storybook-web.png'
import img2 from '../../images/storybook-ios.png'
import img3 from '../../images/storybook-android.png'

const Slide = () => (
  <SlideLayout middle center>
    <div style={{display: 'flex'}}>
      <div style={{width: '50%'}}>
        <img src={img1} />
      </div>

      <div style={{width: '25%'}}>
        <img src={img2} />
      </div>

      <div style={{width: '25%'}}>
        <img src={img3} />
      </div>

    </div>
  </SlideLayout>
)

export default Slide
