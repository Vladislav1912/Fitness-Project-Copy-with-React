import React from 'react';
import { ClassesData } from './classesData';

export default function ClassItem() {
  return (
    <>
      {ClassesData.map((classItem) => (
        <div className="class-m col-lg-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <img src={classItem.image} alt={classItem.title} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title text-center">{classItem.title}</h2>
              <h3 className="text-muted text-center mb-3">{classItem.instructor}</h3>
              <div className="price">{classItem.price} лв.</div>
              <p className="card-text text-center">{classItem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
