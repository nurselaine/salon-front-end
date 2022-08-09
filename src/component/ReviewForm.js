import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GiPencil } from 'react-icons/gi';
import { AiOutlineSmile } from 'react-icons/ai';
import { ClipLoader } from 'react-spinners';
import './ReviewForm.css';

const AppointmentForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [review, setReview] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReviewSubmit = (e) => {
    // send information to backend 
    const data = {
      name: name,
      email: email,
      service: service,
      review: review,
      date: new Date(),
    }

    setLoading(true);
    // send review to back end for db
    const url = `${process.env.REACT_APP_SERVER}/reviews`; 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error('error:', error);
      });

      // send text information to backend
      const reviewUrl = `${process.env.REACT_APP_SERVER}/newReview`;
      fetch(reviewUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error('error:', error)
        })

    props.handleFormClose();

    // reset state
    setName('');
    setEmail('');
    setService('');
    setReview('');
    setMessageSent(false);
    setLoading(false);
  }

  return (
    <div className='form-container'>
      <div className={messageSent ? 'contact-title-container inactive' : 'contact-title-container'}>
        <GiPencil />
        <h3 className='contact-title'>Give Us Your Feedback</h3>
        <p className='contact-description'>Tell us more about your experience and what we can improve on!</p>
      </div>
      <Form className={messageSent ? 'form-hidden' : 'form-show'}>
        <Form.Group className='form-input' required>
          <Form.Control onChange={(e) => setName(e.target.value)} type='name' placeholder='Name*' />
        </Form.Group>
        <Form.Group onChange={(e) => setEmail(e.target.value)} className='form-input'>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group>
        <Form.Group onChange={(e) => setService(e.target.value)} className="form-input" required>
          <Form.Select defaultValue=''>
            <option value='' disabled>select a service</option>
            <option value='haircut'>Haircut</option>
            <option value='styling'>Styling</option>
            <option value='colour'>Colour</option>
            <option value='treatment'>Treatment</option>
            <option value='other'>Other - please specify below</option>
          </Form.Select>
        </Form.Group>
        <Form.Group onChange={(e) => setReview(e.target.value)} className='form-input'>
          <textarea className='form-control' rows='8' placeholder='Add your Review*' required></textarea>
        </Form.Group>
      </Form>
      {
        loading ?
          <div className='loader'>
            <ClipLoader />
          </div>
          :
          <div className={messageSent ? 'form-hidden' : 'form-show form-btn-container'}>
            <Button id='form-btn' variant="dark" onClick={handleReviewSubmit}>Submit Review</Button>
          </div>
      }
      <div className='submitted-container'>
        <div className={messageSent ? 'submit' : 'not-Submit'}>
          <AiOutlineSmile />
          <h3 className='submit-title'>Your message has been sent!</h3>
          <p className='submit-message'>Someone will contact you with appointment times and further information</p>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm;