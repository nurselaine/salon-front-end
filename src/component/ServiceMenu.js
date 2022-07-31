import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import data from '../store_data.json';
import ServiceAccordion from './ServiceAccordion';

const ServiceMenu = () => {
  const services = data.services;

  const getHaircutData = () => {
    const haircutData = services.filter(obj => obj.serviceType === 'HAIRCUT');
    return haircutData;
  }

  const getStylingData = () => {
    const stylingData = services.filter(obj => obj.serviceType === 'STYLING');
    return stylingData;
  }

  const getColourData = () => {
    const colorData = services.filter(obj => obj.serviceType === 'COLOUR');
    return colorData;
  }

  const getTreatmentData = () => {
    const treatmentData = services.filter(obj => obj.serviceType === 'TREATMENT');
    return treatmentData;
  }

  return (
    <div>
      <div>Service Menu</div>
      <Tabs
        defaultActiveKey='HAIRCUT'
        id='uncontrolled-tab-example'
        className='mb-3'
      >
        <Tab eventKey='HAIRCUT' title='HAIRCUT'>
          <ServiceAccordion data={getHaircutData()} />

        </Tab>
        <Tab eventKey='STYLING' title='STYLING'>
          <ServiceAccordion data={getHaircutData()} />

        </Tab>
        <Tab eventKey='COLOUR' title='COLOUR'>
          <ServiceAccordion data={getHaircutData()} />
        </Tab>
        <Tab eventKey='TREATMENT' title='TREATMENT'>
          <ServiceAccordion data={getHaircutData()} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default ServiceMenu;