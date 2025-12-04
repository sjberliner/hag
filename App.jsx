import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="background-image">
        <img 
          src="https://images.pexels.com/photos/35046630/pexels-photo-35046630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="Crater Lake path"
          className="forest-bg"
        />
      </div>
      
      <div className="ufo-container">
        <img 
          src="https://images.pexels.com/photos/2353118/pexels-photo-2353118.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="UFO flying saucer"
          className="ufo"
        />
      </div>

      <div className="info-panel">
        <h1 className="title">Untitled-1</h1>
        
        <div className="entries">
          <div className="entry">
            <div className="date-info">
              <div className="date">Mar. 15, 2026</div>
              <div className="description">Lorem Ipsum dolor sit, Amet Consec</div>
              <div className="sub-info">Eiusmod Tempor, 2025</div>
            </div>
            <div className="lorem-id">Lorem 01</div>
          </div>

          <div className="entry">
            <div className="date-info">
              <div className="date">Mar. 22, 2026</div>
              <div className="description">Nullam Varius, Turpis ET</div>
              <div className="sub-info">Scelerisque, 2025</div>
            </div>
            <div className="lorem-id">Lorem 02</div>
          </div>

          <div className="entry">
            <div className="date-info">
              <div className="date">Mar. 23, 2026</div>
              <div className="description">Fusce ID Dui, Sit</div>
              <div className="sub-info">Tellus, 2025</div>
            </div>
            <div className="lorem-id">Lorem 03</div>
          </div>

          <div className="entry">
            <div className="date-info">
              <div className="date">Aug. 3, 2026</div>
              <div className="description">Tristique Neque Consequat, ES</div>
              <div className="sub-info">Sapien Varius Nunc, 2025</div>
            </div>
            <div className="lorem-id">Lorem 04</div>
          </div>
        </div>

        <div className="bottom-nav">
          <span className="shop">Shop</span>
          <span className="ig">IG</span>
        </div>
      </div>

      <div className="side-controls">
        <div className="control-dot active"></div>
        <div className="control-dot"></div>
        <div className="control-dot"></div>
        <div className="control-dot"></div>
      </div>
    </div>
  )
}

export default App
