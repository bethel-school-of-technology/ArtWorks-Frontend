import React from 'react';
import AWJumbotron from './components/AWJumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import CWCarousel from './components/CWCarousel';
import { Button } from 'react-bootstrap';
import CWLogo from './assets/charitywaterlogo.png';
import AWFooter from './components/AWFooter';
import Logo from './assets/Artworkslogo.png';

export const Home=(props) => (
  <div>
    <div className="artworks-logo"><img src={Logo} /> </div>
    <br />
    <AWJumbotron />
    <Container>
      <Row>
        <Col>
          <CWCarousel></CWCarousel>
        </Col>
        <Col className='charityinfo'>
          <img src={CWLogo} alt=''></img>
          <h2>Charity: Water</h2>
          <p>charity: water is a nonprofit organization bringing clean and safe drinking water to people in developing countries. To learn more about Charity: Water's mission, click the link below!</p>
          <Button id='cwbutton' href="https://www.charitywater.org/about/mission" variant="warning">Charity: Water </Button>
        </Col>
      </Row>
    </Container>
    <AWFooter />
  </div>

)


