import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import  MenuItem from '../Menus/menus';
import  data from '../../constants/data';
import  images from '../../constants/images';
import './specialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className="app__specialMenu-title">
      <SubHeading title="Spiciest in town" />
      <hr className='horiz'/>
      <h1 className="headtext__cormorant">Everyday&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.man} alt="menu__img" className='img_middle'/>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
  </div>
);

export default SpecialMenu;