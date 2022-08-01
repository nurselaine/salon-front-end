import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import data from '../store_data.json';
import ServiceAccordion from './ServiceAccordion';
import './ServiceMenu.css';

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
    <div className='service-menu'>
      <div className='service-title'>Service Menu</div>
      <Tabs
        defaultActiveKey='HAIRCUT'
        id='uncontrolled-tab-example'
        className='mb-3'
      >
        <Tab className='service-option' eventKey='HAIRCUT' title='HAIRCUT'>
          <ServiceAccordion data={getHaircutData()} />

        </Tab>
        <Tab className='service-option' eventKey='STYLING' title='STYLING'>
          <ServiceAccordion data={getStylingData()} />

        </Tab>
        <Tab className='service-option' eventKey='COLOUR' title='COLOUR'>
          <ServiceAccordion data={getColourData()} />
        </Tab>
        <Tab className='service-option' eventKey='TREATMENT' title='TREATMENT'>
          <ServiceAccordion data={getTreatmentData()} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default ServiceMenu;