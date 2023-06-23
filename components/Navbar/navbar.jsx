import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ug2} alt="applogo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home" className="p__opensans">
            Home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#about" className="p__opensans">
            About
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu" className="p__opensans">
            Menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#contact" className="p__opensans">
            Contact us
          </a>
        </li>
      </ul>
      <div className="app__navbar-login ">
        <a href="#menu" className="p__opensans">
          See Menu
        </a>
        <div />
        <a href="#contact" className="p__opensans">
          Talk to us
        </a>
      </div>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (   
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu
            color="#fff"
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />

          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans">
              <a href="#home" className="p__opensans-smallscreen">
                Home
              </a>
            </li>
            <li className="p__opensans">
              <a href="#about" className="p__opensans-smallscreen">
                About
              </a>
            </li>
            <li className="p__opensans">
              <a href="#menu" className="p__opensans-smallscreen">
                Menu
              </a>
            </li>
            <li className="p__opensans">
              <a href="#contact" className="p__opensans-smallscreen">
                Contact us
              </a>
            </li>
          </ul>
        </div>
         )}
      </div>
     
    </div>
  );
};

export default Navbar;
