import React from 'react';
import './StoreInfo.css';
import data from '../store_data.json';

const StoreInfo = () => {
  let storeData = data.basic_info;

  return (
    <div className='store-data-container'>
      {storeData.map(obj => {
        return (
          <div className='info-container'>
            <p className='title-container'>{obj.title}</p>
            <div className='details-container'>
            {
              obj.description.map(string => {
                return (
                  <p>{string}</p>
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