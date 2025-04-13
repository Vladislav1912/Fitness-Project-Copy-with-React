import React from 'react';
import '../../assets/css/homepage.css';

// naptavi funkciqta za showPice()

export default function NewHere() {
  return (
    <div className="home-addtion">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 addtion-r mg-b " data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <h3>Нов в Wiztech Programs?</h3>
          <h4>Вземи членска карта, с която получаваш използване на фитнес залите ни, 20% отстъпка на всеки от нашите
            продукти и ако сте членове от 3 месеца, цената на карта спада с 30% за 2 месеца</h4>

          <button id="btn-member" className="btn-add">СТАНИ ЧЛЕН ДНЕС</button>
        </div>
        <div className="col-lg-5 addtion-l " data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
          <h3>Работни дни и часове</h3>
          <span>Неделя : Затворено</span>
          <h4>Понеделник - Петък
            От 7:00 - 22:00 часа
          </h4>
          <h5>Saturday 
            От 6:00 - 20:00 часа
          </h5>



        </div>
      </div>
    </div>
  </div>
  )
}
