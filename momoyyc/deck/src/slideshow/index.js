import 'normalize.css'
import './base.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import SlideFrame from './components/slide-frame'
import SlideController from './components/slide-controller'

const SlideShow = ({slides, location}) => (
  <Router basename={location}>
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

SlideShow.propTypes = {
  slides: React.PropTypes.array.isRequired,
  location: React.PropTypes.string.isRequired
}

SlideShow.defaultProps = {
  slides: [],
  location: ''
}

export default SlideShow
