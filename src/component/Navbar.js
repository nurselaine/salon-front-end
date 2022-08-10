import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className={click ? 'header active' : 'header'}>
      <div 
        onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)} 
        id={isShown ? 'hover-active' : 'hover'}
      >
        <div className={isShown ? 'top-nav active' : 'top-nav'}>
          <ul className='social-container'>
            <li>
              <div className={isShown ? 'nav-link white' : 'nav-link'}><a href='https://www.facebook.com/Loanns-Hair-Studio-926363280791694/'><GrFacebookOption className={isShown ? 'social-icon active' : 'social-icon'} /></a></div>
            </li>
            <li>
              <div className={isShown ? 'nav-link white' : 'nav-link'} href='#'><AiOutlineMail className={isShown ? 'social-icon active' : 'social-icon'} /></div>
            </li>
          </ul>
          <h2 className={isShown ? 'logo white' : 'logo'} href="#">
            <a href='#home-top' id='logo-link-n'>LOANN</a>        
          </h2>
          <div className='btn-container'>
            <a className={isShown ? 'nav-link white' : 'nav-link'} href='#book-appt'>Book Appointment</a>
          </div>

          <div className='menu-icon' onClick={() => setClick(!click)}>
            {click ? (
              <HiOutlineX className={isShown ? 'nav-icon active' : 'nav-icon'}/>
            ) : (
              <HiOutlineMenu className={isShown ? 'nav-icon active' : 'nav-icon'}/>
            )}
          </div>
        </div>

        <div className='nav-container'>

          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className={click ? "option active" : "option"} onClick={closeMobileMenu}>
              {/* <p className='nav-link' href='#'>Home</p> */}
              <a className={isShown ? 'nav-link white' : 'nav-link'} href='#home-top'>Home</a>
            </li>
            <li className={click ? "option active" : "option"} onClick={closeMobileMenu}>
              {/* <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/gallery'>Gallery</Link> */}
              <a className={isShown ? 'nav-link white' : 'nav-link'} href='#gallery'>Gallery</a>
            </li>
            <li className={click ? "option active" : "option"} onClick={closeMobileMenu}>
              {/* <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/service-menu'>Service Menu</Link> */}
              <a className={isShown ? 'nav-link white' : 'nav-link'} href='#service-menu-2'>Service Menu</a>
            </li>
            <li className={click ? "option active" : "option"} onClick={closeMobileMenu}>
              {/* <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/contact'>Contact</Link> */}
              <a className={isShown ? 'nav-link white' : 'nav-link'} href='#review'>Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
