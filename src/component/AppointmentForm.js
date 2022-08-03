import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GiVibratingSmartphone } from 'react-icons/gi';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(1);
  const [service, setService] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = (e) => {
    // send information to backend 
  }

  return (
    <div className='form-container'>
      <div className='contact-title-container'>
        <GiVibratingSmartphone/>
        <h3 className='contact-title'>Get In Touch With Us</h3>
        <p className='contact-description'>Leave us a message and we will get back to you as soon as possible!</p>
      </div>
      <Form>
        <Form.Group className='form-input' required>
          <Form.Control onChange={(e) => setName(e.target.value)} type='name' placeholder='Name*'/>
        </Form.Group>
        <Form.Group onChange={(e) => setEmail(e.target.value)} className='form-input'>
          <Form.Control type='email' placeholder='Email'/>
        </Form.Group>
        <Form.Group onChange={(e) => setNumber(e.target.value)} className='form-input' required>
          <Form.Control type='phone' placeholder='Phone Number*'/>
        </Form.Group>
        <Form.Group onChange={(e) => setMessage(e.target.value)} className="form-input" required>
          <Form.Select>
            <option value='' selected disabled>select a service</option>
            <option value='haircut'>Haircut</option>
            <option value='styling'>Styling</option>
            <option value='colour'>Colour</option>
            <option value='treatment'>Treatment</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='form-input'>
          <textarea class='form-control' rows='8' placeholder='Message*' required></textarea>
          {/* <Form.Control rows='8' type='message' placeholder='Message*'/> */}
        </Form.Group>
      </Form>
      <div className='form-btn-container'>
        <Button id='form-btn' variant="dark" onClick={handleSubmit}>Send Message</Button>
      </div>
    </div>
  )
}

export default AppointmentForm;