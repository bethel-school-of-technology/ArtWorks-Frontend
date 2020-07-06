import React from 'react';
import styled from 'styled-components';


export const Home=(props) => (
    <GridWrapper>
        <p>This is a paragraph and I am writing on the home page</p>
        <p>Welcome to the second paragraph of the Home Page</p>
    </GridWrapper>
)

const GridWrapper=styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
`;
// grid-template-columns: repeat(12, 1fr);
