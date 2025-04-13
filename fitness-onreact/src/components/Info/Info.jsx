import React from 'react';
import '../../assets/css/homepage.css';
import {FaFacebookF , FaTwitter} from 'react-icons/fa'

export default function Info() {
  return (
    <div className="about mg-t mg-b" id="about">
    <div className="container">
      <div className="row">
        
        <div className="col-lg-4 about-cont" data-aos="fade-left" data-aos-duration="1000">
          <h2>Как можем да ти помогнем?</h2>
          <p>
            Помагаме на заети професионалисти и предприемачи да постигнат и задържат оптимална физическа форма!
          </p>
          <span>
            Нашата мисия е да ти помогнем да намериш баланс между семейство, здраве, професия и спорт, чрез
            научно-обосновани методи.
          </span>
        </div>

       
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="card about-cardl mg-b2">
            <a href="../Fitness Man Class/ManF.html">
              <img
                src="https://s1.1zoom.me/b5050/76/Men_Muscle_Belly_Beautiful_547957_1920x1080.jpg"
                alt="fitness man"
                className="img-fluid"
              />
            </a>
            <div className="card-body">
              <div className="row">
                <div className="col-xm-7 card-b">
                  <h3>Владислав Василев</h3>
                  <h4>Фитнес инструктор</h4>
                </div>
                <div className="col-xm-5 card-so">
                  <FaTwitter />
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="card about-cardl mg-b2">
            <a href="../Joga Class/joga.html">
              <img
                src="https://s1.1zoom.me/b5050/856/Fitness_Black_background_Brown_haired_Belly_Hands_574821_1920x1080.jpg"
                alt="joga instructor"
                className="img-fluid"
              />
            </a>
            <div className="card-body">
              <div className="row">
                <div className="col-xm-7 card-b">
                  <h3>Мариела Димитрова</h3>
                  <h4>Йога и фитнес инструктор</h4>
                </div>
                <div className="col-xm-5 card-so">
                  <FaTwitter />
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
