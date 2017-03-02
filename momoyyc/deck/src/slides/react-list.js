import React from 'react'
import SlideLayout from '../slideshow/components/slide-layout'
// import Title from '../slideshow/components/title'

const Slide = () => (
  <SlideLayout middle center>

    <video
      width='100%'
      src='https://christiannaths.github.io/react-native-talk/videos/app-list-view.mp4'
      autoPlay
      loop
      />

    <video
      width='100%'
      src='https://christiannaths.github.io/react-native-talk/videos/app-list-view.mp4'
      autoPlay
      loop
      />

  </SlideLayout>
)

export default Slide
