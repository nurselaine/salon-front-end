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
    <div className={click ? 'header active' : 'header'}>
      <div id='hover'>
        <div className={click ? 'top-nav active' : 'top-nav'}>
          <ul className='social-container'>
            <li>
              <div className='nav-link' href="#" ><GrFacebookOption className='social-icon' /></div>
            </li>
            <li>
              <div className='nav-link' href='#'><AiOutlineMail className='social-icon' /></div>
            </li>
          </ul>
          <h2 className='logo' href="#">
            LOANN
          </h2>
          <div className='btn-container'>
            Book Appointment
          </div>

          <div className='menu-icon' onClick={handleClick}>
            {click ? (
              <HiOutlineX className="menu-icon" />
            ) : (
              <HiOutlineMenu className="menu-icon" />
            )}
          </div>
        </div>

        <div className='nav-container'>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className='option' onClick={closeMobileMenu}>
            <p className='nav-link' href='#'>Home</p>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <p className='nav-link' href='#'>Gallery</p>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <p className='nav-link' href='#'>Service menu</p>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <p className='nav-link' href='#'>Contact</p>
          </li>
        </ul>

      </div>

      </div>
    </div>
  );
};

export default Navbar;
