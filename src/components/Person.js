// src/components/Person.js
import React from 'react';
import '../styles/Person.css';

const images = [
 
  `${process.env.PUBLIC_URL}/images/StreetMan4.png`
];

const messages = [
  "Agnes Mzisa",
  "Agnes Ndlovu",
  "Alexa Viljoen",
  "Alice Lotter",
  "Allison Plaatjies",
  "Charmaine Piers",
  "Christel Steenkamp",
  "Clarissa Lindoor",
  "Colleen Nesbit (Swart)",
  "Courtney Petersen",
  "Cytheria Rex",
  "Danel Rooskrans",
  "Daphne Mavis Higgins",
  "Dawn Basdeo",
  "Denise Gawler",
  "Denisha Govindasamy",
  "Denushe Witbooi",
  "Desiree Murugan",
  "Devina Europa",
  "Diane Sauls",
  "Dianne Rose Ayres",
  "Dimakatso Jane Ndarala",
  "Doma C Peacock (Dr)",
  "Dorned van der Haar (Paashaus)",
  "Edna Janse Van Vuuren",
  "Althea Spires",
  "Althena Malgas",
  "Alyssa Botha",
  "Amber Strydom",
  "Amy Biel",
  "Andiswa Zweni",
  "Aneeqah Fakier",
  "Anene Booysen",
  "Angela Marinus",
  "Angelique Clarke-Abrahams",
  "Angelique Harmse",
  "Angelique Vanessa Pattenden",
  "Anika Smit",
  "Anisha van Niekerk",
  "Anna Francina Kruger",
  "Anna vd Merwe",
  "Annatjie Myburgh",
  "Annchen Ferreira",
  "Anne Marie Aylward",
  "Anne Fouche",
  "Anne Roebert",
  "Annette Kennealy",
  "Anni Dewani",
  "Ann-Mari Wapenaar",
  "Anthea Thopps",
  "Antoinette Botha",
  "Anzunette du Plessis",
  "Arina Muller",
  "Asemahle Philani",
  "Ashika Singh",
  "Aviwe JamJam",
  "Aviwe Wellem",
  "Ayakha Jiyane",
  "Babongile Nzama",
  "Baby C",
  "Baby Jordan Leigh Norton",
  "Belinda Erika Werner",
  "Beryl Lamberth",
  "Beryl Morgan",
  "Beth Tomlinson",
  "Bianca Lino McGowan",
  "Boitumelo Matsekoleng",
  "Bongiswa Majikijela",
  "Brenda Fairhead",
  "Brenda Johannes",
  "Brenda Rwando",
  "Bukeka Sigungqa",
  "Busisiwe Busi Ngwadla",
  "Cameron Britz",
  "Candice Bartman",
  "Cara Austen Jenkins",
  "Carmelitta Baatjies",
  "Carol Fabriek",
  "Carol Pienaar",
  "Caroline Jacobs",
  "Carolyn Frara",
  "Catherine Krog",
  "Cathy Purdon",
  "Cecile Potgieter",
  "Cecile Smit",
  "Celeste Smith",
  "Celine Cowley",
  "Ceri Duvenhage McCrae",
  "Chanel de Toit",
  "Chanelle Henning",
  "Chantelle Borcher (Leendertz)",
  "Chantelle Matthysen",
  "Charmaine Cannings",
  "Charmaine Mare",
  "Edwina Thomas",
  "Eileen Allister",
  "Elaine Conradie",
  "Elaine Venter",
  "Eleanor Wyngaardt",
  "Elizabeth Jacomina Dercksen"
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
    <section className="person-container" style={getRandomSideStyle()}>
      <img src={imageSrc} alt="Person" className="person-image" />
      {hasPopup && <div className="popup-message">{popupMessage}</div>}
    </section>
  );
};

export default Person;