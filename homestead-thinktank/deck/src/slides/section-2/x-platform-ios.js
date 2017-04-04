import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import CodeBlock from '../../slideshow/components/code-block'
import iosImg from '../../images/rn-components-ios.png'

const Slide = () => (
  <SlideLayout middle center>
    <div style={{display: 'flex'}}>
      <div style={{width: '66%'}}>
        <CodeBlock url='/code/index.js' />
      </div>
      <div style={{width: '33%', position: 'relative', right: '-24px'}}>
        <img src={iosImg} />
      </div>
    </div>
  </SlideLayout>
)

export default Slide
