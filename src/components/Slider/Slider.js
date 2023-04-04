import React from 'react';
import slider from './slider.css';
import slide1 from '../../Images/Slider Images/hero-img.png';
import slide2 from '../../Images/Slider Images/img 1.png';
import slide3 from '../../Images/Slider Images/img 2.png';
import slide4 from '../../Images/Slider Images/img 3.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2600 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2600, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 480 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

const Slider = () => {
    return (
        <div className='slider-container'>
            <Carousel 
                draggable={true}
                infinite={true}
                autoPlay={true}
                responsive={responsive}>
                <div className='slider-img-box'><img src={slide1} alt="" /></div>
                <div className='slider-img-box'><img src={slide2} alt="" /></div>
                <div className='slider-img-box'><img src={slide3} alt="" /></div>
                <div className='slider-img-box'><img src={slide4} alt="" /></div>
            </Carousel>
        </div>
    );
};

export default Slider;