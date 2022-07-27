import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX, HiOutlineCube } from 'react-icons/hi';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='header'>
      <div className='nav'>
        <div className='logo-container'>
          <a href="#">
            LOANN
          </a>
        </div>    
      
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className='option' onClick={closeMobileMenu}>
            <a href='#'>Home</a>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <a href='#'>Service menu</a>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <a href='#'>Gallery</a>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <ul className='social-container'>
          <li>
            <a href="#" ><GrFacebookOption className='social-icon'/></a>
          </li>
          <li>
            <a href='#'><AiOutlineMail className='social-icon'/></a>
          </li>
        </ul>

        <div id='menu-icon' onClick={handleClick}>
          {click ? (
            <HiOutlineMenu className="menu-icon" />
          ) : (
            <HiOutlineX className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
