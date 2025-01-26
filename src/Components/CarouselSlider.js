import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/StylesCarouselSlider.css'; // Optional: Use this for styling adjustments

{/** Carousel Items Sliders**/}

const carouselItems = [
  {
    imgSrc: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/18/2a/48/f6/tamezret-est-un-petit.jpg',
    altText: 'First slide',
    title: 'Uncover the Hidden Treasures of Tamazret',
    description: 'Tamazret offers a unique blend of traditional Berber culture and modern amenities.'
  },
  {
    imgSrc: 'https://media-cdn.tripadvisor.com/media/photo-p/15/43/aa/44/photo0jpg.jpg',
    altText: 'Second slide',
    title: 'Dar Ayed: Escape to an exceptional setting',
    description: 'Discover the discreet luxury of Dar Ayed, a charming guesthouse located in Tamezret.'
  },
  {
    imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/350460332.jpg?k=3b7f84bcc841b1a765279d6a9254d95cf107f583c559a5e401ad140ff5dee4db&o=&hp=1',
    altText: 'Third slide',
    title: "L'Auberge de Tamezret: A Culinary Journey into the Heart of Tunisia",
    description: 'A unique experience where Tunisian culinary traditions blend with Berber hospitality.'
  },
  {
    imgSrc: 'https://destinationdahar.com/wp-content/uploads/2022/03/cafe-ben-jemaa-matmata.webp',
    altText: 'Fourth slide',
    title: "Café Berbère Ben Jemaa: Your Oasis in Tamazret",
    description: 'Indulge your taste buds with a variety of delicious Tunisian dishes, locally sourced ingredients.'
  }
];

const CarouselSlider = () => (
  <Carousel variant="dark" id='Carousel' className='CarouselSlider'>
    {carouselItems.map((item, index) => (
      <Carousel.Item key={index} style={{ '--carousel-item-before-background': 'transparent', '--carousel-item-after-background': 'transparent' }}>
        <img id='Img-Carousel'
          className={`carousel-image-${index + 1}`}
          src={item.imgSrc}
          alt={item.altText}
        />
        <Carousel.Caption>
          <h5 className="Titles-Carousel">{item.title}</h5>
          <p className="Paragraph-Carousel">{item.description}</p>

          
        </Carousel.Caption>
        </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselSlider;