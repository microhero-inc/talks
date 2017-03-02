import 'normalize.css'
import './base.css'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SlideFrame from './components/slide-frame'
import SlideController from './components/slide-controller'

const SlideShow = ({slides}) => (
  <Router>
    <SlideFrame>
      <SlideController max={slides.length} />
      {
        slides.map((Slide, i) => (
          <Route key={i} exact path={`/${i + 1}`} component={Slide} />
        ))
      }
    </SlideFrame>
  </Router>
)

export default SlideShow
