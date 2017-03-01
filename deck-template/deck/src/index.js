import 'normalize.css'
import './index.css'
import '../../../slideshow/base.css'

import React from 'react'
import { render } from 'react-snapshot'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import SlideFrame from './components/slide-frame'
import SlideController from './components/slide-controller'
import Slides from './slides'

render(
  <Router>
    <SlideFrame>
      <SlideController max={Slides.length} />
      {
        Slides.map((Slide, i) => (
          <Route key={i} exact path={`/${i + 1}`} component={Slide} />
        ))
      }
    </SlideFrame>
  </Router>

  ,
  document.getElementById('slides')
)
