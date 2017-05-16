import React from 'react';
import styled from 'styled-components';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import Subtitle from '../../slideshow/components/subtitle';
import Subheader from '../../slideshow/components/subheader';
import image1 from '../../images/book-survey.png';
import image2 from '../../images/book-results.png';

const Columns = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  flex: 0 1 48%;
`;

const Slide = () => (
  <SlideLayout center middle>
    <Title>The 7 Question Types</Title>
  </SlideLayout>
);

export default Slide;
