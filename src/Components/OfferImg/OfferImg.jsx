import React, { useEffect, useState } from 'react';
import OfferImg1 from  '../../img/dawat.png'
import OfferImg2 from  '../../img/tetley.png'

const OfferImg = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { src: OfferImg1, alt: 'Slide 1' },
    { src: OfferImg2, alt: 'Slide 2' },
    { src: OfferImg1, alt: 'Slide 3' },
    ,
  ];


  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide m-2 p-2" data-bs-ride="carousel">
    <div class="carousel-inner w-75 mx-auto">
      <div class="carousel-item active">
        <img src={OfferImg1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={OfferImg2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={OfferImg1} class="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  );
};

export default OfferImg;
