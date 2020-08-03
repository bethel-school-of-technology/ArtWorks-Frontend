import React from 'react';
import AWJumbotron from './components/AWJumbotron';
import CWCarousel from './components/CWCarousel';
import { Button } from 'react-bootstrap';
import CWLogo from './assets/charitywaterlogo.png';

import './Home.css'



export const Home=(props) => (

  <body className="home">

    <div>
      <AWJumbotron />
    </div>

    <section className="row1">
      <div className='grid-1'>
        <img src={CWLogo} alt=''></img>
        <h2>Charity: Water</h2>
        <p>charity: water is a nonprofit organization bringing clean and safe drinking water to people in developing countries. To learn more about Charity: Water's mission, click the link below!</p>
        <Button id='cwbutton' href="https://www.charitywater.org/about/mission" variant="warning">Charity: Water </Button>
      </div>
      <div className="grid-2">
        <CWCarousel />
      </div>

    </section>
  </body>

)





