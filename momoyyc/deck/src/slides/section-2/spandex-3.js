import React from 'react'
import styled from 'styled-components'
import SlideLayout from '../../slideshow/components/slide-layout'
import CodeBlock from '../../slideshow/components/code-block'
import Title from '../../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle center>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{width: '49%'}}>
        <CodeBlock url='/code/package-web.json' />
      </div>
      <div style={{width: '49%'}}>
        <CodeBlock url='/code/package-ios.json' />
      </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{width: '49%'}}>
        <CodeBlock url='/code/include-web.js' />
      </div>
      <div style={{width: '49%'}}>
        <CodeBlock url='/code/include-ios.js' />
      </div>
    </div>
  </SlideLayout>
)

export default Slide
