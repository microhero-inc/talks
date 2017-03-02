import React from 'react'
import { render } from 'react-dom'
import SlideShow from './slideshow'
import Slides from './slides'

render(
  <SlideShow slides={Slides} />,
  document.getElementById('slides')
)
