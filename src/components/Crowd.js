// src/components/Crowd.js
import React, { useState, useEffect } from 'react';
import '../styles/Crowd.css';

const Crowd = () => {
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