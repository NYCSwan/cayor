import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './bg_image_slide.css';

import Slide1 from '../../media/slide1c.jpg';
import Slide2 from '../../media/anastasia.jpg';
import Slide3 from '../../media/slide3c.jpeg';

const items = [
  {
    src: Slide1,
    altText: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    caption: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    header: 'Invested In Africa.'
  },
  {
    src: Slide2,
    altText: 'We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    caption: 'We are driven and entrepreneurial and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    header: 'Building New Platforms In Africa\'s Middle Markets.',

  },
  {
    src: Slide3,
    altText: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    caption: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    header: 'Deep African Expertise. Consistent Sustainable Value.'
  }
];

const BgImageSlide = (props) => (
  <UncontrolledCarousel interval={8000} items={items} />
    );


export default BgImageSlide;
