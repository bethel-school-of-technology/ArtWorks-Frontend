import React from 'react';
import styled from 'styled-components';


export const Gallery=() => (
    <GridWrapper>
        <h2>Gallery</h2>
    </GridWrapper>
)

const GridWrapper=styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;