import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ServiceAccordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleOpen = (e, i) => {
      setActiveIndex(i);
      setIsActive(!isActive);
  }

  const data = props.data;
  return (
    <Accordion>
    {

      data.map((obj, i) => {
        return ( 
          <Accordion.Item id='service-accordion-item' key={i} onClick={(e) => handleOpen(e,i)} eventKey={i}>
            <Accordion.Header>
              <div id='service-title'>{obj.title}</div>
              <div id='service-price'>{`$${obj.price}`}</div>
              {
                isActive && activeIndex === i ? <AiOutlineMinus className='accordion-btn' /> : <AiOutlinePlus className='accordion-btn' />
              }
            </Accordion.Header>
            <Accordion.Body>
              <div id='service-description'>
                {`${obj.description} (${obj.time})`}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        )
      })
    }
  </Accordion>
  );
}

export default ServiceAccordion;