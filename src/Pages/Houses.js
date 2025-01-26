import React from 'react'
import TamazretCavesBanner from "../Images/Tamazret Caves.jpg"
import TamazretCavesImgn2 from "../Images/Tamazret Caves n°2.jpg"
import '../Styles/StylesHouses.css'
import { Link } from 'react-router-dom'

/**https://www.google.fr/search?q=village%20berb%C3%A8re%20Tamezret%20caves&hl=fr&tbs=rimg:Cfsj1SNn6ijMYdU6w6oHbvOwsgIAwAIA2AIA4AIA&udm=2&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7drlQNXJ_q6WhUnfcnlFQAOYX5i1oP7uy-5shyIQQus2EyLQHbrfncVzdGAXmfr9BJIqIfzV2cce94rKw4qVQayZvsiCv5RVrbORBUjtu6rpTf6bi57IY7fYFtK9NxjBym_4jPAo8TeLXK23T_eVzXXsePcxQ&sa=X&ved=0CBoQuIIBahcKEwiw8dqC2eiIAxUAAAAAHQAAAAAQBw&biw=1600&bih=751&dpr=1 */

const Houses = () => {
  const images = [
    'https://journals.openedition.org/craup/docannexe/image/12586/img-8-small580.jpg',
    'https://journals.openedition.org/craup/docannexe/image/12586/img-6-small580.jpg',
    'https://www.webdo.tn/uploads/2018/07/Tamezret-malich1969.free_.fr_.jpg',
    // ... other images
  ];
  return (
    <div>

      {/** Banner Houses Tamazret **/}

      <div class="banner-Houses">
  <img src={TamazretCavesBanner} alt="Banner Image"></img>
  <div class="banner-text">
    <h1>Living in the Rock: A Visit to Tamazret</h1>
    <p>Explore the labyrinthine network of underground dwellings, discover ancient oil presses,
       and immerse yourself in the rich cultural heritage of this hidden gem. Tamazret's breathtaking
       scenery and authentic Berber hospitality make it a must-visit destination for travelers
       seeking an off-the-beaten-path adventure.</p>
    <a href='#Houses-Content'><button class="btn">Learn More</button></a>
  </div>
</div>

{/** Houses Content **/}
<section className='Houses-Content' id='Houses-Content'>
<div className="container">
  <h1 className="title">A Glimpse into Atamazret's Past</h1>
  <img className="image" src={TamazretCavesImgn2} alt="Image Description" />
  <p className="description">Tamazret, a hidden gem nestled in the Tunisian countryside,
     offers a captivating journey into the past. This ancient village, renowned for its
     unique cave dwellings, provides a glimpse into the lives of its inhabitants who
     carved their homes into the soft sandstone cliffs.</p>
     <h2 className='Title-History'>A Brief History:</h2>
     <p className='History-description'>The origins of these cave dwellings date
     back centuries, when the Berber people sought refuge and protection from
     the elements in the sturdy sandstone cliffs. Over time, the caves evolved
     into intricate networks of interconnected chambers, each serving a specific
     purpose within the daily lives of the villagers.</p>
<h2 className='Title-Caves-Dwellings'>The Cave Dwellings:</h2>
<p className='Caves-Dwellings-description'>The caves in Tamazret are typically multi-room
   structures, with a central courtyard providing natural light and ventilation.
    The interiors are often decorated with traditional Berber motifs and adorned with
     colorful rugs and tapestries. Some caves feature underground cisterns for collecting
      rainwater, ensuring a reliable water supply during dry periods.</p>
<h2 className='Title-Life-in-Caves'>Life in the Caves:</h2>
<p className='Life-in-Caves-description'>While many of the caves are now abandoned, some
   families continue to reside in them. The experience of living in a cave dwelling is unique,
    offering a sense of tranquility and connection to the natural environment. The thick stone
     walls provide insulation from the extreme temperatures, while the underground location
      offers protection from the scorching desert sun.</p>
</div>
</section>

{/** Gallery Houses and Caves of Tamazret CSS **/}
<section className='Gallery-Tamazret'>
<div className="houses">
  <Link to={"/Gallery"}><h3 className='Gallery-Title'> You can visit these Images Gallery to know more about Tamazret Berber Caves</h3></Link>
      {images.map((image, index) => (
        <Link key={index} to={`/Gallery`}>
          <img src={image} alt={`House ${index + 1}`} />
        </Link>
      ))}
      <p className='Gallery-Content-Text'>The village is renowned for its distinctive cave
         dwellings, carved directly into the surrounding sandstone cliffs. These caves
         ,once homes to generations of Berbers, provide a fascinating insight into
         the region's history and culture.</p>
    </div>
</section>
    </div>
  )
}

export default Houses
