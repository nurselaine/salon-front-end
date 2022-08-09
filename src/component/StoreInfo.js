import React from 'react';
import './StoreInfo.css';
import data from '../store_data.json';

const StoreInfo = () => {
  let storeData = data.basic_info;

  return (
    <div className='store-data-container'>
      {storeData.map((obj, i) => {
        return (
          <div className='info-container' key={i}>
            <p className='title-container'>{obj.title}</p>
            <div className='details-container'>
            {
              obj.description.map((string, i) => {
                return (
                  <p key={i}>{string}</p>
                )
              })
            }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StoreInfo;