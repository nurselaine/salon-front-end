import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Button from 'react-bootstrap/Button';
import StoreInfo from './StoreInfo';
import ServiceMenu from './ServiceMenu';
import AboutSection from './AboutSection';
import AppointmentForm from './AppointmentForm';
import { Link } from 'react-router-dom';
import data from '../store_data.json';
import {BsSuitHeart} from 'react-icons/bs';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-splash'>
        <div className='hero'>
          <div><Navbar className='nav-bar' /></div>
          <div className='hero-title-container'>
            <div className='hero-title'>It Doesn't Matter If Your Life is Perfect as Long as Your Hair Color is.</div>
            <div className='hero-btn-container'>
              <Button id='book-btn' variant="outline-light"><Link className='nav-link' to='/contact'>BOOK APPOINTMENT</Link></Button>
              <Button id='book-btn2' variant="light"><Link className='nav-link' to='/service-menu'>VIEW SERVICE MENU</Link></Button>
            </div>
          </div>
          <div className='basic-info-container' >
            <StoreInfo />
          </div>
        </div>
      </div>
      <section id='basic-info-section' >
        <StoreInfo />
      </section>
      <section className='service-menu-container'>
        <ServiceMenu />
        <div id='service-btn-container'>
          <Button id='book-btn3' variant="dark">BOOK APPOINTMENT</Button>
        </div>
      </section>
      <section className='about-section-container'>
        <AboutSection 
          url='../../public/imgs/loann-image.jpg' 
          alt='photo of Loann' 
          data={data.about_loan.bio} 
          title="Loann's Story" 
          direction='row'/>
      </section>
      <section className='gallery-section'>
        <h1 className='gallery-title'>Gallery</h1>
        <div className='gallery-container'>
          <div className='div-1'></div>
          <div className='div-2'></div>
          <div className='div-3'></div>
          <div className='div-4'></div>
          <div className='div-5'></div>
          <div className='div-6'></div>
          <div className='div-7'></div>
        </div>
        <div className='review-btn-container'>
          <div className='review-info'>
            <BsSuitHeart/>
            <BsSuitHeart/>
            <p>Please send us a review telling us a bit about your experience. Add a picture of your beautiful hair too!</p>
          </div>
        <Button id='book-btn4' variant="outline-dark">ADD A REVIEW</Button>
        </div>
      </section>

      <section className='about-section-container'>
        <AboutSection 
          url='../../public/imgs/candle-flower.jpg' 
          alt='photo of candle' 
          data={data.about_loan.education_experience} 
          title="Experience & Education" 
          direction='row-reverse'/>
      </section>
      <section>
        <AppointmentForm id='book-appt'/>
      </section>
    </div>
  )
}

export default Home;
