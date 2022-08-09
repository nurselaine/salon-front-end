import React, { useState } from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [click, setClick] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className='footer'>

      <div className='link-container'>
        <ul className='f-ul'>
          <li className='foot'>
            <a className={isShown ? 'nav-link white' : 'nav-link'} href='#home-top'>Home</a>
          </li>
          <li className='foot' onClick={closeMobileMenu}>
            <a className={isShown ? 'nav-link white' : 'nav-link'} href='#gallery'>Gallery</a>
          </li>
        </ul>
        <ul>
          <li className='foot' onClick={closeMobileMenu}>
            <a className={isShown ? 'nav-link white' : 'nav-link'} href='#service-menu-2'>Service Menu</a>
          </li>
          <li className='foot' onClick={closeMobileMenu}>
            <a className={isShown ? 'nav-link white' : 'nav-link'} href='#review'>Contact</a>
          </li>
        </ul>
      </div>


      <div className='f-logo-container'>
        <h2 className='f-logo' href="#">
        <a href='#home-top' id='logo-link-n'>LOANN</a>    
        </h2>
      </div>


      <div className='f-social-icons'>
        <ul className='f-social-container'>
          <li>
            <div className={isShown ? 'nav-link white' : 'nav-link'} href="#" >
              <a href='https://www.facebook.com/Loanns-Hair-Studio-926363280791694/'>
                <GrFacebookOption className='social-icon-f' />
              </a>
            </div>
          </li>
          <li>
            <div className={isShown ? 'nav-link white' : 'nav-link'} >
              <AiOutlineMail href='#' className='social-icon-f' />
            </div>
          </li>
          <li>
            <div className={isShown ? 'nav-link white' : 'nav-link'} >
              <a href='https://github.com/nurselaine'>
                <BsGithub className='social-icon-f'/> 
              </a>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;