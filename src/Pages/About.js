import React from 'react';
import '../Styles/StylesAbout.css'; // Import your CSS file for styling
import AboutImg1 from "../Images/Tamazret About Img n1.jpeg"
import AboutImg2 from "../Images/Tamazret About Img n2.jpeg"
import AboutImg3 from "../Images/Tamazret About Img n3.jpeg"

const About = () => {
  return (
<div>
    <section className='About-Content'>
    <div className="about-container">  

      <h2 className='About-Tamazret-Title'>About Tamazret</h2>
      <p className='About-Tamazret-Description'>
        Tamazret, nestled amidst the Matmata Mountains in Tunisia, is a captivating Berber village that offers a glimpse into a rich cultural heritage. With its distinctive architecture, vibrant traditions, and stunning landscapes, Tamazret is a must-visit destination for travelers seeking an authentic experience.
      </p>

      <div className="element-container">
        <div className="element left">
          <img className='About-Imgn1' src={AboutImg1} alt="Image 1" />
          <p className='About-description-1'>Troglodytic Dwellings: Explore the unique underground
             homes that have been carved into the surrounding
             hillsides for centuries.
             Berber Traditions: Immerse yourself in the vibrant
             Berber culture through traditional music, dance,
             and handicrafts.
             Stunning Landscapes: Admire the breathtaking scenery
             of the Matmata Mountains, characterized by rolling
             hills, olive groves, and picturesque valleys.</p>
        </div>
        <div className="element right">
        <p className='About-description-2'>Historical Significance: Learn about the historical
           importance of Tamazret and its role in the Berber
           resistance against foreign invaders.
           Community-Based Tourism: Support sustainable tourism
           initiatives and contribute to the preservation of Tamazret's
           cultural heritage by engaging with local businesses
           and participating in community-led activities.</p>
          <img className='About-Imgn2' src={AboutImg2} alt="Image 2" />
           </div>
        <div className="element center">
          <img  className='About-Imgn3' src={AboutImg3} alt="Image 3" />
          <p className='About-description-3'>Whether you're a history
             buff, a culture enthusiast, or simply seeking a peaceful
             retreat, Tamazret offers something for everyone. Discover
             the beauty and charm ofthis Berber village and create
             unforgettable memories.</p>
        </div>
      </div>
    </div>
    </section>



<section className='Contact-Information'>

<title className='Contact-Title'>Tamazret Contact Information</title>
  


  <div class="background">
    <div class="contact-info">
      <h1>Tamazret Contact Information</h1>
      <p>Address: Gabés, Matmata, Tamazret</p>
      <p>Telephone: 50099026</p>
      
    </div>
  </div>

</section>
    </div>
  );
};

export default About;