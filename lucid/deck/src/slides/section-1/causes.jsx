import React from 'react';
import styled from 'styled-components';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import Subtitle from '../../slideshow/components/subtitle';
import Subheader from '../../slideshow/components/subheader';
import image from '../../images/causes.png';

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
  <SlideLayout>
    <Title>Micro-donations and Market&nbsp;Research</Title>

    <Columns>
      <Column>
        <p>
          Consumers can select from more than 200 causes and earn real money for their cause enabling market researchers to incentivize high-quality survey responses and increase response rates
        </p>
      </Column>

      <Column>
        <img src={image} />

      </Column>
    </Columns>
  </SlideLayout>
);

export default Slide;
