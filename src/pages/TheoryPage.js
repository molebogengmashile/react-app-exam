// src/pages/TheoryPage.js
import React from 'react';
import '../styles/Pages.css';
import Person from '../components/Person';

const TheoryPage = () => {
  const personCount = 3; //  to add the amount of people I want on the page
  const popupIndices = new Set();
  while (popupIndices.size < 3) { // Adjust to control number of pop-ups
    popupIndices.add(Math.floor(Math.random() * personCount));
  }

  return (
    <div className="page-container">
      
      {Array.from({ length: personCount }).map((_, index) => (
        <Person key={index} hasPopup={popupIndices.has(index)} />
      ))}

<h1>Theory Page</h1>
      <section className="blog-section">
      <section className="blog-post">
          <h2>Internet Art Preperation and Exploration </h2>
          <p>I believe that websites are no longer just digital billboards, they can become canvases for captivating storytelling.
             As I plan and prepare the artwork for my upcoming internet, I'm excited to explore how I can use the power of internet space to tell a compelling narrative.
              One technique I'm particularly drawn to is parallax scrolling, which creates an immersive, almost cinematic experience as the user navigates through the page. I'm inspired by examples like the Firewatch game page
               and the award-winning interactive graphic novel 'The Boat' based on the story by Nam Le. These digital experiences showcase how skillful use of layering, depth, and movement can transport the viewer into a world of their own.
                By incorporating React Spring, I plan to bring a similar sense of fluidity and dynamism to my website's artwork, inviting users to embark on a journey of discovery as they scroll through the pages. 
              <br></br>
              Although I have shifted from my original plan of using, I think this use of images and space creates a bigger Impact on the message the page is trying to convey. I have chosen the theme of Femicide for my project. The Art Work represents of the women and girls murdered at the hands of femicide.  
               <br></br>
                References:
          <br></br>
          
          <ol>
            <li>Firewatch.com (2016).<a href='https://www.firewatchgame.com/ '>Found here</a>  </li>
            <li>The Boat (2015) Nam le, SBS Australia< a href='https://www.sbs.com.au/theboat/'>Found here</a> </li>
            

          </ol>
            
           </p>
      </section>
        <section className="blog-post">
          <h2>Critical Analysis Essay on Net/Web Art </h2>
          <p>Internet/web art, also known as net art or online art, is a form of contemporary art that utilizes the internet as its primary medium of creation,
             distribution, and exhibition. Internet/web art is created specifically for online platforms, such as websites, social media, and online galleries. It often incorporates multimedia 
             elements such as images, videos, sound, animation, and interactive features (O'Toole, 2019). In this essay, I will provide a critical analysis of Olia Lialina's internet artwork Online
              newspapers from the year 2004. Through this analysis, I will explore how Lialina uses the unique characteristics of the internet to create a thought-provoking piece that engages with concepts of digital culture, 
              online communication, and the evolution of web design. I will be examining the conceptual, aesthetic, and technical aspects of this artwork, and provide insight into its significance within the broader context of 
              internet art and Lialina's contributions to the field. 
              <br></br>

              Olia Lialina was born in 1971 in Moscow and is currently residing in Germany (Roehrs & Boestch). She is renowned for her involvement in the net.art movement of the 1990s, where she played a pivotal role as a 
              pioneer in network-based art. Her early contributions have significantly influenced the recognition of the internet as a medium for artistic expression and narrative exploration. Lialina has created many well-recognized 
              and influential works of net/web art such as My Boyfriend Came Back from the War (1996), Agatha Appears (1997), First Real Net Art Gallery (1998), Last Real Net Art Museum (2000), Summer (2013), Self-Portrait (2018),
               Best Effort Network (2015-2020), Hosted (2020), and the topic of this essay, Online Newspapers (2004-2018) (Roehrs & Boestch).
               Lialina also founded one of the earliest web galleries, Art Teleportacia, which is where "Online Newspapers" (2004) is currently exhibited. 
               <br></br>
               "Online Newspapers" (2004) consists of a display of five newspapers from different parts of the world shown on one-half of the page, and the other half has images
                of the newspapers displayed in galleries. When you click on an image of a newspaper, you will be taken to a new page with a full display of the newspaper. 
                The newspaper will then begin to show animated gifs that spread out throughout the page . The Frankfurter Allgemeine Zeitung paper has animated roses, the Daily 
                Jang paper has colorful balls, the USA TODAY paper has American flags, the Wall Street Journal Europe paper has different wild animals and lastly the Dajiyuan has street fighter characters on it.
                  Underneath the newspaper image is a hyperlink that takes you to the newspaper's publication's official web page.
                When you click on a gallery image on the other half of the page, you will be taken to a new page with a full display of the image. 
             <br></br>
             The artwork utilizes real physical objects to make art that is only accessible on a screen. Olia has taken one form of art and new art in another medium. Are newspapers art? No, however, they have become a recorded 
             part of history that has been transformed into art, internet art. In the article, The work of art in the age of the internet (2020), Carrier claims that an artwork that has been duplicated loses its aura and thus
              does not have the same value as the original. The original newspapers might not even exist anymore, but they have been immortalized in Lialina's work. They have a historical significance to internet art.
               Their physical essence did not have any meaning, besides being sheets of paper with news printed all over them, until they were transformed to images and then to internet art. These papers have lost their initial
                aura as newspapers of a certain time period; however, they have gained a new one through what they have become and what they symbolize today. The images of gallery exhibitions indicated that this artwork has been shown
                 in real life exhibitions. This may add another layer to it as although it has been hosted in real life, the newspapers were still displayed on computer screens. 
                 <br></br>
                 The internet has the ability to act as an archive to historical digital artifacts, however, these old creations need to be modified to suit the current software, (O'Toole, 2019).  The links to the current 
                 online newspapers show the difference between the Online newspaper's artwork and the actual online newspapers. The actual online newspapers try to imitate physical newspapers with the way they are written and how
                  the audience must read them. Lialina's newspapers look identical to the physical ones with the animated gifs and digital medium being the only difference. The newspapers were all published in August 2004, from the 2nd to the 9th. 
                  According to onthisday.com, the only major events to occur during that time were the deaths of American funk musician Rick James (6th of August), American composer David Raksin (9th of August), French politician and president of the European
                   Court of Justice Robert Lecourt (9th of August), American jazz guitarist Tony Mottola (9th of August), American musician Don Tosti (2nd of August) and Belgian comic artist François Craenhals (2nd of August). The significance of the dates of the artwork is
                    unknown and so are the countries in which the newspapers are from. "The web has an immense influence on our daily lives and the social relationships 
                 we construct, making undeniable the importance of internet culture and its associated internet creations." (Danae, 2019).  
                 <br></br> 
                 The animated gifs on each paper could be trying to undermine the newspapers or just be a mockery of the serious tone they have. They could also just reflect the artist's
                  interests at the time. Maybe they represent the pop culture of the different countries during that period. The reasons to why the artists made this artwork are unknown, this artwork is
                   important because it reflects on a part of internet culture in history. Alternatively, the animated gifs could simply reflect the artist's personal interests or artistic style at the time of creation. 
                   They might not necessarily carry a deeper meaning but instead serve as visual embellishments or aesthetic choices made by Lialina. Furthermore, despite the ambiguity surrounding the artist's motives, this artwork 
                   remains important for its reflection of a significant aspect of internet culture in history. By incorporating elements of online media, such as animated gifs and hyperlinks, into the format of traditional newspapers,
                  Lialina's piece captures a moment in time when the internet was increasingly influencing the way information was consumed and disseminated. 
                  <br></br>
                  In conclusion, Olia Lialina's internet artwork "Online newspapers", 2004, is a true example of the transformative power of internet/web art, it demonstrates how the internet can serve as a dynamic medium for artistic expression and exploration.
                   Through this critical analysis, I have delved into the conceptual, aesthetic, and technical aspects of Lialina's piece, uncovering not only its significance within the realm of internet art but also its relevance to contemporary digital culture.
                    All of Lialina's works not only challenge conventional notions of storytelling and web design but they also prompt us to reconsider our relationship with the online digital world and the ways in which we interact with digital media as a whole. As we continue
                     to navigate the ever-evolving landscape of the internet, Lialina's contributions serve as a reminder of the vast potential for creativity and innovation that exists within the digital space.  
                     <br></br>
          References:
          <br></br>
          <ol>
            <li>Carrier, D. (2020). The Work of Art in the Age of the Internet. Hyperallergic.<a href='https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet '>Found here</a>  </li>
            <li>Danae (2019) Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet. DIGITAL ART WEEKLY.< a href='https://medium.com/digital-art-weekly/net-art-post-internet-art-new-aesthetics-the-fundamentals-of-art-on-the-internet-55dcbd9d6a5'>Found here</a> </li>
            <li>Lialina, O (2004) <a href='http://art.teleportacia.org/exhibition/online_newspapers/'>Found here</a>  </li>
            <li>O'Toole, F. (2019). The New Museum Hits “Save” on Net Art. Hyperallergic. <a href='https://hyperallergic.com/485466/the-new-museum-hits-save-on-net-art/ '>Found here</a>  </li>
            <li>Roehrs & Boestch <a href='https://www.roehrsboetsch.com/artists/detail/olia-lialina/about/ '>Found here</a></li>
            <li>OnThisDay.com <a href='https://www.onthisday.com/today/events.php'>Found here</a>  </li>

          </ol>
            
           </p>
        </section>

      </section>
    </div>
  );
};

export default TheoryPage;