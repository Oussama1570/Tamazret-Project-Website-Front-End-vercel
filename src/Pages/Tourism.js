import React from 'react';
import '../Styles/StylesTourism.css'; // Import your CSS file
import CarouselSlider from '../Components/CarouselSlider';
import DarAyedImg1 from "../Images/dar-ayed.jpg"
import AubergedeTamazretImg1 from "../Images/Auberge de Tamazret n°2.jpg"
import CaféBerbereImg1 from "../Images/Cafe-Berbere-tunisie.jpeg"
import VideoDarAyed from "../assets/Maison d'hôte _ Dar Ayed Tamezret.mp4"
import VideoAuberge from "../assets/L Auberge de Tamezret.mp4"
import VideoCafé from "../assets/Café Tamazret Ben Jemaa.mp4"


const Tourism = () => {
  return (
    <div>

      {/** Carousel Slider **/}
      <CarouselSlider />

{/** Tourism Locations of Entertainment **/}
<section className='Tourism-Container'>

      <div className="component-container-Dar-Ayed">
        <h2 className="component-title-Dar-Ayed">Dar Ayed: At the Heart of Authentic Tunisia</h2>
        <div className="image-container-Dar-Ayed">
          <img src={DarAyedImg1} alt="Image description"  className='Img-Dar-Ayed'/>
        </div>
        <div className="description-container-Dar-Ayed">
          <p>Step into a world where tradition meets modern comfort. Dar Ayed's meticulously restored 
             traditional architecture exudes a sense of timeless elegance, while its thoughtfully  
             appointed interiors provide a cozy and inviting atmosphere. Relax in the tranquil courtyard, 
             adorned with lush greenery and a refreshing pool, or unwind in the inviting lounge area, 
             where you can savor traditional Tunisian mint tea and engage in lively conversations with 
             fellow travelers. 

           Indulge your senses with the delectable flavors of Tunisian cuisine, expertly prepared by 
           Dar Ayed's talented chefs. From the aromatic spices of couscous to the savory delights of 
           grilled lamb, each dish is a testament to the region's culinary heritage. Savor your meal 
           on the terrace, enjoying panoramic views of the surrounding countryside and the distant 
           peaks of the Djerid mountains. </p>
          <video controls className="video-Dar-Ayed">
            <source src={VideoDarAyed} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="component-container-Auberge-Tamazret">
        <h2 className="component-title-Auberge-Tamazret">Auberge de Tamazret: Your Tunisian Mountain Retreat</h2>
        <div className="image-container-Auberge-Tamazret">
          <img src={AubergedeTamazretImg1} alt="Second Image description"  className='Img-Auberge-Tamazret'/>
        </div>
        <div className="description-container-Auberge-Tamazret">
          <p>Discover a world of tranquility as you step into the meticulously restored traditional
             architecture of Auberge de Tamazret. Relax in the inviting courtyard, adorned with lush
              greenery and a refreshing pool, or unwind in the cozy lounge area, where you can savor
               traditional Tunisian mint tea and engage in lively conversations with fellow travelers.</p>
          <video controls className="video-container-Auberge-Tamazret">
            <source src={VideoAuberge} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="component-container-Café-Berbere">
        <h2 className="component-title-Café-Berbere">Café Berbère</h2>
        <div className="image-container-Café-Berbere">
          <img src={CaféBerbereImg1} alt="Second Image description" className='Img--Café-Berbere' />
        </div>
        <div className="description-container-Café-Berbere">
          <p>This café-restaurant offers panoramic views of the valley and simple, authentic
             cuisine.Café Berbère is a charming café located in the picturesque village of
             Tamezret, Tunisia. Nestled amidst the traditional Berber architecture, this
             café offers a delightful escape with its panoramic views of the surrounding valley
             and the sea. Here's what you can expect at Café Berbère:

             Authentic Atmosphere: The café's ambiance is truly authentic, with traditional
             Berber decor and a warm, inviting atmosphere. Stunning Views: Enjoy breathtaking
             vistas of the valley and the sea, making it a perfect spot to relax and unwind.
             Simple Cuisine: The café offers a simple yet delicious menu, featuring local
             specialties and fresh ingredients.
          </p>
          <video controls className="video-container-Café-Berbere">
            <source src={VideoCafé} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      </section>

    </div>
  );
};

export default Tourism;