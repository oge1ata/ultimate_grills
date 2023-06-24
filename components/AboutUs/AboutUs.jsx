import React from "react";
import "./AboutUs.css";
import Slideshow from "../Slideshow/Slideshow";
import images from "../../constants/images";

const handleClick = () => {
  // Redirect to a new website
  window.location.href = "#contact";
};

function AboutUs() {
  const slides = [
    images.slide1,
    images.slide2,
    images.slide3,
    images.slide4,
    images.slide5,
    images.slide6,
    images.slide7
  ];

  return (

    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      
      
      <div className="app__aboutus-content ">     
      <hr className='horizot'/>
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            We are a group of tasty brands focused on selling healthy and spicy
            foods to the masses. Our meals range from roasted yam dipped in pork
            sauce to well-marinated fish dipped in pepper to perfectly grilled
            shawarma to grilled goats and cows.
          </p>
          
        </div>

        <div className="middlle">
          <Slideshow images={slides} interval={3000}/>
          {/* <img src={images.slide1} alt="trial" className="hey"/> */}
        </div>        
    
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            It came as Pork Joint in early 2013, when our founder found that
            Nigerian food needed a spicy taste. Spicier than it is now. Fast
            forward to 2023, almost ten years later, and we have more than just
            pork, but spicy fish, tasty shawarma and even filling small chops.
          </p>
          <button type='button' className='custom__button' style={{marginTop: '2rem'}} onClick={handleClick}>Talk to us</button>

        </div>

        
       
        
      </div>
      
    </div>
  );
}

export default AboutUs;
