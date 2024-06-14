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
    <div className="page-container">
    <h1>Design Page</h1>
      <section className="blog-post">
          <h2>Website Design: Functionality and Simplicity </h2>
          <p>When it comes to the design for this website, I've chosen prioritize functionality over everything else. For me, the goal was to create a site that was not only 
            aesthetically pleasing, but also easy to read and navigate. That's why I opted for a classic color palette of white background and black text, reminiscent of the old newspaper design.
             The landing page may seem plain at first glance, but the bold Times New Roman font immediately catches the eye and sets the tone.
             <br></br> This design is meant to serve as the foundation for the final product,
              one that is responsive and uncluttered, allowing the content to take center stage. By keeping things simple and focused, I can easily build upon this design and adjust it as needed, ensuring that the message is delivered
               effectively, without distractions or unnecessary bells and whistles.

               <br></br>
               The decision to opt for a minimalist color palette of an off-white/grey background and bold black text was a strategic one, inspired by the timeless aesthetic of classic newspaper design. This clean, uncluttered approach serves as the perfect foundation for the website, 
               allowing the content to take center stage without distractions. This design essentially acts as the foundation for the final product. I feel that with this design, I can easily build upon it and adjust it according to how my artwork turns out. It is responsive and does not
                clutter the screen and essentially gets the message across. The use of a traditional font like Times New Roman adds a sense of authority and professionalism, instantly drawing the user's eye and conveying a sense of functionality over fancy frills. 
                The navigation bar uses the standard conventions from most websites but still manages to stand out from the page. The use of sleek bold lines allows the user to differentiate between different sections and it also makes the site more dynamic. 
              

              
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
    </div>
  );
};

export default DesignPage;