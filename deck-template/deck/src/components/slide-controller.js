import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'


class SlideController extends React.Component {

  state = {
    slideId: 1
  }

  handleKeyup = (event) => {

    switch (event.key) {
      case 'ArrowLeft':
        return this.decrementSlide()

      case 'ArrowUp':
        return this.decrementSlide()

      case 'ArrowRight':
        return this.incrementSlide()

      case 'ArrowDown':
        return this.incrementSlide()
    }

    switch (event.which) {
      case 37:
        return this.decrementSlide()

      case 38:
        return this.decrementSlide()

      case 39:
        return this.incrementSlide()

      case 40:
        return this.incrementSlide()
    }
  }

  decrementSlide = () => {
    const { slideId } = this.state

    if (slideId > 1) {
      this.setState({slideId: slideId - 1})
    }
  }

  incrementSlide = () => {
    const { slideId } = this.state
    const { max } = this.props

    if (slideId < max) {
      this.setState({slideId: slideId + 1})
    }
  }

  addKeyboardNav = () => (
    document.body.addEventListener('keyup', this.handleKeyup, false)
  )

  removeKeyboardNav = () => (
    document.body.addEventListener('keyup', this.handleKeyup, false)
  )

  navigateTo = (slideId) => (
    this.props.push(`/${slideId}`)
  )

  componentWillMount() {
    const {
      location,
      push
    } = this.props

    const path = location.pathname.replace('/', '')

    this.setState({
      slideId: parseInt(path) || 1
    }, () => {
      this.addKeyboardNav()
      this.navigateTo(this.state.slideId)
    })
  }

  componentWillUnmount(){
    this.removeKeyboardNav()
  }

  componentDidUpdate(prevProps, prevState){
    const {
      push
    } = this.props

    const {
      slideId
    } = this.state

    if ( prevState.slideId !== slideId) this.navigateTo(slideId)

  }

  render () {
    return null
  }
}

SlideController.propTypes = {}
SlideController.defaultProps = {}
SlideController.contextTypes = {
  history: React.PropTypes.any
}

export default withRouter(SlideController)
