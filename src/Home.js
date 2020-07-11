import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap';


export const Home=(props) => (
    <GridWrapper className="container">
        <Jumbotron className="jumbotron">
          <div className="about">
            <h1>Welcome to ArtWorks!</h1>
              <p>
                ArtWorks is a place where artists and their fans are empowered to change the world! We do this by holding quarterly competitions between submitted creations from artists who want to make a difference with their work. Our winning designs will be produced and sold as t-shirts with all profits going towards our selected charity. Check out this quarter's charity below!
              </p>
          </div>
        </Jumbotron>
       
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
