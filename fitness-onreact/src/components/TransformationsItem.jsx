import React from 'react'

export default function TransformationsItem({ transformation }) {
  return (

    <div key={transformation.id} className="col-md-4 text-center">
      <h3 className="font-weight-bold h4" data-aos="fade-left">{transformation.name} {transformation.age}г.</h3>
      <img className="w-100 rounded" data-aos="fade-up" src={transformation.image} alt={`Transformation ${transformation.name}`} />
      <p className="mb-0" style={{ fontSize: "25px", fontWeight: "bold", marginTop: "20px" }} data-aos="fade-up">
        Трансформация - {transformation.duration}
      </p>
    </div>
  )
}
