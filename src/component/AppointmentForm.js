import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { AiOutlineSmile } from 'react-icons/ai';
import { ClipLoader } from 'react-spinners';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(1);
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleErrors = () => {

    if(number === '' || service === '' || name === ''){
      setErrors(true);
    } else {
      handleSubmit();
    }
  }

  const handleSubmit = (e) => {
    // send information to backend 
    const data = {
      name: name,
      email: email,
      number: number,
      service: service,
      message: message,
    }

      setLoading(true);
      const url = `${process.env.REACT_APP_SERVER}/appointments`;
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


       // reset state
    setName('');
    setEmail('');
    setNumber(1);
    setService('');
    setMessage('');
    setMessageSent(true);
    setLoading(false);

  }

  return (
    <div className='form-container'>
      <div className='contact-title-container'>
        <GiVibratingSmartphone />
        <h3 className='contact-title'>Get In Touch With Us</h3>
        <p className='contact-description'>Leave us a message and we will get back to you as soon as possible!</p>
      </div>
      <Form className={messageSent ? 'form-hidden' : 'form-show'}>
        <Form.Group className='form-input' required>
          <Form.Control onChange={(e) => setName(e.target.value)} type='name' placeholder='Name*' />
        </Form.Group>
        <Form.Group onChange={(e) => setEmail(e.target.value)} className='form-input'>
          <Form.Control type='email' placeholder='Email*' />
        </Form.Group>
        <Form.Group onChange={(e) => setNumber(e.target.value)} className='form-input' required>
          <Form.Control type='phone' placeholder='Phone Number*' />
        </Form.Group>
        <Form.Group onChange={(e) => setService(e.target.value)} className="form-input" required>
          <Form.Select>
            <option value='' selected disabled>select a service*</option>
            <option value='haircut'>Haircut</option>
            <option value='styling'>Styling</option>
            <option value='colour'>Colour</option>
            <option value='treatment'>Treatment</option>
          </Form.Select>
        </Form.Group>
        <Form.Group onChange={(e) => setMessage(e.target.value)} className='form-input'>
          <textarea className='form-control' rows='8' placeholder='Message*' required></textarea>
        </Form.Group>
      </Form>
      {
        loading ?
          <div className='loader'>
            <ClipLoader/>
          </div>
          :
          <div className={messageSent ? 'form-hidden' : 'form-show form-btn-container'}>
            <Button id='form-btn' variant="dark" onClick={handleErrors}>Send Message</Button>
            {errors &&
             <div className='error-msg'>Please add all REQUIRED* feilds</div>
            }
            
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