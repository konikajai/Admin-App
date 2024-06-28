import React from 'react';
import './Header.css';
const header = (props)=>{
      return (
          <div className='header'>
            <h2 className='display-7'>{props.title}</h2>
          </div>    
      )
}
export default header;