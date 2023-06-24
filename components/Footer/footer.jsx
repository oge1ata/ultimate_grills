import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// import { FooterOverlay, Newsletter } from '../../components';
import  images from '../../constants/images';
import './footer.css';

const Footer = () => (
  <div className="app__footer section__padding__two" id="login">
    {/* <FooterOverlay />
    <Newsletter /> */}
    <hr className='horizo'/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">20 Ajose St, Mende, Maryland, Ikeja, Lagos State, Nigeria</p>
        <p className="p__opensans">+234 803 450 2479</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
        
      </div>

      {/* <div className="app__footer-links_logo">
        <img src={images.ug2} alt="footer_logo" className="small"/>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="spoo" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div> */}

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: 3:00 pm - 11:00 pm</p>
        <p className="p__opensans">Sat - Sun: 4:00 pm - 12:00 am</p>
        <p className="p__opensans">Note: Tentative, depends on match times</p>
        
      </div>
    </div>

    <hr className='horizon'/>
    <div className="footer__copyright">    
      <p className="p__opensans">2023 Ultimate Grills. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;