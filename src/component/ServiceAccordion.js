import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const ServiceAccordion = (props) => {
  const data = props.data;
  console.log(props.data);
  return (
    <Accordion>
    {

      data.map((obj, i) => {
        return ( 
          <Accordion.Item eventKey={i}>
            <Accordion.Header>
              <div>{obj.title}</div>
              <div>{`$${obj.price}`}</div>
            </Accordion.Header>
            <Accordion.Body>
              <div>
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