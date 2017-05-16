import React from 'react';
import styled from 'styled-components';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import Subtitle from '../../slideshow/components/subtitle';
import Subheader from '../../slideshow/components/subheader';
import image from '../../images/mh-surveys-image.png';

const Columns = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 0 1 48%;
`;

const Slide = () => (
  <SlideLayout center>
    <Title>MicroHero Surveys</Title>

    <img src={image} />
  </SlideLayout>
);

export default Slide;
