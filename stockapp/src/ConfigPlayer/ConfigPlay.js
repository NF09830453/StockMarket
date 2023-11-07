import React,  { useState } from 'react';

function Blogs(){
  const [value, setValue] = React.useState(100);
  const [roundTime, setRoundTimeValue] = React.useState(1000);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10)
    setValue(newValue);
    fetch('http://192.168.0.165:5500/Config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedValue: newValue }),
    })

  };
  const handleRoundTimeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setRoundTimeValue(newValue);
    fetch('http://192.168.0.165:5500/Time', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedTime: newValue }),
    })
  };

  
  return( 
    <div>
      <h1>Configure Player Settings</h1>
        <label>

          Starting Capital?   

          <select value={value} onChange={handleChange}>

            <option value={100}>100</option>

            <option value={1000}>1000</option>

            <option value={10000}>10000</option>

            <option value={100000}>100000</option>

          </select>

        </label>
        <label>

          Round time?   

          <select value={roundTime} onChange={handleRoundTimeChange}>

            <option value={1000}>casual (no limit)</option>

            <option value={5}>blitz (5 min)</option>

            <option value={60}>hour (1 hr)</option>

            <option value={390}>day (6.5 hrs)</option>

          </select>

        </label>
    </div>
  );
};
  
export default Blogs;