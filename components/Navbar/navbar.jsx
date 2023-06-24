import React, {useState, useEffect} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
      const scrollThreshold = 100; // Adjust the threshold as needed

    if (scrollTop > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`app__navbar ${scrolled ? "scrolled" : ""} ${isSticky ? "isSticky" : ""}`}>
      <div className="app__navbar-logo">
        <img src={images.ug2} alt="applogo" className="imh"/>
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
        <GiHamburgerMenu color="#fff" fontSize={27} cursor={'pointer'} style={{marginRight:"2em"}} onClick={() => setToggleMenu(true)} />
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
              <a href="#home" className="p__opensans-smallscreen" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li className="p__opensans">
              <a href="#about" className="p__opensans-smallscreen" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li className="p__opensans">
              <a href="#menu" className="p__opensans-smallscreen" onClick={() => setToggleMenu(false)}>
                Menu
              </a>
            </li>
            <li className="p__opensans">
              <a href="#contact" className="p__opensans-smallscreen" onClick={() => setToggleMenu(false)}>
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
