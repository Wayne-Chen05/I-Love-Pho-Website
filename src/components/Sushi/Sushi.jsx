import React from 'react';
import './Sushi.css';

const Sushi = () => {
  return (
    <div className="sushi-page">
      <div className="sushi-container">
        <h1 className="sushi-heading">Our Sushi Menu</h1>
        <p className="sushi-description">
          Explore our fresh sushi selections
        </p>
        {/* Add your sushi menu items here */}
      </div>
    </div>
  );
};

export default Sushi;