import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Button from 'react-bootstrap/Button';
import StoreInfo from './StoreInfo';
import ServiceMenu from './ServiceMenu';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-splash'>
        <div className='hero'>
          <div><Navbar className='nav-bar' /></div>
          <div className='hero-title-container'>
            <div className='hero-title'>It Doesn't Matter If Your Life is Perfect as Long as Your Hair Color is.</div>
            <div className='hero-btn-container'>
              <Button id='book-btn' variant="outline-light">BOOK APPOINTMENT</Button>
              <Button id='book-btn2' variant="light">VIEW SERVICE MENU</Button>
            </div>
          </div>
          <div className='basic-info-container' >
            <StoreInfo />
          </div>
        </div>
      </div>
      <div id='basic-info-section' >
        <StoreInfo />
      </div>
      <div className='service-menu-container'>
        <ServiceMenu />
        <div id='service-btn-container'>
          <Button id='book-btn3' variant="dark">BOOK APPOINTMENT</Button>
        </div>
      </div>
    </div>
  )
}

export default Home;
