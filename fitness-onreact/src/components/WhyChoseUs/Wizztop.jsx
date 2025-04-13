import React from 'react';
import '../../assets/css/homepage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Wizztop() {
  return (
    <div className="schedule" id="sch">
      <h1 className="font-weigth-bold text-white mt-6" data-aos="fade-up" data-aos-duration="1000">
        Кое отличава<br />
        <b id="WiztechText">Wiztech Programs</b> от другите?
      </h1>

      <div className="row my-4">
        
        <div className="col-md-6 ">
          <h2 className="text-danger" data-aos="fade-up" data-aos-duration="1000">
            ПОВЕЧЕТО ФИТНЕС ТРЕНЬOРИ
          </h2>
          <table className="table table-bordered" data-aos="fade-up" data-aos-duration="2000">
            <tbody>
              <tr>
                <td className="text-white p-3">
                  <i className="bi bi-dash-circle" /> Стандартизирана програма
                </td>
              </tr>
              <tr>
                <td className="text-white p-3">
                  <i className="bi bi-dash-circle" /> Нерегулярна обратна връзка
                </td>
              </tr>
              <tr>
                <td className="text-white p-3">
                  <i className="bi bi-dash-circle" /> Без регулярна оценка и проследяване на <br /> резултатите
                </td>
              </tr>
              <tr>
                <td className="text-white p-3">
                  <i className="bi bi-dash-circle" /> Бързи и краткосрочни резултати
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="col-md-6">
          <h2 className="text-success" data-aos="fade-up" data-aos-duration="1000">
            НИЕ
          </h2>
          <table className="table table-bordered" data-aos="fade-up" data-aos-duration="1000">
            <tbody>
              <tr>
                <td className="text-white">
                  <i className="bi bi-check-circle" /> Програма и диета, които работят
                </td>
              </tr>
              <tr>
                <td className="text-white">
                  <i className="bi bi-check-circle" /> Постоянна обратна връзка и помощ
                </td>
              </tr>
              <tr>
                <td className="text-white">
                  <i className="bi bi-check-circle" /> Проследяване на резултатите и <br /> адаптиране на стратегията
                </td>
              </tr>
              <tr>
                <td className="text-white">
                  <i className="bi bi-check-circle" /> Изграждане на навици за поястоянство
                </td>
              </tr>
              <tr>
                <td className="text-white">
                  <i className="bi bi-check-circle" /> Подход съобразен с твоите нужди
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

