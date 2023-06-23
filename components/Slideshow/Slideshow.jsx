// import React, { useState, useEffect } from 'react';
// import images from "../../constants/images";
// import './Slideshow.css'; // Import the CSS file for styling

// const Slideshow = () => {
//   const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of the current slide index

//   const slides = [
//     images.slide1,
//     images.slide2,
//     images.slide3,
//     images.slide4,
//     images.slide5,
//     images.slide6
//   ]; // Array of image filenames

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//   }; // Function to go to the next slide

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="slideshow">
//       {slides.map((slide, index) => (
//         <img
//           key={index}
//           className={`slide ${index === currentSlide ? 'active' : ''}`}
//           src={slide}
//           alt={`Slide ${index + 1}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default Slideshow;

import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import the CSS file for styling


const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="slideshow">
      {/* <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} /> */}
      
      {images.map((image, index) => (
        <img
        key={index}
        src={image}
        alt={`Slide ${index}`}
        className={`slide ${index === currentIndex ? 'active' : ''}`}
      />
      ))}
    </div>
  );
};

export default Slideshow;
