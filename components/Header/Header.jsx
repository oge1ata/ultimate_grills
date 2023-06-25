import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import images from '../../constants/images';
import './Header.css';

const handleClick = () => {
  // Redirect to a new website
  window.location.href = "#menu";
};

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home' style={{marginTop: '2rem'}}>
        
        <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>  
        <h1 className='app__header-h1'>The Spiciest Grill in Town...</h1>
        <p className='p__opensans' style={ {margin: '0rem'}}>
          Join us everyday to experience the taste of new cuisines. 
          From pork to small chops to roasted fish to shawarma.
        </p>
        <button type='button' className='custom__button' style={{marginTop: '2rem'}} onClick={handleClick}>See our menu</button>
        </div>
        <div className='app__wrapper_img'>
          <img src={images.mainpic2} alt="header img" />
        </div>
    
    </div>
  )
}

export default Header