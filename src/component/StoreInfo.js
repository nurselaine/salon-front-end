import React from 'react';
import './StoreInfo.css';
import data from '../store_data.json';

const StoreInfo = () => {
  let storeData = data.basic_info;

  console.log(data.basic_info);
  return (
    <table>
      <thead>
        <tr>
          {
            storeData.map(obj => {
              return (
              <th className='info-header'>{obj.title}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          {
            storeData.map(obj => {
              return (
                <th>
                  {obj.description.map(detail => {
                    return (
                      <div>{detail}</div>
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