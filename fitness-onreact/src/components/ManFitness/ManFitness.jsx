import React from 'react'
import '../../assets/css/homepage.css'

function ShowPrice() {
    document.getElementById('btnMember').innerHTML = '<b>Цена За Един Месец: <br> 50лв.</b>'
}
function ShowPhoneNum() {
    document.getElementById('btnPhoneNum').innerHTML = '<b>Обадете се на телефон: <br> 089 856 5489</b>'
}


export default function ManFitness() {
  return (
    <div>
          <div className="manF text-white" id="home">
              <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
                  <h3>
                      ЛИЧЕН ФИТНЕС МЕНТОР <br />
                      С ИНСТРУКТОР <br />
                      ВЛАДИСЛАВ ВАСИЛЕВ <br />
                      ЗА МЪЖЕ
                  </h3>

                  <div className="home-btn">
                      <button onClick={ShowPrice}
                          id="btnMember"
                          className="btn text-white font-weight-bold"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                      >
                          СТАНЕТЕ ЧЛЕН
                      </button>
                      <button onClick={ShowPhoneNum}
                          id="btnPhoneNum"
                          className="btnl bt"
                          data-aos="fade-down"
                          data-aos-duration="1000"
                      >
                          ЗАПИШЕТЕ ЧАС
                      </button>
                  </div>
              </div>
          </div>
      <div className="yoga-container mg-t mg-b">
        <div className="row">
          <div className="text-column col-sm-6">
            <p id="textInCol" data-aos="fade-left" data-aos-duration="1000">
              Какво представлява <br /> фитнес класът за мъже?
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Този пакет включва индивидуални тренировки с инструкторка на
              разпокъсан график (когато на вас ви е удобно). Получавате
              хранителен режим, 20% намаление на месечната такса за фитнес карта
              и 20% намаление при пазаруване на наши продукти.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Като всяко друго начало, стартирането на фитнес режим също може
              да бъде труден и объркващ процес за начинаещия. Какви упражнения,
              как да се изпълняват, по колко повторения и колко често да се
              тренира, колко дълги да бъдат почивките между сериите, при това
              без да се стига до наранявания и контузии – са базови въпроси,
              чиито правилни отговори са важни за следване на добра фитнес
              програма.
            </h6>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://cdn.newswire.com/files/x/25/be/fa55df35bf59f42500d8ef12bf3f.jpg"
              alt="Фитнес Виктория"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="yoga2-container mg-t mg-b">
        <div className="row">
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://c0.wallpaperflare.com/preview/126/815/585/weight-person-watch-gym.jpg"
              alt="Мъжки клас"
              style={{ width: "100%" }}
            />
          </div>
          <div className="text-column col-sm-6">
            <p id="textInCol" data-aos="fade-left" data-aos-duration="1000">
              Разберете как трябва да тренират представителите на силния пол, ако
              нямат спортен опит
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              В днешно време все по-често сме онлайн, с непрекъсната връзка до
              всякаква полезна и интересна информация. В това число влизат и
              тренировките, хранителните режими и онлайн услугите на
              персоналните инструктори.
              <br />
              <br />
              Но в комуникацията с клиенти през годините съм забелязал, че много
              от тях се съмняват в ефективността на онлайн треньорството.
              <br />
              <br />
              Истината е, че отговорът зависи от човека. Всеки трябва да избере
              между персонални тренировки и онлайн коучинг според своите цели,
              нагласа и ежедневие.
            </h6>
          </div>
        </div>
      </div>

      <div className="yoga3-container mg-t mg-b">
        <div className="row">
          <div className="text-column col-sm-6">
            <p id="yoga3-text" data-aos="fade-left" data-aos-duration="1000">
              Какви упражнения се извършват от мъжете според желаните цели?
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Има два основни вида упражнения, които трябва да бъдат включени:
              кардио и силови.
              <br />
              <br />
              <b style={{ fontSize: "30px" }}>
                <i>Кардио тренировки</i>
              </b>
              <br />
              Бягане, колело, кростренажор, скачане, плуване, танци и др.
              <br />
              <br />
              <b style={{ fontSize: "30px" }}>
                <i>Силови тренировки</i>
              </b>
              <br />
              Тежести, щанги, дъмбели, уреди със съпротивление.
            </h6>
            <br />
            <p id="yoga3-text" data-aos="fade-left" data-aos-duration="1000">
              Базовите упражнения, с които начинаещите трябва да започнат:
            </p>
            <ul data-aos="fade-left" data-aos-duration="1000">
              <li>
                <b>за крака</b> - лег преси, клякане с щанга, бедрено сгъване
              </li>
              <li>
                <b>за корем</b> - коремни преси, повдигане на крака, планк
              </li>
              <li>
                <b>за гърди</b> - щанга/дъмбели от лег, кофички, флайс
              </li>
              <li>
                <b>за гръб</b> – набирания, скрипец, гребане
              </li>
              <li>
                <b>за рамене</b> - преси с щанга/дъмбели, разтваряне с дъмбели
              </li>
            </ul>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://images.squarespace-cdn.com/content/v1/57880bdcd1758ea29d7e8545/dcf9dfe8-a13c-429b-ae7c-29fed24d7406/Untitled+design.png"
              alt="Упражнения за мъже"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
