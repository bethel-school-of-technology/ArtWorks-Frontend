import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CharityImg1 from '../assets/charitywater7.jpg';
import CharityImg3 from '../assets/charitywater5.jpg';
import CharityImg4 from '../assets/charitywater4.jpg';
import CharityImg5 from '../assets/charitywater8.jpg';

import './CWCarousel.css'

const CWCarousel=() => {
  return (
    <Carousel className='charitycarousel'>
      <Carousel.Item>
        <img
          src={CharityImg1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={CharityImg3}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={CharityImg4}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={CharityImg5}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  )

}
export default CWCarousel;


