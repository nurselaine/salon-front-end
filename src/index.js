import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './component/Home';
import Gallery from './component/Gallery';
import ServiceMenu from './component/ServiceMenu';
import AppointmentForm from './component/AppointmentForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/service-menu' element={<ServiceMenu/>} />
          <Route path='contact' element={<AppointmentForm/>}/>
        </Routes>
      </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
