import React from 'react';
import AWJumbotron from './components/AWJumbotron';
import {Container, Row, Col} from 'react-bootstrap';
import CWCarousel from './components/CWCarousel';
import {Button} from 'react-bootstrap';

export const Home=(props) => (
      <div>
        <AWJumbotron/>
        <Container>
          <Row>
            <Col>
            <CWCarousel></CWCarousel>
            </Col>
            <Col>
            <h2>Charity: Water</h2>
            <p>charity: water is a nonprofit organization bringing clean and safe drinking water to people in developing countries. To learn more about Charity: Water's mission, click the link below!</p>
            <Button href="https://www.charitywater.org/about/mission" variant="warning">Charity: Water </Button></Col>
          </Row>
        </Container>
      </div>
    
)


