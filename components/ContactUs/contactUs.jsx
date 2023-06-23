import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import  images from '../../constants/images';

const handleClick = () => {
    // Redirect to a new website
    window.location.href = 'https://goo.gl/maps/qXaGPiGxvKi6ymoE7';

    // Or navigate to a new page component using React Router
    // You will need to set up React Router in your application
    // import { useHistory } from 'react-router-dom';
    // const history = useHistory();
    // history.push('/new-page');
  };
const ContactUs = () => (

  <div className="app__bg app__wrapper section__padding" id="contact">
    
    <div className="app__wrapper_info">
    <hr className='horiz'/>
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Can't get enough?</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Find us here: </p>
        <p className="p__opensans">20 Ajose St, Mende, Maryland, Ikeja, Lagos State, Nigeria</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 3:00 pm - 11:00 pm</p>
        <p className="p__opensans">Sat - Sun: 4:00 pm - 12:00 am</p>
        <p className="p__opensans">Note: Tentative, depends on match times</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={handleClick}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.enough} alt="finus_img" />
    </div>
  </div>
);

export default ContactUs;