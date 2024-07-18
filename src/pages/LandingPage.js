// src/LandingPage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import deadbird from '../assests/Deadbird.png';
import '../styles/Landingpage.css';


const LandingPage = () => {
  return (
    <section className="container">
      <section className="text">#SAYHERNAME</section>
      <section className="image-container">
        <img className="image" src={deadbird} alt="Dead Bird" />
      </section>
      <section className="red-block" />
    </section>
  );
};

export default LandingPage;