import React from 'react';
import ArrowComponent from '../Components/Toward';
function Welcome() {
    return (
        <div className='bg-cyan-500	'>
            <div><ArrowComponent to="/" /></div>
            <h1>Welcome to AirWach!</h1>
        </div>
    );
  }
  

export default Welcome;