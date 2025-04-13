import React from 'react';
import '../../assets/css/homepage.css';

export default function Wizztop() {
  return (
    <div className="schedule" id="sch">
      <h1 className="font-weight-bold text-white mt-6" data-aos="fade-up">
        Кое отличава<br /> 
        <b id="WiztechText">Wiztech Programs</b> от другите?
      </h1>
      <div className="row my-4">
        <div className="col-md-6">
          <h2 className="text-danger" data-aos="fade-up" >
            ПОВЕЧЕТО ФИТНЕС ТРЕНЬOРИ
          </h2>
          <table className="table table-bordered" data-aos="fade-up">
            <tr>
              <td className="text-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg> Стандартизирана програма
              </td>
            </tr>
            <tr>
              <td className="text-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg> Нерегулярна обратна връзка
              </td>
            </tr>
            <tr>
              <td className="text-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg> Без регулярна оценка и проследяване на <br /> резултатите
              </td>
            </tr>
            <tr>
              <td className="text-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg> Бързи и краткосрочни резултати
              </td>
            </tr>
          </table>
        </div>
        
        
        
      </div>
    </div>
  );
}

