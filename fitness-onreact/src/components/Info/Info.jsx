import React from 'react';
import '../../assets/css/homepage.css';
import {FaFacebook , FaInstagram,} from 'react-icons/fa'

export default function Info({instructor}) {
  return (
    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
      <div className="card about-cardl mg-b2">
        <a href="../Fitness Man className/ManF.html">
          <img src={instructor.image} alt="" className="img-fluid" />
        </a>
        <div className="card-body">
          <div className="row">
            <div className="col-7 card-b">
              <h3>{instructor.name}</h3>
              <h4>{instructor.qualification}</h4>
            </div>
            <div className="col-5 card-so">
              <a href="">{instructor.facebook}<FaFacebook/></a>
              <a href="">{instructor.instagram}<FaInstagram/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
