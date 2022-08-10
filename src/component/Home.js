import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import Button from 'react-bootstrap/Button';
import StoreInfo from './StoreInfo';
import ServiceMenu from './ServiceMenu';
import AboutSection from './AboutSection';
import AppointmentForm from './AppointmentForm';
import ReviewForm from './ReviewForm';
import Footer from './Footer';
import data from '../store_data.json';
import { BsSuitHeart } from 'react-icons/bs';

const Home = () => {

  const [showReviewForm, setShowReviewForm] = useState(false);

  const closeReviewForm = () => {
    setShowReviewForm(false);
  }

  return (
    <div id='home-top' className='home-container'>
      <div className='home-splash'>
        <div className='hero'>
          <div><Navbar className='nav-bar' /></div>
          <div className='hero-title-container'>
            <div className='hero-title'>It Doesn't Matter If Your Life is Perfect as Long as Your Hair Color is.</div>
            <div className='hero-btn-container'>
              <Button id='book-btn' variant="outline-light"><a href='#book-appt' id='link2book'>BOOK APPOINTMENT</a></Button>
              <Button id='book-btn2' variant="light"><a href='#service-menu-2' id='link2menu'>VIEW SERVICE MENU</a></Button>
            </div>
          </div>
          <div className='basic-info-container' >
            <StoreInfo />
          </div>
        </div>
      </div>
      <section id='basic-info-section'>
        <StoreInfo />
      </section>
      <section id='service-menu-2' className='service-menu-container'>
        <ServiceMenu id='service-menu' />
        <div id='service-btn-container'>
          <Button id='book-btn3' variant="dark"><a href='#book-appt' id='link2book'>BOOK APPOINTMENT</a></Button>
        </div>
      </section>
      <section className='about-section-container'>
        <AboutSection
          url='../../public/imgs/loann-image.jpg'
          alt='photo of Loann'
          data={data.about_loan.bio}
          title="Loann's Story"
          direction='row' />
      </section>
      <section id='gallery' className='gallery-section'>
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
        <div id='review' className='review-btn-container'>
          <div className='review-info'>
            <BsSuitHeart />
            <BsSuitHeart />
            <p>Please send us a review telling us a bit about your experience. Add a picture of your beautiful hair too!</p>
          </div>
          <Button
            id='book-btn4'
            variant="outline-dark"
            onClick={() => { setShowReviewForm(true) }}
          >
            ADD A REVIEW
          </Button>
          {
            showReviewForm &&
            <>
              <ReviewForm handleFormClose={closeReviewForm} />
              <Button
                id='book-btn4'
                variant="outline-dark"
                onClick={() => { setShowReviewForm(false) }}
              >
                cancel
              </Button>
            </>
          }
        </div>
      </section>

      <section className='about-section-container'>
        <AboutSection
          url='../../public/imgs/candle-flower.jpg'
          alt='photo of candle'
          data={data.about_loan.education_experience}
          title="Experience & Education"
          direction='row-reverse' />
      </section>
      <section id='book-appt' name='book-appt' >
        <AppointmentForm />
      </section>
      <section id='basic-info-section2' >
        <StoreInfo />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
