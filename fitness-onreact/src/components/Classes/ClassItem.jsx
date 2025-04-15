import React from 'react';
import { Link } from "react-router-dom";

export default function ClassItem({ classItem }) {
  
  console.log("Received classItem:", classItem);

  
  if (!classItem) {
    return <div className="text-danger">Error: Missing class data!</div>;
  }
  
  const { image, title, instructor, price, description , classlink } = classItem;

  return (
    <div className="class-m col-lg-4 mb-4">
      <div className="card shadow-sm border-0 h-100">
      <Link to={classlink}><img src={image} alt={title} className="card-img-top" /></Link>
        <div className="card-content p-3">
          <h2 className="card-title text-center">{title}</h2>
          <h3 className="text-muted text-center mb-3">{instructor}</h3>
          <div className="price">{price} лв.</div>
          <p className="card-text text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
