import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageDesktop from './assets/images/illustration-sign-up-desktop.svg';
import ListIcon from './assets/images/icon-list.svg';
import './styles.css';
import Success from './Success';

function Landing() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  
    const isValid = inputValue.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setValidEmail(isValid);
  };
  

  return (
    <div className="container">
    <div className="card-content">
      <div className="container-text">
        <h1>Stay updated!</h1>
        <p className="container-text-title">Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="icon-text-container">
          <div className="image-container">
            <img src={ListIcon} alt="icon" />
          </div>
          <span>Product discovery and building what matters</span>
        </div>
        <div className="icon-text-container">
          <div className="image-container">
            <img src={ListIcon} alt="icon" />
          </div>
          <span>Measuring to ensure updates are a success</span>
        </div>
        <div className="icon-text-container">
          <div className="image-container">
            <img src={ListIcon} alt="icon" />
          </div>
          <span>And much more!</span>
        </div>
        <p className="icon-text-container-2">
  Email address 
  {!validEmail && <span className="invalid-email-message"> Valid email required</span>}
</p>
        <input 
            className={`input-form ${validEmail ? '' : 'invalid-email'}`}
            placeholder="email@company.com"
            value={email}
            onChange={handleInputChange}
          />
          
      </div>
      {validEmail ? (
            <Link to="/success" className="container-button">
              <p>Subscribe to monthly newsletter</p>
            </Link>
          ) : (
            <div className="container-button disabled">
              <p>Subscribe to monthly newsletter</p>
            </div>
          )}
    </div>
    <div className="container-image">
      <img src={ImageDesktop} alt="desktop" />
    </div>
  </div>
);
}

export default Landing;
