import React,  { useState } from 'react';


function GameConfig(){
    const [value, setValue] = React.useState(100);
    const handleChange = (event) => {
        const newValue = parseInt(event.target.value, 10)
        setValue(newValue);
        fetch('http://192.168.0.165:5500/Mode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedMode: newValue }),
        })
    
    };
    return( 
        <div>
          <h1>Configure Game Mode Settings</h1>
            <label>
    
              Game Mode?   
    
              <select value={value} onChange={handleChange}>
    
                <option value={1}>Pool of 10 stocks</option>
    
                <option value={2}>Pool of 20 stocks</option>
    
                <option value={3}>No Pool (full access)</option>
        
              </select>
    
            </label>
        </div>
    );

}

export default GameConfig;