// src/components/Person.js
import React from 'react';
import '../styles/Person.css';

const images = [
  'images/StreetMan4.png'
];

const messages = [
  "Andiswa Zweni",
  "Aneeqah Fakier",
  "Anene Booysen",
  "Angela Marinus",
  "Angelique Clarke-Abrahams",
  "Angelique Harmse",
  "Angelique Vanessa Pattenden",
  "Anika Smit",
  "Anisha van Niekerk",
  "Anna Francina Kruger"
];

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const getRandomSideStyle = () => {
  const sides = ['top', 'right', 'bottom', 'left'];
  const randomSide = sides[Math.floor(Math.random() * sides.length)];
  let style = { transform: 'translateY(-50%)' };

  switch (randomSide) {
    case 'top':
      style = { ...style, top: '0', left: `${Math.random() * 90}%`, transform: 'translateX(-50%)' };
      break;
    case 'right':
      style = { ...style, top: `${Math.random() * 90}%`, right: '0' };
      break;
    case 'bottom':
      style = { ...style, bottom: '0', left: `${Math.random() * 90}%`, transform: 'translateX(-50%)' };
      break;
    case 'left':
      style = { ...style, top: `${Math.random() * 90}%`, left: '0' };
      break;
    default:
      break;
  }
  return style;
};

const Person = ({ hasPopup }) => {
  const imageSrc = getRandomImage();
  const popupMessage = hasPopup ? messages[Math.floor(Math.random() * messages.length)] : '';

  return (
    <div className="person-container" style={getRandomSideStyle()}>
      <img src={imageSrc} alt="Person" className="person-image" />
      {hasPopup && <div className="popup-message">{popupMessage}</div>}
    </div>
  );
};

export default Person;