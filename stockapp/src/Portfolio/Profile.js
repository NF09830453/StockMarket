import React,  { useState, useEffect } from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import './Profile.css';


function Portfolio(){
    const [info, setData] = useState(null);
    const [capital, setCap] = useState(null);
    const placeTrade = async () => {
        fetch('http://192.168.0.165:5500/Trade', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ shares: "2" }),
        })
    };
    useEffect(() => {
        const getInfo = () => {
            fetch('http://192.168.0.165:5500/Acc') 
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(info => {
                setData(info);
                setCap(info.capital);
            })
            .catch(error => {
                console.error('There was a problem with the fetch:', error);
            });
        };
        getInfo(); 
        const interval = setInterval(() => {
            getInfo(); 
        }, 5000); 
        return () => {
            clearInterval(interval); 
        };
      
    
    }, []);

    return (
        <div>
          
          {info && (
            <div>
              <p>Current Capital:</p>
              <p>$ {capital }</p>
              <button onClick = {placeTrade} class= "round">Place Trade</button>
            </div>
          )}
        
        <div className = "containerStyle">
        <TradingViewWidget
          symbol="AAPL"  
          locale="en"
          interval="1D"
          timezone="America/New_York"
          theme="dark"
          style="1"
          toolbar_bg="#f1f3f6"
          enable_publishing={false}
          allow_symbol_change={true}
          container_id="tradingview-widget-container"
        />
        </div>

      </div>
      );

}



export default Portfolio;