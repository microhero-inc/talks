import './style.css'
import React from 'react'
import { render } from 'react-dom'
import SlideShow from './slideshow'
import Slides from './slides'
import Project from '../package.json'

render(
  <SlideShow slides={Slides} location={''} />,
  document.getElementById('slides')
)
