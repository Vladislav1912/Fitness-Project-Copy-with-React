import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function Trainers() {
  return (
    <div>
      
      <div className="text-box text-center">
        <h1 className="text-white" data-aos="fade-in" data-aos-duration="2000">
          <b>ЗАПОЗНАЙТЕ СЕ<br /> СЪС </b> <br />{" "}
          <b id="text-box-text"> WIZTECH PROGRAMS </b>
        </h1>

        <button id="buttonStyle" className="mt-5">
          <b> Запази предварителен разговор </b>
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
            <h3 data-aos="fade-left" data-aos-duration="1000">
              Владислав Василев
            </h3>
            <img
              className="w-100 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="https://s1.1zoom.me/b5050/76/Men_Muscle_Belly_Beautiful_547957_1920x1080.jpg"
              alt="Trainer Vladislav Vasilyev"
            />
            <p className="mb-0" style={{ fontSize: "25px" }} data-aos="fade-up" data-aos-duration="1000">
              Фитнес Инструктор
            </p>
            <hr />
            <p className="text-secondary m-0" style={{ fontSize: "18px" }} data-aos="fade-right" data-aos-duration="1000">
              Професионале инструктор с 10 годишен опит в сферата. Постоянна комуникация и добро отношение с малко от нещата
              споделени от наши клиенти работели с Владислав. Получавате: хранителен режим, PDF файл за вашия прогрес, 3
              тренировки в седмицата под негово наблюдение.
            </p>
          </div>

          
          <div className="trainer2 col-md-4">
            <h3 data-aos="fade-left">Мариела Димитрова</h3>
            <img
              className="w-100 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="https://s1.1zoom.me/b5050/856/Fitness_Black_background_Brown_haired_Belly_Hands_574821_1920x1080.jpg"
              alt="Trainer Mariella Dimitrova"
            />
            <p className="mb-0" style={{ fontSize: "25px" }} data-aos="fade-up" data-aos-duration="1000">
              Йога и Фитнес Инструкторка
            </p>
            <hr />
            <p className="text-secondary m-0" style={{ fontSize: "18px" }} data-aos="fade-right" data-aos-duration="1000">
              Професионална инструкторка с 7 годишен опит в сферата. Постоянна комуникация и добро отношение са малко от
              нещата споделени от наши клиенти работели с Мариела. Получавате: хранителен режим, PDF файл, 4 тренировки в
              седмицата под нейно наблюдение.
            </p>
          </div>

          
          <div className="trainer3 col-md-4">
            <h3 data-aos="fade-left">Стефан Веселинов</h3>
            <img
              className="w-100 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="https://s1.1zoom.me/b5050/95/Men_Gym_Workout_Hands_606879_1920x1080.jpg"
              alt="Trainer Stefan Veselinov"
            />
            <p className="mb-0" style={{ fontSize: "25px" }} data-aos="fade-up" data-aos-duration="1000">
              Йога и Фитнес Инструктор
            </p>
            <hr />
            <p className="text-secondary m-0" style={{ fontSize: "18px" }} data-aos="fade-right" data-aos-duration="1000">
              Професионален инструктор с 8 годишен опит в сферата. Постоянна комуникация и добро отношение са малко от
              нещата споделени от наши клиенти работели със Стефан. Получавате: хранителен режим, PDF файл, 4 тренировки в
              седмицата под негово наблюдение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
