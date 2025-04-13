
import React from 'react';
import ClassItem from './ClassItem';
import  { ClassesData }  from './classesData';
import '../../assets/css/homepage.css'; 

export default function ClassesList() {
  console.log('ClassesData:', ClassesData);
  return (
    <div className="class-section py-5" id="our-courses">
      <div className="container">
        <h3 className="text-center text-uppercase mb-3">Направете Перфектно Тяло</h3>
        <h2 className="text-center mb-5">Нашите Тренировъчни Класове</h2>
        <div className="row">
          {ClassesData?.filter(course => course).map(course => (
            <ClassItem key={course.id} classItem={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
