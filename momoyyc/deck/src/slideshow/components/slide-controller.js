import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'


const NavButton = styled.button`
  background-color: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 33%;
  z-index: 999;
  border: none;
  outline: none;
  cursor: pointer;
  left: ${props => props.left ? 0 : 'initial'};
  right: ${props => props.right ? 0 : 'initial'};
`

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

      default:
        break
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

      default:
        break
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
    } = this.props

    const path = location.pathname.replace('/', '')
    const slideId = parseInt(path, 10)

    this.setState({
      slideId: slideId || 1
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
      slideId
    } = this.state

    if ( prevState.slideId !== slideId) this.navigateTo(slideId)

  }

  render () {
    return <div>
      <NavButton left onClick={this.decrementSlide}/>
      <NavButton right onClick={this.incrementSlide}/>
    </div>
  }
}

SlideController.propTypes = {}
SlideController.defaultProps = {}
SlideController.contextTypes = {
  history: React.PropTypes.any
}

export default withRouter(SlideController)
