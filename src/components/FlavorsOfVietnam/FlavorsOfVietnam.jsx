import React from "react";
import './FlavorsOfVietnam.css';
import cuisine from "../../assets/cuisine.png"
import sushi from "../../assets/tempura platter.jpeg"
import drinks from "../../assets/vietnamese egg coffee.jpeg"

const FlavorsOfVietnam = () => {
  const categories = [
    {
      image: cuisine,
      title: "Cuisine"
    },
    {
      image: sushi,
      title: "Sushi"
    },
    {
      image: drinks,
      title: "Drinks"
    }
  ];

  return (
    <section id="menus" className="flavors-section">
      <h2 className="flavors-title">FLAVORS OF VIETNAM</h2>
      <div className="flavors-grid">
        {categories.map((category, index) => (
          <div key={index} className="flavor-card">
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

