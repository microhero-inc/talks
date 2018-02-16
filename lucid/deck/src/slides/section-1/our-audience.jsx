import React from 'react';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import image from '../../images/demographics.png';

const Slide = () => (
  <SlideLayout middle>
    <Title>Our MicroHeroes</Title>
    <ul>
      <li>
        More than
        <b> 10,000</b>
        {' '}
        MicroHeros with <b>~2,500 active</b> within the last 6 months
      </li>
      <li>Acquiring <b>~400</b> users per month</li>
      <li>Demographics on <b>~5,500</b> and on all new users</li>
    </ul>
    <img src={image} role="presentation" />
  </SlideLayout>
);

export default Slide;
