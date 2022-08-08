import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  console.log(isShown);
  return (
    <div className={click ? 'header active' : 'header'}>
      <div 
        onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)} 
        id={isShown ? 'hover-active' : 'hover'}
      >
        <div className={click ? 'top-nav active' : 'top-nav'}>
          <ul className='social-container'>
            <li>
              <div className={isShown ? 'nav-link white' : 'nav-link'} href="#" ><GrFacebookOption className='social-icon' /></div>
            </li>
            <li>
              <div className={isShown ? 'nav-link white' : 'nav-link'} href='#'><AiOutlineMail className='social-icon' /></div>
            </li>
          </ul>
          <h2 className={isShown ? 'logo white' : 'logo'} href="#">
            LOANN
          </h2>
          <div className='btn-container'>
            <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/contact'>Book Appointment</Link>
          </div>

          <div className='menu-icon' onClick={() => setClick(!click)}>
            {click ? (
              <HiOutlineX className='nav-icon'/>
            ) : (
              <HiOutlineMenu className='nav-icon'/>
            )}
          </div>
        </div>

        <div className='nav-container'>

          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className='option' onClick={closeMobileMenu}>
              {/* <p className='nav-link' href='#'>Home</p> */}
              <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/'>Home</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              {/* <p className='nav-link' href='#'>Gallery</p> */}
              <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/gallery'>Gallery</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              {/* <p className='nav-link' href='#'>Service menu</p> */}
              <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/service-menu'>Service Menu</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              {/* <p className='nav-link' href='#'>Contact</p> */}
              <Link className={isShown ? 'nav-link white' : 'nav-link'} to='/contact'>Contact</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
