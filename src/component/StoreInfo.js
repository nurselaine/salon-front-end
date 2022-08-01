import React from 'react';
import './StoreInfo.css';
import data from '../store_data.json';

const StoreInfo = () => {
  let storeData = data.basic_info;

  return (
    <table>
      <thead>
        <tr>
          {
            storeData.map((obj, i) => {
              return (
              <th key={i} className='info-header'>{obj.title}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          {
            storeData.map((obj, i) => {
              return (
                <th key={i}>
                  {obj.description.map((detail, i) => {
                    return (
                      <div key={i}>{detail}</div>
                    )
                  })}
                </th>
              )
            })
          }
        </tr>
      </tbody>
    </table>
  )
}

export default StoreInfo;