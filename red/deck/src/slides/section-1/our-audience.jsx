import React from 'react';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import image from '../../images/demographics.png';

const Slide = () => (
  <SlideLayout middle>
    <Title>Our MicroHeroes</Title>
    <ul>
      <li>
        <b>~8,000</b> MicroHeros with ~2,500 active within the last 6 months
      </li>
      <li>Acquiring <b>~265</b> users per month</li>
      <li>Demographics on <b>~2,000</b> and on all new users</li>
    </ul>
    <img src={image} />
  </SlideLayout>
);

export default Slide;
