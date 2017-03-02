import React from 'react'
import styled from 'styled-components'
import logo from '../../images/microhero-logo-with-tagline.png'

const Frame = styled.div`
  width: 1024px;
  height: 768px;
  padding: 1rem 1.5rem;
  background: white;
  position: relative;
  transform: scale(${props => props.scaledTo});
  transform-origin: center center;
  display: flex;
  background: white url(${logo}) bottom left no-repeat;
  background-size: 160px;
`

class SlideFrame extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      scale: 1
    }
  }

  setScale = () => {
    const {
      offsetWidth: width,
      offsetHeight: height
    } = this.node

    const scale = Math.min(
      window.innerWidth / width,
      window.innerHeight / height
    )

    this.setState({scale: scale})
  }

  componentDidMount () {
    this.setScale()
    window.addEventListener('resize', this.setScale, false)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setScale, false)
  }

  render () {
    const {children} = this.props
    const {scale} = this.state

    return (
      <div ref={(el) => this.node = el}>
        <Frame children={children} scaledTo={scale} />
      </div>
    )
  }
}

SlideFrame.propTypes = {}
SlideFrame.defaultProps = {}

export default SlideFrame
