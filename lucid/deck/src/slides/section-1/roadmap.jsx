import React from 'react';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';

const Slide = () => (
  <SlideLayout middle>
    <Title>On Our Roadmap</Title>
    <ul>
      <li>Exapand the survey creation process to a web-based platform</li>
      <li>Build in charitable giving to MyList surveys</li>
      <li>Release MicroHero for Android</li>
    </ul>
  </SlideLayout>
);

export default Slide;
