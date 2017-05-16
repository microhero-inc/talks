import React from 'react';
import styled from 'styled-components';
import SlideLayout from '../../slideshow/components/slide-layout';
import Title from '../../slideshow/components/title';
import Subtitle from '../../slideshow/components/subtitle';
import Subheader from '../../slideshow/components/subheader';

const Columns = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 0 1 48%;
`;

const Slide = () => (
  <SlideLayout>
    <Title>What We Do</Title>
    <p>MicroHero has two lines of business:</p>

    <Columns>
      <Column>
        <Subheader>MicroHero Surveys</Subheader>

        <p>
          Mobile survey solution that allows you to easily create, distribute, and analyze your custom survey
        </p>

      </Column>

      <Column>
        <Subheader>MicroHero Strategy</Subheader>

        <p>
          Survey design and creation services
        </p>

      </Column>
    </Columns>
  </SlideLayout>
);

export default Slide;
