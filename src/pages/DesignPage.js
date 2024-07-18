// src/pages/DesignPage.js
import React from 'react';
import '../styles/Pages.css';
import Person from '../components/Person';
import Wireframe1 from '../assests/Wireframe1.jpg'
import Wireframe2 from '../assests/Wireframe2.jpg'

const DesignPage = () => {
  const personCount = 3; // to add the amount of people I want on the page
  const popupIndices = new Set();
  while (popupIndices.size < 3) { // Adjusting to control number of pop-ups
    popupIndices.add(Math.floor(Math.random() * personCount));
  }

  return (
    <section className="page-container">
    <h1>Design Page</h1>
      <section className="blog-post">
          <h2>Website Design: Functionality and Simplicity </h2>
          <p>The decision to opt for a minimalist color palette of a white background and bold black text was a strategic one,
             inspired by the timeless aesthetic of classic newspaper design. This clean, uncluttered approach serves as the perfect foundation 
             for the website, allowing the content to take center stage without distractions.  It is responsive and does not clutter the screen
              and essentially gets the message across. The use of a simple font adds a sense of authority and professionalism, instantly drawing 
              the user's eye and conveying a sense of functionality over fancy frills.
               <br></br>
               The navigation bar uses the standard conventions from most websites 
              and also hides the navigation links to further emphasize the content. The landing page design is meant to draw the user's attention and set the 
              tone for the application. The theme of the application is femicide, therefore the large "Say her name" text right above an animated image
               of the dead bird in a red background plays into the theme and immediately gets the user's attention to the subject. 

               <br></br>
               References:
               <br></br>
               <ol>
            <li>Image used for the bird that was then edited for the purpose of the landing page.<a href='https://spirituallyf.com/dead-bird-meaning/'>Found here</a>  </li>
          
          </ol>
              
           </p>
      </section>
      <section className="blog-post">
          <h2>Wireframes </h2>
          <img className='Image' src={Wireframe1}></img>
          <img className='Image'src={Wireframe2}></img>
      </section>


      {Array.from({ length: personCount }).map((_, index) => (
        <Person key={index} hasPopup={popupIndices.has(index)} />
      ))}
    </section>
  );
};

export default DesignPage;