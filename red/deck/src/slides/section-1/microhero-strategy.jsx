import React from 'react';
import styled from 'styled-components';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import Subtitle from '../../slideshow/components/subtitle';
import Subheader from '../../slideshow/components/subheader';
import image from '../../images/mhstrategy-benefits.png';

const Columns = styled.div`
  margin-top: 4.5em;
  
`;

const Column = styled.div`
  flex: 0 1 48%;
`;

const Slide = () => (
  <SlideLayout center>
    <Title>MicroHero Strategy</Title>
    <Columns>
      <img src={image} />
    </Columns>
  </SlideLayout>
);

export default Slide;
