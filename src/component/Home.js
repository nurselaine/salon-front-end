import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-splash'>
        <div className='hero'>
          <div><Navbar className='nav-bar' /></div>     
          <div className='hero-title-container'>
            <div className='hero-title'>It Doesn't Matter If Your Life is Perfect as Long as Your Hair Color is.</div>
            <div className='btn-container'>
            Book Appointment
          </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Home;
