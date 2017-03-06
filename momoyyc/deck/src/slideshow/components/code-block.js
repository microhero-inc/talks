import React from 'react'
import styled from 'styled-components'

const Code = styled.pre`
  background: #f4f6f9;
  font-family: 'Source Code Pro', monospace;
  text-align: left;
  overflow-x: hidden;
  max-width: 100%;
  max-height: 90%;
  padding: 0.75rem 1rem;
  font-size: 16px;
`

class CodeBlock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      code: ''
    }
  }

  highlightCode = (code) => window.hljs.highlight('javascript', code)

  componentDidMount () {
    const { url } = this.props

    fetch(url)
    .then(response => response.text())
    .then(body => {
      const highlightedCode = this.highlightCode(body)
      this.setState({ code: highlightedCode.value })
    })
    .catch(err => console.error(err))
  }

  render () {
    const { code } = this.state
    return <Code dangerouslySetInnerHTML={{__html: code}} />
  }
}

export default CodeBlock
