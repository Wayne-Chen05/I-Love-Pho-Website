import React from "react";
import './FlavorsOfVietnam.css';

const FlavorsOfVietnam = () => {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
      title: "Cuisine"
    },
    {
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80",
      title: "Sushi"
    },
    {
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80",
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

