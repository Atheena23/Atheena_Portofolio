// src/components/Card.jsx
import React from "react";
import "./Card.css";

const Card = ({ image, title, description, tags }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
