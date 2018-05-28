import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './bg_image_slide.css';

import Slide1 from '../../media/slide1.jpg';
import Slide2 from '../../media/anastasia.jpg';
import Slide3 from '../../media/slide3.jpg';

const items = [
  {
    src: Slide1,
    altText: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    caption: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    header: 'Invested in Africa'
  },
  {
    src: Slide2,
    altText: 'We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    caption: ' We are driven and entrepreneurial and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    header: 'Building New Empires in Africa\'s Middle Market',

  },
  {
    src: Slide3,
    altText: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    caption: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    header: 'Slide 3 header'
  }
];

const BgImageSlide = (props) => (
  <UncontrolledCarousel items={items} />
    );


export default BgImageSlide;
