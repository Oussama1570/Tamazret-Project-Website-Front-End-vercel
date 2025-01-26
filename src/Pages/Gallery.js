import React from 'react';
import '../Styles/StylesGallery.css';
import GalleryImg1 from '../Images/Gallery Img n°1.jpg';
import GalleryImg2 from '../Images/Gallery Img n°2.jpg';
import GalleryImg3 from '../Images/Gallery Img n°3.jpg';
import GalleryImg4 from '../Images/Gallery Img n°4.jpg';
import GalleryImg5 from '../Images/Gallery Img n°5.jpg';

const Gallery = () => {
  return (
    <div>
{/** Gallery Tamazret's Houses and Caves **/}
    <div className="gallery-container">
      <h1 className='Gallery-Title'>Tamazret's Gallery Caves and Houses</h1>
      <div className="image-grid">
        <img className="gallery-image" src={GalleryImg1} alt="Image 1" />
        <img className="gallery-image" src={GalleryImg2} alt="Image 2" />
        <img className="gallery-image" src={GalleryImg3} alt="Image 3" />
        <img className="gallery-image" src={GalleryImg4} alt="Image 4" />
        <img className="gallery-image" src={GalleryImg5} alt="Image 5" />
      </div>
      <p className="main-description-gallery">
        A Blend of Nature and Human Ingenuity

        The caves of Tamazret are a marvel of human ingenuity. Over centuries,
        the Berbers adapted to the harsh desert environment by creating these
        subterranean homes. The caves offer a cool, comfortable retreat from
        the scorching summer heat and provide natural insulation during
        the colder months.
      </p>
    </div>
    </div>
  );
};

export default Gallery;