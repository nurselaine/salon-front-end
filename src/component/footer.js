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
  console.log(isShown);
  return (
    <div className='footer'>

      <div className='link-container'>
        <ul className='f-ul'>
          <li className='foot'>
            <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/'>Home</Link>
          </li>
          <li className='foot' onClick={closeMobileMenu}>
            <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/gallery'>Gallery</Link>
          </li>
        </ul>
        <ul>
          <li className='foot' onClick={closeMobileMenu}>
            <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/service-menu'>Service Menu</Link>
          </li>
          <li className='foot' onClick={closeMobileMenu}>
            <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>


      <div className='f-logo-container'>
        <h2 className='f-logo' href="#">
          LOANN
        </h2>
      </div>


      <div className='f-social-icons'>
        <ul className='f-social-container'>
          <li>
            <div className={isShown ? 'nav-link white' : 'nav-link'} href="#" ><GrFacebookOption className='social-icon' /></div>
          </li>
          <li>
            <div className={isShown ? 'nav-link white' : 'nav-link'} href='#'><AiOutlineMail className='social-icon' /></div>
          </li>
          <li>
            <BsGithub/>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;