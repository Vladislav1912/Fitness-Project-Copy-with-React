import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/homepage.css"

export default function Trainers() {
  return (
    <div>
      <div className="text-box text-center">
        <h1 className="text-white" data-aos="fade-in" data-aos-duration="2000">
          <b>ЗАПОЗНАЙТЕ СЕ<br />СЪС</b>
          <br />
          <b id="text-box-text">WIZTECH PROGRAMS</b>
        </h1>

        <button id="buttonStyle" className="mt-5">
          <b>Запази предварителен разговор</b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
        </button>
      </div>

      <div className="trainers-container mg-t mg-b text-center">
        <div className="row">
          <div className="trainer1 col-md-4">
            <h3 data-aos="fade-left" data-aos-duration="1000">Владислав Василев</h3>
            <img
              className="w-100 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="https://s1.1zoom.me/b5050/76/Men_Muscle_Belly_Beautiful_547957_1920x1080.jpg"
              alt=""
            />
            <div style={{ fontSize: 25 }} data-aos="fade-up" data-aos-duration="1000">
              <p className="mb-0">Фитнес Инструктор</p>
              <hr />
            </div>
            <p className="text-secondary m-0" style={{ fontSize: 18 }} data-aos="fade-right" data-aos-duration="1000">
              Професионале инструктор с 10 годишен опит в сферата. Постоянна комуникация и добро отношение с малко от
              нещата споделени от наши клиенти работели с Владислав. При работа с нашия инструктор получавате: хранителен
              режим, PDF файл на който да записвате вашия прогрес, постоянна комуникация и 3 тренировки в седмицата под
              негово наблюдение
            </p>
          </div>

          <div className="trainer2 col-md-4">
            <h3 data-aos="fade-left">Мариела Димитрова</h3>
            <img
              className="w-100 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="https://s1.1zoom.me/b5050/856/Fitness_Black_background_Brown_haired_Belly_Hands_574821_1920x1080.jpg"
              alt=""
            />
            <div style={{ fontSize: 25 }} data-aos="fade-up" data-aos-duration="1000">
              <p className="mb-0">Йога и Фитнес Инструкторка</p>
              <hr />
            </div>
            <p className="text-secondary m-0" style={{ fontSize: 18 }} data-aos="fade-right" data-aos-duration="1000">
              Професионална инструкторка с 7 годишен опит в сферата. Постоянна комуникация и добро отношение са малко от
              нещата споделени от наши клиенти работели с Мариела. При работа с нашия инструктор получавате: хранителен
              режим, PDF файл на който да записвате вашия прогрес, постоянна комуникация и 4 тренировки в седмицата под
              нейно наблюдение
            </p>
          </div>

          <div className="trainer3 col-md-4">
            <p className="font-weight-bold h4" data-aos="fade-left">Стефан Веселинов</p>
            <img
              className="w-100 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="https://s1.1zoom.me/b5050/95/Men_Gym_Workout_Hands_606879_1920x1080.jpg"
              alt=""
            />
            <div style={{ fontSize: 25 }} data-aos="fade-up" data-aos-duration="1000">
              <p className="mb-0">Йога и Фитнес Инструктор</p>
              <hr />
            </div>
            <p className="text-secondary m-0" style={{ fontSize: 18 }} data-aos="fade-right" data-aos-duration="1000">
              Професионален инструктор с 8 годишен опит в сферата. Постоянна комуникация и добро отношение са малко от
              нещата споделени от наши клиенти работели със Стефан. При работа с нашия инструктор получавате: хранителен
              режим, PDF файл на който да записвате вашия прогрес, постоянна комуникация и 4 тренировки в седмицата под
              нейно наблюдение
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="aboutUS-container mg-t mg-b">
        <div className="row">
          <div className="text-column col-sm-6">
            <p id="textInCol" data-aos="fade-left" data-aos-duration="1000">
              Как може да <br />ти помогнем ?
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Помагаме на заети професионалисти и предприемачи <br />
              да постигнат и задържат оптимална физическа форма!
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Нашата мисия е да ти помогнем да намериш баланс <br />
              между семейство, здраве, професия и спорт, чрез <br />
              научно-обосновани методи.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Какво е то? Да постигаме промяна, здраве, личен баланс и удовлетвореност чрез спорт по удобен и достъпен <br />
              начин, пестейки време и излишни усилия, но без да правим компромис <br />
              с ритъма на големия град. Динамично и целеустремено, не по принуда или с досада, а задружно, чрез забавление и със собствено темпо.
            </h6>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://c4.wallpaperflare.com/wallpaper/126/971/651/fitness-gym-coach-training-wallpaper-preview.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
