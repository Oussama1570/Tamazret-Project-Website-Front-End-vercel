import React from 'react';
import '../Styles/StylesFoodBanner.css'; // For CSS styles

const Banner = () => {
  return (
    <div className="banner-Food">
      <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUT58yAnp6WZDOwhpkk6ftt1M-Bcn2Y6OcT1ycQWHKzILlfzUYp__rHvWWSxSZ" alt="Tamazret" />
      <div className="banner-text">
        <h1>Discover the Beauty of Tamazret</h1>
        <p>Explore stunning landscapes, rich history, and vibrant culture.</p>
        <button>Plan Your Visit</button>
      </div>
    </div>
  );
};

export default Banner;