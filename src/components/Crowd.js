// src/components/Crowd.js
import React, { useState, useEffect } from 'react';
import '../styles/Crowd.css';

const Crowd = () => {
  const images = [
    
    'images/StreetMan4.png'
  ];

  const messages = [
    "Agnes Mzisa",
    "Agnes Ndlovu",
    "Alexa Viljoen",
    "Alice Lotter",
    "Allison Plaatjies",
    "Althea Spires",
    "Althena Malgas",
    "Alyssa Botha",
    "Amber Strydom",
    "Amy Biel"
  ];

  const generateRandomIndices = () => {
    let indices = new Set();
    while (indices.size < 15) {
      indices.add(Math.floor(Math.random() * 30));
    }
    return Array.from(indices);
  };

  const [popupIndices, setPopupIndices] = useState(generateRandomIndices());

  const getRandomStyle = () => {
    const randomTop = 20 + Math.random() * 60; // Random top position between 20% and 80%
    const randomLeft = 20 + Math.random() * 60; // Random left position between 20% and 80%
    return {
      top: `${randomTop}%`,
      left: `${randomLeft}%`
    };
  };

  return (
    <div className="crowd-container">
      {[...Array(30)].map((_, index) => {
        const imageSrc = images[index % images.length];
        const hasPopup = popupIndices.includes(index);
        return (
          <div key={index} className="person-container" style={getRandomStyle()}>
            <img src={imageSrc} alt="Person" className="person-image" />
            {hasPopup && <div className="popup-message">{messages[index % messages.length]}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Crowd;