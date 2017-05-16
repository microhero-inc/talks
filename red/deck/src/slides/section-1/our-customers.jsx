import React from 'react';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';

const Slide = () => (
  <SlideLayout middle>
    <Title>Current Customers</Title>
    <ul>
      <li>Market Research Firms looking for validation/gut check</li>
      <li>Start Up Organizations</li>
      <li>Custom Design & Development Groups</li>
    </ul>
  </SlideLayout>
);

export default Slide;
