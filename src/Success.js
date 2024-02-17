import React, { useState } from 'react';
import './success.css';
import { Link } from 'react-router-dom';
import ListIcon from './assets/images/icon-list.svg';

function Success() {
  return (
    <div>
      <div className="containers">
        <div className="container-card">
        <img src={ListIcon} alt="desktop" />
        <h1>Thanks for Subscribing!</h1>
        <a>A confirmation email has been sent to <a class="text-bold">ash@loremcompany.com. </a> 
  Please open it and click the button inside to confirm your subscription.</a>

  <Link to="/" className="container-button">
              <p>Dismiss messager</p>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Success
