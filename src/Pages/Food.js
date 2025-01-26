import React from 'react';
import '../Styles/StylesFood.css'; // Import your CSS file
import Krabiz from "../Images/Krabiz.jpg"
import Rfissa from "../Images/Rfissa.jpeg"



const Food = () => {
  const elements = [
    {
      title: 'Krabiz',
      image: Krabiz,
      description: 'A hearty stew made with homemade pasta, dried meat (kadid), and legumes like chickpeas or lentils. The pasta, typically small squares, is cooked in a flavorful broth seasoned with spices.',
    },
    {
      title: 'Rfissa',
      image: Rfissa,
      description: 'Rfissa is a traditional Tunisian dish made with semoule, ghee, milk, dates, and spices. It s a hearty and flavorful meal often served on special occasions. The semoule is cooked and mixed with melted ghee and milk, creating a creamy sauce. ',
    },
    {
      title: 'Assida with spicy sauce',
      image: 'https://www.cuisinetunisienne.tn/wp-content/uploads/2020/01/Recette-Assida-piment%C3%A9e.jpg',
      description: 'Assida with Sauce is a variation of the traditional Assida dish, often served with a savory sauce. While the base of Assida remains semolina or barley, the sauce can vary depending on regional preferences. Common sauce options include meat-based sauces, vegetable stews, or spicy chili sauces. This combination of sweet Assida with a savory sauce creates a unique and flavorful dish.',
    },
    {
      title: 'Couscous of Tamazret',
      image: 'https://www.mangeonsbien.com/wp-content/uploads/2017/05/Couscous-2.jpg',
      description: 'Couscous of Tamazret is a regional variation of the popular Tunisian dish, couscous. It s typically served with a flavorful broth and a variety of vegetables and meats, creating a hearty and satisfying meal.',
    },
  ]
    

    return (
<div>
      <h2 className='Food-Title'>Tamazret's Traditional Plates and Food</h2>
      <div className="food-container"> {/* Renamed for clarity */}
        <div className="food-items"> {/* Renamed for clarity */}
          {elements.map((element, index) => (
            <div key={index} className="food-item">
              <h2 className='Food-Titles'>{element.title}</h2>
              <img  className='Food-Images' src={element.image} alt={element.title} />
              <p className='Food-description'>{element.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default Food;