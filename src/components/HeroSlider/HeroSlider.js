import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide1 from '../../Images/Slider Images/hero-img.png';
import slide2 from '../../Images/Slider Images/img 1.png';
import slide3 from '../../Images/Slider Images/img 2.png';
import slide4 from '../../Images/Slider Images/img 3.png';

const HeroSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 2000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 2000, min: 760 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 760, min: 480 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
            responsive={responsive}>
                <div><img className='img-fluid' src={slide1} alt="" /></div>
                <div><img className='img-fluid' src={slide2} alt="" /></div>
                <div><img className='img-fluid' src={slide3} alt="" /></div>
                <div><img className='img-fluid' src={slide4} alt="" /></div>
            </Carousel>
        </div>
    );
};

export default HeroSlider;