import React from 'react';
import '../assets/css/homepage.css';


export default function Main() {
  
     return(
        <div className='home'>
        <div class="home-content" id="home">
      <h3 data-aos="fade-right" data-aos-duration="1000">
        СМЕЛО НАПРЕД
        КЪМ ТВОЕТО
        ПО-ДОБРО АЗ
      </h3>
      <h2 data-aos="fade-right" data-aos-duration="1000">Wizztech Programs е професионален екип, който ще ти помогне
        да влезеш в най-добрата си форма и да я задържиш завинаги.</h2>
      <div class="home-btn">
        <a href="../Fitness Centers/locations.html"><button class="btnr btn" data-aos="fade-left" data-aos-duration="1000">ЛОКАЦИИ</button></a>
        <a href="../About Us/About.html"><button class="btnl bt" data-aos="fade-down" data-aos-duration="1000">НАУЧЕТЕ ПОВЕЧЕ</button></a>
      </div>
    </div>
    </div>
  )
}
