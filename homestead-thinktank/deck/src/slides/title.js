import React from 'react'
import Layout from '../slideshow/components/slide-layout'
import Title from '../slideshow/components/title'
import SubTitle from '../slideshow/components/subtitle'
import logo from '../images/microhero-logo-with-tagline.png'

const Slide = () => (
  <Layout center middle title>
    <img src={logo} />
  </Layout>
)

export default Slide
