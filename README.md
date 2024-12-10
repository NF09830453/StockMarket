Stock Market Game

A React-based stock market simulation game with real-time trading features and configurable game modes.
Features

    Real-time stock market data visualization using TradingView widget
    Configurable starting capital and round time settings
    Multiple game modes with different stock pool sizes
    Portfolio management and trade execution
    Real-time capital tracking
    Responsive design with modern UI elements

Tech Stack

    Frontend: React.js
    Backend: Flask (Python)
    Additional Libraries:
        react-tradingview-widget
        react-router-dom
        @material-ui/core


Game Configuration
Player Settings:

    Starting Capital: Choose from $100, $1,000, $10,000, or $100,000
    Round Time Options:
        Casual (no time limit)
        Blitz (5 minutes)
        Hour (1 hour)
        Day (6.5 hours)

Game Modes:

    Pool of 10 stocks
    Pool of 20 stocks
    Unrestricted access to all stocks

    
![Screenshot 2023-11-07 231633](https://github.com/user-attachments/assets/df4774b9-edf2-4e16-962c-cc547a77e716)


Directory structure:
└── NF09830453-StockMarket
    ├── stockapp
    │   ├── public
    │   │   ├── manifest.json
    │   │   ├── index.html
    │   │   ├── favicon.ico
    │   │   ├── robots.txt
    │   │   └── Config.HTML
    │   ├── Backend
    │   │   └── base.py
    │   ├── package.json
    │   ├── README.md
    │   └── src
    │       ├── Portfolio
    │       │   ├── Profile.css
    │       │   └── Profile.js
    │       ├── setupTests.js
    │       ├── GameM
    │       │   └── GameMode.js
    │       ├── index.css
    │       ├── App.js
    │       ├── DynamicConfig.js
    │       ├── reportWebVitals.js
    │       ├── ConfigPlayer
    │       │   └── ConfigPlay.js
    │       ├── App.css
    │       ├── App.test.js
    │       └── index.js
    └── README.md
