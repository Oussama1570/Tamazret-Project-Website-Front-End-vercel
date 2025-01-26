import React from 'react'
import "../Styles/StylesHome.css"
import Logo from '../Components/Logo'
import { Link } from 'react-router-dom'
import FabulousImage from "../../src/Images/Tamazret-Fabulous-Image n°2 02.jpg"
import Tourism1 from "../../src/Images/Tamazret Tourism n°1.jpg"
import House1 from "../../src/Images/Tamazret Houses n°1.jpeg"
import Food1 from "../../src/Images/Tamazret Food n°1.jpeg"
import Conclusion from "../../src/Images/Tamazret-Img-Conclusion.jpg"
import Video from "../../src/assets/TamazretWelcomeVideo 106 Mo.mp4"
import Jahfa from "../../src/Images/Jahfa Tamazret.jpeg"



const Home = () => {
  return (
    <div >
      {/* Main Title : Tamazret: The Village of Berbers */}

      
      <div className='FirstTitle-Tamazret-the-village-of-Berbers'>

      <Link to ="/"><h2 className='Container-Title'>Tamazret: The Village of Berbers</h2></Link>

      {/*Logo Flag Tamazret */}
      <Logo/>

      </div>

      {/*Introduction Tamazret Container Title+Image+ General Description */}
<section className='Intro-container'>
        <h2 className='Intro-title'>Tamazret</h2>
  <img className='IMGIntro' src="https://www.dahargmg.info/images/histoire-de-l-homme/villages-troglodytes/tamezret_001.jpg"></img>

  <div className='Introdescription'>
  <p class="Introdescription-1">Tamazret, a picturesque Berber village nestled in the Matmata Mountains of Tunisia,
     offers visitors a unique glimpse into the rich cultural heritage of the region. Known for its traditional
      architecture, warm hospitality, and deep-rooted Islamic traditions, Tamazret is a must-visit destination
       for those seeking an authentic Tunisian experience.</p>
       <br></br>

      <p className='Introdescription-2'>Tamazret is a picturesque Berber village nestled in the heart of Tunisia, offering a glimpse into the rich
         cultural heritage and Islamic traditions of the region. Known for its stunning natural beauty, delicious cuisine,
          and warm hospitality, Tamazret is a must-visit destination for travelers seeking an authentic experience.</p> 

          </div>
          </section>
      
{ /** Welcome to Tamazret Video Content **/}
<section className='Welcome-to-Tamazret'>

<div className="welcome-container" style={{ textAlign: 'center' }}>
      <h1 className="welcome-title">Welcome to Tamazret</h1>
      <div className="video-container">
        {/* Replace 'your-video-url' with the actual URL of your video */}
        <video className="video-Tamazret-court-métrage" controls>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="description-Vidéo">
      Tamazret is a hidden gem in Tunisia, offering a unique and unforgettable experience. Come and discover the beauty,
       culture, and traditions of this Berber village.
      </p>
    </div>

   
</section>

{ /** Tamazret The Haven Presentation **/}

<section className='the-Haven-Tamazret'>
<h1 className="The-fabulous-Tamazret-Title">A tourist's Haven</h1>
<div className="centered-Fabulous-tamazret-text">
      <img src={FabulousImage} alt="Image-Tamazret-Haven" className="The-Haven-Tamazret" />

<div className='Centered-description-Haven-Tamazret'>
      <p className="centered-description-n°1">

Tamazret's houses, built with local stone and adorned with intricate Berber designs, blend
seamlessly with the surrounding natural beauty. The village's peaceful atmosphere and fresh
mountain air make it an ideal destination for those seeking relaxation and rejuvenation.</p>

<p className="centered-description-n°2">

For adventure enthusiasts, Tamazret offers a range of outdoor activities. Hiking trails wind through
lush forests, leading to breathtaking viewpoints. The village is also a great base for exploring nearby
attractions such as the Bardo Museum in Tunis and the ancient Roman ruins of Carthage.</p>

<p className="centered-description-n°3"> 
No visit to Tamazret is complete without indulging in its delicious local cuisine. The region is known
for its fresh produce, including olives, figs, and almonds, which are used to create a variety of traditional
dishes. Don't miss the opportunity to savor the flavors of Tamazret's authentic cuisine.</p>
</div>
    </div>

{/** Tamazret Goods */}

    <div class="card-container">
  <h2 className='Title-Discovery'>Discover the goods and benefits of Tamazret</h2>
  
  <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={Tourism1} alt="Tourism1" />
      </figure>
      <div class="article-body">
        <h2>Tourism</h2>
        <p>
        Discover the charm of Tamazret, a traditional Berber village nestled in Tunisia's mountains. Explore ancient troglodyte dwellings, hike through stunning landscapes, and experience local hospitality. Choose from cozy guesthouses, modern hotels, or unique cave dwellings.
        </p>
        <a href="/Tourism" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={House1} alt="House1" />
      </figure>
      <div class="article-body">
        <h2>Houses</h2>
        <p>
        Tamazret's architecture is a testament to the resilience and creativity of its people, and it offers visitors a glimpse into the rich history and culture of the region.
        </p>
        <a href="Houses" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={Food1} alt="Food1" />
      </figure>
      <div class="article-body">
        <h2>Food</h2>
        <p>
        From traditional Berber dishes to modern interpretations, Tamazret offers a unique and unforgettable dining experience.
        </p>
        <a href="/Food" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
  </div>
</section>

<div>

</div>

<section className='Tamazret Festivals and Mariages'>
<h2 className='Jahfa-Title'>Jahfa The mariage of Tamazret</h2>
<div class="container-Jahfa">
  
  <img src={Jahfa} alt="Your Image" className='Tamazret-Jahfa-Img'></img>
  <div className="Tamazret-Jahfa-Text">
  Tamazret marriages, like those in other Tunisian regions, are typically traditional affairs. They involve a series of customs and rituals. Some key aspects include:
  <br></br>
  <hr></hr>

 Engagement:
 <br></br>
 <br></br>
 This is the official announcement of the couple's intention to marry. It often involves a formal ceremony with family and friends.
 <br></br>
 <br></br>
 Wedding Ceremony:
 <br></br>
 <br></br>
 The main event, usually held in a mosque or a designated hall. It follows Islamic traditions, with the imam officiating.
 <br></br> 
 <br></br>
Reception:
<br></br>
<br></br>  A celebration with food, music, and dancing. The reception may last for several days, depending on the family's traditions and resources.
Traditional Tamazret wedding attire often reflects the region's cultural influences, with women wearing colorful dresses and men donning traditional tunics and headwear.

Music and dance play a significant role in Tamazret weddings. Traditional Tunisian music, often featuring instruments like the lute, oud, and darbouka, is played to accompany the festivities.
  </div>
</div>

</section>


{ /** Tamazret Conclusion **/}
<section className='Conclusion-Tamazret'>

<div className="conclusion-tamazret">
      <h2 className='Title-Conclusion'>Conclusion</h2>
      <img src={Conclusion} alt="Tamazret" className="centered-image-conclusion" />
      <p className='Text-Conclusion'>
        

       With its ancient troglodyte dwellings, breathtaking landscapes, and warm hospitality, Tamazret is a must-visit destination for those seeking adventure, cultural immersion, and tranquility.

        Whether you're exploring the village's historical sites, hiking through the surrounding mountains, or simply relaxing in the peaceful atmosphere, Tamazret will leave a lasting impression.
      </p>
    </div>
</section>


<section className='Location-Tamazret'>

<h2 className='location-title'>The Location of Tamazret</h2>

<div className='Google-Maps-Tamazret'><iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Tamazret%20Tunisie)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>

</section>

</div>
    
  )
}

export default Home
