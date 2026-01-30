import React from "react";
import { useNavigate } from 'react-router-dom';
import './FlavorsOfVietnam.css';
import cuisine from "../../assets/Spring Roll Bowl.jpg";
import sushi from "../../assets/tempura platter.jpeg";
import drinks from "../../assets/vietnamese egg coffee.jpeg";

const FlavorsOfVietnam = () => {
  const navigate = useNavigate();

  const categories = [
    {
      image: cuisine,
      title: "Cuisine",
      link: "/menus/cuisine"
    },
    {
      image: sushi,
      title: "Sushi",
      link: "/menus/sushi"
    },
    {
      image: drinks,
      title: "Drinks",
      link: "/menus/drinks"
    }
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <section id="menus" className="flavors-section">
      <h2 className="flavors-title">FLAVORS OF VIETNAM</h2>
      <div className="flavors-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flavor-card"
            onClick={() => handleCardClick(category.link)}
            style={{ cursor: 'pointer' }}
          >
            <div className="flavor-image-wrapper">
              <img src={category.image} alt={category.title} className="flavor-image" />
            </div>
            <h3 className="flavor-title">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlavorsOfVietnam;