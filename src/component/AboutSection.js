import React from 'react';
import './AboutSection.css';

const AboutSection = (props) => {
  return (
    <div className={props.direction === 'row' ? 'section-container' : 'section2-container'}>
      <div className={props.direction === 'row' ? 'photo-container' : 'photo2-container'}>
      </div>
      <div className='section-info-container'>
        <div className='section-info'>
          <h3>{props.title}</h3>
          <p>{props.data}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;