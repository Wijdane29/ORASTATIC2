import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
import menubtn from '../../assets/menu-svgrepo-com.svg';
import {ReactComponent as AppleIcon} from '../../assets/apple.svg'
import {ReactComponent as PlayStoreIcon} from '../../assets/playstore.svg'
import SocialButton from '../../Social Button/SocialButton';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [isMenuOpen,setIsMenuOpen]=useState(false)

  const handleButtonClick1 = () => {
    navigate('/'); // Navigate to HomePage3
  };
  const handleButtonClick2 = () => {
    navigate('/homepage4'); // Navigate to HomePage3
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
    console.log("hhhhhhhhhh"+isMenuOpen)

  };

  return (
   <>
      <header className="container">
       <img src={logo} alt="Logo" className="logo"/>
       <nav  className={`links ${isMenuOpen ? 'mobile-menu' : ''}`}>
          <button onClick={handleButtonClick1}>HOME</button>
          <button >LOREM</button>
          <button >IPSUM</button>
          <button onClick={handleButtonClick2}>DOLOR</button>
       </nav>
       <div className="buttonContainer">
        <SocialButton Icon={AppleIcon}  iconColor="rgba(94, 97, 117, 1)" title="Appstore" backgroundColor="#fff"/>
        <SocialButton Icon={PlayStoreIcon}  iconColor="rgba(94, 97, 117, 1)" title="Playstore" backgroundColor="#fff"/>
       </div>
       <img 
            src={menubtn} 
            alt='menu-btn'  
            onClick={toggleMenu}   
            className='menu-btn'
       />
    </header>
   </>
  );
}

export default Header;
