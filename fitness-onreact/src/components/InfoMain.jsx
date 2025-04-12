import React from 'react'
import Info from './Info';
import { instructorsData } from './InstructorsData';

export default function InfoMain() {
  return (
    <div className="about mg-t mg-b" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 about-cont" data-aos="fade-left" data-aos-duration="1000">
          <h2>Как можем да ти помогнем?</h2>
          <p>Помагаме на заети професионалисти и предприемачи да постигнат и задържат оптимална физическа форма!</p>
          <span>Нашата мисия е да ти помогнем да намериш баланс между семейство, здраве, професия и спорт, чрез
            научно-обосновани методи.</span>
        </div>
        {instructorsData.map(instructor => <Info key={instructor.id} instructor={instructor} />)}
      </div>
    </div>
  </div>
  )
}
